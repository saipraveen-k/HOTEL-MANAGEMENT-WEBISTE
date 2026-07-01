import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedPaths = ["/dashboard", "/bookings", "/admin"];

export function middleware(request: NextRequest) {
  const isProtected = protectedPaths.some((path) => request.nextUrl.pathname.startsWith(path));
  const hasSession = Boolean(request.cookies.get("stayease_session")?.value);
  const role = request.cookies.get("stayease_role")?.value;

  if (isProtected && !hasSession) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/admin") && role !== "admin") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/bookings/:path*", "/admin/:path*"]
};
