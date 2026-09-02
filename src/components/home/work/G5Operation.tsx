import { Reveal } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";
import { WorkEyebrow, MetaRow, WorkCta } from "./shared";

const MODULES = [
  "Dashboard",
  "Treasury",
  "Transfers",
  "Inventory",
  "Sales",
  "Team",
  "Settings",
  "Export",
];

const SNAPSHOT = [
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
          <MetaRow items={["Project Lead & Full-Stack Developer", "2026 · sales ongoing", "China → Senegal"]} />
        </Reveal>

        <Reveal delay={0.05}>
          <p className="font-display mt-10 max-w-2xl text-display-md text-ink text-balance">
            The business came first. The software followed.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-start">
            {/* left — the system it needed */}
            <div className="border border-line-strong bg-commerce-wash/60 p-6 sm:p-8">
              <p className="annotation text-commerce">The system the operation needed</p>
              <p className="mt-3 max-w-md text-[0.98rem] leading-relaxed text-ink-soft">
                Several people, one shared reality: stock, sales, cash, transfers and each partner&rsquo;s
                position. Without one system it drifts. So I built one.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-4 lg:grid-cols-2">
                {MODULES.map((m) => (
                  <li
                    key={m}
                    className="border-l-2 border-commerce/50 pl-2.5 font-mono text-[0.72rem] uppercase tracking-wide text-ink"
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </div>

            {/* right — operational snapshot */}
            <div>
              <div className="overflow-hidden panel">
                <SmartImage
                  src="/projects/g5-traders/treasury.svg"
                  alt="Editorial data visualisation of the G5 Traders 25 August 2026 figures — not a screenshot of the app."
                  width={1200}
                  height={750}
                  sizes="(max-width: 1024px) 100vw, 44vw"
                  className="block"
                />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-px border border-line-strong bg-line-strong">
                {SNAPSHOT.map(([v, l]) => (
                  <div key={l} className="bg-paper p-3.5">
                    <div className="text-[1.1rem] font-semibold tracking-tight text-ink">{v}</div>
                    <div className="mt-0.5 font-mono text-[0.62rem] uppercase tracking-wide text-ink-muted">
                      {l}
                    </div>
                  </div>
                ))}
              </div>
              <p className="annotation mt-3 normal-case tracking-normal text-ink-faint">
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
