import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { AccentRule } from "@/components/ui/primitives";

const STEPS = [
  {
    k: "Observe",
    d: "Go where the work happens — the registers, the spreadsheets, the message threads, the habits no procedure documents.",
    seen: ["Mairie de Ouakam"],
  },
  {
    k: "Understand",
    d: "Learn the rules of the trade until lease, commission, owner net and partial payment are concrete rules with edge cases.",
    seen: ["Confort Immo", "Samay Këur"],
  },
  {
    k: "Structure",
    d: "Turn the activity into objects, relationships, states and the workflows that move between them — a map small enough to hold.",
    seen: ["Samay Këur", "G5 Traders"],
  },
  {
    k: "Design",
    d: "Make it usable, not just correct. The screen someone touches fifty times a day gets the most attention.",
    seen: ["Samay Këur"],
  },
  {
    k: "Build",
    d: "Ship the system end-to-end, solo — React, TypeScript, Supabase, PostgreSQL, RLS. Documents generated, not hand-templated.",
    seen: ["Samay Këur", "Nur Al-BinDjib", "Al Furqan"],
  },
  {
    k: "Ship & learn",
    d: "Deploy it into real hands, train the people who keep using it, and let actual usage decide what V2 is.",
    seen: ["8 users at Confort Immo", "2 pilot agencies at Samay Këur"],
  },
];

export function HowIBuild() {
  return (
    <section id="method" className="scroll-mt-24 border-b border-line bg-paper-cool py-section">
      <div className="container-wide">
        <div className="grid gap-x-16 gap-y-10 md:grid-cols-[16rem_1fr]">
          <Reveal>
            <div className="md:sticky md:top-24">
              <div className="flex items-center gap-4">
                <AccentRule />
                <p className="font-mono text-label uppercase tracking-[0.14em] text-clay-deep">
                  How I build
                </p>
              </div>
              <h2 className="mt-5 text-display-md text-balance">
                The same sequence, in a municipality or a startup.
              </h2>
              <p className="mt-4 max-w-xs text-[0.95rem] leading-relaxed text-ink-muted">
                Not a framework for a slide. It is what the projects have in common once the stack is
                stripped away — and each step is proven by one of them.
              </p>
            </div>
          </Reveal>

          <Stagger as="ol" className="border-l border-line-strong" step={0.05}>
            {STEPS.map((s, i) => (
              <StaggerItem
                as="li"
                key={s.k}
                className="relative grid grid-cols-[3rem_1fr] gap-x-4 pb-10 pl-7 last:pb-0"
              >
                <span className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full border-2 border-clay bg-paper-cool" />
                <span className="tabular-nums font-mono text-[0.8rem] text-clay-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[1.1rem] font-semibold tracking-tight text-ink">{s.k}</h3>
                  <p className="mt-1.5 max-w-xl text-[0.98rem] leading-relaxed text-ink-soft">{s.d}</p>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                    {s.seen.map((p) => (
                      <span
                        key={p}
                        className="font-mono text-[0.66rem] uppercase tracking-wide text-clay-deep"
                      >
                        ↳ {p}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
