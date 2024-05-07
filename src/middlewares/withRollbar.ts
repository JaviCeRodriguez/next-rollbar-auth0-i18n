import { NextFetchEvent, NextRequest } from "next/server";
import { MiddlewareFactory } from "./stackHandler";
import { serverInstance as rollbar } from "../lib/rollbar";

export const withRollbar: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    rollbar.configure({ payload: { context: request.nextUrl.pathname } });
    return next(request, _next);
  };
};
