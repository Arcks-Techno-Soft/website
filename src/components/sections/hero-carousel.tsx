"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

const images = [
  { src: "/images/hero-5.jpg", alt: "Man and woman discussing project", w: 458, h: 355 },
  { src: "/images/hero-1.jpg", alt: "Man and woman discussing books",   w: 355, h: 355 },
  { src: "/images/hero-2.jpg", alt: "African man smiling on phone",     w: 318, h: 355 },
  { src: "/images/hero-3.jpg", alt: "Girl smiling with coffee mug",     w: 355, h: 355 },
  { src: "/images/hero-4.jpg", alt: "Man browsing on tablet",           w: 284, h: 355 },
];

const GAP = 12;              // matches gap-3 (0.75rem)
const SCROLL_FACTOR = 0.4;   // page scroll → carousel x multiplier

// Width of one image copy including its own trailing gap so two copies tile perfectly.
const COPY_WIDTH = images.reduce((sum, img) => sum + img.w + GAP, 0);

export function HeroCarousel() {
  const { scrollY } = useScroll();

  // Cycling parallax offset.
  // At scrollY=0 → x=0 (so CSS marquee is visible & auto-playing at page load).
  // As you scroll, x drifts in (-COPY_WIDTH, 0] and wraps seamlessly
  // (copy1 ≡ copy2, so the snap back to 0 every COPY_WIDTH is invisible).
  const x = useTransform(scrollY, (y) => -((y * SCROLL_FACTOR) % COPY_WIDTH));

  return (
    // Container height tracks the scaled image height so there's no empty space below on mobile.
    <div className="overflow-hidden h-[213px] md:h-[355px]">
      {/* Mobile: visually shrink the whole strip to 60% while preserving layout math */}
      <div className="origin-top-left scale-[0.6] md:scale-100">
        {/* Outer wrapper: scroll-position parallax (JS transform) */}
        <motion.div style={{ x }}>
          {/* Inner wrapper: CSS marquee auto-play — runs from page load, independent of scroll */}
          <div className="flex animate-marquee" style={{ width: "max-content" }}>
          {[0, 1].map((copyIndex) => (
            <div key={copyIndex} className="flex gap-3 shrink-0" style={{ paddingRight: GAP }}>
              {images.map((img, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden shrink-0"
                  style={{ width: img.w, height: img.h }}
                >
                  <Image
                    src={img.src}
                    alt={copyIndex === 0 ? img.alt : ""}
                    width={img.w}
                    height={img.h}
                    className="w-full h-full object-cover"
                    aria-hidden={copyIndex !== 0}
                    priority={copyIndex === 0 && i < 2}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
      </div>
    </div>
  );
}
