import React from 'react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-8 z-10">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#FFF4ED] text-brand text-sm font-bold tracking-wide uppercase">
            Business & Solution
          </div>

          <h1 className="text-5xl md:text-[72px] font-extrabold tracking-tight text-foreground leading-[1.05]">
            Flexible Solutions for <span className="block">Modern Business</span>
          </h1>

          <p className="text-lg md:text-xl text-muted leading-relaxed max-w-xl font-medium">
            Delivering bespoke, outcome-focused solutions that enhance workflows, augment productivity and expedite corporate expansion.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Let&apos;s Talk
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent border-2 border-brand text-brand hover:bg-brand hover:text-white">
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Right Visual Element (Mocking Flexio's curved images) */}
        <div className="w-full lg:w-1/2 relative h-[500px] md:h-[600px] flex items-center justify-center">
          {/* Main big block */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[85%] h-[85%] bg-brand/10 rounded-[48px] overflow-hidden border border-brand/20 shadow-2xl">
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80" alt="Team collaborating" className="w-full h-full object-cover opacity-90 mix-blend-multiply" />
          </div>
          
          {/* Floating overlapping elements */}
          <div className="absolute left-0 bottom-16 w-48 h-48 bg-white p-2 rounded-3xl shadow-xl animate-float">
            <div className="w-full h-full bg-blue-50 rounded-2xl overflow-hidden relative">
               <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" alt="Chart" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <div className="absolute right-12 -top-4 w-32 h-32 bg-white p-2 rounded-full shadow-xl animate-float" style={{ animationDelay: '1s' }}>
            <div className="w-full h-full bg-brand/20 rounded-full overflow-hidden relative">
               <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80" alt="Abstract" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
