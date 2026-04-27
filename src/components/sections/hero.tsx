import { HeroCarousel } from "./hero-carousel";
import Link from "next/link";

export function Hero() {
  return (
    <section id="home" className="relative pt-[180px] pb-[120px] overflow-hidden">
      {/* Text content — constrained to container */}
      <div className="max-w-[1140px] mx-auto px-2">
        <div className="flex flex-col gap-8 mb-16 items-center md:items-start">
          <div className="flex flex-col gap-6 items-center md:items-start">
            <div className="flex flex-col gap-3 items-center md:items-start">
              <div className="inline-flex self-center md:self-start items-center px-2 py-1 bg-primary rounded text-white text-[13px] font-medium uppercase tracking-[1px]">
                ARCKS TECHNOSOFT PRIVATE LIMITED
              </div>
              <h1 className="text-center md:text-left text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-medium text-foreground leading-tight md:leading-none tracking-tight">
                Flexible Solutions for{" "}
                <span className="block">Modern Business</span>
              </h1>
            </div>
            <p className="max-w-[700px] text-center md:text-left text-foreground text-base md:text-[17px] font-medium leading-7">
              Delivering bespoke, outcome-focused solutions that enhance
              workflows, augment productivity and expedite corporate expansion.
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <a
              href="#contact"
              className="group relative block h-[50px] w-[130px] bg-primary rounded-full overflow-hidden"
            >
              <div className="flex flex-col motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out group-hover:motion-safe:-translate-y-1/2">
                <span className="h-[50px] flex items-center justify-center text-primary-foreground text-[15px] font-medium">
                  Let&apos;s Talk
                </span>
                <span
                  aria-hidden="true"
                  className="h-[50px] flex items-center justify-center text-primary-foreground text-[15px] font-medium"
                >
                  Let&apos;s Talk
                </span>
              </div>
            </a>
            <a
              href="#services"
              className="group relative block h-[50px] w-[130px] bg-transparent rounded-full border border-primary overflow-hidden"
            >
              <div className="flex flex-col motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out group-hover:motion-safe:-translate-y-1/2">
                <span className="h-[50px] flex items-center justify-center text-primary text-[15px] font-medium">
                  Learn More
                </span>
                <span
                  aria-hidden="true"
                  className="h-[50px] flex items-center justify-center text-primary text-[15px] font-medium"
                >
                  Learn More
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Carousel — full-width, auto-play, scroll-velocity boosted */}
      <HeroCarousel />
    </section>
  );
}
