import { NextResponse } from "next/server";
import { portfolioData } from "@/lib/data";

export async function GET() {
  return NextResponse.json({ services: portfolioData.services });
}

export async function PATCH(request) {
  const data = await request.json();
  // Modify service details logic
  return NextResponse.json({
    message: "Service protocol updated.",
    service: data,
  });
}
