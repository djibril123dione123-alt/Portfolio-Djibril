import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/content/caseStudies";
import { pageMeta } from "@/lib/seo";
import { CaseStudyView } from "@/components/work/CaseStudyView";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const study = getCaseStudy(params.slug);
  if (!study) return {};
  return pageMeta({
    title: `${study.name} — Case study`,
    description: study.summary,
    path: `/work/${study.slug}`,
    ogImage: `/og/${study.slug}.png`,
  });
}

export default function WorkPage({ params }: Params) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();
  return <CaseStudyView study={study} />;
}
