import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import nodemailer from "nodemailer";
import dbConnect from "@/lib/dbConnect";
import User, { Notification, PendingCode } from "@/models/AdminModels";
import eventBus, { ADMIN_EVENTS } from "@/lib/eventBus";
import { generateEmailTemplate } from "@/lib/emailTemplates";

const SECRET = new TextEncoder().encode(
  process.env.AUTH_SECRET || "fallback_muhyo_secret_32_chars_long_!!!"
);

// Super Admin Configuration
const SUPER_ADMIN_EMAIL = "attariattari549@gmail.com";

// NodeMailer Transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false, 
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
});

export async function addNotification(payload) {
    await dbConnect();
    const newNotif = await Notification.create({
        status: "unread",
        ...payload
    });
    
    // Broadcast for real-time dashboards
    eventBus.emit(ADMIN_EVENTS.NOTIFICATION, newNotif);
    return newNotif;
}

export async function sendVerificationCode(email, type = "setup") {
  await dbConnect();
  const normalizedEmail = email.toLowerCase();
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  
  // Upsert pending code
  await PendingCode.findOneAndUpdate(
      { email: normalizedEmail },
      { code, expiry: new Date(Date.now() + 5 * 60 * 1000), type },
      { upsert: true, new: true }
  );

  const subject = type === "setup" ? "Admin Identity Verification" : "Passkey Reset Verification";
  try {
    if (!process.env.SMTP_USER) {
        console.warn(`DEV MODE - Email: ${normalizedEmail}, Code: ${code}`);
        return { success: true, mocked: true, code };
    }
    await transporter.sendMail({
      from: `"Muhyo Nexus Security" <${process.env.SMTP_USER}>`,
      to: normalizedEmail,
      subject: `[Muhyo] ${subject}`,
      html: generateEmailTemplate({
          userName: normalizedEmail.split('@')[0],
          type: "VERIFICATION",
          actionData: { code },
          ctaUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/admin/login`
      }),
    });
    return { success: true };
  } catch (error) { return { success: false, error: error.message }; }
}

export async function verifyAndHandleRequest(email, code) {
  await dbConnect();
  const normalizedEmail = email.toLowerCase();
  const pending = await PendingCode.findOne({ email: normalizedEmail, code });
  
  if (!pending || new Date() > pending.expiry) {
    return { success: false, message: "Invalid or expired token sequence." };
  }

  const isSuperAdmin = normalizedEmail === SUPER_ADMIN_EMAIL.toLowerCase();
  
  // Check Blacklist (24h for removed users)
  const existingUser = await User.findOne({ email: normalizedEmail });
  if (existingUser && existingUser.status === "removed") {
      const removedTime = new Date(existingUser.createdAt).getTime();
      const twentyFourHours = 24 * 60 * 60 * 1000;
      if (Date.now() - removedTime < twentyFourHours) {
          const remaining = Math.ceil((twentyFourHours - (Date.now() - removedTime)) / (60 * 60 * 1000));
          return { success: false, message: `Access node blacklisted. Retry in ${remaining} hours.` };
      }
  }

  await PendingCode.deleteOne({ _id: pending._id });

  if (isSuperAdmin) {
    const passkey = Math.random().toString(36).slice(-10).toUpperCase();
    const user = await User.findOneAndUpdate(
        { email: normalizedEmail },
        { 
            name: "Super Admin",
            passkey,
            role: "super-admin",
            status: "approved",
            createdAt: new Date()
        },
        { upsert: true, new: true }
    );
    // Auto-login on verification for Super Admin
    await login(normalizedEmail, passkey);
    return { success: true, role: "super-admin", passkey };
  } else {
    // Check if user already exists
    const isReverify = !!existingUser;
    let user;
    if (!existingUser) {
        user = await User.create({
            email: normalizedEmail,
            name: normalizedEmail.split('@')[0],
            status: "pending",
            role: "user",
            createdAt: new Date()
        });
    } else {
        existingUser.status = "pending";
        existingUser.createdAt = new Date();
        await existingUser.save();
        user = existingUser;
    }

    // Add REVERIFY_REQUEST or USER_REQUEST Notification for Super Admin
    await addNotification({
        type: isReverify ? "REVERIFY_REQUEST" : "USER_REQUEST",
        title: isReverify ? "Re-Verification Pulse Detected" : "Access Authorization Required",
        message: isReverify ? `${normalizedEmail} is requesting authority restoration.` : `${normalizedEmail} is requesting initial registration.`,
        relatedUserId: user._id
    });

    return { success: true, role: "user", pendingApproval: true };
  }
}

export async function login(email, passkey) {
  await dbConnect();
  const normalizedEmail = email.toLowerCase();
  const user = await User.findOne({ email: normalizedEmail });
  
  if (!user || user.status === "removed") {
      return { success: false, code: "NOT_FOUND", message: "Identity not recognized or purged." };
  }

  if (user.passkey !== passkey || user.status !== "approved") {
      return { success: false, code: "INVALID", message: "Authority credentials mismatch or pending authorization." };
  }

  const token = await new SignJWT({ role: user.role, email: normalizedEmail, userId: user._id.toString() })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("8h")
    .sign(SECRET);

  (await cookies()).set("admin_auth_token", token, {
    httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", maxAge: 60 * 60 * 8, path: "/",
  });
  return { success: true };
}

export async function logout() { (await cookies()).delete("admin_auth_token"); }

export async function approveUser(email) {
  await dbConnect();
  const user = await User.findOne({ email });
  if (!user) return { success: false, message: "Identity not found." };

  const passkey = Math.random().toString(36).slice(-10).toUpperCase();
  user.passkey = passkey;
  user.status = "approved";
  await user.save();

  // Mark related notifications as approved
  await Notification.updateMany(
      { relatedUserId: user._id, status: "unread" },
      { $set: { status: "approved" } }
  );

  // Broadcast for real-time dashboards
  eventBus.emit(ADMIN_EVENTS.USER_UPDATE, { email, status: 'approved' });

  // LOG: Administrative Audit
  await addNotification({
    type: "USER_APPROVED",
    title: "Authority Extended",
    message: `Identity Authorized: ${email}. New access node established.`,
    relatedUserId: user._id,
    status: "read"
  });

  // Send Passkey Email
  try {
      if (process.env.SMTP_USER) {
          const isReverify = await Notification.exists({ relatedUserId: user._id, type: "REVERIFY_REQUEST" });
          await transporter.sendMail({
              from: `"Authority Nexus" <${process.env.SMTP_USER}>`,
              to: email,
              subject: isReverify ? "Muhyo Tech — Authority Restored" : "Muhyo Tech — Account Verification Approved",
              html: generateEmailTemplate({
                  userName: user.name,
                  type: isReverify ? "REVERIFY_APPROVED" : "APPROVED",
                  actionData: { passkey },
                  ctaUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/admin/login`
              }),
          });
      }
  } catch (e) { console.warn("Approve email failed."); }

  return { success: true, passkey };
}

