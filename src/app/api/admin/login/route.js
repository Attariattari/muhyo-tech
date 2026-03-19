import { NextResponse } from "next/server";
import { login } from "@/lib/auth";

export async function POST(request) {
  try {
    const { email, passkey } = await request.json();
    const success = await login(email, passkey);

    if (!success) {
       return NextResponse.json({ success: false, message: "Unauthorized credentials" }, { status: 401 });
    }

    return NextResponse.json({ success: true, message: "Authorized" });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Authentication failed" }, { status: 500 });
  }
}
