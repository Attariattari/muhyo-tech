import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(
  process.env.AUTH_SECRET || "fallback_muhyo_secret_32_chars_long_!!!"
);

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Protect all /admin routes except /admin/login
  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
    const token = request.cookies.get("admin_auth_token")?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    try {
      // Basic validation of the token structure/signature
      await jwtVerify(token, SECRET);
      return NextResponse.next();
    } catch (err) {
      // Invalid or expired token
      const response = NextResponse.redirect(new URL("/admin/login", request.url));
      response.cookies.delete("admin_auth_token");
      return response;
    }
  }

  return NextResponse.next();
}

// Ensure middleware runs on matching paths
export const config = {
  matcher: ["/admin/:path*"],
};
