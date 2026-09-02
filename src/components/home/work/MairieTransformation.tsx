import { Reveal } from "@/components/ui/Reveal";
import { Screenshot, CropWindow } from "@/components/product/Product";
import { WorkEyebrow, MetaRow, WorkCta } from "./shared";

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
          <MetaRow items={["Digital Transformation Intern", "3 Oct – 3 Nov 2025", "Direction des Services Techniques"]} />
        </Reveal>

        <Reveal delay={0.05}>
          <ol className="mt-12 grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
            {/* 1 — manual */}
            <li className="flex flex-col">
              <span className="annotation text-mairie">01 · Before</span>
              <div className="mt-2 flex flex-1 flex-col justify-between border border-line-strong bg-paper-deep p-5">
                <p
                  className="h-24 w-full opacity-60"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(180deg, transparent 0 15px, rgba(24,22,17,0.18) 15px 16px)",
                  }}
                  aria-hidden
                />
                <p className="mt-4 text-[0.9rem] leading-snug text-ink-soft">
                  Paper registers, physical routing between offices. Lookups took minutes; traceability was weak.
                </p>
              </div>
            </li>

            <li className="hidden items-center justify-center text-ink-faint md:flex" aria-hidden>→</li>

            {/* 2 — structured db */}
            <li className="flex flex-col">
              <span className="annotation text-mairie">02 · Built</span>
              <div className="mt-2 flex-1">
                <CropWindow
                  src="/projects/mairie-ouakam/menu-principal.webp"
                  alt="Access solution main menu: add a letter, consult letters."
                  focusX={50}
                  focusY={40}
                  zoom={1.35}
                  ratio="4 / 3"
                  label="A structured Access database — one screen, the fields the office uses"
                />
              </div>
            </li>

            <li className="hidden items-center justify-center text-ink-faint md:flex" aria-hidden>→</li>

            {/* 3 — search */}
            <li className="flex flex-col">
              <span className="annotation text-mairie">03 · In use</span>
              <div className="mt-2 flex-1">
                <CropWindow
                  src="/projects/mairie-ouakam/recherche.webp"
                  alt="Access multi-criteria search form: date range, recipient, status, discharge number."
                  focusX={30}
                  focusY={35}
                  zoom={1.15}
                  ratio="4 / 3"
                  label="Multi-criteria search replaces manual registry lookup"
                />
              </div>
            </li>
          </ol>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.7fr_1fr] lg:items-center">
            <Screenshot
              src="/projects/mairie-ouakam/consultation.webp"
              alt="Access consultation grid over the full incoming-mail register. Sender and subject columns are pixelated for privacy."
              width={1907}
              height={887}
              chrome
              chromeLabel="Microsoft Access — Courriers DST"
              sizes="(max-width: 1024px) 100vw, 56vw"
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
