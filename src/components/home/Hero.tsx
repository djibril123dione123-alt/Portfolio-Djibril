import Link from "next/link";
import { profile } from "@/content/profile";

/**
 * Hero uses CSS-only entrance animation (see .animate-fade-rise / prefers-reduced-motion
 * in globals + tailwind config). Content is authored visible; the animation can never
 * leave it hidden the way a JS/observer-gated reveal can.
 */
export function Hero() {
  return (
    <section className="relative border-b border-line">
      <div className="container-wide grid min-h-[88svh] grid-rows-[1fr_auto] py-14 md:py-20">
        <div className="flex flex-col justify-center">
          <p
            className="animate-fade-rise font-mono text-[0.78rem] uppercase tracking-[0.22em] text-clay-deep"
            style={{ animationDelay: "0ms" }}
          >
            {profile.name}
          </p>

          <h1
            className="animate-fade-rise mt-6 max-w-[15ch] text-display-xl font-display text-balance"
            style={{ animationDelay: "70ms" }}
          >
            I build digital systems for real-world problems.
          </h1>

          <p
            className="animate-fade-rise mt-8 max-w-xl text-body-lg text-ink-soft text-pretty"
            style={{ animationDelay: "150ms" }}
          >
            {profile.valueProp}
          </p>

          <div
            className="animate-fade-rise mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
            style={{ animationDelay: "230ms" }}
          >
            <Link
              href="#work"
              className="group inline-flex items-center gap-3 bg-ink px-6 py-3 text-[0.95rem] font-medium text-paper transition-colors hover:bg-clay-deep"
            >
              Explore selected work
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                ↓
              </span>
            </Link>
            <a href={profile.contact.resumeHref} className="link-underline text-[0.95rem] text-ink">
              {profile.contact.resumeLabel}
            </a>
          </div>
        </div>

        <div
          className="animate-fade-rise mt-16 flex flex-col justify-between gap-3 border-t border-line pt-5 font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-muted sm:flex-row"
          style={{ animationDelay: "320ms" }}
        >
          <span>Product Builder · Full-Stack Developer</span>
          <span>Founder of Samay Këur</span>
          <span>Dakar, Senegal</span>
        </div>
      </div>
    </section>
  );
}
