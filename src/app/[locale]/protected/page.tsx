import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center pt-10">
      <h1 className="text-3xl font-semibold">👮🏼 Protected Page!</h1>
      <p className="text-sm italic">
        This page is protected. You can only see this content if you&apos;re
        logged in.
      </p>

      <Link href="/" className="mt-8 text-blue-500">
        Go back home
      </Link>
    </div>
  );
}
