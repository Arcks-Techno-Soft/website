import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/sections/hero';
import { Challenges } from '@/components/sections/challenges';
import { Services } from '@/components/sections/services';
import { Process } from '@/components/sections/process';
import { MetricsAndIndustries } from '@/components/sections/metrics-and-industries';
import { Testimonials } from '@/components/sections/testimonials';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Challenges />
        <Services />
        <MetricsAndIndustries />
        <Process />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
