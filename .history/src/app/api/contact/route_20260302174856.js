import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();
  // Usually save to database or send an email.
  console.log("Contact submission received:", data);
  return NextResponse.json({
    message: "Transmission received. Our core team will respond shortly.",
  });
}
