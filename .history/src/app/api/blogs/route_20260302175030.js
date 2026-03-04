import { NextResponse } from "next/server";
import { portfolioData } from "@/lib/data";

export async function GET() {
  return NextResponse.json({ blogs: portfolioData.blogs });
}

export async function POST(request) {
  const data = await request.json();
  return NextResponse.json(
    { message: "Insight documented.", blog: data },
    { status: 201 },
  );
}
