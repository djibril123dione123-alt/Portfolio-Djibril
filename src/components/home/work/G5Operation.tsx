import { Reveal, RevealMedia } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";
import { WorkEyebrow, MetaRow, WorkCta } from "./shared";

const MODULES = ["Dashboard", "Treasury", "Transfers", "Inventory", "Sales", "Team", "Settings", "Export"];

const SNAPSHOT: [string, string][] = [
  ["227 500", "Total sales · FCFA"],
  ["152 705", "Gross margin · ~67%"],
  ["140", "Units sold"],
  ["170 500", "Common cash box · FCFA"],
];

export function G5Operation() {
  return (
    <section className="border-b border-line bg-paper py-section">
      <div className="container-wide">
        <Reveal>
          <WorkEyebrow
            index="03"
            tag="Entrepreneurship · Operations software"
            name="G5 Traders"
            tagline="Building the operating system for a real commerce venture: goods bought in China, sold in Senegal."
            accent="text-commerce"
          />
          <MetaRow
            items={["Project Lead & Full-Stack Developer", "2026 · sales ongoing", "China → Senegal"]}
          />
        </Reveal>

        <Reveal delay={0.05}>
          <p className="font-display mt-9 max-w-2xl text-display-md text-ink text-balance hang">
            &ldquo;The business came first. The software followed.&rdquo;
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-9 grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-start">
            {/* left — the system it needed, as a small module map */}
            <div className="rounded-lg border border-commerce-line bg-commerce-wash p-6 sm:p-8">
              <p className="annotation uppercase tracking-[0.14em] text-commerce">
                The system the operation needed
              </p>
              <p className="mt-3 max-w-md text-[0.98rem] leading-relaxed text-ink-soft">
                Several people, one shared reality: stock, sales, cash, transfers and each partner&rsquo;s
                position. Without one system it drifts — so I built one.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {MODULES.map((m) => (
                  <span
                    key={m}
                    className="rounded-md border border-commerce/25 bg-paper-pure px-2.5 py-1.5 font-mono text-[0.68rem] uppercase tracking-wide text-ink"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

            {/* right — operational snapshot */}
            <div>
              <RevealMedia className="panel-shot" delay={0.05}>
                <SmartImage
                  src="/projects/g5-traders/treasury.svg"
                  alt="Editorial data visualisation of the G5 Traders 25 August 2026 figures — not a screenshot of the app."
                  width={1200}
                  height={750}
                  sizes="(max-width: 1024px) 100vw, 44vw"
                  className="block w-full"
                />
              </RevealMedia>
              <div className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-line-strong bg-line-strong">
                {SNAPSHOT.map(([v, l]) => (
                  <div key={l} className="bg-paper-pure p-3.5">
                    <div className="tnum text-[1.1rem] font-semibold tracking-tight text-ink">{v}</div>
                    <div className="mt-0.5 font-mono text-[0.62rem] uppercase tracking-wide text-ink-muted">
                      {l}
                    </div>
                  </div>
                ))}
              </div>
              <p className="annotation mt-3 text-ink-muted">
                Point-in-time snapshot, 25 Aug 2026, while sales were still running — not final results.
                Real product screenshots replace this visual when added.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <WorkCta slug="g5-traders" label="Read the G5 Traders case study" />
        </Reveal>
      </div>
    </section>
  );
}
