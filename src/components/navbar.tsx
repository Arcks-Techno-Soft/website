import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu } from 'lucide-react';

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 md:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center text-white font-bold text-xl">
            A
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-foreground">
            ARCKS<span className="text-brand">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <button className="flex items-center gap-1 text-[15px] font-medium text-foreground hover:text-brand transition-colors">
            Services <ChevronDown className="w-4 h-4" />
          </button>
          {['About Us', 'Case Studies'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-[15px] font-medium text-foreground hover:text-brand transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <Button variant="primary">Let&apos;s Talk</Button>
        </div>

        <button className="md:hidden text-foreground">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}
