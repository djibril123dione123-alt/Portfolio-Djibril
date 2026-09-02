import { Reveal } from "@/components/ui/Reveal";

const PILLARS = [
  {
    key: "Product",
    line: "Turning messy operations into product logic.",
    items: ["Process analysis", "Workflow & data design", "Information architecture", "Scope trade-offs"],
    seen: ["Mairie de Ouakam", "Samay Këur"],
  },
  {
    key: "Engineering",
    line: "Building the system end-to-end.",
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
    <section className="border-b border-line bg-paper py-section">
      <div className="container-wide">
        <Reveal>
          <p className="kicker">Capabilities</p>
          <h2 className="mt-4 max-w-2xl text-display-md font-semibold tracking-tight text-balance">
            Three things, kept in the same head.
          </h2>
          <p className="mt-4 max-w-lg text-[1rem] leading-relaxed text-ink-soft text-pretty">
            The value is moving from a business problem to a shipped system without a handoff. Read
            the skills through the projects that prove them.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-px border border-line-strong bg-line-strong md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.key} delay={i * 0.06}>
              <div className="flex h-full flex-col bg-paper p-6 lg:p-8">
                <h3 className="font-mono text-[0.78rem] uppercase tracking-[0.16em] text-clay-deep">
                  {p.key}
                </h3>
                <p className="mt-4 max-w-xs text-[1.05rem] font-medium leading-snug text-ink text-balance">
                  {p.line}
                </p>
                <ul className="mt-5 space-y-2">
                  {p.items.map((it) => (
                    <li key={it} className="text-[0.92rem] leading-relaxed text-ink-soft">
                      {it}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-line pt-3 font-mono text-[0.66rem] uppercase tracking-wide text-ink-faint">
                  Seen in&nbsp; {p.seen.join(" · ")}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
