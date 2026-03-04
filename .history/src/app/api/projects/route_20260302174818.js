import { NextResponse } from "next/server";
import { portfolioData } from "@/lib/data";

export async function GET() {
  return NextResponse.json({ projects: portfolioData.projects });
}

export async function POST(request) {
  const data = await request.json();
  // Placeholder for project creation logic
  return NextResponse.json(
    { message: "Project created in memory.", project: data },
    { status: 201 },
  );
}
