"use client";

import { useEffect } from "react";

/** /cv is the one fully-French page on an otherwise English site — the root
 * layout's <html lang="en"> can't vary per route, so this corrects it for
 * screen readers and search engines while the page is mounted. */
export function SetLang({ lang }: { lang: string }) {
  useEffect(() => {
    const prev = document.documentElement.lang;
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = prev;
    };
  }, [lang]);
  return null;
}
