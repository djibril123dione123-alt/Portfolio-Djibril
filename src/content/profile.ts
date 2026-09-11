/**
 * Source of truth: Master_Profile_2026_Djibril_Dione_v2.
 * Only VERIFIED / CONFIRMED facts are surfaced publicly here.
 * Projections, unfrozen dates and unmeasured claims are deliberately excluded.
 */

export const profile = {
  name: "Djibril Dione",
  title: "Product Builder & Full-Stack Developer",
  secondary: "Founder of Samay Këur",
  roles: ["Product Builder", "Full-Stack Developer", "Founder of Samay Këur"],

  northStar: "I build digital systems for real-world problems.",

  valueProp:
    "I design and build digital products that turn fragmented real-world operations into clear, reliable systems.",

  intro:
    "I work at the seam between operations, product and code. I go into a real activity — a public office, a rental agency, an import venture — map how it actually runs, and build the system that lets people run it better.",

  method: ["Observe", "Understand", "Structure", "Design", "Build", "Ship", "Learn"],

  about: [
    "I study digital economics at Université Cheikh Anta Diop de Dakar — Institut des Politiques Publiques, on a track built around the digital transformation of organizations. The degree is about how technology reshapes the way institutions and businesses work; my practice is the applied side of the same question.",
    "Most of what I know about building software I taught myself, project by project, because a real problem needed solving. A one-month internship at the Mairie de Ouakam turned into a rental-management tool for a family agency, which turned into Samay Këur — a property-management SaaS with 2 real-estate agencies currently testing it.",
    "My edge is closing the distance between an unclear operational problem and a working product — from workflows and data through to interface and implementation, without a handoff along the way.",
  ],

  aboutShort: [
    "I study digital economics at UCAD's Institut des Politiques Publiques, on a track about how technology reshapes the way organizations work. My practice is the applied side of that.",
    "My edge is closing the distance between an unclear operational problem and a working product — workflows and data through to interface and implementation.",
  ],

  education: {
    school: "Université Cheikh Anta Diop de Dakar — Institut des Politiques Publiques (IPP)",
    program: "Digital economics, technological development and digital business",
    track: "Documented option 2024–2025: Digital transformation of organizations",
    level: "Licence 2 — 2025–2026",
    baccalaureate: "Scientific Baccalaureate (S2), pass with merit — Cours Anne Marie Javouhey",
  },

  languages: ["French — working language", "English — Intermediate"],

  capabilities: {
    product: [
      "Field observation & process analysis",
      "Turning business needs into workflows, data & rules",
      "Information architecture, business forms & dashboards",
      "Scope prioritisation and V1 / V2 trade-offs",
      "Deployment, user onboarding & iteration",
    ],
    engineering: [
      "React · TypeScript · Next.js · Vite",
      "Tailwind CSS · HTML · CSS",
      "Supabase · PostgreSQL · SQL",
      "Auth · Row-Level Security · RPC · Edge Functions",
      "Multi-user / multi-tenant · roles & permissions",
      "PWA · Service Worker · Web Push · realtime",
      "Document generation (PDF)",
      "Microsoft Access · Python · Git · Vercel",
    ],
    business: [
      "Entrepreneurship & venture leadership",
      "B2B qualification & prospecting",
      "Demo preparation & product narrative",
      "Commerce, stock & treasury operations",
      "Pricing & commercialisation thinking",
    ],
  },

  contact: {
    // Confirmed by the user's final CV (2026-09-11) — supersedes an earlier
    // djibrildione.com-domain address that appeared only in a draft mockup.
    email: "dionedjibril33@gmail.com",
    linkedin: "https://www.linkedin.com/in/djibril-dione-666450382/",
    // Stored centrally; deliberately only surfaced on the CV, not the marketing
    // pages — a phone number belongs on a document handed to one recruiter,
    // not on an indexed public homepage.
    phone: "+221 76 579 79 12",
    resumeHref: "/cv-djibril-dione.pdf",
    resumeLabel: "Download résumé (PDF)",
  },

  meta: {
    siteName: "Djibril Dione",
    // Public domain confirmed as djibrildione.com — set NEXT_PUBLIC_SITE_URL to
    // https://djibrildione.com at deploy time (src/lib/site.ts reads it; the
    // code keeps a neutral localhost fallback so nothing ships a canonical
    // before the env var is actually set on the deployment).
    description:
      "Djibril Dione is a product builder and full-stack developer, founder of Samay Këur. He designs and builds digital products that turn fragmented real-world operations into clear, reliable systems.",
    locale: "en",
  },
} as const;

export type Profile = typeof profile;
