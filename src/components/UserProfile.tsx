"use client";

import Image from "next/image";
import { UserProfile as User } from "@auth0/nextjs-auth0/client";
import { useTranslation } from "react-i18next";

type Props = {
  user?: User;
};

const UserProfile = ({ user }: Props) => {
  const { t } = useTranslation("home");

  return user ? (
    <div className="flex gap-4 border border-slate-500 p-6 rounded-xl hover:bg-slate-500 transition-all select-none">
      {user.picture ? (
        <Image
          src={user.picture}
          alt={user.name ?? "Profile"}
          width={48}
          height={48}
          className="rounded-full drop-shadow-md"
        />
      ) : null}
      <div className="flex flex-col">
        <h2 className="drop-shadow-md font-bold">{user.name}</h2>
        <p className="drop-shadow-md font-semibold text-sm">{user.email}</p>
      </div>
    </div>
  ) : (
    <div>{t("profileNotAvailable")}</div>
  );
};

export default UserProfile;
