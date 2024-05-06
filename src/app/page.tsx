import { getSession } from "@auth0/nextjs-auth0";
import UserProfile from "@/components/UserProfile";
import Link from "next/link";

export default async function Page() {
  const session = await getSession();

  return (
    <div className="flex flex-col items-center pt-10">
      <h1 className="text-3xl font-semibold">🏠 Home</h1>
      <p className="text-sm italic">
        Welcome to your new Next.js app with Rollbar, Auth0 and i18n!
      </p>

      <div className="my-10 flex flex-col gap-4">
        {session?.user ? (
          <a
            href="/api/auth/logout"
            className="bg-slate-400 px-4 py-2 rounded-lg font-semibold text-center"
          >
            Logout
          </a>
        ) : (
          <a
            href="/api/auth/login"
            className="bg-blue-500 px-4 py-2 rounded-lg font-semibold text-center"
          >
            Login
          </a>
        )}
        <Link
          href="/protected"
          className="bg-yellow-500 px-4 py-2 rounded-lg font-semibold text-center"
        >
          Go to protected page
        </Link>
      </div>

      <UserProfile />
    </div>
  );
}
