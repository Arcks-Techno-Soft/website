import Image from "next/image";

export function CaseStudies() {
  const cases = [
    {
      tag: "Healthcare",
      title: "Making an Impact: Transforming a Healthcare Platform's Rebuild",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    },
    {
      tag: "Startup",
      title: "Optimizing Conversions: A Tech Startup's Leap",
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section id="case-studies" className="py-12 md:py-20 px-8">
      <div className="max-w-[1140px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div className="flex flex-col gap-3">
            <span className="inline-flex self-start items-center px-2 py-1 bg-primary rounded text-white text-[13px] font-medium uppercase tracking-[1px]">
              Case Study
            </span>
            <h2 className="text-3xl md:text-[42px] font-medium text-foreground leading-[1.25]">
              Client Success Through{" "}
              <span className="block">Our Solutions</span>
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center px-5 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:bg-primary/90 transition-colors"
          >
            Explore All
          </a>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-[20px] overflow-hidden mb-5">
                <Image
                  src={c.img}
                  alt={c.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <span className="inline-flex items-center px-3 py-1 bg-primary rounded text-white text-xs font-medium uppercase tracking-[0.5px] mb-3">
                {c.tag}
              </span>
              <h3 className="text-xl md:text-2xl font-medium text-foreground leading-tight">
                {c.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
