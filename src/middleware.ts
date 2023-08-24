import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/write")) {
    if (!request.cookies.has("session")) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
}
