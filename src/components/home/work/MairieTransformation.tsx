import { Reveal, RevealMedia } from "@/components/ui/Reveal";
import { Screenshot, CropWindow } from "@/components/product/Product";
import { WorkEyebrow, MetaRow, WorkCta } from "./shared";

function Arrow() {
  return (
    <li className="hidden items-center justify-center md:flex" aria-hidden>
      <svg width="34" height="12" viewBox="0 0 34 12" fill="none" className="text-line-strong">
        <path d="M0 6h30m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </li>
  );
}

export function MairieTransformation() {
  return (
    <section className="border-b border-line bg-paper-cool py-section">
      <div className="container-wide">
        <Reveal>
          <WorkEyebrow
            index="02"
            tag="Public sector · Digital transformation"
            name="Mairie de Ouakam"
            tagline="Turning a paper-based administrative workflow into a digital system — diagnosed, built, deployed and handed over in one month."
            accent="text-mairie"
          />
          <MetaRow
            items={[
              "Digital Transformation Intern",
              "3 Oct – 3 Nov 2025",
              "Direction des Services Techniques",
            ]}
          />
        </Reveal>

        <RevealMedia className="mt-11" delay={0.05}>
          <ol className="grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
            <li className="flex flex-col">
              <span className="annotation mb-2 uppercase tracking-[0.14em] text-mairie">01 · Before</span>
              <div className="flex flex-1 flex-col justify-between rounded-md border border-line-strong bg-paper-deep p-5">
                <p className="font-mono text-[0.72rem] uppercase leading-relaxed tracking-[0.08em] text-ink-muted">
                  Paper registers
                  <br />
                  Physical routing
                  <br />
                  Minutes per lookup
                </p>
                <p className="mt-6 text-[0.9rem] leading-snug text-ink-soft">
                  Slow to search, weak traceability, no statistics.
                </p>
              </div>
            </li>

            <Arrow />

            <li className="flex flex-col">
              <span className="annotation mb-2 uppercase tracking-[0.14em] text-mairie">02 · Built</span>
              <div className="flex-1">
                <CropWindow
                  src="/projects/mairie-ouakam/menu-principal.webp"
                  alt="Access solution main menu: add a letter, consult letters."
                  focusX={50}
                  focusY={38}
                  zoom={1.35}
                  ratio="4 / 3"
                  label="A structured Access database — the fields the office uses"
                />
              </div>
            </li>

            <Arrow />

            <li className="flex flex-col">
              <span className="annotation mb-2 uppercase tracking-[0.14em] text-mairie">03 · In use</span>
              <div className="flex-1">
                <CropWindow
                  src="/projects/mairie-ouakam/recherche.webp"
                  alt="Access multi-criteria search form: date range, recipient, status, discharge number."
                  focusX={28}
                  focusY={32}
                  zoom={1.15}
                  ratio="4 / 3"
                  label="Multi-criteria search replaces manual registry lookup"
                />
              </div>
            </li>
          </ol>
        </RevealMedia>

        <Reveal delay={0.05}>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.7fr_1fr] lg:items-center">
            <Screenshot
              src="/projects/mairie-ouakam/consultation.webp"
              alt="Access consultation grid over the full incoming-mail register. Sender and subject columns are pixelated for privacy."
              width={1907}
              height={887}
              chrome
              chromeLabel="Microsoft Access — Courriers DST"
              sizes="(max-width: 1024px) 100vw, 54vw"
              caption="The register, searchable. Sender and subject columns are irreversibly pixelated — real municipal correspondence, not mine to publish."
            />
            <p className="max-w-sm text-[0.98rem] leading-relaxed text-ink-soft">
              The point was never how Access looks. It was diagnosing a real workflow, changing it, and
              leaving the department running on the new one — with the training and the local-network
              setup that makes that stick.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <WorkCta slug="mairie-ouakam" label="Read the Mairie de Ouakam case study" />
        </Reveal>
      </div>
    </section>
  );
}
