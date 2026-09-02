import { profile } from "@/content/profile";
import { Container, Kicker } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

export function ContactBlock() {
  return (
    <section id="contact" className="scroll-mt-20 py-section">
      <Container>
        <Reveal>
          <Kicker>Contact</Kicker>
          <h2 className="mt-5 max-w-4xl text-display-lg font-display text-balance">
            If you have a real problem that needs a system, I&rsquo;d like to hear about it.
          </h2>
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href={`mailto:${profile.contact.email}`}
              className="inline-flex items-center gap-3 bg-ink px-6 py-3 text-[0.95rem] font-medium text-paper transition-colors hover:bg-clay-deep"
            >
              {profile.contact.email}
            </a>
            <a href={profile.contact.resumeHref} className="link-underline text-[0.95rem]">
              {profile.contact.resumeLabel}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
