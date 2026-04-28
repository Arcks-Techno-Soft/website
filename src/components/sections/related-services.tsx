import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/services";

export function RelatedServices({ services }: { services: Service[] }) {
  return (
    <section className="py-16 md:py-24 px-8">
      <div className="max-w-[1140px] mx-auto">
        <h2 className="text-3xl md:text-[42px] font-medium text-foreground text-center leading-[1.1] tracking-tight mb-10 md:mb-14">
          Check Other Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[900px] mx-auto">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              aria-label={`Open ${service.cardTitle}`}
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
                <h3 className="text-lg font-medium leading-tight">
                  {service.cardTitle}
                </h3>
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
      </div>
    </section>
  );
}
