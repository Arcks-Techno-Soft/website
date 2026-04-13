import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { LogoCloud } from "@/components/sections/logo-cloud";
import { Challenges } from "@/components/sections/challenges";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Stats } from "@/components/sections/stats";
import { Industries } from "@/components/sections/industries";
import { Testimonials } from "@/components/sections/testimonials";
import { CaseStudies } from "@/components/sections/case-studies";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <LogoCloud />
        <Challenges />
        <Services />
        <Process />
        <Stats />
        <Industries />
        <Testimonials />
        <CaseStudies />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
