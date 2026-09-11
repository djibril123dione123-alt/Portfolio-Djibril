import { Reveal, RevealMedia } from "@/components/ui/Reveal";
import { Screenshot, DevicePhone } from "@/components/product/Product";
import { SmartImage } from "@/components/ui/SmartImage";
import { WorkEyebrow, MetaRow, WorkCta } from "./shared";

const D = { w: 1887, h: 861 };

const READS = [
  "Rent collected, arrears to recover, agency commission and the net owed back to each owner — one screen, kept correct in real time.",
  "Partial payments carry a remaining balance forward instead of disappearing.",
  "Every generated document is filed, versioned and QR-verifiable.",
];

export function FlagshipSamay() {
  return (
    <section className="relative border-b border-line bg-paper pb-[clamp(3rem,5vw,4.5rem)] pt-[clamp(2.5rem,4vw,3.5rem)]">
      <div className="container-wide">
        <Reveal>
          <WorkEyebrow
            index="01"
            tag="Flagship · Property-management SaaS"
            name="Samay Këur"
            tagline="From a custom real-estate tool to a multi-organization property-management SaaS — the system a rental agency actually runs on."
          />
          <MetaRow
            items={["Founder · Product Builder · Full-Stack Developer", "≈ late 2025 → present"]}
            status="2 real-estate agencies in field testing"
          />
        </Reveal>

        {/* the flagship shot on a real tinted ground */}
        <RevealMedia className="mt-10" delay={0.05}>
          <div className="rounded-lg border border-samay-line bg-samay-wash p-4 sm:p-7 lg:p-10">
            <figure>
              <div className="panel-shot">
                <div className="chrome-bar">
                  <span className="chrome-dot" />
                  <span className="chrome-dot" />
                  <span className="chrome-dot" />
                  <span className="ml-2 font-mono text-[0.64rem] text-ink-muted">
                    app.samaykeur.com — agency dashboard
                  </span>
                </div>
                <SmartImage
                  src="/projects/samay-keur/dashboard.webp"
                  alt="Samay Këur agency dashboard: rent collection volume, arrears to recover, owner net, agency commission and portfolio occupancy."
                  width={D.w}
                  height={D.h}
                  sizes="(max-width: 1024px) 100vw, 74vw"
                  className="block"
                />
              </div>
              <figcaption className="mt-5 grid gap-2 sm:grid-cols-3">
                {READS.map((r) => (
                  <span key={r} className="flex gap-2.5 annotation text-ink-muted">
                    <span aria-hidden className="mt-1 h-1 w-1 shrink-0 rounded-full bg-samay" />
                    {r}
                  </span>
                ))}
              </figcaption>
            </figure>
          </div>
        </RevealMedia>

        {/* supporting evidence — consistent frames */}
        <Reveal delay={0.05}>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr_auto] lg:items-start">
            <Screenshot
              src="/projects/samay-keur/paiement-partiel.webp"
              alt="Samay Këur partial-payment detail: expected rent, amount collected, remaining balance, agency commission, net to owner."
              width={D.w}
              height={D.h}
              sizes="(max-width: 1024px) 100vw, 36vw"
              caption="A partial payment, fully accounted: collected, remaining balance, commission, net owner."
            />
            <Screenshot
              src="/projects/samay-keur/ged.webp"
              alt="Samay Këur document vault listing generated contracts, receipts, mandates and reports with QR verification."
              width={D.w}
              height={D.h}
              sizes="(max-width: 1024px) 100vw, 36vw"
              caption="The document subsystem — templates, generation, a versioned registry, QR-verifiable PDFs."
            />
            <DevicePhone
              src="/projects/samay-keur/mobile-dashboard.webp"
              alt="Samay Këur mobile dashboard."
              width={900}
              height={1950}
              sizes="(max-width: 1024px) 40vw, 168px"
              caption="Built for the phone, not just resized"
              className="mx-auto w-[44%] min-w-[128px] max-w-[168px] lg:w-[168px]"
            />
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <WorkCta slug="samay-keur" label="Read the Samay Këur case study" />
        </Reveal>
      </div>
    </section>
  );
}
