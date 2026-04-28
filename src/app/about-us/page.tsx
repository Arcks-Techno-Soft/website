import { AboutHero } from "@/components/sections/about-hero";
import { AboutStory } from "@/components/sections/about-story";
import { AboutValues } from "@/components/sections/about-values";
import { AboutTeam } from "@/components/sections/about-team";
import { CTA } from "@/components/sections/cta";

export const metadata = {
  title: "About Us | ARCKS",
  description:
    "The story, principles, and people behind ARCKS — the partner businesses choose for modern, outcome-focused software.",
};

export default function AboutUsPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
      <CTA />
    </>
  );
}
