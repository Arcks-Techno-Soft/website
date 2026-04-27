"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

// How far the user must scroll past the top before the navbar starts responding
// to direction changes. While within this band, the navbar is always shown
// (that's the "hero section" zone).
const HERO_ZONE_PX = 200;

// Jitter threshold — small wheel ticks won't trigger hide/show flips.
const DIFF_THRESHOLD = 5;

// First three services — mirrors the order in `src/components/sections/services.tsx`.
const servicesPreview = [
  {
    title: "Custom software development",
    img: "/images/service-1.jpg",
  },
  {
    title: "Mobile & web app development",
    img: "/images/service-2.jpg",
  },
  {
    title: "Cloud & DevOps solutions",
    img: "/images/service-3.jpg",
  },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  const navRef = useRef<HTMLElement>(null);
  const servicesTriggerRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [dropdownPos, setDropdownPos] = useState<{ left: number; right: number } | null>(null);

  // Small close delay so the dropdown stays open while the cursor briefly exits
  // the trigger or panel — prevents flicker on the gap between them.
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cancelClose = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };
  const openServices = () => {
    cancelClose();
    setServicesOpen(true);
  };
  const scheduleCloseServices = () => {
    cancelClose();
    closeTimeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
  };
  useEffect(() => cancelClose, []);

  useEffect(() => {
    const update = () => {
      if (!navRef.current || !servicesTriggerRef.current || !ctaRef.current) return;
      const navRect = navRef.current.getBoundingClientRect();
      const triggerRect = servicesTriggerRef.current.getBoundingClientRect();
      const ctaRect = ctaRef.current.getBoundingClientRect();
      setDropdownPos({
        left: triggerRect.left - navRect.left,
        right: navRect.right - ctaRect.left + 8,
      });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

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

  const closeMobile = () => {
    setMobileOpen(false);
    // Keep services dropdown expanded so it's already open the next time
    // the user opens the mobile menu.
    setMobileServicesOpen(true);
  };

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: hidden ? "-120%" : "0%" }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center pt-5 px-6"
    >
      <div className="w-full max-w-[1280px]">
        <nav
          ref={navRef}
          className="relative flex items-center h-16 bg-[#DCEDFA] rounded-full pl-6 pr-1.5 py-1.5 border border-border shadow-sm"
        >
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
            {/* Services — hover-revealed dropdown (trigger only; panel is anchored to the nav) */}
            <div
              ref={servicesTriggerRef}
              className="relative"
              onMouseEnter={openServices}
              onMouseLeave={scheduleCloseServices}
            >
              <button
                type="button"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                onFocus={openServices}
                onBlur={scheduleCloseServices}
                className={`flex items-center gap-1 text-[15px] font-medium transition-colors py-2 ${servicesOpen ? "text-primary" : "text-foreground hover:text-primary"}`}
              >
                Services
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className={`mt-0.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                >
                  <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <Link href="/about-us" className="text-[15px] font-medium text-foreground hover:text-primary transition-colors">
              About Us
            </Link>
          </div>

          {/* CTA Button */}
          <div ref={ctaRef} className="hidden md:flex items-center ml-auto">
            <Link
              href="/contact-us"
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
            className="md:hidden ml-auto w-[50px] h-[50px] flex items-center justify-center bg-primary text-primary-foreground rounded-full"
            onClick={() => {
              const next = !mobileOpen;
              setMobileOpen(next);
              if (next) setMobileServicesOpen(true);
            }}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M4 8h16M4 16h16" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>

          {/* Desktop Services dropdown — anchored to the nav so it spans from
              the Services trigger's left edge to just before the CTA button. */}
          <div
            className={`hidden md:block absolute top-full pt-3 transition-all duration-200 ${servicesOpen ? "visible opacity-100 translate-y-0" : "invisible opacity-0 translate-y-1 pointer-events-none"}`}
            style={dropdownPos ? { left: dropdownPos.left, right: dropdownPos.right } : { left: 0, right: 0 }}
            onMouseEnter={openServices}
            onMouseLeave={scheduleCloseServices}
          >
            <div className="bg-[#dbedfa] rounded-[32px] p-5 border border-border shadow-lg">
              <div className="grid grid-cols-3 gap-4">
                {servicesPreview.map((service) => (
                  <a
                    key={service.title}
                    href="#services"
                    className="group/card relative aspect-[4/5] rounded-2xl overflow-hidden"
                  >
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 33vw, 290px"
                      className={`object-cover transition-transform duration-700 ease-out ${servicesOpen ? "scale-100 group-hover/card:scale-105" : "scale-125"}`}
                    />
                    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4 flex items-end justify-between gap-3">
                      <h3 className="text-white text-[17px] font-medium leading-tight">
                        {service.title}
                      </h3>
                      <span className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0 text-primary-foreground transition-transform duration-300 group-hover/card:translate-x-0.5">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </a>
                ))}
              </div>
              <div className="mt-5 flex justify-center">
                <a
                  href="#services"
                  className="group/more inline-flex items-center gap-1.5 h-[44px] px-5 bg-primary text-primary-foreground text-[14px] font-medium rounded-full hover:bg-primary/90 transition-colors"
                >
                  View more services
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-200 group-hover/more:translate-x-0.5">
                    <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-2 bg-[#dbedfa] rounded-2xl p-6 border border-border shadow-sm">
            <div className="flex flex-col gap-4">
              <a href="#home" className="text-[15px] font-medium text-foreground" onClick={closeMobile}>Home</a>

              {/* Services — expandable */}
              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  aria-expanded={mobileServicesOpen}
                  className={`flex items-center gap-1 text-[15px] font-medium transition-colors ${mobileServicesOpen ? "text-primary" : "text-foreground"}`}
                >
                  Services
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className={`mt-0.5 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {mobileServicesOpen && (
                  <div className="flex flex-col gap-3">
                    {servicesPreview.map((service) => (
                      <a
                        key={service.title}
                        href="#services"
                        onClick={closeMobile}
                        className="relative h-[90px] rounded-2xl overflow-hidden"
                      >
                        <Image
                          src={service.img}
                          alt={service.title}
                          fill
                          sizes="100vw"
                          className="object-cover"
                        />
                        <div aria-hidden="true" className="absolute inset-0 bg-black/40" />
                        <span className="absolute inset-0 flex items-center justify-center text-white text-[16px] font-medium text-center px-4">
                          {service.title}
                        </span>
                      </a>
                    ))}
                    <a
                      href="#services"
                      onClick={closeMobile}
                      className="inline-flex items-center justify-center h-[44px] bg-primary text-primary-foreground text-[14px] font-medium rounded-full"
                    >
                      View more services
                    </a>
                  </div>
                )}
              </div>

              <Link href="/about-us" className="text-[15px] font-medium text-foreground" onClick={closeMobile}>About Us</Link>
              <Link href="/contact-us" className="text-[15px] font-medium text-foreground" onClick={closeMobile}>Contact</Link>

              <Link
                href="/contact-us"
                className="flex items-center justify-center h-[50px] bg-primary text-primary-foreground text-[14px] font-medium rounded-full mt-2"
                onClick={closeMobile}
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
