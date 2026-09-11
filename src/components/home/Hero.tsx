import Link from "next/link";
import { profile } from "@/content/profile";
import { SmartImage } from "@/components/ui/SmartImage";
import { CropWindow } from "@/components/product/Product";

const PROOF = [
  { k: "Samay Këur", v: "Property-management SaaS" },
  { k: "Mairie de Ouakam", v: "Public-sector digitisation" },
  { k: "G5 Traders", v: "Commerce operations software" },
];

const LEGEND = [
  "Rent collected → arrears → owner net, one system",
  "Multi-organization, per-agency identity",
  "In field testing with 2 real agencies",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-paper">
      {/* real ground behind the product column */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[48%] border-l border-line bg-paper-cool lg:block" />

      <div className="container-wide relative grid items-center gap-x-12 gap-y-14 py-[clamp(3rem,6vw,5rem)] lg:min-h-[38rem] lg:grid-cols-[1fr_1.05fr]">
        {/* Voice */}
        <div className="max-w-[34rem]">
          <p className="font-mono text-label uppercase tracking-[0.22em] text-clay-deep">
            {profile.name}
          </p>

          <h1 className="font-display mt-5 max-w-[20ch] text-display-xl leading-[1.02] text-balance">
            I build digital systems for real&#8288;-&#8288;world problems.
          </h1>

          <p className="mt-6 max-w-md text-lede text-ink-soft text-pretty">{profile.valueProp}</p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href="#work"
              className="group inline-flex items-center gap-2.5 rounded-md bg-ink px-5 py-2.5 text-[0.92rem] font-medium text-paper-pure transition-colors duration-200 hover:bg-clay-deep"
            >
              Explore selected work
              <span
                aria-hidden
                className="transition-transform duration-200 group-hover:translate-y-0.5"
              >
                ↓
              </span>
            </Link>
            <a href={profile.contact.resumeHref} className="link-underline text-[0.92rem] text-ink">
              {profile.contact.resumeLabel}
            </a>
          </div>

          <ul className="mt-11 grid max-w-lg grid-cols-1 gap-px overflow-hidden rounded-md border border-line-strong bg-line-strong sm:grid-cols-3">
            {PROOF.map((p) => (
              <li key={p.k}>
                <Link
                  href="/#work"
                  className="flex h-full flex-col justify-between bg-paper-pure px-3.5 py-3 transition-colors hover:bg-paper"
                >
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-ink">
                    {p.k}
                  </span>
                  <span className="mt-1.5 text-[0.78rem] leading-snug text-ink-muted">{p.v}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* One magnified proof — consistent frame language, no collage */}
        <div className="relative mx-auto w-full max-w-[42rem] lg:mx-0 lg:pl-4">
          <figure className="panel-shot">
            <div className="chrome-bar">
              <span className="chrome-dot" />
              <span className="chrome-dot" />
              <span className="chrome-dot" />
              <span className="ml-2 font-mono text-[0.64rem] text-ink-muted">app.samaykeur.com</span>
            </div>
            <SmartImage
              src="/projects/samay-keur/dashboard.webp"
              alt="Samay Këur agency dashboard: rent collection, arrears to recover, owner net, commission and portfolio occupancy."
              width={1887}
              height={861}
              priority
              sizes="(max-width: 1024px) 92vw, 46vw"
              className="block w-full"
            />
          </figure>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <CropWindow
              src="/projects/samay-keur/paiement-partiel.webp"
              alt="Detail: a partial rent payment resolved into remaining balance, commission and net to owner."
              focusX={82}
              focusY={50}
              zoom={2.1}
              ratio="16 / 10"
              label="Partial payment → net to owner"
            />
            <CropWindow
              src="/projects/samay-keur/ged.webp"
              alt="Detail: the document vault — generated contracts, receipts and reports."
              focusX={16}
              focusY={42}
              zoom={1.95}
              ratio="16 / 10"
              label="Generated, verifiable documents"
            />
          </div>

          <ul className="mt-5 space-y-1.5">
            {LEGEND.map((l) => (
              <li key={l} className="flex items-baseline gap-2.5 annotation">
                <span aria-hidden className="mt-1 h-1 w-1 shrink-0 rounded-full bg-clay" />
                {l}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
