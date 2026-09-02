import Link from "next/link";
import Image from "next/image";
import { profile } from "@/content/profile";
import { Container, Kicker } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

export function AboutPreview() {
  return (
    <section id="about" className="scroll-mt-20 border-b border-line py-section">
      <Container>
        <div className="grid gap-x-14 gap-y-10 md:grid-cols-[1fr_1.5fr]">
          <Reveal>
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden border border-line-strong bg-paper-dim grayscale">
              <Image
                src="/djibril-dione.jpg"
                alt="Djibril Dione at his desk."
                fill
                sizes="(max-width: 768px) 80vw, 24rem"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <Kicker>About</Kicker>
            <h2 className="mt-5 max-w-2xl text-display-md font-display text-balance">
              Business, product and software — converging on purpose.
            </h2>
            <div className="prose-editorial mt-6">
              {profile.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <Link href="/about" className="link-underline mt-7 inline-block text-[0.95rem]">
              More about me →
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
