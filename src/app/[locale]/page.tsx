import TranslationProvider from "@/components/providers/translation-provider";
import initTranslations from "../i18n";
import { I18nParamProps } from "../../../@types/i18next";
import HomePortal from "@/components/HomePortal";

const i18nNamespaces = ["home"];

export default async function Page({
  params: { locale },
}: Readonly<I18nParamProps>) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <HomePortal />
    </TranslationProvider>
  );
}
