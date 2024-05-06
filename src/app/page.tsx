import { getSession } from "@auth0/nextjs-auth0";
import UserProfile from "@/components/UserProfile";

export default async function Page() {
  const session = await getSession();

  return (
    <div className="flex flex-col items-center pt-10">
      <h1 className="text-3xl font-semibold">Home</h1>
      <p className="text-sm italic">
        Welcome to your new Next.js app with Rollbar & Auth0
      </p>

      <div className="my-10">
        {session?.user ? (
          <a
            href="/api/auth/logout"
            className="bg-slate-400 px-4 py-2 rounded-lg font-semibold"
          >
            <span>Logout</span>
          </a>
        ) : (
          <a
            href="/api/auth/login"
            className="bg-blue-500 px-4 py-2 rounded-lg font-semibold"
          >
            <span>Login</span>
          </a>
        )}
      </div>

      <UserProfile />
    </div>
  );
}
