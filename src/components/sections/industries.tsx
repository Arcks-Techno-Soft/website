export function Industries() {
  const industries = [
    { name: "Nonprofit", color: "bg-[#ff8c66] text-white" },
    { name: "Corporate", color: "bg-[#4a90d9] text-white" },
    { name: "Startup", color: "bg-[#fe6037] text-white" },
    { name: "Small Business", color: "bg-[#90c4a8] text-[#2d5a3d]" },
    { name: "E-commerce Store", color: "bg-[#4a72b8] text-white" },
    { name: "Marketing Agency", color: "bg-[#5cb85c] text-white" },
    { name: "Consulting Firm", color: "bg-[#8bb8c4] text-white" },
    { name: "Tech Company", color: "bg-[#e8c860] text-[#5a4a1a]" },
  ];

  return (
    <section className="py-12 md:py-20 px-8">
      <div className="max-w-[1140px] mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-center gap-3 mb-14">
          <span className="inline-flex items-center px-2 py-1 bg-primary rounded text-white text-[13px] font-medium uppercase tracking-[1px]">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-[42px] font-medium text-foreground text-center leading-[1.25]">
            Industry-Specific Expertise to{" "}
            <span className="block">Drive Your Success</span>
          </h2>
        </div>

        {/* Pill Tags */}
        <div className="flex flex-wrap items-center justify-center gap-4 max-w-3xl mx-auto">
          {industries.map((ind, i) => (
            <span
              key={i}
              className={`px-6 py-3 rounded-full text-base font-medium ${ind.color}`}
            >
              {ind.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
