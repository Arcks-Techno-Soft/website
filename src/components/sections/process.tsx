import React from 'react';

export function Process() {
  const steps = [
    { num: 1, title: "Discovery & Analysis", desc: "We begin by deeply understanding your business goals and current challenges to form a tailored strategy." },
    { num: 2, title: "Strategic Planning", desc: "Our team develops a comprehensive roadmap outlining actionable steps to achieve your objectives." },
    { num: 3, title: "Execution & Implementation", desc: "We put the plan into action, leveraging our expertise to build out the required solutions." },
    { num: 4, title: "Review & Scaling", desc: "Continuous monitoring, refining processes, and scaling the strategies that deliver the best ROI." }
  ];

  return (
    <section id="process" className="py-24 px-4 md:px-8 bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#FFF4ED] text-brand text-sm font-bold tracking-wide uppercase">
            Our Approach
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            A Streamlined Process for Lasting Results
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="bg-card p-10 md:p-12 rounded-[24px] border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-brand flex items-center justify-center text-white text-2xl font-black mb-8">
                {step.num}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
              <p className="text-muted text-lg leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
