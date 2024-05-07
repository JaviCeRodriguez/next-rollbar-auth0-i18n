import { withMiddlewareAuthRequired } from "@auth0/nextjs-auth0/edge";
import { NextFetchEvent, NextRequest } from "next/server";
import { MiddlewareFactory } from "./stackHandler";

const privatePaths = ["/protected"];

const authMiddleware = withMiddlewareAuthRequired();

export const withAuth0: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const { pathname } = request.nextUrl;

    if (privatePaths.some((path) => pathname.startsWith(path))) {
      return authMiddleware(request, _next);
    }

    return next(request, _next);
  };
};
