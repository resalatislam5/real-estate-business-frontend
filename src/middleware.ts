import { NextRequest, NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const user = request.cookies.get("auth")?.value;
  const loginUser = user ? JSON.parse(user) : null;
  console.log("loginUser", loginUser);

  const loginUserNotAccessPath =
    request.nextUrl.pathname == "/login" ||
    request.nextUrl.pathname == "/signup";

  if (loginUserNotAccessPath) {
    if (loginUser?.token) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
  const normalUser =
    request.nextUrl.pathname === "/dashboard/wishlist" ||
    request.nextUrl.pathname.startsWith("/dashboard/profile");
  if (normalUser) {
    if (!(loginUser?.role === "user" || loginUser?.role === "admin")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  const adminUserRoute =
    request.nextUrl.pathname === "/dashboard/message" ||
    request.nextUrl.pathname === "/dashboard/post-home" ||
    request.nextUrl.pathname === "/dashboard/all-properties" ||
    request.nextUrl.pathname.startsWith("/dashboard/edit-property") ||
    request.nextUrl.pathname.startsWith("/dashboard/edit-testimonial") ||
    request.nextUrl.pathname === "/dashboard/all-testimonial" ||
    request.nextUrl.pathname === "/dashboard/create-testimonial" ||
    request.nextUrl.pathname === "/dashboard/all-user";

  if (adminUserRoute) {
    console.log("/dashboard/admin");

    if (!(loginUser?.role === "admin")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  //   return NextResponse.redirect(new URL("/home", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login", "/signup", "/dashboard/:path*"],
};
