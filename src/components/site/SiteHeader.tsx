"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { profile } from "@/content/profile";

const NAV = [
  { label: "Work", href: "/#work" },
  { label: "Origin", href: "/#origin" },
  { label: "How I build", href: "/#method" },
  { label: "About", href: "/about" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-colors duration-300",
        scrolled || open
          ? "border-line bg-paper/85 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="container-wide flex h-16 items-center justify-between gap-6">
        <Link href="/" className="font-display text-[1.05rem] tracking-tight">
          {profile.name}
          <span className="text-clay">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-underline text-[0.92rem] text-ink-soft hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={profile.contact.resumeHref}
            className="border border-ink px-3.5 py-1.5 text-[0.85rem] font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            Résumé
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-6">
            <span
              className={cn(
                "absolute left-0 block h-[1.5px] w-6 bg-ink transition-transform duration-300",
                open ? "top-1.5 rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1.5 block h-[1.5px] w-6 bg-ink transition-opacity duration-200",
                open ? "opacity-0" : "opacity-100",
              )}
            />
            <span
              className={cn(
                "absolute left-0 block h-[1.5px] w-6 bg-ink transition-transform duration-300",
                open ? "top-1.5 -rotate-45" : "top-3",
              )}
            />
          </span>
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-paper px-6 pb-8 pt-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col divide-y divide-line">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-4 font-display text-2xl"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={profile.contact.resumeHref}
            className="mt-6 inline-flex border border-ink px-4 py-2 text-sm font-medium"
          >
            {profile.contact.resumeLabel}
          </a>
        </nav>
      ) : null}
    </header>
  );
}
