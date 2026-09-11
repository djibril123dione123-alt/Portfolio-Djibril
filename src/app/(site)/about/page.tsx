import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { profile } from "@/content/profile";
import { pageMeta } from "@/lib/seo";
import { Container, Kicker } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = pageMeta({
  title: "About",
  description:
    "Djibril Dione — digital-economics student at UCAD / IPP, self-taught builder and founder of Samay Këur. How a business, product and software track converge.",
  path: "/about",
  ogImage: "/og/about.png",
});

export default function AboutPage() {
  return (
    <div className="py-section">
      <Container>
        <Reveal>
          <div className="flex items-center gap-4">
            <span aria-hidden className="accent-rule" />
            <p className="font-mono text-label uppercase tracking-[0.14em] text-clay-deep">About</p>
          </div>
          <h1 className="mt-6 max-w-4xl text-display-lg font-display text-balance">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-2xl text-body-lg text-ink-soft text-pretty">{profile.intro}</p>
        </Reveal>

        <div className="mt-14 grid gap-x-14 gap-y-12 md:grid-cols-[1fr_1.5fr]">
          <Reveal>
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-md border border-line-strong bg-paper-deep grayscale">
              <Image
                src="/djibril-dione.jpg"
                alt="Djibril Dione at his desk."
                fill
                sizes="(max-width: 768px) 80vw, 24rem"
                className="object-cover object-[50%_22%]"
              />
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="prose-editorial">
              {profile.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-20 grid gap-x-14 gap-y-10 border-t border-ink pt-10 md:grid-cols-[14rem_1fr]">
            <h2 className="font-mono text-[0.8rem] uppercase tracking-[0.14em] text-clay-deep">
              Education
            </h2>
            <dl className="max-w-2xl divide-y divide-line border-y border-line">
              {[
                ["School", profile.education.school],
                ["Programme", profile.education.program],
                ["Track", profile.education.track],
                ["Level", profile.education.level],
                ["Before", profile.education.baccalaureate],
                ["Languages", profile.languages.join(" · ")],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[7rem_1fr] gap-4 py-3.5">
                  <dt className="font-mono text-[0.72rem] uppercase tracking-wide text-ink-muted">
                    {k}
                  </dt>
                  <dd className="text-[0.95rem] text-ink-soft">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-20 grid gap-x-14 gap-y-10 border-t border-ink pt-10 md:grid-cols-[14rem_1fr]">
            <h2 className="font-mono text-[0.8rem] uppercase tracking-[0.14em] text-clay-deep">
              How I work
            </h2>
            <ol className="max-w-2xl">
              {profile.method.map((m, i) => (
                <li
                  key={m}
                  className="flex items-baseline gap-4 border-b border-line py-3 last:border-0"
                >
                  <span className="tabular-nums font-mono text-[0.75rem] text-ink-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[1.05rem] font-medium tracking-tight text-ink">{m}</span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-20 border-t border-ink pt-10">
            <p className="max-w-2xl font-display text-[1.4rem] leading-relaxed text-pretty">
              {profile.valueProp}
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              <a
                href={`mailto:${profile.contact.email}`}
                className="link-underline text-[0.95rem]"
              >
                {profile.contact.email}
              </a>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="link-underline text-[0.95rem]"
              >
                LinkedIn
              </a>
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noreferrer"
                className="link-underline text-[0.95rem]"
              >
                GitHub
              </a>
              <a href={profile.contact.resumeHref} className="link-underline text-[0.95rem]">
                {profile.contact.resumeLabel}
              </a>
              <Link href="/#work" className="link-underline text-[0.95rem]">
                Selected work →
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
