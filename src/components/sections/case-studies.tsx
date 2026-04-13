import React from 'react';
import { ArrowRight } from 'lucide-react';

export function CaseStudies() {
  const cases = [
    {
      title: "Fintech Platform Redesign",
      category: "UX/UI & Web Development",
      metrics: ["+150% User Retention", "3x Faster Load Time"],
      color: "bg-blue-100"
    },
    {
      title: "HealthTech AI Dashboard",
      category: "Product Design",
      metrics: ["Zero Learning Curve", "Award Winning UI"],
      color: "bg-green-100"
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Recent <span className="text-brand">Victories.</span>
            </h2>
            <p className="text-lg text-slate-600">
              We design digital products that solve complex problems and drive measurable results.
            </p>
          </div>
          <button className="flex items-center gap-2 font-semibold text-brand hover:text-brand-hover transition-colors">
            View All Work <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <div key={i} className="group cursor-pointer">
              <div className={`aspect-4/3 rounded-3xl ${c.color} overflow-hidden mb-6 relative`}>
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300" />
                {/* Placeholder for real case study image */}
                <div className="absolute inset-8 bg-white/40 rounded-2xl shadow-xl transform translate-y-12 group-hover:translate-y-8 transition-transform duration-500"></div>
              </div>
              <div className="space-y-3">
                <div className="text-sm font-semibold text-brand tracking-wider uppercase">{c.category}</div>
                <h3 className="text-2xl font-bold text-slate-900">{c.title}</h3>
                <div className="flex gap-4">
                  {c.metrics.map((m, idx) => (
                    <span key={idx} className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
