import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const SECRET = new TextEncoder().encode(
  process.env.AUTH_SECRET || "fallback_muhyo_secret_32_chars_long_!!!"
);

export async function login(passkey) {
  const adminPasskey = process.env.ADMIN_PASSKEY || "admin123";

  if (passkey !== adminPasskey) {
    return false;
  }

  // Create session
  const token = await new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("8h")
    .sign(SECRET);

  // Set cookie
  (await cookies()).set("admin_auth_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 8, // 8 hours
    path: "/",
  });

  return true;
}

export async function logout() {
  (await cookies()).set("admin_auth_token", "", { maxAge: 0 });
}

export async function verifyAuth(token) {
  try {
    const { payload } = await jwtVerify(token, SECRET);
    return payload;
  } catch (err) {
    return null;
  }
}
