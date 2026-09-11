import { profile } from "@/content/profile";

export function ContactBlock() {
  return (
    <section
      id="contact"
      className="grain relative scroll-mt-24 overflow-hidden bg-clay-night py-section-lg text-paper"
    >
      <div className="container-wide relative">
        <div className="flex items-center gap-4">
          <span aria-hidden className="block h-[2px] w-10 bg-paper/70" />
          <p className="font-mono text-label uppercase tracking-[0.14em] text-paper/80">Contact</p>
        </div>

        <h2 className="font-display mt-6 max-w-3xl text-display-lg text-balance hang">
          If you have a real problem that needs a system, I&rsquo;d like to hear about it.
        </h2>

        <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-4">
          <a
            href={`mailto:${profile.contact.email}`}
            className="inline-flex items-center rounded-md bg-paper px-6 py-3 text-[0.92rem] font-medium text-ink transition-transform duration-200 hover:-translate-y-0.5"
          >
            {profile.contact.email}
          </a>
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="link-underline text-[0.92rem] text-paper/90"
          >
            LinkedIn&nbsp;↗
          </a>
          <a
            href={profile.contact.resumeHref}
            className="link-underline text-[0.92rem] text-paper/90"
          >
            {profile.contact.resumeLabel}
          </a>
        </div>

        <p className="mt-12 max-w-md text-[0.92rem] leading-relaxed text-paper/60">
          Based in Dakar, Senegal. Working across property operations, public administration,
          commerce and collaborative tools.
        </p>
      </div>
    </section>
  );
}
