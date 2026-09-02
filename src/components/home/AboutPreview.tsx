import Link from "next/link";
import Image from "next/image";
import { profile } from "@/content/profile";
import { Reveal } from "@/components/ui/Reveal";

export function AboutPreview() {
  return (
    <section id="about" className="scroll-mt-16 border-b border-line bg-paper-dim py-section">
      <div className="container-wide">
        <div className="grid items-center gap-x-14 gap-y-8 md:grid-cols-[1fr_1.7fr]">
          <Reveal>
            <div className="relative aspect-[4/5] w-full max-w-[17rem] overflow-hidden border border-line-strong bg-paper-dim grayscale">
              <Image
                src="/djibril-dione.jpg"
                alt="Djibril Dione."
                fill
                sizes="(max-width: 768px) 60vw, 17rem"
                className="object-cover object-[50%_28%]"
              />
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="kicker">About</p>
            <h2 className="mt-4 max-w-2xl text-display-md font-semibold tracking-tight text-balance">
              Business, product and software — converging on purpose.
            </h2>
            <div className="prose-editorial mt-5">
              {profile.aboutShort.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <Link href="/about" className="link-underline mt-6 inline-block text-[0.92rem]">
              More about me →
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
