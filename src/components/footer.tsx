import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-foreground text-white pt-24 pb-8 px-4 md:px-8 relative overflow-hidden">
      
      {/* Massive Background Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[15vw] font-black text-white/5 whitespace-nowrap pointer-events-none tracking-tighter leading-none select-none">
        FLEXIO
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top CTA Block */}
        <div className="bg-brand rounded-[32px] p-12 md:p-16 mb-20 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left transition-transform hover:-translate-y-1">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">Ready to Elevate?</h2>
            <p className="text-white/90 text-lg md:text-xl font-medium">Join leading companies that trust our approach.</p>
          </div>
          <button className="bg-white text-brand px-8 py-4 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-transform shadow-lg">
            Let&apos;s Talk
          </button>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 mb-20 text-white/80">
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Page</h4>
            <ul className="space-y-4 font-medium">
              {['Home', 'About Us', 'Services', 'Pricing', 'Contact'].map((item) => (
                <li key={item}><Link href="#" className="hover:text-white transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Social</h4>
            <ul className="space-y-4 font-medium">
              {['Twitter / X', 'LinkedIn', 'Instagram', 'Dribbble'].map((item) => (
                <li key={item}><Link href="#" className="hover:text-white transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Studio</h4>
            <ul className="space-y-4 font-medium">
              <li className="leading-relaxed">
                4517 Washington Ave.<br />
                Manchester, Kentucky 39495
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Contact</h4>
            <ul className="space-y-4 font-medium">
              <li>
                <a href="mailto:Hello@flexio.co" className="hover:text-white transition-colors">Hello@flexio.co</a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-white transition-colors">+1 (234) 567-890</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-white/60 text-sm font-medium">
          <p>© {new Date().getFullYear()} ARCKS. All rights reserved.</p>
          <p>Design & Developed Amani © 2024 (Replicated)</p>
        </div>
      </div>
    </footer>
  );
}
