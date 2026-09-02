import type { CaseStudy } from "./types";

export const g5Traders: CaseStudy = {
  slug: "g5-traders",
  name: "G5 Traders",
  tagline: "Building the operating system for a real commerce venture.",
  summary:
    "G5 Traders is a collective import-and-resale venture: goods bought in China, sold in Senegal. I lead the venture and built its internal software solo — a dashboard that keeps stock, sales, treasury, transfers and team performance in one place instead of scattered across phones. The business existed first; the software was built because it needed one.",
  role: "Project Lead & Full-Stack Developer",
  period: "2026 · sales ongoing",
  status: "Live — sales still running at the 25 August 2026 snapshot",
  stack: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Dashboard / operational reporting"],
  links: [{ label: "g5traders.lovable.app", href: "https://g5traders.lovable.app", kind: "live" }],
  hero: {
    src: "/projects/g5-traders/treasury.svg",
    alt: "G5 Traders treasury snapshot — total treasury, common cash, transit debt and partner receivables on 25 August 2026.",
    caption: "Treasury view — operational snapshot on 25 August 2026, 16:31. Sales were still running.",
    width: 1200,
    height: 750,
  },
  facts: [
    { k: "Role", v: "Project Lead (business) & solo developer (software)" },
    { k: "Venture", v: "Collective import & resale — China → Senegal" },
    { k: "Software", v: "Internal operations dashboard" },
    { k: "Modules", v: "Dashboard · Treasury · Transfers · Inventory · Sales · Team · Settings · Export" },
    { k: "Status", v: "Sales still in progress as of 25 August 2026" },
  ],
  blocks: [
    {
      kind: "statement",
      text: "The business came first. The software followed.",
      attribution: "G5 Traders",
    },
    {
      kind: "prose",
      kicker: "01 — Context",
      heading: "A real venture before a single screen",
      body: [
        "G5 Traders is a collective initiative: a group pools money, buys consumer goods in China, imports them and resells them in Senegal. Real capital, real inventory, real margins to track.",
        "I lead the venture and I built its internal software. Those are two jobs, and doing both is the point of the project: the person modelling the money and the person shipping the tool are the same person.",
      ],
    },
    {
      kind: "prose",
      kicker: "02 — Problem",
      heading: "Several people, one shared reality, no shared view",
      body: [
        "The moment more than one person is buying, selling, holding stock, moving cash and taking a cut, information scatters. Who sold what. How much is in the common cash box. What's left in stock at cost. What each partner is owed.",
        "Without a system, that state lives in separate heads and separate phones, and it drifts. The dashboard exists to hold one version of it.",
      ],
    },
    {
      kind: "steps",
      kicker: "03 — The software",
      heading: "Eight modules, one operational picture",
      steps: [
        { title: "Dashboard", body: "The top-line state of the venture at a glance." },
        { title: "Treasury", body: "Total and net cash, the common cash box, transit debt, partner receivables." },
        { title: "Transfers", body: "Money movements between partners and the venture." },
        { title: "Inventory", body: "Units in stock and their value at cost." },
        { title: "Sales", body: "Units sold, revenue and gross margin." },
        { title: "Team", body: "Who is involved and how each partner is performing." },
        { title: "Settings & Export", body: "Configuration and data export for reconciliation." },
      ],
    },
    {
      kind: "metrics",
      note:
        "Operational snapshot on 25 August 2026 (times shown are when each figure was read). Sales were still in progress — these are a point-in-time reading of an active venture, not final results.",
      items: [
        { value: "227 500 FCFA", label: "Total sales", sub: "read 15:28" },
        { value: "152 705 FCFA", label: "Gross margin", sub: "≈ 67% · 15:28" },
        { value: "140", label: "Units sold", sub: "15:28" },
        { value: "≈ 181 000 FCFA", label: "Stock value at cost", sub: "15:28" },
        { value: "237 500 FCFA", label: "Total / net treasury", sub: "16:31" },
        { value: "170 500 FCFA", label: "Common cash box", sub: "16:31" },
        { value: "0 FCFA", label: "Transit debt", sub: "16:31" },
        { value: "0 FCFA", label: "Partner receivables", sub: "16:31" },
      ],
    },
    {
      kind: "prose",
      kicker: "04 — Claim discipline",
      heading: "Projections are not results",
      body: [
        "The initial purchase plan put total investment at 263 100 FCFA, with an estimated revenue of 945 000 FCFA and an estimated profit of 681 900 FCFA.",
        "**Those last two figures are projections and I don't present them as achieved.** The venture is still selling. What is real is the snapshot above: what had actually been sold, collected and margined by 25 August 2026.",
      ],
    },
    {
      kind: "prose",
      kicker: "05 — What it proves",
      heading: "Leadership, financial modelling and product in one project",
      body: [
        "G5 Traders is the clearest evidence that the three sides of how I work aren't separate: leading a real venture, modelling its money, and building the tool that runs it were the same effort.",
        "It also keeps me honest about titles — I lead the project and built the software; I don't call myself a co-founder until that status is formally settled.",
      ],
    },
  ],
  learned: [
    "Software built to serve an operation you're personally accountable for gets scoped very differently from software built to spec.",
    "The hardest part of an operations tool is agreeing what the numbers mean before you display them.",
    "A live snapshot with timestamps is more honest — and more useful — than a rounded summary.",
  ],
  disclaimers: [
    "All figures are an operational snapshot dated 25 August 2026 while sales were ongoing. They are not final venture results.",
    "Initial projections (945 000 FCFA revenue / 681 900 FCFA profit) are estimates from the purchase plan, never presented as realised.",
  ],
};
