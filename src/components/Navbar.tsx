"use client";

import { useRouter, usePathname } from "next/navigation";
import { useCurrentLocale } from "next-i18n-router/client";
import i18nConfig from "../../i18nConfig";

const Navbar = () => {
  const router = useRouter();
  const currentPathname = usePathname();
  const locale = useCurrentLocale(i18nConfig);

  const changeLocale = () => {
    throw new Error("sarasa");

    const newLocale = locale === "en" ? "es" : "en";
    if (locale === "en") {
      const newPathname = `/${newLocale}${currentPathname}`;
      router.push(newPathname);
    } else {
      const newPathname = currentPathname.replace(
        `/${locale}`,
        `/${newLocale}`
      );
      router.push(newPathname);
    }
    router.refresh();
  };

  return (
    <div className="flex justify-between px-4 md:px-10 py-4">
      <h3 className="text-xl font-bold">Demo</h3>
      <button
        onClick={changeLocale}
        className="bg-green-600 hover:bg-green-700 transition-all px-4 py-1 rounded-md font-bold text-xl"
      >
        {locale === "en" ? "🇺🇸" : "🇪🇸"}
      </button>
    </div>
  );
};

export default Navbar;
