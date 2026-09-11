import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { AccentRule } from "@/components/ui/primitives";

const PILLARS = [
  {
    key: "Product",
    line: "Turning messy operations into product logic.",
    items: ["Process analysis", "Workflow & data design", "Information architecture", "Scope trade-offs"],
    seen: ["Mairie de Ouakam", "Samay Këur"],
  },
  {
    key: "Engineering",
    line: "Building the system end to end.",
    items: ["React / Next.js", "Supabase / PostgreSQL", "Auth · RLS · Edge Functions", "Multi-user & PWA"],
    seen: ["Samay Këur", "Nur Al-BinDjib", "Al Furqan"],
  },
  {
    key: "Business & operations",
    line: "Operating what I build.",
    items: ["B2B prospecting & demos", "Commerce · stock · treasury", "Field validation", "Commercialisation"],
    seen: ["Samay Këur", "G5 Traders"],
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="scroll-mt-24 border-b border-line bg-paper py-section">
      <div className="container-wide">
        <Reveal>
          <div className="flex items-center gap-4">
            <AccentRule />
            <p className="font-mono text-label uppercase tracking-[0.14em] text-clay-deep">
              Capabilities
            </p>
          </div>
          <h2 className="mt-5 max-w-2xl text-display-md text-balance">
            Three things, kept in the same head.
          </h2>
          <p className="mt-4 max-w-lg text-[1rem] leading-relaxed text-ink-soft text-pretty">
            The value is moving from a business problem to a shipped system without a handoff. Read
            the skills through the projects that prove them.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 md:grid-cols-3" step={0.06}>
          {PILLARS.map((p) => (
            <StaggerItem key={p.key} className="flex h-full flex-col rounded-lg border border-line-strong bg-paper-pure p-7 lg:p-8">
              <h3 className="font-mono text-[0.78rem] uppercase tracking-[0.16em] text-clay-deep">
                {p.key}
              </h3>
              <p className="mt-4 max-w-[15rem] text-[1.15rem] font-semibold leading-snug text-ink text-balance">
                {p.line}
              </p>
              <ul className="mt-6 space-y-2.5 border-t border-line pt-5">
                {p.items.map((it) => (
                  <li key={it} className="flex items-baseline gap-2.5 text-[0.92rem] leading-relaxed text-ink-soft">
                    <span aria-hidden className="h-1 w-1 shrink-0 rounded-full bg-line-strong" />
                    {it}
                  </li>
                ))}
              </ul>
              <p className="mt-auto pt-6 text-[0.8rem] text-ink-muted">
                Seen in <span className="font-medium text-ink">{p.seen.join(" · ")}</span>
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
