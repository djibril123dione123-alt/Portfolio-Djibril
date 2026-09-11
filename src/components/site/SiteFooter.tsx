import Link from "next/link";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";

const SECTIONS = [
  { label: "Selected work", href: "/#work" },
  { label: "Origin", href: "/#origin" },
  { label: "How I build", href: "/#method" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "About", href: "/about" },
  { label: "CV (FR)", href: "/cv" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-paper">
      <div className="container-wide grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr] md:py-16">
        <div>
          <p className="font-display text-2xl tracking-tight">
            {profile.name}
            <span className="text-clay">.</span>
          </p>
          <p className="mt-3 max-w-xs text-[0.9rem] leading-relaxed text-ink-muted">
            {profile.title} · {profile.secondary}
          </p>
          <div className="mt-5 flex flex-col gap-1.5 text-[0.9rem]">
            <a
              href={`mailto:${profile.contact.email}`}
              className="link-underline text-ink-soft hover:text-ink"
            >
              {profile.contact.email}
            </a>
            <a
              href={`tel:${profile.contact.phone.replace(/\s+/g, "")}`}
              className="link-underline text-ink-soft hover:text-ink"
            >
              {profile.contact.phone}
            </a>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="link-underline text-ink-soft hover:text-ink"
            >
              LinkedIn ↗
            </a>
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noreferrer"
              className="link-underline text-ink-soft hover:text-ink"
            >
              GitHub ↗
            </a>
            <a href={profile.contact.resumeHref} className="link-underline text-ink-soft hover:text-ink">
              Résumé (PDF)
            </a>
          </div>
        </div>

        <nav aria-label="Work" className="text-sm">
          <p className="kicker kicker-plain text-ink-muted">Work</p>
          <ul className="mt-4 space-y-2">
            {projects.map((p) => (
              <li key={p.slug}>
                <Link href={`/work/${p.slug}`} className="link-underline text-ink-soft hover:text-ink">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Sections" className="text-sm">
          <p className="kicker kicker-plain text-ink-muted">Navigate</p>
          <ul className="mt-4 space-y-2">
            {SECTIONS.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="link-underline text-ink-soft hover:text-ink">
                  {s.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://samaykeur.com"
                target="_blank"
                rel="noreferrer"
                className="link-underline text-ink-soft hover:text-ink"
              >
                samaykeur.com ↗
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container-wide flex flex-col gap-1.5 border-t border-line py-5 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {profile.name}
        </p>
        <p>Dakar, Senegal</p>
        <p className="font-mono uppercase tracking-wide">Designed &amp; built in-house</p>
      </div>
    </footer>
  );
}
