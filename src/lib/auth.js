import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

const SECRET = new TextEncoder().encode(
  process.env.AUTH_SECRET || "fallback_muhyo_secret_32_chars_long_!!!"
);

const AUTH_FILE = path.join(process.cwd(), "src/lib/adminAuth.json");

// Helper to interact with Mock DB
const getAuthData = () => {
  if (!fs.existsSync(AUTH_FILE)) {
      const initial = { 
          superAdminEmail: "attariattari549@gmail.com", 
          users: {}, 
          notifications: [
              {
                  id: "notif-001",
                  type: "SYSTEM",
                  title: "Nexus Initialized",
                  message: "The administrative security nexus is online and secure.",
                  status: "read",
                  createdAt: new Date().toISOString()
              }
          ], 
          pendingCodes: {} 
      };
      fs.writeFileSync(AUTH_FILE, JSON.stringify(initial, null, 2));
      return initial;
  }
  return JSON.parse(fs.readFileSync(AUTH_FILE, "utf-8"));
};

const saveAuthData = (data) => {
  fs.writeFileSync(AUTH_FILE, JSON.stringify(data, null, 2));
};

const generateId = () => Math.random().toString(36).slice(2, 11);

// NodeMailer Transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false, 
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
});

export async function addNotification(payload) {
    const data = getAuthData();
    const newNotif = {
        id: generateId(),
        status: "unread",
        createdAt: new Date().toISOString(),
        ...payload
    };
    data.notifications.unshift(newNotif);
    saveAuthData(data);
    return newNotif;
}

export async function sendVerificationCode(email, type = "setup") {
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  const data = getAuthData();
  data.pendingCodes[email] = { code, expiry: Date.now() + 5 * 60 * 1000, type };
  saveAuthData(data);

  const subject = type === "setup" ? "Admin Identity Verification" : "Passkey Reset Verification";
  try {
    if (!process.env.SMTP_USER) {
        console.warn(`DEV MODE - Email: ${email}, Code: ${code}`);
        return { success: true, mocked: true, code };
    }
    await transporter.sendMail({
      from: `"Muhyo Nexus Security" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `[Muhyo] ${subject}`,
      html: `<h3>Identity Verification Code</h3><p>Your code is: <b>${code}</b></p><p>Expires in 5 minutes.</p>`,
    });
    return { success: true };
  } catch (error) { return { success: false, error: error.message }; }
}

export async function verifyAndHandleRequest(email, code) {
  const data = getAuthData();
  const pending = data.pendingCodes[email];
  if (!pending || pending.code !== code || Date.now() > pending.expiry) {
    return { success: false, message: "Invalid or expired code." };
  }

  const isSuperAdmin = email === data.superAdminEmail;
  delete data.pendingCodes[email];

  if (isSuperAdmin) {
    const passkey = Math.random().toString(36).slice(-10).toUpperCase();
    const user = {
        id: "root-001",
        email,
        name: "Super Admin",
        passkey,
        role: "super-admin",
        status: "approved",
        createdAt: new Date().toISOString()
    };
    data.users[email] = user;
    saveAuthData(data);
    // Auto-login on verification for Super Admin
    await login(email, passkey);
    return { success: true, role: "super-admin", passkey };
  } else {
    // Check if user already exists
    if (!data.users[email]) {
        data.users[email] = {
            id: generateId(),
            email,
            name: email.split('@')[0],
            status: "pending",
            role: "user",
            createdAt: new Date().toISOString()
        };
    } else {
        data.users[email].status = "pending"; // For Reset requests
    }

    // Add Approval Notification for Super Admin
    await addNotification({
        type: "USER_REQUEST",
        title: "Access Authorization Required",
        message: `${email} is requesting ${pending.type === 'setup' ? 'registration' : 'a passkey reset'}.`,
        relatedUserId: data.users[email].id
    });

    saveAuthData(data);
    return { success: true, role: "user", pendingApproval: true };
  }
}

export async function login(email, passkey) {
  const data = getAuthData();
  const user = data.users[email];
  if (!user || user.passkey !== passkey || user.status !== "approved") return false;

  const token = await new SignJWT({ role: user.role, email, userId: user.id })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("8h")
    .sign(SECRET);

  (await cookies()).set("admin_auth_token", token, {
    httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", maxAge: 60 * 60 * 8, path: "/",
  });
  return true;
}

export async function logout() { (await cookies()).delete("admin_auth_token"); }

export async function approveUser(email) {
  const data = getAuthData();
  const user = data.users[email];
  if (!user) return { success: false, message: "Identity not found." };

  const passkey = Math.random().toString(36).slice(-10).toUpperCase();
  user.passkey = passkey;
  user.status = "approved";

  // Mark related notifications as approved
  data.notifications.forEach(n => {
      if (n.relatedUserId === user.id && n.status === "unread") {
          n.status = "approved";
      }
  });

  saveAuthData(data);

  // LOG: Administrative Audit
  await addNotification({
    type: "SYSTEM",
    title: "Authority Extended",
    message: `Identity Authorized: ${email}. New access node established.`,
    relatedUserId: user.id,
    status: "read"
  });

  // Send Passkey Email
  try {
      if (process.env.SMTP_USER) {
          await transporter.sendMail({
              from: `"Authority Nexus" <${process.env.SMTP_USER}>`,
              to: email,
              subject: "[Muhyo Access] Identity Authorized",
              html: `<div style="padding: 24px; font-family: sans-serif; background: #f9fafb;">
                        <h3>Identity Authorized</h3>
                        <p>Your administrative access has been granted. Use the following passkey to login:</p>
                        <div style="background: #e5e7eb; padding: 16px; font-weight: bold; font-family: monospace; font-size: 24px;">${passkey}</div>
                     </div>`,
          });
      }
  } catch (e) { console.warn("Approve email failed."); }

  return { success: true, passkey };
}

export async function denyUser(email) {
  const data = getAuthData();
  const user = data.users[email];
  if (user) {
      user.status = "denied";
      data.notifications.forEach(n => {
          if (n.relatedUserId === user.id && n.status === "unread") {
              n.status = "denied";
          }
      });
      saveAuthData(data);
      return { success: true };
  }
  return { success: false, message: "Identity not found." };
}

export async function deleteNotification(id) {
    const data = getAuthData();
    data.notifications = data.notifications.filter(n => n.id !== id);
    saveAuthData(data);
    return true;
}

export async function updateNotificationStatus(id, status) {
    const data = getAuthData();
    const notif = data.notifications.find(n => n.id === id);
    if (notif) {
        notif.status = status;
        saveAuthData(data);
        return true;
    }
    return false;
}

export async function getAuthSession() {
    const token = (await cookies()).get("admin_auth_token")?.value;
    if (!token) return null;
    try {
        const { payload } = await jwtVerify(token, SECRET);
        return payload;
    } catch (e) { return null; }
}

export async function getAllUsers() { return Object.values(getAuthData().users); }
export async function getAllNotifications() { return getAuthData().notifications; }
export async function isUserActive(email) { return getAuthData().users[email]?.status === "approved"; }
