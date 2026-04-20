import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { LogoCloud } from "@/components/sections/logo-cloud";
// import { Challenges } from "@/components/sections/challenges";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { VideoShowcase } from "@/components/sections/video-showcase";
import { Stats } from "@/components/sections/stats";
import { Industries } from "@/components/sections/industries";
import { Testimonials } from "@/components/sections/testimonials";
// import { CaseStudies } from "@/components/sections/case-studies";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/footer";
import { Challenges } from "@/components/sections/challenges";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="grow">
        <Hero />
        <LogoCloud />
        <Challenges />
        <Services />
        <Process />
        <VideoShowcase />
        <div className="relative z-10 bg-background rounded-t-[40px] -mt-[100vh] md:rounded-t-[60px]">
          <Stats />
          <Industries />
          <Testimonials />
          {/* <CaseStudies /> */}
          <CTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
