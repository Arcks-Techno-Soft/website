"use client";

import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center pt-5 px-6">
      <div className="w-full max-w-[1280px]">
        <nav className="relative flex items-center h-16 bg-nav-bg rounded-full pl-6 pr-1.5 py-1.5 border border-nav-border">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <div className="flex items-center gap-1.5">
              <div className="relative w-8 h-8">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-4 bg-foreground rounded-b-full" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-4 bg-primary rounded-t-full" />
              </div>
              <span className="text-xl font-medium text-foreground tracking-tight">
                Flexio
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex flex-1 items-center gap-6 ml-10">
            <button className="flex items-center gap-1 text-[15px] font-medium text-foreground">
              Services
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5">
                <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <Link href="#about-us" className="text-[15px] font-medium text-foreground">
              About Us
            </Link>
            <Link href="#case-studies" className="text-[15px] font-medium text-foreground">
              Case Studies
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center ml-auto">
            <Link
              href="#contact"
              className="flex items-center justify-center h-[50px] w-[140px] bg-primary text-white text-[14px] font-medium rounded-full hover:bg-primary-hover transition-colors"
            >
              Let&apos;s Talk
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-auto mr-2 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M4 8h16M4 16h16" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-2 bg-nav-bg rounded-2xl p-6 border border-nav-border">
            <div className="flex flex-col gap-4">
              <Link href="#services" className="text-[15px] font-medium text-foreground" onClick={() => setMobileOpen(false)}>Services</Link>
              <Link href="#about-us" className="text-[15px] font-medium text-foreground" onClick={() => setMobileOpen(false)}>About Us</Link>
              <Link href="#case-studies" className="text-[15px] font-medium text-foreground" onClick={() => setMobileOpen(false)}>Case Studies</Link>
              <Link
                href="#contact"
                className="flex items-center justify-center h-[50px] bg-primary text-white text-[14px] font-medium rounded-full mt-2"
                onClick={() => setMobileOpen(false)}
              >
                Let&apos;s Talk
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
