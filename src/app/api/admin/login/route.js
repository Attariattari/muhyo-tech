import { NextResponse } from "next/server";
import { login } from "@/lib/auth";

export async function POST(request) {
  try {
    const { email, passkey } = await request.json();
    const result = await login(email, passkey);

    if (!result.success) {
       return NextResponse.json({ 
           success: false, 
           code: result.code, 
           message: result.message 
       }, { status: 401 });
    }

    return NextResponse.json({ success: true, message: "Authorized" });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Authentication failed" }, { status: 500 });
  }
}
