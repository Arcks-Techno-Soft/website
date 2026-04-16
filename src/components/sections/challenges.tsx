import Image from "next/image";

export function Challenges() {
  const painPoints = [
    { title: "Inefficient Processes", desc: "Wasting valuable time and resources." },
    { title: "Inconsistent Growth", desc: "Struggling to reach new milestones." },
    { title: "Limited Support", desc: "Wasting valuable time and resources." },
  ];

  const floatingTags = [
    { label: "LOST OPPORTUNITIES", color: "bg-[#fe6037]", position: "top-8 right-8" },
    { label: "LACK OF EXPERTISE", color: "bg-[#f0a060]", position: "top-24 right-4" },
    { label: "LIMITED SUCCESS", color: "bg-[#e8c040]", position: "top-40 right-12" },
  ];

  return (
    <section id="about-us" className="py-24 md:py-32 px-8">
      <div className="max-w-[1140px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Text */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <span className="inline-flex self-start items-center px-2 py-1 bg-primary rounded text-white text-[13px] font-medium uppercase tracking-[1px]">
              Facing Challenges
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[55px] font-medium text-foreground leading-[1.1]">
              Overcoming These Key Barriers Starts Here Today
            </h2>
          </div>
          <p className="text-foreground text-base leading-7 max-w-lg">
            Identify the barriers that prevent your business from reaching
            its full potential. Addressing these issues can transform your
            path to success.
          </p>
          <ul className="flex flex-col gap-5 mt-2">
            {painPoints.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-1.5 w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6L5 8.5L9.5 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-foreground">{item.title}</span>
                  <span className="text-foreground"> – {item.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative aspect-4/3 rounded-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80"
              alt="Woman working with coffee"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          {/* Floating Tags */}
          {floatingTags.map((tag, i) => (
            <div
              key={i}
              className={`absolute ${tag.position} ${tag.color} text-white text-xs font-medium px-4 py-2 rounded-full shadow-lg`}
            >
              {tag.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
