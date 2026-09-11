export type ProjectLink = { label: string; href: string; kind?: "live" | "site" | "repo" };

export type ProjectSummary = {
  slug: string;
  order: string;
  name: string;
  kicker: string;
  positioning: string;
  role: string;
  period: string;
  status: string;
  discipline: string[];
  stack: string[];
  links: ProjectLink[];
  cover: { src: string; alt: string; width: number; height: number };
  tier: "selected" | "more";
  hasCaseStudy: boolean;
};

export const projects: ProjectSummary[] = [
  {
    slug: "samay-keur",
    order: "01",
    name: "Samay Këur",
    kicker: "Flagship · Property-management SaaS",
    positioning:
      "From a custom real-estate tool to a multi-organization property-management SaaS.",
    role: "Founder · Product Builder · Full-Stack Developer",
    period: "≈ late 2025 – present",
    status: "2 real-estate agencies currently testing the product",
    discipline: ["Product discovery", "System design", "Full-stack build", "SaaS architecture"],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "PostgreSQL", "RLS", "Edge Functions"],
    links: [
      { label: "samaykeur.com", href: "https://samaykeur.com", kind: "site" },
      { label: "app.samaykeur.com", href: "https://app.samaykeur.com", kind: "live" },
    ],
    cover: {
      src: "/projects/samay-keur/dashboard.webp",
      alt: "Samay Këur agency dashboard: rent collection, arrears, owner net and portfolio health.",
      width: 1888,
      height: 861,
    },
    tier: "selected",
    hasCaseStudy: true,
  },
  {
    slug: "mairie-ouakam",
    order: "02",
    name: "Mairie de Ouakam",
    kicker: "Public sector · Digital transformation",
    positioning: "Turning a paper-based administrative workflow into a digital system.",
    role: "Digital Transformation Intern",
    period: "03 Oct – 03 Nov 2025",
    status: "Deployed, staff trained, in use at end of internship",
    discipline: ["Diagnosis", "Process design", "Build", "Deployment", "Training"],
    stack: ["Microsoft Access", "Local network file-sharing", "Forms & queries"],
    links: [],
    cover: {
      src: "/projects/mairie-ouakam/menu-principal.webp",
      alt: "Main menu of the Access solution built for incoming-mail management at the Mairie de Ouakam.",
      width: 1919,
      height: 946,
    },
    tier: "selected",
    hasCaseStudy: true,
  },
  {
    slug: "g5-traders",
    order: "03",
    name: "G5 Traders",
    kicker: "Entrepreneurship · Operations software",
    positioning: "Building the operating system for a real commerce venture.",
    role: "Project Lead & Full-Stack Developer",
    period: "2026 · ongoing",
    status: "Live — sales still running at the 25 Aug 2026 snapshot",
    discipline: ["Venture leadership", "Financial modelling", "Operations design", "Full-stack build"],
    stack: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    links: [{ label: "g5traders.lovable.app", href: "https://g5traders.lovable.app", kind: "live" }],
    cover: {
      src: "/projects/g5-traders/dashboard.webp",
      alt: "G5 Traders dashboard: net treasury, gross margin, total sales and stock value.",
      width: 1920,
      height: 917,
    },
    tier: "selected",
    hasCaseStudy: true,
  },
  {
    slug: "al-furqan",
    order: "04",
    name: "Librairie Al Furqan",
    kicker: "E-commerce · Local logistics",
    positioning: "A mobile-first Islamic bookshop built for how commerce actually happens in Senegal.",
    role: "Solo design & development",
    period: "2026",
    status: "Code complete · deployed",
    discipline: ["Product scoping", "E-commerce", "Local data", "Logistics"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    links: [
      { label: "librairie-al-furqan.vercel.app", href: "https://librairie-al-furqan.vercel.app", kind: "live" },
    ],
    cover: {
      src: "/projects/al-furqan/catalogue.webp",
      alt: "Librairie Al Furqan catalogue: category and author filters over a grid of Islamic books.",
      width: 1920,
      height: 917,
    },
    tier: "more",
    hasCaseStudy: true,
  },
  {
    slug: "nur-al-bindjib",
    order: "05",
    name: "Nur Al-BinDjib",
    kicker: "Collaborative PWA · Accountability",
    positioning: "A collaborative PWA for shared progress and accountability between two people.",
    role: "Solo design & development",
    period: "2026",
    status: "Deployed · private product",
    discipline: ["Pairing", "Realtime", "Push notifications", "PWA"],
    stack: [
      "React",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "RLS",
      "RPC",
      "Edge Functions",
      "Web Push",
      "Service Worker",
    ],
    links: [
      { label: "nur-al-bindjib.vercel.app", href: "https://nur-al-bindjib.vercel.app", kind: "live" },
    ],
    cover: {
      src: "/projects/nur-al-bindjib/cover.svg",
      alt: "Nur Al-BinDjib — a collaborative accountability PWA with pairing, shared tasks and push.",
      width: 1200,
      height: 750,
    },
    tier: "more",
    hasCaseStudy: true,
  },
];

export const selectedWork = projects.filter((p) => p.tier === "selected");
export const moreWork = projects.filter((p) => p.tier === "more");

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function adjacentProjects(slug: string) {
  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];
  return { next };
}
