import {
  getSession,
  withMiddlewareAuthRequired,
} from "@auth0/nextjs-auth0/edge";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

const privatePaths = ["/protected"];

const authMiddleware = withMiddlewareAuthRequired();

export async function middleware(request: NextRequest, event: NextFetchEvent) {
  const response = NextResponse.next();
  const session = await getSession(request, response);
  const { pathname } = request.nextUrl;

  if (privatePaths.some((path) => pathname.startsWith(path))) {
    return authMiddleware(request, event);
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - about (about page)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
