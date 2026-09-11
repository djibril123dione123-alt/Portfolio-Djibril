import type { CaseStudy } from "./types";

const D = { w: 1887, h: 861 };
const D2 = { w: 1917, h: 881 };
const M = { w: 900, h: 1950 };
const C = { w: 1919, h: 1007 };

export const samayKeur: CaseStudy = {
  slug: "samay-keur",
  name: "Samay Këur",
  tagline: "From a custom real-estate tool to a multi-organization property-management SaaS.",
  summary:
    "Samay Këur is a property-management platform for rental agencies in Senegal. It began as a bespoke tool for one family agency, Confort Immo, and became a generalised, multi-tenant product once it was clear the same operational problem existed everywhere. This is the story of how it was discovered, understood, generalised and built.",
  role: "Founder · Product Builder · Full-Stack Developer",
  period: "≈ late 2025 – present",
  status: "2 real-estate agencies currently testing the product",
  stack: [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "Supabase",
    "PostgreSQL",
    "Auth · Row-Level Security",
    "RPC · Edge Functions",
    "PDF document generation",
    "Vercel",
  ],
  links: [
    { label: "samaykeur.com", href: "https://samaykeur.com", kind: "site" },
    { label: "app.samaykeur.com", href: "https://app.samaykeur.com", kind: "live" },
  ],
  hero: {
    src: "/projects/samay-keur/dashboard.webp",
    alt: "Samay Këur agency dashboard: rent collection, arrears to recover, owner net, commissions and portfolio occupancy.",
    caption: "Agency control panel — collection volume, arrears, owner net and portfolio health in one view.",
    width: D.w,
    height: D.h,
  },
  facts: [
    { k: "Role", v: "Founder · Product Builder · Full-Stack Developer" },
    { k: "Timeline", v: "Started ≈ late 2025 · major build phase completed mid-Aug 2026" },
    { k: "Current state", v: "Field testing + early go-to-market" },
    { k: "Validation", v: "2 real-estate agencies currently testing the product" },
    { k: "Predecessor", v: "Confort Immo Archi — 8 users, still in use" },
    { k: "Surface", v: "Web app + separate marketing site + mobile-responsive UI" },
  ],
  blocks: [
    {
      kind: "prose",
      kicker: "01 — Opening",
      heading: "A system for how a rental agency actually runs",
      body: [
        "A rental agency in Dakar holds a lot of moving state: owners, buildings, units, tenants, leases, monthly due dates, full and partial payments, leftover balances, arrears, agency commission, the net amount owed back to each owner, and a paper trail of contracts, receipts and reports behind all of it.",
        "In most agencies that state lives across notebooks, spreadsheets, message threads and someone's memory. **Samay Këur puts it into one coherent system** designed to be used by several organisations at once, each with its own data, team and agency identity.",
        "I did not start by wanting to build a SaaS. I started inside one agency's problem — and only generalised once the problem proved to be everyone's.",
      ],
    },
    {
      kind: "prose",
      kicker: "02 — It started before Samay Këur",
      heading: "Mairie de Ouakam → Confort Immo → Samay Këur",
      body: [
        "In October 2025 I did a one-month digital-transformation internship at the Mairie de Ouakam, digitising the incoming-mail workflow of the technical-services department. My supervisor there, Mouhamed Fall, watched that work and — about two weeks in — asked me to build a rental-management tool for the family agency run by Madame Fall.",
        "That tool became **Confort Immo Archi**. It was not a rough prototype. It was a complete, clean business application that a real agency ran on, and still runs on today.",
      ],
    },
    {
      kind: "prose",
      kicker: "03 — Confort Immo",
      heading: "The field lab where the rules became concrete",
      body: [
        "Confort Immo is where the vocabulary of the trade stopped being abstract. Owner, building, unit, lease, collection, commission, arrears, owner statement — each one became a concrete product rule with edge cases: what happens when a tenant pays half, when a payment covers two months, when the agency's cut changes, when an owner wants a statement mid-month.",
        "Built solo in about a month from mid-October 2025. React, TypeScript, Vite, Tailwind, Supabase, PostgreSQL, Auth and RLS. Eight people use it. It handles owners, buildings, units, tenants and contracts; payments, arrears, expenses and commissions; financial reports for the agency, per building and per owner; and PDF generation for contracts, invoices, mandates and statements.",
      ],
    },
    {
      kind: "gallery",
      columns: 2,
      items: [
        {
          src: "/projects/confort-immo/dashboard.webp",
          alt: "Confort Immo Archi dashboard — portfolio, occupancy and income.",
          caption: "Confort Immo Archi — the agency dashboard.",
          width: C.w,
          height: C.h,
        },
        {
          src: "/projects/confort-immo/impayes.webp",
          alt: "Confort Immo Archi arrears screen listing unpaid rent by tenant and period.",
          caption: "Arrears tracking, already a first-class screen in the bespoke tool.",
          width: C.w,
          height: C.h,
        },
        {
          src: "/projects/confort-immo/contrats.webp",
          alt: "Confort Immo Archi contracts screen.",
          caption: "Contracts — lease records with document generation.",
          width: C.w,
          height: C.h,
        },
        {
          src: "/projects/confort-immo/reporting-bailleurs.webp",
          alt: "Confort Immo Archi per-owner financial report.",
          caption: "Per-owner financial reporting.",
          width: C.w,
          height: C.h,
        },
      ],
    },
    {
      kind: "statement",
      text:
        "What if this wasn't a problem specific to one agency?",
      attribution: "The insight that started Samay Këur",
    },
    {
      kind: "prose",
      kicker: "04 — The insight",
      heading: "One agency's tool, everyone's problem",
      body: [
        "Every agency I looked at was solving the same operational puzzle with different notebooks. The domain — leases, due dates, partial payments, commission, owner net, documents — was stable. What changed between agencies was surface: their names, their commission rules, their document templates, their team structure.",
        "That is the shape of a product, not a one-off. The move was to keep the domain and make everything around it configurable and multi-tenant.",
      ],
    },
    {
      kind: "split",
      kicker: "05 — Productizing the problem",
      heading: "Confort Immo → Samay Këur is generalisation, not a redesign",
      intro:
        "This is not a bad V1 replaced by a pretty V2. Confort Immo was already a working business application. Samay Këur takes that and makes it a product several organisations can run on.",
      left: {
        title: "Confort Immo Archi",
        points: [
          "One agency, one dataset",
          "Commission and rules baked in for that agency",
          "Documents built for one set of templates",
          "Single operator context",
          "Complete, clean, in real production use",
        ],
      },
      right: {
        title: "Samay Këur",
        points: [
          "Multi-organization architecture with data isolation",
          "Users, roles, permissions and per-agency identity",
          "Deeper financial workflows: partials, leftovers, recovery, owner net",
          "A real document system: templates, clauses, generation, registry",
          "Mature, responsive UX built for SaaS commercialisation",
        ],
      },
    },
    {
      kind: "steps",
      kicker: "06 — System design",
      heading: "Five domains hold the whole product",
      intro:
        "Every screen in Samay Këur belongs to one of five structuring blocks. Keeping the map this small is what keeps a broad product legible.",
      steps: [
        {
          title: "Portfolio",
          body: "Owners, properties, buildings, units, tenants, tenancies, leases and an agency calendar — the objects everything else refers to.",
        },
        {
          title: "Finance",
          body: "Due dates, collections, full and partial payments, leftover balances, arrears, commissions, net-to-owner and expenses.",
        },
        {
          title: "Documents",
          body: "A document library and a generation studio: templates, clauses, preview, versioned registry, PDF output and per-agency customisation.",
        },
        {
          title: "Organization",
          body: "Team, roles, permissions, agency identity and settings — the layer that makes one codebase serve many agencies.",
        },
        {
          title: "Reporting",
          body: "Dashboards and reports: per owner, portfolio-wide, financial and recovery.",
        },
      ],
    },
    {
      kind: "figure",
      src: "/projects/samay-keur/patrimoine.webp",
      alt: "Samay Këur portfolio screen listing buildings and units with occupancy.",
      caption: "Portfolio — buildings and units, the backbone objects the rest of the system references.",
      bleed: "wide",
      frame: "window",
      width: D.w,
      height: D.h,
    },
    {
      kind: "steps",
      kicker: "07 — Workflows",
      heading: "One rent payment, followed all the way through",
      intro:
        "Features listed as a menu tell you nothing. Here is a single real workflow — a tenant paying rent — and everything the system has to keep correct along the way.",
      steps: [
        {
          title: "Lease → due date",
          body: "An active lease generates a monthly due date with an expected amount for that unit.",
        },
        {
          title: "Collection",
          body: "The agency records a payment against that due date, with method and date. A receipt can be issued.",
        },
        {
          title: "Partial payment & leftover",
          body: "If the tenant pays part of the rent, the system records what was received and carries the remaining balance forward instead of silently losing it.",
        },
        {
          title: "Arrears",
          body: "Unpaid or partly-paid due dates roll into the recovery view, so the agency always knows what is outstanding and against whom.",
        },
        {
          title: "Commission → net to owner",
          body: "From the amount actually collected, the system computes the agency commission and the net amount owed back to the property owner.",
        },
        {
          title: "Document & report",
          body: "A receipt or statement is generated from a template, filed in the registry, and rolled up into the owner's monthly report.",
        },
      ],
    },
    {
      kind: "gallery",
      columns: 2,
      items: [
        {
          src: "/projects/samay-keur/encaissements.webp",
          alt: "Samay Këur collections list — validated payments with amount, leftover, date and method.",
          caption: "Collections — every recorded payment with its leftover balance.",
          width: D.w,
          height: D.h,
        },
        {
          src: "/projects/samay-keur/paiement-partiel.webp",
          alt: "Samay Këur partial-payment detail: expected rent, already collected, leftover, agency commission and net to owner.",
          caption: "A partial payment, fully accounted: expected, collected, leftover, commission, net owner.",
          width: D.w,
          height: D.h,
        },
        {
          src: "/projects/samay-keur/creances.webp",
          alt: "Samay Këur recovery view listing arrears to recover.",
          caption: "Recovery — arrears surfaced as work, not buried in a ledger.",
          width: D.w,
          height: D.h,
        },
        {
          src: "/projects/samay-keur/rapport-bailleur.webp",
          alt: "Samay Këur monthly owner report, generated as a PDF.",
          caption: "The owner's monthly report, generated from the same records.",
          width: 2000,
          height: 2827,
        },
      ],
    },
    {
      kind: "prose",
      kicker: "08 — Documents",
      heading: "The document system is a product in itself",
      body: [
        "Agencies live and die by paper: leases, riders, receipts, mandates, statements. Samay Këur treats documents as a first-class subsystem — a library plus a generation studio.",
        "Templates and reusable clauses feed a generator with live preview. Generated documents are versioned and kept in a registry. Output is PDF, and each agency can customise how its documents look. A generated document carries a QR code that resolves to a verification page confirming it is genuine.",
      ],
    },
    {
      kind: "gallery",
      columns: 3,
      items: [
        {
          src: "/projects/samay-keur/ged.webp",
          alt: "Samay Këur document library listing generated documents.",
          caption: "Document library.",
          width: D.w,
          height: D.h,
        },
        {
          src: "/projects/samay-keur/studio.webp",
          alt: "Samay Këur document generation studio with template and clause selection.",
          caption: "Generation studio.",
          width: D2.w,
          height: D2.h,
        },
        {
          src: "/projects/samay-keur/qr-verify.webp",
          alt: "Samay Këur document verification page reached from a document QR code.",
          caption: "QR verification page.",
          width: D2.w,
          height: D2.h,
        },
      ],
    },
    {
      kind: "figure",
      src: "/projects/samay-keur/personnalisation.webp",
      alt: "Samay Këur per-agency document customisation settings.",
      caption: "Per-agency document customisation — same engine, different identity.",
      bleed: "inset",
      frame: "window",
      width: 931,
      height: 640,
    },
    {
      kind: "split",
      kicker: "09 — SaaS layer",
      heading: "What makes one codebase serve many agencies",
      left: {
        title: "Organization & access",
        points: [
          "Multi-organization architecture with per-tenant data isolation",
          "Team members with roles and scoped permissions",
          "Per-agency identity: name, branding, document look",
          "Agency-level settings and configuration",
        ],
      },
      right: {
        title: "Commercialisation",
        points: [
          "Marketing site kept separate from the product",
          "B2B prospecting and qualification",
          "20–30 minute product demos",
          "Two pilot agencies onboarded for field testing",
        ],
      },
    },
    {
      kind: "figure",
      src: "/projects/samay-keur/equipe.webp",
      alt: "Samay Këur team and access screen with roles and permissions.",
      caption: "Team & access — roles and permissions per agency.",
      bleed: "wide",
      frame: "window",
      width: D2.w,
      height: D2.h,
    },
    {
      kind: "devices",
      kicker: "10 — Mobile",
      heading: "The agency doesn't stay at a desk",
      intro:
        "Collections happen on the move. The core flows — dashboard, collection, recovery, tenant and owner records, document scanning — are built to work on a phone, not just survive on one.",
      caption: "Dashboard, collection, recovery and document scanning on mobile.",
      phones: [
        {
          src: "/projects/samay-keur/mobile-dashboard.webp",
          alt: "Samay Këur mobile dashboard.",
          width: M.w,
          height: M.h,
        },
        {
          src: "/projects/samay-keur/mobile-encaissement.webp",
          alt: "Samay Këur mobile collection screen.",
          width: M.w,
          height: M.h,
        },
        {
          src: "/projects/samay-keur/mobile-creance.webp",
          alt: "Samay Këur mobile recovery screen.",
          width: M.w,
          height: M.h,
        },
        {
          src: "/projects/samay-keur/mobile-scanner.webp",
          alt: "Samay Këur mobile document scanner.",
          width: M.w,
          height: M.h,
        },
      ],
    },
    {
      kind: "prose",
      kicker: "11 — Validation",
      heading: "Where it actually stands",
      body: [
        "The major build phase wrapped in mid-August 2026. Since then the work has been field testing and early go-to-market.",
        "**2 real-estate agencies are currently testing the product.** That is validation on the ground — nothing more is claimed. As of 25 August 2026 it is in testing and not yet monetised; the move to paid use is expected the following month. The way this is described will only change once that is actually true.",
      ],
    },
  ],
  learned: [
    "The domain is the moat, not the stack. Confort Immo taught me the rules of the trade; every framework decision after that was downstream of understanding leases, commission and owner net.",
    "Generalising a working tool is harder than building a new one. Every baked-in assumption from the single-agency version had to be found and made configurable without breaking the agency already relying on it.",
    "A document system deserves to be designed, not bolted on. In this business, the PDF is the product as much as the dashboard is.",
    "Say exactly what is true. \"2 agencies testing\" is a stronger, more credible claim than a rounded-up number — and it's the one I can defend.",
  ],
  disclaimers: [
    "Screenshots use demonstration data prepared for the Samay Këur marketing site, not real tenant records.",
    "\"2 real-estate agencies currently testing the product\" reflects status on 25 August 2026. The product is not yet monetised as of that date.",
  ],
};
