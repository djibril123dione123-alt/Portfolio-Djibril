"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SmartImage } from "@/components/ui/SmartImage";
import { cn } from "@/lib/cn";

type Beat = {
  when: string;
  title: string;
  body: string;
  visual: "mairie" | "confort" | "insight" | "samay";
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
    when: "≈ late 2025",
    title: "Confort Immo Archi",
    body: "Mouhamed Fall, the internship supervisor, asks Djibril to build a rental-management application for the agency run by Madame Fall. Built solo in about a month — owners, buildings, units, tenants, contracts, payments, arrears, commissions, reports, PDF documents. Eight users. Still in use in August 2026.",
    visual: "confort",
  },
  {
    // Deliberate code-switch: the one moment the site drops into French —
    // the exact thought, in the language it was actually thought in.
    when: "The turn",
    title: "Et si ce problème ne concernait pas une seule agence ?",
    body: "The domain was stable across every agency — leases, due dates, partial payments, commission, owner net, documents. Only the surface changed: names, rules, templates, teams. That is the shape of a product.",
    visual: "insight",
    rupture: true,
  },
  {
    when: "≈ late 2025 / early 2026 →",
    title: "Samay Këur",
    body: "The specific solution becomes a platform: multi-organization architecture, deeper financial workflows, a real document system, a more mature UX and a commercial layer. Generalisation and productisation — not a prettier rewrite.",
    visual: "samay",
  },
];

const VISUALS: Record<
  Exclude<Beat["visual"], "insight">,
  { src: string; alt: string; label: string }
> = {
  mairie: {
    src: "/projects/mairie-ouakam/menu-principal.webp",
    alt: "The Access solution built at the Mairie de Ouakam.",
    label: "Mairie de Ouakam · Access",
  },
  confort: {
    src: "/projects/confort-immo/dashboard.webp",
    alt: "Confort Immo Archi dashboard — the first agency tool.",
    label: "Confort Immo Archi · dashboard",
  },
  samay: {
    src: "/projects/samay-keur/dashboard.webp",
    alt: "Samay Këur agency dashboard.",
    label: "Samay Këur · agency dashboard",
  },
};

function InsightVisual() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-7 p-8">
      <div className="rounded-md border border-night-line bg-night-soft px-6 py-4 text-center font-mono text-[0.76rem] uppercase tracking-[0.12em] text-paper/80">
        One agency
        <span className="mt-1 block text-[0.68rem] normal-case tracking-normal text-night-faint">
          bespoke tool
        </span>
      </div>
      <div className="flex flex-col items-center gap-1.5 text-clay-soft">
        <span className="font-mono text-lg">↓</span>
        <span className="max-w-[14rem] text-center text-[0.72rem] normal-case tracking-normal text-night-faint">
          keep the domain, vary the surface
        </span>
      </div>
      <div className="grid w-full max-w-[260px] grid-cols-3 gap-2">
        {["Agency A", "Agency B", "Agency C"].map((a) => (
          <div
            key={a}
            className="rounded-[6px] border border-clay-soft/60 bg-night-soft px-2 py-3 text-center font-mono text-[0.66rem] uppercase tracking-wide text-clay-soft"
          >
            {a}
          </div>
        ))}
      </div>
      <p className="max-w-[16rem] text-center text-[0.76rem] text-paper/70">
        one multi-organization platform
      </p>
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
    <section
      id="origin"
      className="grain relative scroll-mt-24 overflow-hidden bg-night py-section-lg text-paper"
    >
      <div className="container-wide relative">
        <div className="flex items-center gap-4">
          <span aria-hidden className="accent-rule" />
          <p className="font-mono text-label uppercase tracking-[0.14em] text-clay-soft">Origin</p>
        </div>
        <h2 className="mt-5 max-w-4xl text-display-lg text-balance">
          Mairie <span className="text-clay-soft">→</span> Confort Immo{" "}
          <span className="text-clay-soft">→</span> Samay Këur
        </h2>
        <p className="mt-4 max-w-prose text-[1.02rem] leading-relaxed text-paper/70 text-pretty">
          The spine of the work. One activity understood at a time, until a one-off tool turned out to
          be a product.
        </p>

        <div className="mt-14 lg:grid lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <ol className="lg:col-start-1">
            {BEATS.map((b, i) => {
              const v = b.visual === "insight" ? null : VISUALS[b.visual];
              return (
                <li
                  key={i}
                  data-i={i}
                  ref={(el) => {
                    refs.current[i] = el;
                  }}
                  className={cn(
                    "border-t border-night-line py-8 lg:py-14",
                    b.rupture ? "lg:min-h-[68vh]" : "lg:min-h-[52vh]",
                  )}
                >
                  <div
                    className={cn(
                      "transition-opacity duration-500 lg:data-[dim=true]:opacity-35",
                      b.rupture && "lg:flex lg:h-full lg:flex-col lg:justify-center",
                    )}
                    data-dim={active !== i}
                  >
                    <span className="font-mono text-label uppercase tracking-[0.12em] text-clay-soft">
                      {b.when}
                    </span>
                    <h3
                      className={cn(
                        "mt-4 text-balance",
                        b.rupture
                          ? "font-display max-w-2xl text-display-lg text-paper"
                          : "text-display-sm font-semibold text-paper",
                      )}
                    >
                      {b.rupture ? (
                        <>
                          &laquo;&nbsp;{b.title}&nbsp;&raquo;
                        </>
                      ) : (
                        b.title
                      )}
                    </h3>
                    <p
                      className={cn(
                        "mt-4 max-w-lg leading-relaxed text-paper/70",
                        b.rupture ? "text-[1.02rem]" : "text-[0.96rem]",
                      )}
                    >
                      {b.body}
                    </p>

                    <div className="mt-5 lg:hidden">
                      {v ? (
                        <div className="overflow-hidden rounded-md border border-night-line">
                          <SmartImage
                            src={v.src}
                            alt={v.alt}
                            width={1887}
                            height={861}
                            sizes="100vw"
                            className="block"
                          />
                        </div>
                      ) : (
                        <div className="h-72 rounded-md border border-night-line bg-night-soft">
                          <InsightVisual />
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="hidden lg:col-start-2 lg:row-start-1 lg:block">
            <div className="sticky top-[14vh] h-[72vh]">
              <div className="relative h-full w-full overflow-hidden rounded-md border border-night-line bg-night-soft">
                {BEATS.map((b, i) => {
                  const v = b.visual === "insight" ? null : VISUALS[b.visual];
                  return (
                    <div
                      key={i}
                      className={cn(
                        "absolute inset-0 flex items-center justify-center p-7 transition-opacity duration-700",
                        active === i ? "opacity-100" : "opacity-0",
                      )}
                    >
                      {v ? (
                        <figure className="w-full">
                          <div className="overflow-hidden rounded-md border border-night-line shadow-float">
                            <SmartImage
                              src={v.src}
                              alt={v.alt}
                              width={1887}
                              height={861}
                              sizes="46vw"
                              className="block"
                            />
                          </div>
                          <figcaption className="mt-3 font-mono text-[0.72rem] uppercase tracking-wide text-night-faint">
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
