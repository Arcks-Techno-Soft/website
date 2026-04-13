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
    <section className="py-24 md:py-36 px-8">
      <div className="max-w-[1140px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-[120px]">
        {/* Left: Title + CTAs */}
        <div className="w-full lg:w-[460px] flex flex-col gap-10 lg:sticky lg:top-32 lg:self-start">
          <div className="flex flex-col gap-3">
            <span className="inline-flex self-start items-center px-2 py-1 bg-primary rounded text-white text-[13px] font-medium uppercase tracking-[1px]">
              Our Approach
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[55px] font-medium text-foreground leading-[1.1]">
              A Streamlined Process for Lasting Results
            </h2>
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

        {/* Right: Step Cards */}
        <div className="flex-1 flex flex-col gap-10">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-card-bg rounded-2xl p-8 flex items-start gap-6"
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
