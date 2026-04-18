import Image from "next/image";

export function CTA() {
  return (
    <section id="contact" className="py-12 md:py-20 px-8">
      <div className="max-w-[1140px] mx-auto">
        <div className="relative bg-primary rounded-[32px] overflow-hidden px-8 py-20 md:py-28">
          {/* Decorative shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Left geometric shapes */}
            <div className="absolute left-0 bottom-0 w-[200px] h-[300px] flex items-end gap-1">
              <div className="w-4 h-48 bg-black rounded-sm" />
              <div className="w-4 h-56 bg-black rounded-sm" />
              <div className="w-4 h-40 bg-[#3b82f6] rounded-sm" />
              <div className="w-4 h-52 bg-black rounded-sm" />
            </div>
            <div className="absolute left-20 bottom-0 w-40 h-40 bg-[#4ecdc4] rounded-full" />
            <div className="absolute left-10 bottom-10 w-48 h-48 bg-black rounded-full opacity-80" />

            {/* Right geometric shapes */}
            <div className="absolute right-0 bottom-0 w-[200px] h-[300px] flex items-end gap-1">
              <div className="w-4 h-44 bg-black rounded-sm" />
              <div className="w-4 h-52 bg-black rounded-sm" />
              <div className="w-4 h-36 bg-black rounded-sm" />
            </div>
            <div className="absolute right-10 bottom-0 w-40 h-20 bg-[#3b82f6] rounded-t-full" />
            <div className="absolute right-20 bottom-10 w-32 h-32 bg-[#f0a060] rounded-full" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <span className="inline-flex items-center px-3 py-1.5 bg-white rounded text-primary text-[13px] font-medium uppercase tracking-[1px] mb-6">
              Ready to Elevate?
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-[55px] font-medium text-white leading-[1.15] mb-10 max-w-2xl">
              Proceed Toward Your Next Achievement
            </h2>
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="flex items-center justify-center h-[50px] px-8 bg-foreground text-white text-[15px] font-medium rounded-full hover:bg-foreground/90 transition-colors"
              >
                Let&apos;s Talk
              </a>
              <a
                href="#services"
                className="flex items-center justify-center h-[50px] px-8 bg-transparent text-white text-[15px] font-medium rounded-full border border-white hover:bg-white/10 transition-colors"
              >
                Learn More
              </a>
            </div>

            {/* Center circular image */}
            <div className="mt-12 w-[200px] h-[200px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden border-4 border-white/20">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80"
                alt="Team collaboration"
                width={280}
                height={280}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
