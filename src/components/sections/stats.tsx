export function Stats() {
  const stats = [
    { value: "3+", unit: "Years", label: "Proven Experience" },
    { value: "20+", unit: "Clients", label: "Trusted Partnerships" },
    { value: "50+", unit: "", label: "Project Impactful Results" },
  ];

  return (
    <section className="py-12 md:py-20 px-8">
      <div className="max-w-[1140px] mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-center gap-3 mb-14">
          <span className="inline-flex items-center px-2 py-1 bg-primary rounded text-white text-[13px] font-medium uppercase tracking-[1px]">
            Who We Are
          </span>
          <h2 className="text-3xl md:text-[42px] font-medium text-foreground text-center leading-[1.25]">
            Transforming Businesses{" "}
            <span className="block">with Expertise</span>
          </h2>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-primary rounded-2xl p-10 flex flex-col items-center justify-center text-center"
            >
              <div className="text-white text-5xl md:text-6xl font-medium mb-1">
                {stat.value} {stat.unit && <span className="text-3xl md:text-4xl">{stat.unit}</span>}
              </div>
              <p className="text-white/80 text-base font-normal mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
