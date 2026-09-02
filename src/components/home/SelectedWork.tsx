import { Reveal } from "@/components/ui/Reveal";
import { FlagshipSamay } from "@/components/home/work/FlagshipSamay";
import { MairieTransformation } from "@/components/home/work/MairieTransformation";
import { G5Operation } from "@/components/home/work/G5Operation";

export function SelectedWork() {
  return (
    <div id="work" className="scroll-mt-16">
      <section className="border-b border-line bg-paper py-section">
        <div className="container-wide">
          <Reveal>
            <p className="kicker">Selected work</p>
            <h2 className="mt-4 max-w-3xl text-display-md font-semibold tracking-tight text-balance">
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