export async function denyUser(email) {
  await dbConnect();
  const user = await User.findOne({ email });
  if (user) {
      user.status = "denied";
      await user.save();
      
      await Notification.updateMany(
          { relatedUserId: user._id, status: "unread" },
          { $set: { status: "denied" } }
      );
      
      // BROADCAST: FORCED LOGOUT (Deny)
      eventBus.emit(ADMIN_EVENTS.USER_UPDATE, { email, status: 'denied', forceLogout: true });
      
      await addNotification({
          type: "USER_DENIED",
          title: "Identity Refused",
          message: `Authorization denied for: ${email}. Node restricted.`,
          relatedUserId: user._id
      });
      
      // Send Denial Email
      try {
          if (process.env.SMTP_USER) {
              await transporter.sendMail({
                  from: `"Authority Nexus" <${process.env.SMTP_USER}>`,
                  to: email,
                  subject: "Muhyo Tech — Identity Authorization Refused",
                  html: generateEmailTemplate({
                      userName: user.name,
                      type: "DENIED",
                      ctaUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/admin/login`
                  }),
              });
          }
      } catch (e) { console.warn("Deny email failed."); }
      
      return { success: true };
  }
  return { success: false, message: "Identity not found." };
}

export async function removeUser(email) {
    await dbConnect();
    const user = await User.findOne({ email });
    if (user) {
        user.status = "removed";
        user.createdAt = new Date(); // Using as 'removedAt' for 24h block
        await user.save();
        
        // FORCED LOGOUT BROADCAST
        eventBus.emit(ADMIN_EVENTS.USER_UPDATE, { email, status: 'removed', forceLogout: true });
        
        await addNotification({
            type: "USER_REMOVED",
            title: "Authority Revoked",
            message: `Identity purged from Nexus: ${email}. Node blacklisted for 24h.`,
            relatedUserId: user._id
        });

        // Send Removal Email
        try {
            if (process.env.SMTP_USER) {
                await transporter.sendMail({
                    from: `"Authority Nexus" <${process.env.SMTP_USER}>`,
                    to: email,
                    subject: "Muhyo Tech — Administrative Access Revoked",
                    html: generateEmailTemplate({
                        userName: user.name,
                        type: "REMOVED",
                        ctaUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/admin/login`
                    }),
                });
            }
        } catch (e) { console.warn("Removal email failed."); }
        
        return { success: true };
    }
    return { success: false, message: "Identity not found." };
}

export async function deleteNotification(id) {
    await dbConnect();
    await Notification.findByIdAndDelete(id);
    return true;
}

export async function updateNotificationStatus(id, status) {
    await dbConnect();
    const notif = await Notification.findById(id);
    if (notif) {
        notif.status = status;
        await notif.save();
        return true;
    }
    return false;
}

export async function getAuthSession() {
    const token = (await cookies()).get("admin_auth_token")?.value;
    if (!token) return null;
    try {
        const { payload } = await jwtVerify(token, SECRET);
        await dbConnect();
        const user = await User.findOne({ email: payload.email });
        
        if (!user || user.status !== "approved") {
            return null;
        }
        return payload;
    } catch (e) { return null; }
}

export async function getAllUsers() { 
    await dbConnect();
    return await User.find({}).sort({ createdAt: -1 }).lean(); 
}

export async function getAllNotifications() { 
    await dbConnect();
    return await Notification.find({}).sort({ createdAt: -1 }).lean(); 
}

export async function isUserActive(email) { 
    await dbConnect();
    const user = await User.findOne({ email, status: "approved" });
    return !!user;
}

export async function isSetupComplete() {
    await dbConnect();
    const superAdmin = await User.findOne({ role: "super-admin" });
    return !!superAdmin;
}

export async function getPendingApprovals() {
    await dbConnect();
    return await User.find({ status: "pending" }).lean();
}
