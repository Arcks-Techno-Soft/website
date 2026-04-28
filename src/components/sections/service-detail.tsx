import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/services";

export function ServiceDetail({ service }: { service: Service }) {
  return (
    <>
      {/* Hero */}
      <section className="pt-[160px] md:pt-[180px] pb-10 md:pb-14 px-8">
        <div className="max-w-[1140px] mx-auto">
          <div className="flex flex-col items-center gap-4 text-center">
            <span className="inline-flex items-center px-2 py-1 bg-primary rounded text-white text-[13px] font-medium uppercase tracking-[1px]">
              Our Service
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-medium text-foreground leading-[1.05] tracking-tight max-w-[900px]">
              {service.title}
            </h1>
            <p className="max-w-[640px] text-foreground text-base md:text-[17px] leading-7">
              {service.tagline}
            </p>
          </div>

          <div className="relative aspect-[16/8] md:aspect-[16/7] w-full mt-10 md:mt-14 rounded-[24px] md:rounded-[32px] overflow-hidden">
            <Image
              src={service.heroImage}
              alt=""
              fill
              priority
              sizes="(max-width: 1140px) 100vw, 1140px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Body grid: capabilities + solution + strategy on the left, sticky CTA card on the right */}
      <section className="pb-16 md:pb-24 px-8">
        <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-[1.55fr_1fr] gap-10 lg:gap-14 items-start">
          {/* Left column */}
          <div className="flex flex-col gap-12 md:gap-16">
            {/* Capabilities */}
            <div className="flex flex-col gap-5">
              <h2 className="text-3xl md:text-[40px] font-medium text-foreground leading-[1.1] tracking-tight">
                Our Capabilities
              </h2>
              <p className="text-foreground/80 text-base md:text-[17px] leading-7">
                {service.capabilitiesIntro}
              </p>
              <ul className="flex flex-col gap-2 mt-1">
                {service.capabilities.map((c) => (
                  <li
                    key={c.title}
                    className="flex gap-3 text-foreground/80 text-base md:text-[17px] leading-7"
                  >
                    <span aria-hidden="true" className="text-primary mt-0.5">
                      &bull;
                    </span>
                    <span>
                      <span className="font-medium text-foreground">
                        {c.title}
                      </span>
                      <span> &ndash; {c.description}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div className="flex flex-col gap-5">
              <h2 className="text-3xl md:text-[40px] font-medium text-foreground leading-[1.1] tracking-tight">
                The Solution
              </h2>
              <p className="text-foreground/80 text-base md:text-[17px] leading-7">
                {service.solutionIntro}
              </p>
              <blockquote className="bg-[#dbedfa] rounded-[20px] p-6 md:p-7 text-foreground text-base md:text-[17px] leading-7 font-medium">
                &ldquo;{service.quote}&rdquo;
              </blockquote>
            </div>

            {/* Strategy */}
            <div className="flex flex-col gap-5">
              <div className="relative aspect-[16/9] w-full rounded-[20px] md:rounded-[24px] overflow-hidden">
                <Image
                  src={service.strategyImage}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-cover"
                />
              </div>
              <h2 className="text-3xl md:text-[40px] font-medium text-foreground leading-[1.1] tracking-tight mt-2">
                {service.strategyTitle}
              </h2>
              <p className="text-foreground/80 text-base md:text-[17px] leading-7">
                {service.strategyBody}
              </p>
            </div>
          </div>

          {/* Right column — sticky CTA card */}
          <aside className="lg:sticky lg:top-[110px]">
            <div className="bg-[#dbedfa] rounded-[24px] p-7 md:p-8 flex flex-col gap-5 overflow-hidden">
              <h3 className="text-[28px] md:text-[32px] font-medium text-foreground leading-[1.1] tracking-tight">
                Transform Your Business Today
              </h3>
              <p className="text-foreground/80 text-[15px] md:text-base leading-7">
                Partner with us to achieve your business goals and unlock your
                full potential. Start your journey toward success today.
              </p>
              <div>
                <Link
                  href="/contact-us"
                  className="group relative inline-block h-[50px] w-[140px] bg-primary rounded-full overflow-hidden"
                >
                  <div className="flex flex-col motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out group-hover:motion-safe:-translate-y-1/2">
                    <span className="h-[50px] flex items-center justify-center text-primary-foreground text-[14px] font-bold">
                      Let&apos;s Talk
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-[50px] flex items-center justify-center text-primary-foreground text-[14px] font-bold"
                    >
                      Let&apos;s Talk
                    </span>
                  </div>
                </Link>
              </div>

              {/* Decorative ARCKS arch logo */}
              <div className="relative mt-2 h-[280px] md:h-[320px] w-full">
                <Image
                  src="/arcks-logo.png"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 90vw, 480px"
                  className="object-contain object-center scale-125"
                />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
