import { Container, Kicker } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  {
    k: "Observe",
    t: "Go where the work happens",
    d: "Sit with the registers, the spreadsheets, the WhatsApp threads. Watch the informal habits no procedure documents.",
  },
  {
    k: "Understand",
    t: "Learn the rules of the trade",
    d: "What is a lease, a commission, an owner’s net, a partial payment. The vocabulary becomes concrete rules with edge cases.",
  },
  {
    k: "Structure",
    t: "Turn the activity into data",
    d: "Objects, relationships, states and the workflows that move between them. Keep the map small enough to hold in one head.",
  },
  {
    k: "Design",
    t: "Make it usable, not just correct",
    d: "Information architecture, business forms, dashboards. The screen someone touches fifty times a day gets the most attention.",
  },
  {
    k: "Build",
    t: "Ship the system solo",
    d: "React, TypeScript, Supabase, PostgreSQL, RLS. Multi-user where it needs to be. Documents generated, not templated by hand.",
  },
  {
    k: "Ship & learn",
    t: "Deploy, train, watch, adjust",
    d: "Put it in real hands, train the people who’ll keep using it, and let actual usage decide what V2 is.",
  },
];

export function HowIBuild() {
  return (
    <section id="method" className="scroll-mt-20 border-b border-line py-section">
      <Container>
        <Reveal>
          <Kicker>How I build</Kicker>
          <h2 className="mt-5 max-w-3xl text-display-md font-display text-balance">
            The same sequence, in a municipality or a startup.
          </h2>
          <p className="mt-5 max-w-prose text-body-lg text-ink-soft text-pretty">
            Not a framework I invented for a slide. It is what the projects have in common when the
            stack is stripped away.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-px border border-line-strong bg-line-strong sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.k} delay={(i % 3) * 0.05}>
              <div className="h-full bg-paper p-7">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-clay-deep">
                    {s.k}
                  </span>
                  <span className="font-mono text-[0.72rem] text-ink-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-[1.2rem] text-balance">{s.t}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
