import React from 'react';

export function MetricsAndIndustries() {
  const industries = [
    { name: "Startup", styles: "bg-[#E8F2FF] text-[#3B82F6]" },
    { name: "Healthcare", styles: "bg-[#FFF4ED] text-[#EE6723]" },
    { name: "E-commerce", styles: "bg-slate-800 text-white" },
    { name: "Fintech", styles: "bg-[#E6F9F1] text-[#10B981]" },
    { name: "Real Estate", styles: "bg-[#FEFCE8] text-[#EAB308]" },
    { name: "Education", styles: "bg-purple-100 text-purple-600" },
    { name: "Logistics", styles: "bg-[#E8F2FF] text-[#3B82F6]" },
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-card border-y border-border/50">
      <div className="max-w-7xl mx-auto space-y-16">
        
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#FFF4ED] text-brand text-sm font-bold tracking-wide uppercase">
            Industries We Serve
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground">
            Tailored Solutions for Diverse Markets
          </h2>
        </div>

        {/* Industries Flex Wrap */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
          {industries.map((ind, i) => (
            <span 
              key={i} 
              className={`px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform duration-300 shadow-sm ${ind.styles}`}
            >
              {ind.name}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
