/**
 * CV 2026 — French, print-composed document.
 *
 * A deliberate adaptation of the same confirmed facts in `profile.ts` /
 * `projects.ts` for a French-reading audience, not a new source of truth.
 * Every figure and date here must stay in lockstep with the Master Profile
 * claim discipline (see CONTENT_SOURCES.md) — no projection, no unfrozen
 * date, no invented metric.
 */

export const cv = {
  name: "Djibril Dione",
  title: "Concepteur de produits numériques & Développeur Full-Stack",
  secondary: "Fondateur de Samay Këur",

  summary:
    "Je conçois et développe des produits numériques qui transforment des opérations réelles, complexes ou dispersées, en systèmes structurés, fiables et exploitables. Je travaille à la jonction des opérations, du produit et du code : comprendre une activité réelle, puis construire le système qui permet de mieux la gérer.",

  // Every figure here is a plain restatement of an already-confirmed fact
  // (see CONTENT_SOURCES.md) — "5 produits numériques" is a count of the
  // shipped products listed in `otherProjects` + `experience`, not a new claim.
  reperes: [
    { value: "02", label: "agences immobilières en test", sub: "Samay Këur" },
    { value: "08", label: "utilisateurs actifs", sub: "Confort Immo Archi" },
    { value: "227 500", label: "FCFA de ventes", sub: "G5 · 25/08/2026" },
    { value: "05", label: "produits numériques", sub: "conçus et développés" },
  ],

  experience: [
    {
      role: "Fondateur & Concepteur produit",
      org: "Samay Këur",
      period: "≈ fin 2025 → aujourd'hui",
      accent: "samay" as const,
      points: [
        "SaaS de gestion locative multi-agences, né de l'expérience Confort Immo Archi.",
        "Architecture multi-organisations, workflows financiers (encaissements, impayés, commissions), génération de documents.",
        "2 agences immobilières réelles en phase de test sur le terrain.",
      ],
    },
    {
      role: "Chef de projet & Développeur",
      org: "G5 Traders",
      period: "2026 · ventes en cours",
      accent: "commerce" as const,
      points: [
        "Système opérationnel (stock, ventes, trésorerie, transferts) pour une activité réelle d'import-revente, Chine → Sénégal.",
        "Direction du projet et développement solo du logiciel interne.",
      ],
    },
    {
      role: "Stagiaire — Transformation digitale",
      org: "Mairie de Ouakam",
      period: "03/10/2025 – 03/11/2025",
      accent: "mairie" as const,
      points: [
        "Diagnostic, conception et déploiement d'une base Access pour la gestion du courrier entrant ; formation des agents.",
        "À l'origine de Confort Immo Archi, logiciel de gestion locative conçu pour une agence familiale — toujours utilisé (8 utilisateurs).",
      ],
    },
  ],

  education: {
    school: "Université Cheikh Anta Diop de Dakar — Institut des Politiques Publiques (IPP)",
    program: "Économie numérique, développement technologique et digital des affaires",
    track: "Option documentée 2024–2025 : Transformation digitale des organisations",
    level: "Licence 2 — 2025–2026",
    baccalaureate: "Baccalauréat scientifique (S2), mention Assez Bien — Cours Anne Marie Javouhey",
  },

  capabilities: [
    {
      key: "Produit",
      line: "Transformer un besoin métier en système clair.",
      items: ["Analyse de terrain", "Architecture de l'information", "Priorisation du périmètre"],
    },
    {
      key: "Développement",
      line: "Construire le produit de bout en bout.",
      items: ["React · TypeScript · Next.js", "Supabase · PostgreSQL · RLS", "PWA · documents générés"],
    },
    {
      key: "Opérations",
      line: "Relier produit, usage réel et commercialisation.",
      items: ["Prospection B2B & démonstrations", "Gestion de stock et de trésorerie", "Déploiement & formation"],
    },
  ],

  tools: "Microsoft Access · Git · Vercel",

  languages: [
    { label: "Français", level: "langue de travail" },
    { label: "Anglais", level: "intermédiaire" },
  ],

  // From the user's own final CV (2026-09-11) — not previously in the Master
  // Profile / CONTENT_SOURCES.md. Included on the user's authority over their
  // own document; flagged for their own final check in CONTENT_TODO.md.
  complement: {
    role: "Répétiteur en mathématiques",
    org: "Cours du Soir Alal Ya Ndira",
    period: "2021 – 2023",
    line: "Encadrement d'élèves, séances de soutien et suivi personnalisé.",
  },

  interests: "Entrepreneuriat, économie numérique, transformation digitale, football, basketball.",

  otherProjects: [
    {
      name: "Librairie Al Furqan",
      line: "E-commerce mobile-first (catalogue, panier, finalisation WhatsApp) — code complet, déployé.",
    },
    {
      name: "Nur Al-BinDjib",
      line: "PWA collaborative (pairing, tâches partagées, notifications push) — déployée, produit privé.",
    },
  ],
} as const;

export type Cv = typeof cv;
