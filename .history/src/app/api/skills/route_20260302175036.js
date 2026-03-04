import { NextResponse } from "next/server";
import { portfolioData } from "@/lib/data";

export async function GET() {
  return NextResponse.json({ skills: portfolioData.skills });
}

export async function PUT(request) {
  const data = await request.json();
  // Update internal skills logic
  return NextResponse.json({ message: "Arsenal updated.", skills: data });
}
