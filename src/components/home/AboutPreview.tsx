import Link from "next/link";
import Image from "next/image";
import { profile } from "@/content/profile";
import { Reveal } from "@/components/ui/Reveal";
import { AccentRule } from "@/components/ui/primitives";

export function AboutPreview() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-line bg-paper-dim py-section">
      <div className="container-wide">
        <div className="grid items-center gap-x-14 gap-y-8 md:grid-cols-[15rem_1fr]">
          <Reveal>
            <div className="relative aspect-[4/5] w-full max-w-[15rem] overflow-hidden rounded-md border border-line-strong bg-paper-deep grayscale">
              <Image
                src="/djibril-dione.jpg"
                alt="Djibril Dione."
                fill
                sizes="(max-width: 768px) 55vw, 15rem"
                className="object-cover object-[50%_22%]"
              />
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="flex items-center gap-4">
              <AccentRule />
              <p className="font-mono text-label uppercase tracking-[0.14em] text-clay-deep">About</p>
            </div>
            <h2 className="mt-5 max-w-2xl text-display-md text-balance">
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
