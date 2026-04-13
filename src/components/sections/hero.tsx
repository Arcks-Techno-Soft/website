import Image from "next/image";

export function Hero() {
  const images = [
    { src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80", alt: "Team collaborating", width: 355, height: 355, rounded: "rounded-full" },
    { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80", alt: "Professional smiling", width: 318, height: 355, rounded: "rounded-full" },
    { src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=400&q=80", alt: "Woman with coffee", width: 355, height: 355, rounded: "rounded-full" },
    { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80", alt: "Man browsing tablet", width: 284, height: 355, rounded: "rounded-[24px]" },
    { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80", alt: "Team discussing", width: 458, height: 355, rounded: "rounded-[24px]" },
  ];

  return (
    <section className="relative flex items-center justify-center pt-[180px] pb-[120px] px-8 overflow-hidden">
      <div className="w-full max-w-[1140px]">
        {/* Text Content */}
        <div className="flex flex-col gap-8 mb-16">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <div className="inline-flex self-start items-center px-2 py-1 bg-primary rounded text-white text-[13px] font-medium uppercase tracking-[1px]">
                Business &amp; Solution
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-medium text-foreground leading-[1.0] tracking-tight">
                Flexible Solutions for{" "}
                <span className="block">Modern Business</span>
              </h1>
            </div>
            <p className="max-w-[700px] text-foreground text-base md:text-[17px] font-medium leading-7">
              Delivering bespoke, outcome-focused solutions that enhance workflows, augment
              productivity and expedite corporate expansion.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="flex items-center justify-center h-[50px] w-[130px] bg-primary text-white text-[15px] font-medium rounded-full hover:bg-primary-hover transition-colors"
            >
              Let&apos;s Talk
            </a>
            <a
              href="#services"
              className="flex items-center justify-center h-[50px] w-[130px] bg-warm-bg text-primary text-[15px] font-medium rounded-full border border-primary hover:bg-primary/5 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Image Strip */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 -mx-8 px-8 scrollbar-hide">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative shrink-0 overflow-hidden ${img.rounded}`}
              style={{ width: img.width, height: img.height }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 200px, 400px"
              />
            </div>
          ))}
          {/* Decorative colored blocks */}
          <div className="shrink-0 w-[80px] h-[355px] bg-primary rounded-[24px]" />
          <div className="shrink-0 w-[80px] h-[355px] bg-[#4ecdc4] rounded-full" />
        </div>
      </div>
    </section>
  );
}
