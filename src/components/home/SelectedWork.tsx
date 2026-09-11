import { Reveal } from "@/components/ui/Reveal";
import { AccentRule } from "@/components/ui/primitives";
import { FlagshipSamay } from "@/components/home/work/FlagshipSamay";
import { MairieTransformation } from "@/components/home/work/MairieTransformation";
import { G5Operation } from "@/components/home/work/G5Operation";

export function SelectedWork() {
  return (
    <div id="work" className="scroll-mt-24">
      {/* Chapter opener — slim, earns its space */}
      <section className="border-b border-line bg-paper pb-[clamp(1.5rem,3vw,2.5rem)] pt-[clamp(3rem,6vw,5rem)]">
        <div className="container-wide">
          <Reveal>
            <div className="flex items-center gap-4">
              <AccentRule />
              <p className="font-mono text-label uppercase tracking-[0.14em] text-clay-deep">
                Selected work
              </p>
            </div>
            <h2 className="mt-5 max-w-3xl text-display-md text-balance">
              Systems built across property operations, public administration and a live commerce
              venture.
            </h2>
            <p className="mt-4 max-w-xl text-[1.02rem] leading-relaxed text-ink-soft text-pretty">
              Each one started from how the work actually happens on the ground. The interfaces below
              are the real products.
            </p>
          </Reveal>
        </div>
      </section>

      <FlagshipSamay />
      <MairieTransformation />
      <G5Operation />
    </div>
  );
}
