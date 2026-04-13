import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Services() {
  const services = [
    { title: "Business Consulting", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" },
    { title: "Growth Strategy", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" },
    { title: "Digital Transformation", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80" },
  ];

  return (
    <section id="services" className="py-24 px-4 md:px-8 bg-card">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#FFF4ED] text-brand text-sm font-bold tracking-wide uppercase">
            Our Expert Services
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Bespoke Solutions for Your Success
          </h2>
        </div>

        <div className="space-y-6">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="group relative w-full h-[200px] md:h-[280px] rounded-[24px] overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors duration-300 z-10" />
              <img src={service.img} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20 flex items-end justify-between">
                <h3 className="text-3xl md:text-4xl font-extrabold text-white">
                  {service.title}
                </h3>
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
