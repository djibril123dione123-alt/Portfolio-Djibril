import { profile } from "@/content/profile";
import { Container, Kicker } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

const GROUPS = [
  { key: "Product", items: profile.capabilities.product },
  { key: "Engineering", items: profile.capabilities.engineering },
  { key: "Business & operations", items: profile.capabilities.business },
] as const;

export function Capabilities() {
  return (
    <section className="border-b border-line py-section">
      <Container>
        <Reveal>
          <Kicker>Capabilities</Kicker>
          <h2 className="mt-5 max-w-3xl text-display-md font-display text-balance">
            Three things, kept in the same head.
          </h2>
          <p className="mt-5 max-w-prose text-body-lg text-ink-soft text-pretty">
            The hierarchy matters more than the count. The stack is a means; the value is being able
            to move from a business problem to a shipped system without a handoff.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-3">
          {GROUPS.map((g, i) => (
            <Reveal key={g.key} delay={i * 0.06}>
              <h3 className="border-t-2 border-ink pt-4 font-mono text-[0.8rem] uppercase tracking-[0.14em] text-clay-deep">
                {g.key}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {g.items.map((it) => (
                  <li key={it} className="text-[0.95rem] leading-relaxed text-ink-soft">
                    {it}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
