import "i18next";

import type common from "@/app/locales/en/common.json";
import type home from "@/app/locales/en/home.json";
import type protected from "@/app/locales/en/protected.json";

import i18nConfig from "../i18nConfig";

export interface I18nNamespaces {
  common: typeof common;
  home: typeof home;
  protected: typeof protected;
}

type localeTypes = "en" | "es";

export interface I18nParamProps {
  params: {
    locale: localeTypes;
    id?: string;
    participantId?: string;
    classId?: string;
  };
}

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: I18nNamespaces;
  }
}
