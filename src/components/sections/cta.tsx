import Image from "next/image";

type DecorItem =
  | { type: "svg"; src: string; alt: string; spin?: boolean }
  | { type: "photo"; src: string; alt: string };

const decorItems: DecorItem[] = [
  { type: "svg", src: "/images/cta-geo-1.svg", alt: "" },
  { type: "svg", src: "/images/cta-geo-2.svg", alt: "" },
  { type: "photo", src: "/images/cta-photo.jpg", alt: "Handshake at a meeting" },
  { type: "svg", src: "/images/cta-geo-3.svg", alt: "", spin: true },
];

const COPIES = 4;

export function CTA() {
  return (
    <section className="bg-primary overflow-hidden">
      <div className="flex flex-col items-center">
        {/* Content */}
        <div className="w-full px-[30px] pt-[80px] pb-[60px]">
          <div className="max-w-[1140px] mx-auto flex flex-col items-center gap-9">
            {/* Title */}
            <div className="flex flex-col gap-4 items-center">
              <span className="bg-white text-primary font-medium text-[13px] uppercase tracking-[1px] leading-4 px-2 py-1 rounded">
                Ready to Elevate?
              </span>
              <h2 className="font-medium text-white text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.05] text-center max-w-[820px] tracking-tight">
                Proceed Toward Your Next Achievement
              </h2>
            </div>

            {/* CTAs */}
            <div className="flex gap-3 items-center">
              <a
                href="#contact"
                className="group relative block h-[54px] w-[140px] bg-[#262121] rounded-full overflow-hidden"
              >
                <div className="flex flex-col motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out group-hover:motion-safe:-translate-y-1/2">
                  <span className="h-[54px] flex items-center justify-center text-white text-[15px] font-medium">
                    Let&apos;s Talk
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-[54px] flex items-center justify-center text-white text-[15px] font-medium"
                  >
                    Let&apos;s Talk
                  </span>
                </div>
              </a>
              <a
                href="#services"
                className="group relative block h-[54px] w-[140px] bg-[#F5EEE1] rounded-full overflow-hidden"
              >
                <div className="flex flex-col motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out group-hover:motion-safe:-translate-y-1/2">
                  <span className="h-[54px] flex items-center justify-center text-primary text-[15px] font-medium">
                    Learn More
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-[54px] flex items-center justify-center text-primary text-[15px] font-medium"
                  >
                    Learn More
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Decorative scrolling strip */}
        <div className="w-full overflow-hidden mb-2 md:mb-14">
          <div
            className="flex gap-2.5 animate-marquee"
            style={{ width: "max-content" }}
          >
            {Array.from({ length: COPIES }).flatMap((_, copy) =>
              decorItems.map((item, i) => {
                const key = `${copy}-${i}`;
                if (item.type === "photo") {
                  return (
                    <div
                      key={key}
                      className="relative h-[280px] w-[566px] shrink-0 overflow-hidden rounded-2xl"
                    >
                      <Image
                        src={item.src}
                        alt={copy === 0 ? item.alt : ""}
                        fill
                        sizes="566px"
                        className="object-cover"
                      />
                    </div>
                  );
                }
                return (
                  <div
                    key={key}
                    className={`relative h-[280px] w-[280px] shrink-0 ${
                      item.spin
                        ? "animate-[spin_18s_linear_infinite] motion-reduce:animate-none"
                        : ""
                    }`}
                  >
                    <Image
                      src={item.src}
                      alt=""
                      fill
                      sizes="280px"
                      className="object-contain"
                    />
                  </div>
                );
              }),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
