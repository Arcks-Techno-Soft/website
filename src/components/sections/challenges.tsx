import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export function Challenges() {
  const logos = ['Acme Corp', 'GlobalTech', 'Nexus', 'Stark Industries', 'Wayne Ent', 'Acme Corp', 'GlobalTech', 'Nexus'];

  return (
    <>
      {/* Logos Marquee */}
      <div className="bg-brand py-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-4 text-center">
          <p className="text-white/90 font-medium text-sm md:text-base">Trusted by High-Growth Startups Across Industries</p>
        </div>
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex items-center space-x-12 px-6">
            {logos.map((logo, i) => (
              <span key={i} className="text-white font-bold text-2xl opacity-70 hover:opacity-100 transition-opacity">
                {logo}
              </span>
            ))}
          </div>
          <div className="absolute top-0 animate-marquee whitespace-nowrap flex items-center space-x-12 px-6" style={{ left: '100%' }}>
            {logos.map((logo, i) => (
              <span key={`dup-${i}`} className="text-white font-bold text-2xl opacity-70 hover:opacity-100 transition-opacity">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Challenges Section */}
      <section id="about-us" className="py-24 px-4 md:px-8 bg-background">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Visual Area (Mocking Flexio slanted labels) */}
          <div className="w-full lg:w-1/2 relative h-[500px] bg-card rounded-3xl border border-border flex items-center justify-center p-8 overflow-hidden">
             {/* Decorative blurry blob */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand/10 rounded-full blur-3xl pointer-events-none"></div>
             
             <div className="space-y-6 z-10 w-full max-w-sm">
                <div className="bg-white p-4 rounded-xl shadow-lg border border-border transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="text-red-500 font-bold mb-1">Lost Opportunities</div>
                  <div className="h-2 bg-slate-100 rounded-full w-full"><div className="h-full bg-red-400 rounded-full w-3/4"></div></div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-lg border border-border transform rotate-2 hover:rotate-0 transition-transform duration-300 ml-8">
                  <div className="text-orange-500 font-bold mb-1">Lack of Expertise</div>
                   <div className="h-2 bg-slate-100 rounded-full w-full"><div className="h-full bg-orange-400 rounded-full w-1/2"></div></div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-lg border border-border transform -rotate-2 hover:rotate-0 transition-transform duration-300 -ml-4">
                  <div className="text-yellow-600 font-bold mb-1">Limited Success</div>
                   <div className="h-2 bg-slate-100 rounded-full w-full"><div className="h-full bg-yellow-400 rounded-full w-1/4"></div></div>
                </div>
             </div>
          </div>

          {/* Right Content Area */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#FFF4ED] text-brand text-sm font-bold tracking-wide uppercase">
              Facing Challenges
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Overcoming These Key Barriers Starts Here Today
            </h2>

            <ul className="space-y-6 pt-4">
              {[
                { title: "Inefficient Processes", desc: "Wasting valuable time and resources." },
                { title: "Inconsistent Growth", desc: "Struggling to reach new milestones." },
                { title: "Limited Support", desc: "Wasting valuable time and resources." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start group">
                  <div className="mt-1 flex-shrink-0 text-brand">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-1">{item.title}</h4>
                    <p className="text-muted font-medium">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>
    </>
  );
}
