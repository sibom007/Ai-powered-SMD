import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./lib/auth";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname.replace(/\/+$/, "");

  // Convert headers to native Headers object
  const headers = new Headers();
  request.headers.forEach((value, key) => {
    headers.append(key, value);
  });

  const session = await auth.api.getSession({ headers });
  const hasEmail = Boolean(session?.user?.email);


  // Logged-in user should not access /auth
  if (hasEmail && pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Non-logged-in user trying to access any protected route
  if (!hasEmail && !pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico|api).*)",
};
