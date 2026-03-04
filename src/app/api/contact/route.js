import { NextResponse } from "next/server";
import { portfolioData } from "@/lib/data";

export async function GET() {
  return NextResponse.json({ messages: portfolioData.messages });
}

export async function POST(request) {
  try {
    const data = await request.json();
    // Simulate saving message to temporary data layer
    portfolioData.messages.push({
      id: Date.now(),
      date: new Date().toISOString().replace("T", " ").slice(0, 16),
      ...data,
    });

    return NextResponse.json(
      { message: "Communication established successfully.", detail: data },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Transmission failed.", error: error.message },
      { status: 400 },
    );
  }
}
