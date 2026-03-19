import { NextResponse } from "next/server";
import { SignJWT } from "jose";
import { cookies } from "next/headers";

const SECRET = new TextEncoder().encode(
  process.env.AUTH_SECRET || "fallback_muhyo_secret_32_chars_long_!!!"
);

export async function POST(request) {
  try {
    const { passkey } = await request.json();
    const adminPasskey = process.env.ADMIN_PASSKEY || "admin123";

    if (passkey !== adminPasskey) {
       return NextResponse.json({ success: false, message: "Invalid passkey" }, { status: 401 });
    }

    // Set JWT
    const token = await new SignJWT({ role: "admin" })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("8h")
        .sign(SECRET);

    // Set response and cookies
    const response = NextResponse.json({ success: true, message: "Authorized" });
    
    // Using a simpler cookie control to ensure compatibility
    (await cookies()).set("admin_auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 8, // 8 hours
        path: "/",
    });

    return response;
  } catch (error) {
    return NextResponse.json({ success: false, message: "Authentication failed" }, { status: 500 });
  }
}
