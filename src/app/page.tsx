import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { SelectedWork } from "@/components/home/SelectedWork";
import { OriginStory } from "@/components/home/OriginStory";
import { MoreWork } from "@/components/home/MoreWork";
import { HowIBuild } from "@/components/home/HowIBuild";
import { Capabilities } from "@/components/home/Capabilities";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ContactBlock } from "@/components/home/ContactBlock";
import { pageMeta } from "@/lib/seo";
import { profile } from "@/content/profile";

export const metadata: Metadata = pageMeta({
  title: `${profile.name} — ${profile.title}`,
  description: profile.meta.description,
  path: "/",
  ogImage: "/og/default.png",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <OriginStory />
      <MoreWork />
      <HowIBuild />
      <Capabilities />
      <AboutPreview />
      <ContactBlock />
    </>
  );
}
