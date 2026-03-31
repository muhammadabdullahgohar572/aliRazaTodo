import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("Middleware is running...");

  // Extract the JWT from cookies
  const getJwt = request.cookies.get("authLogin")?.value;

  // Allow access to All-components page if already authenticated
  if (request.nextUrl.pathname === "/pages/All-components" && getJwt) {
    return NextResponse.next();
  }

  // Define paths that should only be accessible without authentication
  const isAuthPage =
    request.nextUrl.pathname === "/pages/signup" ||
    request.nextUrl.pathname === "/pages/login";

  // Redirect authenticated users trying to access login/signup pages
  if (isAuthPage && getJwt) {
    return NextResponse.redirect(new URL("/pages/All-components", request.nextUrl));
  }

  // Skip API routes from middleware
  if (request.nextUrl.pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // Redirect unauthenticated users trying to access protected pages
  if (!getJwt && request.nextUrl.pathname !== "/pages/login" && request.nextUrl.pathname !== "/pages/signup") {
    return NextResponse.redirect(new URL("/pages/login", request.nextUrl));
  }

  console.log(getJwt);
  return NextResponse.next();
}

// Configuration for matching paths
export const config = {
  matcher: [
    "/",
    "/pages/login",
    "/pages/signup",
    "/pages/All-components",
    "/pages/showTasks",
  ],
};
