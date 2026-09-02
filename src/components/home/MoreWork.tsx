import Link from "next/link";
import { moreWork } from "@/content/projects";
import { Reveal } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";

const EXTRA: Record<string, { field: string; note: string; facts: string[] }> = {
  "al-furqan": {
    field: "bg-commerce-wash/60",
    note: "Product diagram · catalogue → cart → WhatsApp checkout",
    facts: ["Solo design & development", "Next.js · Supabase", "~25,240 localities structured", "Code complete · deployed"],
  },
  "nur-al-bindjib": {
    field: "bg-samay-wash/50",
    note: "Architecture diagram · pairing, shared state, push",
    facts: ["Solo design & development", "React · Supabase · RLS · Web Push", "Installable PWA", "Deployed · private"],
  },
};

export function MoreWork() {
  return (
    <section className="border-b border-line bg-paper-dim py-section">
      <div className="container-wide">
        <Reveal>
          <p className="kicker">More work</p>
          <h2 className="mt-4 max-w-2xl text-display-md font-semibold tracking-tight text-balance">
            Two more products, built solo — from a different angle.
          </h2>
          <p className="mt-4 max-w-xl text-[1rem] leading-relaxed text-ink-soft text-pretty">
            E-commerce with local logistics, and a realtime collaborative PWA. Both live; the visuals
            below are diagrams while product captures are prepared.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {moreWork.map((p, i) => {
            const x = EXTRA[p.slug];
            return (
              <Reveal key={p.slug} delay={i * 0.06}>
                <Link href={`/work/${p.slug}`} className="group block">
                  <div className={`border border-line-strong ${x?.field ?? ""} p-4 sm:p-6`}>
                    <div className="overflow-hidden panel">
                      <SmartImage
                        src={p.cover.src}
                        alt={p.cover.alt}
                        width={p.cover.width}
                        height={p.cover.height}
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="block transition-transform duration-700 ease-editorial group-hover:scale-[1.01]"
                      />
                    </div>
                    <p className="annotation mt-3 normal-case tracking-normal text-ink-muted">{x?.note}</p>
                  </div>

                  <div className="mt-5 flex items-baseline gap-3">
                    <span className="font-mono text-[0.74rem] text-clay-deep">{p.order}</span>
                    <span className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-ink-muted">
                      {p.kicker}
                    </span>
                  </div>
                  <h3 className="mt-2 text-title font-semibold tracking-tight transition-colors group-hover:text-clay">
                    {p.name}
                  </h3>
                  <p className="mt-2 max-w-md text-[0.96rem] leading-relaxed text-ink-soft">
                    {p.positioning}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
                    {x?.facts.map((f) => (
                      <li key={f} className="font-mono text-[0.66rem] uppercase tracking-wide text-ink-muted">
                        {f}
                      </li>
                    ))}
                  </ul>

                  <span className="mt-4 inline-block font-mono text-[0.72rem] uppercase tracking-[0.12em] text-ink group-hover:text-clay">
                    Read case study →
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
