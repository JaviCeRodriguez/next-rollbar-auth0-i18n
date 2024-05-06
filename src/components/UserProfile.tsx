"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

export default function UserProfile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

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
    <div>Profile not available</div>
  );
}
