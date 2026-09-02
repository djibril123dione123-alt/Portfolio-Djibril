"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SmartImage } from "@/components/ui/SmartImage";
import { cn } from "@/lib/cn";

type Beat = {
  when: string;
  title: string;
  body: string;
  visual: "mairie" | "confort-1" | "confort-2" | "insight" | "samay";
  rupture?: boolean;
};

const BEATS: Beat[] = [
  {
    when: "October 2025",
    title: "An internship at the Mairie de Ouakam",
    body: "One month digitising the incoming-mail workflow of a municipal technical-services department: diagnosis, a structured database, deployment and staff training.",
    visual: "mairie",
  },
  {
    when: "≈ two weeks in",
    title: "A tool for a family agency",
    body: "Mouhamed Fall, the internship supervisor, sees the work and asks Djibril to build a rental-management application for the agency run by Madame Fall.",
    visual: "confort-1",
  },
  {
    when: "Late 2025",
    title: "Confort Immo Archi",
    body: "A complete rental-management application, built solo in about a month — owners, buildings, units, tenants, contracts, payments, arrears, commissions, reports, PDF documents. Eight users. Still in use in August 2026.",
    visual: "confort-2",
  },
  {
    when: "The turn",
    title: "What if this wasn’t specific to one agency?",
    body: "The domain was stable across every agency — leases, due dates, partial payments, commission, owner net, documents. Only the surface changed: names, rules, templates, teams. That is the shape of a product.",
    visual: "insight",
    rupture: true,
  },
  {
    when: "Late 2025 / early 2026 →",
    title: "Samay Këur",
    body: "The specific solution becomes a platform: multi-organization architecture, deeper financial workflows, a real document system, a more mature UX and a commercial layer. Generalisation and productisation — not a prettier rewrite.",
    visual: "samay",
  },
];

const VISUALS: Record<Beat["visual"], { src: string; alt: string; label: string } | null> = {
  mairie: {
    src: "/projects/mairie-ouakam/menu-principal.webp",
    alt: "The Access solution built at the Mairie de Ouakam.",
    label: "Mairie de Ouakam · Access",
  },
  "confort-1": {
    src: "/projects/confort-immo/dashboard.webp",
    alt: "Confort Immo Archi dashboard — the first agency tool.",
    label: "Confort Immo Archi · dashboard",
  },
  "confort-2": {
    src: "/projects/confort-immo/reporting-bailleurs.webp",
    alt: "Confort Immo Archi per-owner financial reporting.",
    label: "Confort Immo Archi · owner reporting",
  },
  insight: null,
  samay: {
    src: "/projects/samay-keur/dashboard.webp",
    alt: "Samay Këur agency dashboard.",
    label: "Samay Këur · agency dashboard",
  },
};

function InsightVisual() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6 p-8 text-center">
      <div className="border border-night-line px-5 py-3 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-paper/70">
        Single agency
      </div>
      <div className="font-mono text-2xl text-clay-soft">↓</div>
      <div className="relative">
        <div className="absolute -left-2 -top-2 h-full w-full border border-night-line" />
        <div className="absolute -left-1 -top-1 h-full w-full border border-night-line" />
        <div className="relative border border-clay-soft bg-night-soft px-6 py-3 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-clay-soft">
          Multi-organization
        </div>
      </div>
    </div>
  );
}

export function OriginStory() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = Number((e.target as HTMLElement).dataset.i);
            if (!Number.isNaN(i)) setActive(i);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    refs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="origin" className="grain scroll-mt-16 bg-night py-section-lg text-paper">
      <div className="container-wide">
        <p className="kicker text-clay-soft">Origin</p>
        <h2 className="font-display mt-4 max-w-4xl text-display-lg text-balance">
          Mairie <span className="text-clay-soft">→</span> Confort Immo{" "}
          <span className="text-clay-soft">→</span> Samay Këur
        </h2>
        <p className="mt-4 max-w-prose text-[1.02rem] leading-relaxed text-paper/70 text-pretty">
          The spine of the work. One activity understood at a time, until a one-off tool turned out to
          be a product.
        </p>

        <div className="mt-14 lg:grid lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          {/* Beats */}
          <ol className="lg:col-start-1">
            {BEATS.map((b, i) => {
              const v = VISUALS[b.visual];
              return (
                <li
                  key={i}
                  data-i={i}
                  ref={(el) => {
                    refs.current[i] = el;
                  }}
                  className={cn(
                    "border-t border-night-line py-8 lg:min-h-[64vh] lg:py-16",
                    b.rupture && "lg:min-h-[72vh]",
                  )}
                >
                  <div
                    className={cn(
                      "transition-opacity duration-500",
                      "lg:data-[dim=true]:opacity-40",
                    )}
                    data-dim={active !== i}
                  >
                    <span className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-clay-soft">
                      {b.when}
                    </span>
                    <h3
                      className={cn(
                        "mt-3 text-balance",
                        b.rupture
                          ? "font-display text-display-md text-paper"
                          : "text-[1.5rem] font-semibold tracking-tight text-paper",
                      )}
                    >
                      {b.rupture ? `“${b.title}”` : b.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-3 max-w-lg leading-relaxed text-paper/70",
                        b.rupture ? "text-[1.02rem]" : "text-[0.98rem]",
                      )}
                    >
                      {b.body}
                    </p>

                    {/* inline visual — mobile only */}
                    <div className="mt-5 lg:hidden">
                      {v ? (
                        <div className="overflow-hidden border border-night-line">
                          <SmartImage src={v.src} alt={v.alt} width={1887} height={861} sizes="100vw" className="block" />
                        </div>
                      ) : (
                        <div className="h-56 border border-night-line bg-night-soft">
                          <InsightVisual />
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>

          {/* Sticky visual — desktop only */}
          <div className="hidden lg:col-start-2 lg:row-start-1 lg:block">
            <div className="sticky top-[12vh] h-[76vh]">
              <div className="relative h-full w-full overflow-hidden border border-night-line bg-night-soft">
                {BEATS.map((b, i) => {
                  const v = VISUALS[b.visual];
                  return (
                    <div
                      key={i}
                      className={cn(
                        "absolute inset-0 flex items-center justify-center p-6 transition-opacity duration-700",
                        active === i ? "opacity-100" : "opacity-0",
                      )}
                    >
                      {v ? (
                        <figure className="w-full">
                          <div className="overflow-hidden border border-night-line shadow-float">
                            <SmartImage
                              src={v.src}
                              alt={v.alt}
                              width={1887}
                              height={861}
                              sizes="46vw"
                              className="block"
                            />
                          </div>
                          <figcaption className="mt-3 font-mono text-[0.66rem] uppercase tracking-wide text-night-faint">
                            {v.label}
                          </figcaption>
                        </figure>
                      ) : (
                        <InsightVisual />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-night-line pt-8">
          <Link href="/work/samay-keur" className="link-underline text-[0.92rem] text-paper">
            Full Samay Këur case study →
          </Link>
          <Link href="/work/mairie-ouakam" className="link-underline text-[0.92rem] text-paper/80">
            The Mairie de Ouakam story →
          </Link>
        </div>
      </div>
    </section>
  );
}
