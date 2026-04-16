"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

// How far the user must scroll past the top before the navbar starts responding
// to direction changes. While within this band, the navbar is always shown
// (that's the "hero section" zone).
const HERO_ZONE_PX = 200;

// Jitter threshold — small wheel ticks won't trigger hide/show flips.
const DIFF_THRESHOLD = 5;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    const diff = current - previous;

    // Always visible within the hero zone or if the mobile menu is open
    if (current < HERO_ZONE_PX || mobileOpen) {
      setHidden(false);
      return;
    }

    if (diff > DIFF_THRESHOLD) setHidden(true);        // scrolling down → hide
    else if (diff < -DIFF_THRESHOLD) setHidden(false); // scrolling up → show
  });

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: hidden ? "-120%" : "0%" }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center pt-5 px-6"
    >
      <div className="w-full max-w-[1280px]">
        <nav className="relative flex items-center h-16 bg-[#DCEDFA] rounded-full pl-6 pr-1.5 py-1.5 border border-border shadow-sm">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0" aria-label="ARCKS home">
            <div className="flex items-center">
              <Image
                src="/arcks-logo.png"
                alt=""
                width={1368}
                height={1188}
                priority
                className="h-9 w-auto"
              />
              <span className="text-xl font-medium text-foreground tracking-tight">
                ARCKS
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
              className="group relative block h-[50px] w-[140px] bg-primary rounded-full overflow-hidden"
            >
              <div className="flex flex-col motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out group-hover:motion-safe:-translate-y-1/2">
                <span className="h-[50px] flex items-center justify-center text-primary-foreground text-[14px] font-bold">
                  Let&apos;s Talk
                </span>
                <span
                  aria-hidden="true"
                  className="h-[50px] flex items-center justify-center text-primary-foreground text-[14px] font-bold"
                >
                  Let&apos;s Talk
                </span>
              </div>
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
          <div className="md:hidden mt-2 bg-secondary rounded-2xl p-6 border border-border shadow-sm">
            <div className="flex flex-col gap-4">
              <Link href="#services" className="text-[15px] font-medium text-foreground" onClick={() => setMobileOpen(false)}>Services</Link>
              <Link href="#about-us" className="text-[15px] font-medium text-foreground" onClick={() => setMobileOpen(false)}>About Us</Link>
              <Link href="#case-studies" className="text-[15px] font-medium text-foreground" onClick={() => setMobileOpen(false)}>Case Studies</Link>
              <Link
                href="#contact"
                className="flex items-center justify-center h-[50px] bg-primary text-primary-foreground text-[14px] font-medium rounded-full mt-2"
                onClick={() => setMobileOpen(false)}
              >
                Let&apos;s Talk
              </Link>
            </div>
          </div>
        )}
      </div>
    </motion.header>
  );
}
