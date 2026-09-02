import type { CaseStudy } from "./types";
import { samayKeur } from "./samayKeur";
import { mairieOuakam } from "./mairieOuakam";
import { g5Traders } from "./g5Traders";
import { alFurqan } from "./alFurqan";
import { nurAlBindjib } from "./nurAlBindjib";

export const caseStudies: Record<string, CaseStudy> = {
  "samay-keur": samayKeur,
  "mairie-ouakam": mairieOuakam,
  "g5-traders": g5Traders,
  "al-furqan": alFurqan,
  "nur-al-bindjib": nurAlBindjib,
};

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies[slug];
}

export type { CaseStudy } from "./types";
