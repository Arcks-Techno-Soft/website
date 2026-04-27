export function Process() {
  const steps = [
    {
      num: 1,
      title: "Discovery & Strategy",
      desc: "We start by understanding your goals and creating a clear, actionable plan tailored to your needs.",
    },
    {
      num: 2,
      title: "Design & Planning",
      desc: "We develop a detailed roadmap to ensure smooth, efficient execution at every stage.",
    },
    {
      num: 3,
      title: "Implementation",
      desc: "Our team brings the plan to life, focusing on precision and alignment with your vision.",
    },
    {
      num: 4,
      title: "Optimization & Growth",
      desc: "We track outcomes, refine strategies and support ongoing growth for lasting impact.",
    },
  ];

  return (
    <section id="our-approach" className="py-12 md:py-20 px-8">
      <div className="max-w-[1140px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-[120px]">
        {/* Left: Title + CTAs */}
        <div className="w-full lg:w-[460px] flex flex-col gap-10 items-center lg:items-start lg:sticky lg:top-32 lg:self-start">
          <div className="flex flex-col gap-3 items-center lg:items-start">
            <span className="inline-flex self-center lg:self-start items-center px-2 py-1 bg-primary rounded text-white text-[13px] font-medium uppercase tracking-[1px]">
              Our Approach
            </span>
            <h2 className="text-center lg:text-left text-3xl sm:text-4xl md:text-[55px] font-medium text-foreground leading-[1.1]">
              A Streamlined Process for Lasting Results
            </h2>
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <a
              href="#contact"
              className="group relative block h-[50px] w-[130px] bg-primary rounded-full overflow-hidden"
            >
              <div className="flex flex-col motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out group-hover:motion-safe:-translate-y-1/2">
                <span className="h-[50px] flex items-center justify-center text-primary-foreground text-[15px] font-medium">
                  Let&apos;s Talk
                </span>
                <span
                  aria-hidden="true"
                  className="h-[50px] flex items-center justify-center text-primary-foreground text-[15px] font-medium"
                >
                  Let&apos;s Talk
                </span>
              </div>
            </a>
            <a
              href="#services"
              className="group relative block h-[50px] w-[130px] bg-background rounded-full border border-primary overflow-hidden"
            >
              <div className="flex flex-col motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out group-hover:motion-safe:-translate-y-1/2">
                <span className="h-[50px] flex items-center justify-center text-primary text-[15px] font-medium">
                  Learn More
                </span>
                <span
                  aria-hidden="true"
                  className="h-[50px] flex items-center justify-center text-primary text-[15px] font-medium"
                >
                  Learn More
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Right: Step Cards */}
        <div className="flex-1 flex flex-col gap-10">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-accent rounded-2xl p-8 flex items-start gap-6 border border-border"
            >
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0">
                <span className="text-white text-lg font-medium">{step.num}</span>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-xl md:text-[22px] font-medium text-foreground leading-tight">
                  {step.title}
                </h3>
                <p className="text-foreground text-base leading-7">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
