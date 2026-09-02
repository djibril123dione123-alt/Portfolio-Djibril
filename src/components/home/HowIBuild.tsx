import { Reveal } from "@/components/ui/Reveal";

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
    <section id="method" className="scroll-mt-16 border-b border-line bg-paper-cool py-section">
      <div className="container-wide">
        <div className="grid gap-x-14 gap-y-10 md:grid-cols-[15rem_1fr]">
          <Reveal>
            <p className="kicker">How I build</p>
            <h2 className="mt-4 text-display-md font-semibold tracking-tight text-balance">
              The same sequence, in a municipality or a startup.
            </h2>
            <p className="mt-4 max-w-xs text-[0.95rem] leading-relaxed text-ink-muted">
              Not a framework for a slide. It is what the projects have in common once the stack is
              stripped away — and each step is proven by one of them.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <ol className="border-l border-line-strong">
              {STEPS.map((s, i) => (
                <li key={s.k} className="relative grid grid-cols-[2.5rem_1fr] gap-x-4 pb-9 pl-6 last:pb-0">
                  <span className="absolute -left-[6.5px] top-1 h-3 w-3 rounded-full border-2 border-clay bg-paper-cool" />
                  <span className="font-mono text-[0.8rem] text-clay-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-mono text-[0.82rem] uppercase tracking-[0.16em] text-ink">
                      {s.k}
                    </h3>
                    <p className="mt-2 max-w-xl text-[0.98rem] leading-relaxed text-ink-soft">{s.d}</p>
                    <div className="mt-2.5 flex flex-wrap gap-x-3 gap-y-1">
                      {s.seen.map((p) => (
                        <span
                          key={p}
                          className="font-mono text-[0.64rem] uppercase tracking-wide text-ink-faint"
                        >
                          ↳ {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
