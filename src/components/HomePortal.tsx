"use client";

import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useTranslation } from "react-i18next";
import UserProfile from "./UserProfile";

const HomePortal = () => {
  const { t } = useTranslation("home");
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>{t("loading")}</div>;

  if (error) return <div>{error.message}</div>;

  return (
    <div className="flex flex-col items-center pt-10">
      <h1 className="text-3xl font-semibold">{t("title")}</h1>
      <p className="text-sm italic">{t("description")}</p>

      <div className="my-10 flex flex-col gap-4">
        {user ? (
          <a
            href="/api/auth/logout"
            className="bg-slate-400 px-4 py-2 rounded-lg font-semibold text-center"
          >
            {t("logout")}
          </a>
        ) : (
          <a
            href="/api/auth/login"
            className="bg-blue-500 px-4 py-2 rounded-lg font-semibold text-center"
          >
            {t("login")}
          </a>
        )}
        <Link
          href="/protected"
          className="bg-yellow-500 px-4 py-2 rounded-lg font-semibold text-center"
        >
          {t("protected")}
        </Link>
      </div>

      <UserProfile user={user} />
    </div>
  );
};

export default HomePortal;
