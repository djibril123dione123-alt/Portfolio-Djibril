import { profile } from "@/content/profile";

export function ContactBlock() {
  return (
    <section id="contact" className="grain scroll-mt-16 bg-night py-section-lg text-paper">
      <div className="container-wide">
        <p className="kicker text-clay-soft">Contact</p>
        <h2 className="font-display mt-5 max-w-3xl text-display-lg text-balance">
          If you have a real problem that needs a system, I&rsquo;d like to hear about it.
        </h2>

        <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a
            href={`mailto:${profile.contact.email}`}
            className="inline-flex items-center gap-3 bg-paper px-6 py-3 text-[0.92rem] font-medium text-ink transition-colors hover:bg-clay-soft hover:text-paper"
          >
            {profile.contact.email}
          </a>
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="link-underline text-[0.92rem] text-paper/85"
          >
            LinkedIn ↗
          </a>
          <a href={profile.contact.resumeHref} className="link-underline text-[0.92rem] text-paper/85">
            {profile.contact.resumeLabel}
          </a>
        </div>

        <p className="mt-10 max-w-md text-[0.92rem] leading-relaxed text-paper/55">
          Based in Dakar, Senegal. Working across property operations, public administration,
          commerce and collaborative tools.
        </p>
      </div>
    </section>
  );
}
