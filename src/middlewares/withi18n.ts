import { NextFetchEvent, NextRequest } from "next/server";
import { i18nRouter } from "next-i18n-router";
import { MiddlewareFactory } from "./stackHandler";
import i18nConfig from "../../i18nConfig";

export const withi18n: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    return i18nRouter(request, i18nConfig);
  };
};
