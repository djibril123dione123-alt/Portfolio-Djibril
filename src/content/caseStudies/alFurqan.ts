import type { CaseStudy } from "./types";

export const alFurqan: CaseStudy = {
  slug: "al-furqan",
  name: "Librairie Al Furqan",
  tagline: "A mobile-first Islamic bookshop built for how commerce actually happens in Senegal.",
  summary:
    "An online Islamic bookshop, designed and built solo. Structured catalogue, search and filters, detailed book pages, a multi-product cart, and checkout finalised over WhatsApp — because that is how the customer and the bookseller already talk. Code complete and deployed; the venture also involved structuring roughly 25,240 Senegalese localities and mapping the national postal network.",
  role: "Solo design & development",
  period: "2026",
  status: "Code complete · deployed",
  stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "WhatsApp checkout"],
  links: [
    { label: "librairie-al-furqan.vercel.app", href: "https://librairie-al-furqan.vercel.app", kind: "live" },
  ],
  hero: {
    src: "/projects/al-furqan/catalogue.webp",
    alt: "Librairie Al Furqan catalogue: category and author filters over a grid of Islamic books with prices in FCFA.",
    caption: "The catalogue — structured by category and author, priced in FCFA.",
    width: 1920,
    height: 917,
  },
  facts: [
    { k: "Role", v: "Solo design & development" },
    { k: "Type", v: "E-commerce · retail · local logistics" },
    { k: "Status", v: "Code complete as of 25 August 2026 · deployed" },
    { k: "Checkout", v: "Multi-product cart → order finalised on WhatsApp" },
    { k: "Local data", v: "~25,240 Senegalese localities structured · La Poste network mapped" },
    { k: "Domain", v: "Final domain (.com / .sn) pending the bookseller's decision" },
  ],
  blocks: [
    {
      kind: "prose",
      kicker: "01 — The brief",
      heading: "Sell books online without pretending it's Amazon",
      body: [
        "The customer is browsing on a phone. The bookseller runs a small operation and already takes orders on WhatsApp. Forcing mandatory accounts, complex online payment and a loyalty programme into a V1 would have added friction for everyone and value for no one.",
        "So the product is deliberately scoped: **a real catalogue and cart, a checkout that hands off to WhatsApp**, and a simple admin the bookseller can actually use.",
      ],
    },
    {
      kind: "split",
      kicker: "02 — Scope",
      heading: "What's in V1 — and what's deliberately not",
      left: {
        title: "In",
        points: [
          "Structured catalogue with search and filters",
          "Detailed book pages, with Qur'an-specific attributes where relevant",
          "Multi-product cart",
          "Checkout finalised over WhatsApp",
          "Simple admin for the bookseller",
          "Mobile-first throughout",
        ],
      },
      right: {
        title: "Out (on purpose, for V1)",
        points: [
          "Mandatory customer accounts",
          "Complex online payment",
          "Advanced loyalty / rewards",
          "Anything the bookseller couldn't maintain alone",
        ],
      },
    },
    {
      kind: "gallery",
      columns: 2,
      items: [
        {
          src: "/projects/al-furqan/fiche-livre.webp",
          alt: "Al Furqan book detail page: cover, price, availability, delivery note and a WhatsApp question link.",
          caption: "A book page — price, availability, and a direct WhatsApp line for questions.",
          width: 1920,
          height: 917,
        },
        {
          src: "/projects/al-furqan/panier.webp",
          alt: "Al Furqan cart: three books with quantities and a subtotal, ready to continue to delivery.",
          caption: "The cart — multi-product, with a running subtotal.",
          width: 1920,
          height: 917,
        },
      ],
    },
    {
      kind: "prose",
      kicker: "03 — Local data & logistics",
      heading: "The unglamorous half of an e-commerce product",
      body: [
        "Delivery in Senegal means knowing where places actually are. The project involved structuring roughly 25,240 Senegalese localities and verifying the coverage of the La Poste network so orders could be routed sensibly.",
        "The postal-coverage figures still need re-validation before any public claim of a \"complete\" list — so the product uses the data without overstating it.",
      ],
    },
    {
      kind: "figure",
      src: "/projects/al-furqan/livraison.webp",
      alt: "Al Furqan delivery form: region, department, commune and locality selectors sourced from the ANSD RGPH-5 2023 census, plus a La Poste pickup option.",
      caption: "Delivery details, built on the ~25,240 localities structured from the ANSD RGPH-5 2023 census.",
      bleed: "wide",
      frame: "window",
      width: 1920,
      height: 917,
    },
    {
      kind: "figure",
      src: "/projects/al-furqan/whatsapp-commande.webp",
      alt: "The order summary auto-generated for WhatsApp: items, prices, delivery choice and customer details, ready to send to the bookseller.",
      caption: "Checkout finalised on WhatsApp — the order arrives pre-written, ready to send.",
      bleed: "inset",
      frame: "plain",
      width: 793,
      height: 807,
    },
    {
      kind: "prose",
      kicker: "04 — Why it's in the portfolio",
      heading: "A different facet of the same skill",
      body: [
        "Samay Këur and the Mairie are operational systems. Al Furqan adds e-commerce, catalogue and search, local geographic data, logistics, and the discipline of cutting scope on purpose.",
        "Same underlying move: look at how the activity really works here, and build for that.",
      ],
    },
  ],
  learned: [
    "Meeting customers where they already are (WhatsApp) beats a \"proper\" checkout that no one completes.",
    "Local data work is most of the product and none of the demo — and skipping it is why generic e-commerce fails here.",
    "Scope you cut on purpose is a feature. Scope you cut by accident is a bug.",
  ],
  disclaimers: [
    "La Poste coverage figures require re-validation before any \"complete list\" claim is made publicly.",
    "Final production domain is not yet decided.",
  ],
};
