import Link from "next/link";
import { moreWork } from "@/content/projects";
import { Reveal, RevealMedia } from "@/components/ui/Reveal";
import { AccentRule } from "@/components/ui/primitives";
import { SmartImage } from "@/components/ui/SmartImage";

const EXTRA: Record<
  string,
  { field: string; line: string; note: string; facts: string[] }
> = {
  "al-furqan": {
    field: "border-commerce-line bg-commerce-wash",
    line: "bg-commerce",
    note: "Real product screenshot · catalogue, cart, WhatsApp checkout",
    facts: ["Solo design & build", "Next.js · Supabase", "~25,240 localities structured", "Code complete · deployed"],
  },
  "nur-al-bindjib": {
    field: "border-samay-line bg-samay-wash",
    line: "bg-samay",
    note: "Architecture diagram · pairing, shared state, push",
    facts: ["Solo design & build", "React · Supabase · RLS · Web Push", "Installable PWA", "Deployed · private"],
  },
};

export function MoreWork() {
  return (
    <section className="border-b border-line bg-paper-dim py-section">
      <div className="container-wide">
        <Reveal>
          <div className="flex items-center gap-4">
            <AccentRule />
            <p className="font-mono text-label uppercase tracking-[0.14em] text-clay-deep">More work</p>
          </div>
          <h2 className="mt-5 max-w-2xl text-display-md text-balance">
            Two more products, built solo — from a different angle.
          </h2>
          <p className="mt-4 max-w-xl text-[1rem] leading-relaxed text-ink-soft text-pretty">
            E-commerce with local logistics, and a realtime collaborative PWA. Both live and running.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {moreWork.map((p, i) => {
            const x = EXTRA[p.slug];
            return (
              <Reveal key={p.slug} delay={i * 0.06}>
                <Link href={`/work/${p.slug}`} className="group block">
                  <RevealMedia className={`rounded-lg border p-4 sm:p-6 ${x?.field ?? ""}`}>
                    <div className="panel-shot">
                      <SmartImage
                        src={p.cover.src}
                        alt={p.cover.alt}
                        width={p.cover.width}
                        height={p.cover.height}
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="block w-full transition-transform duration-700 ease-editorial group-hover:scale-[1.012]"
                      />
                    </div>
                    <p className="annotation mt-3 text-ink-muted">{x?.note}</p>
                  </RevealMedia>

                  <div className="mt-5 flex items-baseline gap-3">
                    <span className="tabular-nums font-mono text-[0.74rem] text-clay-deep">{p.order}</span>
                    <span className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-ink-muted">
                      {p.kicker}
                    </span>
                  </div>
                  <h3 className="mt-2 text-title font-semibold transition-colors group-hover:text-clay">
                    {p.name}
                  </h3>
                  <p className="mt-2 max-w-md text-[0.96rem] leading-relaxed text-ink-soft">
                    {p.positioning}
                  </p>

                  <p className="mt-4 max-w-md text-[0.85rem] leading-relaxed text-ink-muted">
                    {x?.facts.join(" · ")}
                  </p>

                  <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-ink group-hover:text-clay">
                    Read case study
                    <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
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
