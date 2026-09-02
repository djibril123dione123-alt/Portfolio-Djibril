import Link from "next/link";
import { profile } from "@/content/profile";
import { SmartImage } from "@/components/ui/SmartImage";

const PROOF = [
  { k: "Samay Këur", v: "Property-management SaaS" },
  { k: "Mairie de Ouakam", v: "Public-sector digitisation" },
  { k: "G5 Traders", v: "Commerce operations software" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-paper">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] bg-gradient-to-l from-samay-wash/70 via-samay-wash/40 to-transparent lg:block" />

      <div className="container-wide relative grid items-center gap-x-10 gap-y-12 py-[clamp(2.75rem,5vw,4.75rem)] lg:min-h-[40rem] lg:grid-cols-[1.02fr_1fr]">
        {/* Voice */}
        <div className="max-w-xl">
          <p
            className="animate-fade-rise font-mono text-[0.76rem] uppercase tracking-[0.2em] text-clay-deep"
            style={{ animationDelay: "0ms" }}
          >
            {profile.name}
          </p>

          <h1
            className="animate-fade-rise font-display mt-5 max-w-[18ch] text-display-xl text-balance"
            style={{ animationDelay: "60ms" }}
          >
            I build digital systems for real&#8288;-&#8288;world problems.
          </h1>

          <p
            className="animate-fade-rise mt-6 max-w-lg text-[1.05rem] leading-relaxed text-ink-soft text-pretty"
            style={{ animationDelay: "140ms" }}
          >
            {profile.valueProp}
          </p>

          <div
            className="animate-fade-rise mt-8 flex flex-wrap items-center gap-x-6 gap-y-3"
            style={{ animationDelay: "210ms" }}
          >
            <Link
              href="#work"
              className="group inline-flex items-center gap-2.5 bg-ink px-5 py-2.5 text-[0.92rem] font-medium text-paper transition-colors hover:bg-clay-deep"
            >
              Explore selected work
              <span aria-hidden className="transition-transform group-hover:translate-y-0.5">↓</span>
            </Link>
            <a href={profile.contact.resumeHref} className="link-underline text-[0.92rem] text-ink">
              {profile.contact.resumeLabel}
            </a>
          </div>

          <dl
            className="animate-fade-rise mt-10 grid max-w-md grid-cols-1 gap-x-6 gap-y-3 border-t border-line pt-5 sm:grid-cols-3"
            style={{ animationDelay: "300ms" }}
          >
            {PROOF.map((p) => (
              <div key={p.k}>
                <dt className="font-mono text-[0.7rem] uppercase tracking-[0.08em] text-ink">{p.k}</dt>
                <dd className="mt-0.5 text-[0.78rem] leading-snug text-ink-muted">{p.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* System canvas — real interfaces, layered */}
        <div
          className="animate-fade-rise relative mx-auto w-full max-w-[40rem] lg:mx-0"
          style={{ animationDelay: "180ms" }}
        >
          <div className="overflow-hidden panel">
            <div className="flex items-center gap-1.5 border-b border-line bg-paper-dim px-3.5 py-2">
              <span className="h-2 w-2 rounded-full bg-line-strong" />
              <span className="h-2 w-2 rounded-full bg-line-strong" />
              <span className="h-2 w-2 rounded-full bg-line-strong" />
              <span className="ml-2 font-mono text-[0.64rem] text-ink-faint">app.samaykeur.com</span>
            </div>
            <SmartImage
              src="/projects/samay-keur/dashboard.webp"
              alt="Samay Këur agency dashboard: rent collection, arrears, owner net, commissions and portfolio occupancy."
              width={1887}
              height={861}
              priority
              sizes="(max-width: 1024px) 92vw, 46vw"
              className="block"
            />
          </div>

          {/* overlapping phone */}
          <div className="absolute -bottom-7 -left-5 w-[26%] min-w-[92px] max-w-[132px] sm:-left-8 lg:-bottom-9 lg:-left-10 lg:w-[132px]">
            <div className="overflow-hidden rounded-[1.15rem] border-[4px] border-night bg-night shadow-float">
              <div className="overflow-hidden rounded-[0.85rem]">
                <SmartImage
                  src="/projects/samay-keur/mobile-encaissement.webp"
                  alt="Samay Këur mobile — recording a rent payment in the field."
                  width={900}
                  height={1950}
                  sizes="132px"
                  className="block"
                />
              </div>
            </div>
          </div>

          {/* small detail crop — the KPI strip */}
          <div className="absolute -right-4 -top-6 hidden w-[34%] max-w-[208px] sm:block lg:-right-7 lg:-top-7">
            <div className="overflow-hidden panel" style={{ aspectRatio: "16 / 10" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/projects/samay-keur/dashboard.webp"
                alt="Detail: the agency KPI strip — collection volume, arrears, owner net and commission."
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
                style={{ objectPosition: "34% 30%", transform: "scale(2.5)" }}
              />
            </div>
            <p className="annotation mt-1.5 text-right normal-case tracking-normal text-ink-muted">
              owner net, computed per payment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
