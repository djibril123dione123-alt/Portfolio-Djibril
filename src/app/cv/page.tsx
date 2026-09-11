/* eslint-disable @next/next/no-img-element -- exact port of the user's own
   print-composed cv.html: every image is sized in millimetres by cv-exact.css,
   which next/image's own layout model would fight rather than match. */
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { profile } from "@/content/profile";
import { pageMeta } from "@/lib/seo";
import { PrintButton } from "@/components/cv/PrintButton";
import { SetLang } from "@/components/cv/SetLang";
import "./cv-exact.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-cv-serif",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = pageMeta({
  title: "CV",
  description:
    "CV 2026 de Djibril Dione — Concepteur de produits numériques & Développeur Full-Stack, fondateur de Samay Këur.",
  path: "/cv",
  ogImage: "/og/about.png",
});

/* ---------------------------------------------------------------- icons */
function IcoPhone() {
  return (
    <svg className="ico" viewBox="0 0 24 24">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function IcoMail() {
  return (
    <svg className="ico" viewBox="0 0 24 24">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
function IcoLinkedin() {
  return (
    <svg className="ico" viewBox="0 0 24 24">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function IcoBuilding() {
  return (
    <svg className="ico" viewBox="0 0 24 24">
      <path d="M3 22h18" />
      <path d="M6 18v-7" />
      <path d="M10 18v-7" />
      <path d="M14 18v-7" />
      <path d="M18 18v-7" />
      <path d="M12 2 20 7H4z" />
    </svg>
  );
}
function IcoUsers() {
  return (
    <svg className="ico" viewBox="0 0 24 24">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function IcoStopwatch() {
  return (
    <svg className="ico" viewBox="0 0 24 24">
      <circle cx="8" cy="8" r="6" />
      <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
      <path d="M7 6h1v4" />
      <path d="m16.71 13.88.7.71-2.82 2.82" />
    </svg>
  );
}
function IcoBox() {
  return (
    <svg className="ico" viewBox="0 0 24 24">
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}
function IcoExternal() {
  return (
    <svg className="ico" viewBox="0 0 24 24">
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}
function IcoTarget() {
  return (
    <svg className="ico" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
function IcoCode() {
  return (
    <svg className="ico" viewBox="0 0 24 24">
      <path d="m16 18 6-6-6-6" />
      <path d="m8 6-6 6 6 6" />
    </svg>
  );
}
function IcoTrend() {
  return (
    <svg className="ico" viewBox="0 0 24 24">
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  );
}
function IcoCap() {
  return (
    <svg className="ico" viewBox="0 0 24 24">
      <path d="M22 10 12 5 2 10l10 5 10-5z" />
      <path d="M6 12v5c3 2 9 2 12 0v-5" />
    </svg>
  );
}
function IcoBriefcase() {
  return (
    <svg className="ico" viewBox="0 0 24 24">
      <path d="M12 7v14" />
      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
    </svg>
  );
}
function IcoGlobe() {
  return (
    <svg className="ico" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function QrTile() {
  return (
    <span className="qrtile">
      <img className="qr" src="/cv2026/qr.svg" alt="QR code vers le portfolio djibrildione.com" />
    </span>
  );
}

export default function CvPage() {
  return (
    <div className={`cvx ${playfair.variable}`}>
      <SetLang lang="fr" />
      <PrintButton />

      {/* ============================ PAGE 1 ============================ */}
      <section className="page p1">
        <div className="meta">
          <span>CV 2026&nbsp;&nbsp;·&nbsp;&nbsp;PRODUIT × TECHNOLOGIE × COMPRÉHENSION MÉTIER</span>
          <span className="line" />
        </div>

        <div className="hero">
          <div>
            <h1 className="name">DJIBRIL DIONE</h1>
            <div className="role">
              CONCEPTEUR DE PRODUITS NUMÉRIQUES<span className="dot">·</span>DÉVELOPPEUR FULL-STACK
            </div>
            <div className="founder">FONDATEUR DE SAMAY KËUR</div>
            <p className="tagline">
              Je transforme des problèmes et opérations réels en systèmes numériques structurés,
              fiables et exploitables.
            </p>
            <p className="pos">
              De la digitalisation d’un service municipal à un logiciel métier utilisé chaque jour
              en agence, puis à Samay Këur, SaaS en test terrain. Licence 3 d’Économie numérique en
              cours (UCAD · IPP).
            </p>
          </div>
          <div className="photo">
            <img src="/cv2026/photo.jpg" alt="Djibril Dione" />
          </div>
        </div>

        <div className="contact">
          <div className="clist">
            <a className="ci" href={`tel:${profile.contact.phone.replace(/\s+/g, "")}`}>
              <IcoPhone />
              <div>
                <b>{profile.contact.phone}</b>
                <span>Téléphone · Dakar, Sénégal</span>
              </div>
            </a>
            <a className="ci" href={`mailto:${profile.contact.email}`}>
              <IcoMail />
              <div>
                <b>{profile.contact.email}</b>
                <span>E-mail</span>
              </div>
            </a>
            <a className="ci" href={profile.contact.linkedin}>
              <IcoLinkedin />
              <div>
                <b>Djibril Dione</b>
                <span>Profil LinkedIn</span>
              </div>
            </a>
          </div>
          <a className="qrbox" href="https://djibrildione.com">
            <div className="t">
              <b>Voir mon portfolio</b>
              <span>djibrildione.com</span>
              <i>Scannez ou cliquez</i>
            </div>
            <QrTile />
          </a>
        </div>

        <div className="gap" />
        <div className="sh">
          <h2>Repères</h2>
          <span className="line" />
        </div>
        <div className="kpis">
          <div className="kpi hl">
            <IcoBuilding />
            <div className="n">02</div>
            <div className="l">agences immobilières</div>
            <div className="s">en test terrain · Samay Këur</div>
          </div>
          <div className="kpi">
            <IcoUsers />
            <div className="n">≈ 08</div>
            <div className="l">utilisateurs au quotidien</div>
            <div className="s">Confort Immo Archi</div>
          </div>
          <div className="kpi">
            <IcoStopwatch />
            <div className="n">227 500</div>
            <div className="l">FCFA de ventes</div>
            <div className="s">G5 · snapshot 25/08/2026</div>
          </div>
          <div className="kpi">
            <IcoBox />
            <div className="n">05</div>
            <div className="l">produits et systèmes</div>
            <div className="s">numériques construits</div>
          </div>
        </div>

        <div className="gap" />
        <div className="sh">
          <h2>Expériences principales</h2>
          <span className="line" />
        </div>
        <div className="sub">
          Une progression : un premier problème réel à la Mairie, un premier système métier en
          usage quotidien, puis un produit SaaS multi-organisation.
        </div>

        <article className="xp samay">
          <div className="brand">
            <div className="row">
              <div className="mk">
                <img src="/cv2026/samay.webp" alt="Samay Këur" />
              </div>
              <div>
                <div className="bn">Samay Këur</div>
                <div className="bt">SaaS de gestion locative</div>
              </div>
            </div>
            <span className="tag">EN TEST TERRAIN</span>
          </div>
          <div className="body">
            <div className="top">
              <h3>Fondateur · Conception produit &amp; Développement Full-Stack</h3>
              <span className="when">2026 — AUJOURD’HUI</span>
            </div>
            <div className="org">
              <span>
                <b>Samay Këur</b> · <a href="https://samaykeur.com"><b>samaykeur.com</b></a> ·{" "}
                <a href="https://app.samaykeur.com"><b>app.samaykeur.com</b></a>
              </span>
              <span className="where">Dakar, Sénégal</span>
            </div>
            <p className="lead">
              SaaS pour agences et professionnels de l’immobilier, né de l’expérience Confort Immo
              Archi.
            </p>
            <ul className="bul">
              <li>
                <b>Produit :</b> patrimoine, biens, bailleurs, locations, échéances, paiements et
                paiements partiels, impayés, commissions, documents, rapports propriétaires.
              </li>
              <li>
                <b>Plateforme :</b> rôles et permissions, identité agence, isolation
                multi-organisation, journalisation.
              </li>
              <li>
                <b>Rôle :</b> conception produit, UX/UI, architecture, développement full-stack,
                base de données, authentification, sécurité, tests, déploiement, démonstrations,
                prospection B2B.
              </li>
            </ul>
            <div className="res">
              <span className="k">PREUVE</span>2 agences immobilières en test terrain.
            </div>
          </div>
        </article>

        <article className="xp confort">
          <div className="brand">
            <div className="row">
              <div className="mk">
                <img className="ci-logo" src="/cv2026/confort.webp" alt="Logo Confort Immo Archi" />
              </div>
              <div>
                <div className="bn">Confort Immo Archi</div>
                <div className="bt">Logiciel métier sur mesure</div>
              </div>
            </div>
            <span className="tag">EN USAGE QUOTIDIEN</span>
          </div>
          <div className="body">
            <div className="top">
              <h3>Concepteur &amp; Développeur Full-Stack</h3>
              <span className="when">FIN 2025 — AUJOURD’HUI</span>
            </div>
            <div className="org">
              <span>
                <b>Confort Immo Archi</b> · premier système métier · logiciel de gestion locative
                sur mesure
              </span>
            </div>
            <p className="lead">
              Construit seul après le stage : problème réel de l’agence → conception →
              développement → déploiement.
            </p>
            <ul className="bul">
              <li>
                Bailleurs, immeubles, unités, locataires, contrats, paiements, impayés, dépenses et
                commissions.
              </li>
              <li>
                Rapports financiers agence / immeuble / bailleur ; génération de contrats,
                factures, mandats et bilans PDF.
              </li>
            </ul>
            <div className="stackline">
              <b>STACK</b>React · TypeScript · Vite · Tailwind · Supabase · PostgreSQL · Auth · RLS
            </div>
            <div className="res">
              <span className="k">PREUVE</span>≈ 8 utilisateurs s’en servent chaque jour dans
              l’agence.
            </div>
          </div>
        </article>

        <article className="xp mairie">
          <div className="brand">
            <div className="row">
              <div className="mk">
                <IcoBuilding />
              </div>
              <div>
                <div className="bn">Mairie de Ouakam</div>
                <div className="bt">Service public municipal</div>
              </div>
            </div>
            <span className="tag">SOLUTION DÉPLOYÉE</span>
          </div>
          <div className="body">
            <div className="top">
              <h3>Stagiaire en transformation digitale</h3>
              <span className="when">03 OCT. — 03 NOV. 2025</span>
            </div>
            <div className="org">
              <span>
                <b>Mairie de Ouakam</b> · Direction des Services Techniques
              </span>
              <span className="where">Ouakam, Dakar</span>
            </div>
            <p className="lead">
              Courrier entrant sur registres papier : circulation physique, recherche manuelle,
              traçabilité et suivi faibles.
            </p>
            <ul className="bul">
              <li>
                Observation du workflow, analyse des registres et échanges avec les agents pour
                structurer les données.
              </li>
              <li>
                Base Microsoft Access : formulaires, recherche multicritère, statuts, scans,
                historique, statistiques.
              </li>
              <li>Configuration réseau, maintenance et accompagnement des utilisateurs.</li>
            </ul>
            <div className="res">
              <span className="k">RÉSULTAT</span>D’une recherche manuelle à quelques secondes, par
              recherche structurée et filtres.
            </div>
          </div>
        </article>

        <div className="p1foot">
          <p className="quote">
            « La meilleure technologie est celle qui simplifie la vie des gens, sans qu’ils aient à
            y penser. »
          </p>
          <div className="folio">
            <span className="ln" />
            DJIBRIL DIONE · CV 2026 · 1/2
          </div>
        </div>
      </section>

      {/* ============================ PAGE 2 ============================ */}
      <section className="page">
        <div className="h2head">
          <div>
            <div className="nm">DJIBRIL DIONE</div>
            <div className="nv">EXPÉRIENCE · PROJETS · COMPÉTENCES · FORMATION</div>
          </div>
          <div className="motto">
            Construire des solutions utiles.
            <br />
            Créer de la valeur durable.
          </div>
        </div>

        <div className="sh">
          <h2>En parallèle · Expérience opérationnelle</h2>
          <span className="line" />
        </div>
        <article className="xp g5">
          <div className="brand">
            <div className="row">
              <div className="mk">
                <span className="g5">
                  G<em>5</em>
                </span>
              </div>
              <div>
                <div className="bn">G5 Traders</div>
                <div className="bt">
                  Import / revente
                  <br />
                  Chine → Sénégal
                </div>
              </div>
            </div>
            <span className="tag">ACTIVITÉ EN COURS</span>
          </div>
          <div className="body">
            <div className="top">
              <h3>Chef de projet &amp; Développeur Full-Stack</h3>
              <span className="when">2025 — AUJOURD’HUI</span>
            </div>
            <div className="org">
              <span>
                <b>G5 Traders</b> · système interne ·{" "}
                <a href="https://g5traders.lovable.app">
                  <b>g5traders.lovable.app</b>
                </a>
              </span>
              <span className="where">Dakar, Sénégal</span>
            </div>
            <p className="lead">
              Pilotage d’une activité collective d’import/revente et construction du système
              interne qui centralise ventes, stock, trésorerie, transferts et performance de
              l’équipe.
            </p>
            <div className="snap">
              SNAPSHOT AU 25/08/2026
              <span>Situation ponctuelle d’une activité en cours — pas un chiffre annuel.</span>
            </div>
            <div className="figs">
              <div>
                <b>227 500</b>
                <span>FCFA de ventes</span>
              </div>
              <div>
                <b>140</b>
                <span>unités vendues</span>
              </div>
              <div>
                <b>152 705</b>
                <span>FCFA de marge brute</span>
              </div>
              <div>
                <b>170 500</b>
                <span>FCFA de caisse commune</span>
              </div>
            </div>
          </div>
        </article>

        <div className="gap" />
        <div className="sh">
          <h2>Projets complémentaires</h2>
          <span className="line" />
        </div>
        <div className="pcards">
          <article className="pc">
            <div className="hd">
              <h3>Librairie Al Furqan</h3>
              <span className="tg">DÉPLOYÉ</span>
            </div>
            <div className="st">E-commerce mobile-first pour le Sénégal</div>
            <p>
              Librairie islamique en ligne : catalogue, recherche, filtres, fiches livres, panier
              et commande finalisée via WhatsApp.
            </p>
            <div className="stat">
              <b>≈ 25 240</b>
              <span>localités sénégalaises structurées pour la livraison</span>
            </div>
            <div className="foot">
              <div className="tech">
                <b>STACK</b>Next.js · TypeScript · Tailwind · Supabase
              </div>
              <a className="lnk" href="https://librairie-al-furqan.vercel.app">
                librairie-al-furqan.vercel.app
                <IcoExternal />
              </a>
            </div>
          </article>
          <article className="pc">
            <div className="hd">
              <h3>Nur Al-BinDjib</h3>
              <span className="tg">PWA PRIVÉE</span>
            </div>
            <div className="st">Application collaborative à deux</div>
            <p>
              Progression partagée à deux : code d’invitation, tâches communes, notifications Web
              Push et contenu quotidien.
            </p>
            <div className="stat g">
              <b>RLS</b>
              <span>données isolées pour chaque binôme au niveau de la base</span>
            </div>
            <div className="foot">
              <div className="tech">
                <b>STACK</b>React · Supabase · PostgreSQL · RLS · PWA · Web Push
              </div>
              <a className="lnk" href="https://nur-al-bindjib.vercel.app">
                nur-al-bindjib.vercel.app
                <IcoExternal />
              </a>
            </div>
          </article>
        </div>

        <div className="gap" />
        <div className="sh">
          <h2>Compétences</h2>
          <span className="line" />
        </div>
        <div className="skills">
          <div className="sk">
            <div className="hd">
              <IcoTarget />
              PRODUIT
            </div>
            <h4>Transformer un besoin métier en système clair.</h4>
            <div className="tl">
              Product design · UX / workflows · Problem framing · Prototyping · Product iteration
            </div>
            <div className="pr">
              <b>PREUVES</b>Samay Këur · Confort · Mairie
            </div>
          </div>
          <div className="sk">
            <div className="hd">
              <IcoCode />
              DÉVELOPPEMENT
            </div>
            <h4>Construire le produit de bout en bout.</h4>
            <div className="tl">
              React · TypeScript · Next.js · Vite · Tailwind CSS · Supabase · PostgreSQL ·
              Authentication · RLS · PWA · Web Push · Deployment
            </div>
            <div className="pr">
              <b>PREUVES</b>Samay Këur · Confort · Al Furqan · Nur
            </div>
          </div>
          <div className="sk">
            <div className="hd">
              <IcoTrend />
              TRANSFORMATION &amp; OPÉRATIONS
            </div>
            <h4>Relier produit, terrain et activité.</h4>
            <div className="tl">
              Analyse de processus · Digitalisation · Systèmes opérationnels · Compréhension
              métier · Déploiement terrain · Démonstrations produit
            </div>
            <div className="pr">
              <b>PREUVES</b>Mairie · G5 Traders · Samay Këur
            </div>
          </div>
        </div>

        <div className="gap" />
        <div className="sh">
          <h2>Formation &amp; informations complémentaires</h2>
          <span className="line" />
        </div>
        <div className="edu">
          <div className="ed">
            <div className="hd">
              <IcoCap />
              FORMATION
            </div>
            <div className="it">
              <b>
                Licence 3 — Économie numérique{" "}
                <span style={{ fontWeight: 600, color: "var(--copper)" }}>(en cours)</span>
              </b>
              <div className="o">UCAD · Institut des Politiques Publiques (IPP)</div>
              <div className="d">2024 — aujourd’hui</div>
              <p>Économie numérique, développement technologique et digital des affaires.</p>
            </div>
            <div className="it">
              <b>Baccalauréat S2 — Mention Assez Bien</b>
              <div className="o">Cours Anne Marie Javouhey</div>
              <div className="d">2023 — 2024</div>
            </div>
          </div>
          <div className="ed">
            <div className="hd">
              <IcoBriefcase />
              EN COMPLÉMENT
            </div>
            <div className="it">
              <b>Répétiteur en mathématiques</b>
              <div className="o">Cours du Soir Alal Ya Ndira</div>
              <div className="d">2021 — 2023</div>
              <p>Encadrement d’élèves, séances de soutien et suivi personnalisé.</p>
            </div>
            <div className="it">
              <b>Développement web, produits &amp; IA</b>
              <div className="d">Autoformation continue · Certificat Python (Coursera)</div>
            </div>
          </div>
          <div className="ed">
            <div className="hd">
              <IcoGlobe />
              LANGUES
            </div>
            <div className="lang">
              <div>
                <b>Français</b>
                <span>langue principale</span>
              </div>
              <div>
                <b>Anglais</b>
                <span>intermédiaire</span>
              </div>
            </div>
            <div className="int">
              <b>INTÉRÊTS</b>Entrepreneuriat, économie numérique, transformation digitale,
              football, basketball.
            </div>
          </div>
        </div>

        <div className="method">
          <div className="band">
            <img className="topo" src="/cv2026/topo.svg" alt="" />
            <div className="glow" />
            <div className="in">
              <div className="kick">MA MÉTHODE</div>
              <h3>Du terrain au produit</h3>
              <div className="steps">
                <div className="stp">
                  <div className="n">1</div>
                  <b>Observer</b>
                  <span>Comprendre l’usage</span>
                  <i>Registres, échanges, habitudes</i>
                </div>
                <div className="stp">
                  <div className="n">2</div>
                  <b>Structurer</b>
                  <span>Transformer en règles</span>
                  <i>Objets, états, relations, flux</i>
                </div>
                <div className="stp">
                  <div className="n">3</div>
                  <b>Concevoir</b>
                  <span>Clarifier le système</span>
                  <i>Architecture d’info, UX</i>
                </div>
                <div className="stp">
                  <div className="n">4</div>
                  <b>Construire</b>
                  <span>De bout en bout</span>
                  <i>Interface, données, droits</i>
                </div>
                <div className="stp">
                  <div className="n">5</div>
                  <b>Déployer</b>
                  <span>En vraies mains</span>
                  <i>Tester, former, améliorer</i>
                </div>
              </div>
            </div>
          </div>
          <a className="qrcard" href="https://djibrildione.com">
            <QrTile />
            <b>VOIR MON PORTFOLIO</b>
            <span>djibrildione.com</span>
          </a>
        </div>

        <div className="p2foot">
          <span>DJIBRIL DIONE · CV 2026 · 2/2</span>
          <span className="v">
            Apprendre<em>·</em>Construire<em>·</em>Transmettre
          </span>
        </div>
      </section>
    </div>
  );
}
