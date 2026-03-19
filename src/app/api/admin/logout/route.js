import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request) {
  (await cookies()).delete("admin_auth_token");
  return NextResponse.json({ success: true, message: "Signed out" });
}
