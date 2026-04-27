import { Navbar } from "@/components/navbar";
import { AboutHero } from "@/components/sections/about-hero";
import { AboutStory } from "@/components/sections/about-story";
import { AboutValues } from "@/components/sections/about-values";
import { AboutTeam } from "@/components/sections/about-team";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "About Us | ARCKS",
  description:
    "The story, principles, and people behind ARCKS — the partner businesses choose for modern, outcome-focused software.",
};

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <main className="grow">
        <AboutHero />
        <AboutStory />
        <AboutValues />
        <AboutTeam />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
