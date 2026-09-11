"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { profile } from "@/content/profile";

const NAV = [
  { label: "Work", href: "/#work", id: "work" },
  { label: "Origin", href: "/#origin", id: "origin" },
  { label: "How I build", href: "/#method", id: "method" },
  { label: "About", href: "/about", id: "about-page" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState<string | null>(null);

  const isCaseStudy = pathname?.startsWith("/work/");
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      if (isCaseStudy) {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isCaseStudy]);

  // Scroll-spy for the home hash sections. Render already gates on `isHome`
  // (see `active` below), so there's nothing to reset when navigating away.
  useEffect(() => {
    if (!isHome) return;
    const ids = ["work", "origin", "method", "about"];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id === "about" ? "about" : visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [isHome]);

  // Close the mobile nav whenever the route actually changes underneath it —
  // synchronizing with router navigation, not derived render state.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-[background-color,border-color,box-shadow] duration-300",
        scrolled || open
          ? "border-line bg-paper/80 shadow-[0_1px_20px_-12px_rgba(24,22,15,0.25)] backdrop-blur-md"
          : "border-line/40 bg-paper/55 backdrop-blur-sm",
      )}
    >
      <div className="container-wide flex h-16 items-center justify-between gap-6">
        <Link href="/" className="font-display text-[1.05rem] tracking-tight" aria-label="Home">
          {profile.name}
          <span className="text-clay">.</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {NAV.map((item) => {
            const active =
              (item.id === "about-page" && pathname === "/about") ||
              (isHome && activeId && item.href.endsWith(`#${activeId}`));
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "true" : undefined}
                className={cn(
                  "link-underline text-[0.9rem] transition-colors",
                  active ? "text-ink" : "text-ink-muted hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={profile.contact.resumeHref}
            className="rounded-md bg-ink px-3.5 py-1.5 text-[0.83rem] font-medium text-paper-pure transition-colors hover:bg-clay-deep"
          >
            Résumé
          </a>
        </nav>

        <button
          type="button"
          className="-mr-2 flex h-11 w-11 items-center justify-center md:hidden"
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

      {isCaseStudy ? (
        <div
          className="h-[2px] origin-left bg-clay transition-transform duration-150"
          style={{ transform: `scaleX(${progress})` }}
          aria-hidden
        />
      ) : null}

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-paper px-6 pb-8 pt-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col divide-y divide-line">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block py-4 font-display text-2xl">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={profile.contact.resumeHref}
            className="mt-6 inline-flex rounded-md bg-ink px-4 py-2 text-sm font-medium text-paper-pure"
          >
            {profile.contact.resumeLabel}
          </a>
        </nav>
      ) : null}
    </header>
  );
}
