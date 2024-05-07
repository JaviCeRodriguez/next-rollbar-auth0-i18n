"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

const ProtectedPage = () => {
  const { t } = useTranslation("protected");
  return (
    <div className="flex flex-col items-center pt-10">
      <h1 className="text-3xl font-semibold">{t("title")}</h1>
      <p className="text-sm italic">{t("description")}</p>

      <Link href="/" className="mt-8 text-blue-500">
        {t("goBack")}
      </Link>
    </div>
  );
};

export default ProtectedPage;
