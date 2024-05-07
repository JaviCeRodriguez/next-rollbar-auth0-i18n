import TranslationProvider from "@/components/providers/translation-provider";
import ProtectedPage from "@/components/ProtectedPage";
import initTranslations from "../../i18n";
import { I18nParamProps } from "../../../../@types/i18next";

const i18nNamespaces = ["protected"];

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
      <ProtectedPage />
    </TranslationProvider>
  );
}
