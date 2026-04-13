import Image from "next/image";

export function Services() {
  const services = [
    {
      title: "Business Consulting",
      desc: "Expert advice to streamline operations and accelerate growth.",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Growth Strategy",
      desc: "Design strategies to scale your business and seize new opportunities.",
      img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Marketing Strategy",
      desc: "Create data-driven strategies to boost brand visibility and engagement.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 px-8">
      <div className="max-w-[1140px] mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-center gap-3 mb-14">
          <span className="inline-flex items-center px-2 py-1 bg-primary rounded text-white text-[13px] font-medium uppercase tracking-[1px]">
            Our Services
          </span>
          <h2 className="text-3xl md:text-[42px] font-medium text-foreground text-center leading-[1.25]">
            Our Expert Services to{" "}
            <span className="block">Drive Growth</span>
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative rounded-[20px] overflow-hidden h-[400px] md:h-[480px] cursor-pointer"
            >
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Plus Button */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 4V16M4 10H16" stroke="#262121" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>

              {/* Bottom Text */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-medium mb-2">{service.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
