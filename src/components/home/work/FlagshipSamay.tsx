import { Reveal } from "@/components/ui/Reveal";
import { AnnotatedShot, Screenshot } from "@/components/product/Product";
import { WorkEyebrow, MetaRow, WorkCta } from "./shared";

const D = { w: 1887, h: 861 };

export function FlagshipSamay() {
  return (
    <section className="relative border-b border-line bg-paper pb-[clamp(2.5rem,5vw,4rem)] pt-[clamp(3.5rem,7vw,6rem)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[58%] bg-samay-wash/50" />

      <div className="container-wide relative">
        <Reveal>
          <WorkEyebrow
            index="01"
            tag="Flagship · Property-management SaaS"
            name="Samay Këur"
            tagline="From a custom real-estate tool to a multi-organization property-management SaaS — the system a rental agency actually runs on."
          />
          <MetaRow
            items={[
              "Founder · Product Builder · Full-Stack Developer",
              "Late 2025 → present",
              "2 real-estate agencies in field testing",
            ]}
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-9">
            <AnnotatedShot
              src="/projects/samay-keur/dashboard.webp"
              alt="Samay Këur agency dashboard: rent collection volume, arrears to recover, owner net, agency commission and portfolio occupancy."
              width={D.w}
              height={D.h}
              chromeLabel="app.samaykeur.com — agency dashboard"
              sizes="(max-width: 1024px) 100vw, 84vw"
              notes={[
                { x: 22, y: 20, side: "right", text: "Arrears surfaced as work" },
                { x: 46, y: 20, side: "right", text: "Owner net after management fees" },
                { x: 13, y: 92, side: "right", text: "Per-agency roles & access" },
              ]}
              caption="One agency's operating picture — collection volume, arrears, owner net, commission and occupancy, kept correct in real time."
            />
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-7 grid items-start gap-6 lg:grid-cols-[1fr_1fr_0.5fr]">
            <Screenshot
              src="/projects/samay-keur/paiement-partiel.webp"
              alt="Samay Këur partial-payment detail: expected rent, amount collected, remaining balance, agency commission, net to owner."
              width={D.w}
              height={D.h}
              flush
              sizes="(max-width: 1024px) 100vw, 38vw"
              caption="A partial payment, fully accounted: collected, remaining balance, commission, net owner."
            />
            <Screenshot
              src="/projects/samay-keur/ged.webp"
              alt="Samay Këur document vault listing generated contracts, receipts, mandates and reports with QR verification."
              width={D.w}
              height={D.h}
              flush
              sizes="(max-width: 1024px) 100vw, 38vw"
              caption="A document subsystem — templates, generation, a versioned registry, QR-verifiable PDFs."
            />
            <div className="mx-auto w-[42%] min-w-[120px] max-w-[150px] lg:w-full lg:max-w-none">
              <div className="overflow-hidden rounded-[1.2rem] border-[4px] border-night bg-night shadow-float">
                <div className="overflow-hidden rounded-[0.9rem]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/samay-keur/mobile-dashboard.webp"
                    alt="Samay Këur mobile dashboard."
                    loading="lazy"
                    decoding="async"
                    className="block w-full"
                  />
                </div>
              </div>
              <p className="annotation mt-2 text-center normal-case tracking-normal text-ink-muted">
                Built for the phone, not just resized
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <WorkCta slug="samay-keur" label="Read the Samay Këur case study" />
        </Reveal>
      </div>
    </section>
  );
}
