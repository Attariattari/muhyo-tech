import { NextResponse } from "next/server";
import { portfolioData } from "@/lib/data";

export async function GET() {
  return NextResponse.json({ skills: portfolioData.skills });
}

export async function PUT(request) {
  try {
    const data = await request.json();
    // Simulate updating skills
    portfolioData.skills = data;
    return NextResponse.json({
      message: "Technical arsenal successfully updated.",
      skills: data,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Update failed.", error: error.message },
      { status: 400 },
    );
  }
}
