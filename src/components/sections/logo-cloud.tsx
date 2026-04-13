export function LogoCloud() {
  const logos = [
    "Logoipsum", "Logoipsum", "company", "Logoipsum", "business", "application",
  ];

  return (
    <section className="bg-primary py-20 px-8 overflow-hidden">
      <div className="max-w-[1140px] mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-center gap-3 mb-12">
          <span className="inline-flex items-center px-2 py-1 bg-white rounded text-primary text-[13px] font-medium uppercase tracking-[1px]">
            Our Client&apos;s
          </span>
          <h2 className="text-3xl md:text-[42px] font-medium text-white text-center leading-[1.25]">
            Trusted by High-Growth Startups{" "}
            <span className="block">Across Industries</span>
          </h2>
        </div>

        {/* Logo Marquee */}
        <div className="relative overflow-hidden">
          <div className="animate-marquee flex items-center gap-[60px] whitespace-nowrap">
            {[...logos, ...logos, ...logos].map((logo, i) => (
              <div key={i} className="flex items-center gap-[60px]">
                <span className="text-white/50 text-2xl font-medium">
                  {logo}
                </span>
                {i < logos.length * 3 - 1 && (
                  <div className="w-px h-11 bg-white/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
