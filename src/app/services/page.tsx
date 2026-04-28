import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/sections/cta";
import { services } from "@/lib/services";

export const metadata = {
  title: "Services | ARCKS",
  description:
    "Explore the services ARCKS delivers — custom software, mobile and web apps, cloud and DevOps, AI-first products, autonomous agents, and SaaS engineering.",
};

export default function ServicesIndexPage() {
  return (
    <>
      <section className="pt-[160px] md:pt-[180px] pb-12 md:pb-16 px-8">
          <div className="max-w-[1140px] mx-auto flex flex-col items-center gap-4 text-center">
            <span className="inline-flex items-center px-2 py-1 bg-primary rounded text-white text-[13px] font-medium uppercase tracking-[1px]">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-medium text-foreground leading-[1.05] tracking-tight max-w-[900px]">
              Built to Solve, Engineered to Scale
            </h1>
            <p className="max-w-[640px] text-foreground text-base md:text-[17px] leading-7">
              Six focused practices, one team. Pick the lens that fits your
              business — every engagement is shaped around outcomes, not hours.
            </p>
          </div>
        </section>

        <section className="pb-16 md:pb-24 px-8">
          <div className="max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                aria-label={`Open ${service.title}`}
                className="group relative block aspect-[4/5] rounded-[20px] overflow-hidden text-white"
              >
                <Image
                  src={service.cardImage}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
                  className="object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out group-hover:motion-safe:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/80 pointer-events-none"
                />

                <div className="absolute top-0 left-0 right-0 flex items-start justify-between gap-3 p-5">
                  <h2 className="text-lg font-medium leading-tight">
                    {service.cardTitle}
                  </h2>
                  <span
                    aria-hidden="true"
                    className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center shrink-0 transition-colors group-hover:bg-white/25"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M7 2.5V11.5M2.5 7H11.5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </div>

                <p className="absolute bottom-0 left-0 right-0 p-5 text-white/90 text-sm leading-relaxed">
                  {service.cardDescription}
                </p>
              </Link>
            ))}
          </div>
        </section>

      <CTA />
    </>
  );
}
