import Link from "next/link";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-paper-dim">
      <div className="container-wide grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
        <div>
          <p className="font-display text-display-md max-w-md text-balance">
            {profile.northStar}
          </p>
          <a
            href={`mailto:${profile.contact.email}`}
            className="link-underline mt-6 inline-block text-body-lg"
          >
            {profile.contact.email}
          </a>
        </div>

        <nav aria-label="Work" className="text-sm">
          <p className="kicker">Selected work</p>
          <ul className="mt-5 space-y-2.5">
            {projects.map((p) => (
              <li key={p.slug}>
                <Link href={`/work/${p.slug}`} className="link-underline text-ink-soft hover:text-ink">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Elsewhere" className="text-sm">
          <p className="kicker">Elsewhere</p>
          <ul className="mt-5 space-y-2.5">
            <li>
              <a href={profile.contact.resumeHref} className="link-underline text-ink-soft hover:text-ink">
                Résumé (PDF)
              </a>
            </li>
            <li>
              <a
                href="https://samaykeur.com"
                className="link-underline text-ink-soft hover:text-ink"
                target="_blank"
                rel="noreferrer"
              >
                samaykeur.com
              </a>
            </li>
            <li>
              <Link href="/about" className="link-underline text-ink-soft hover:text-ink">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container-wide flex flex-col gap-2 border-t border-line py-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {profile.name}. Built from scratch — Next.js, TypeScript, Tailwind.
        </p>
        <p>Dakar, Senegal</p>
      </div>
    </footer>
  );
}
