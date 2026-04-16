"use client";

import { ReactLenis } from "lenis/react";

/**
 * Wraps the app with Lenis smooth scroll.
 *
 * Tuning:
 * - duration: seconds for a scroll impulse to settle. ~1.1s is the sweet spot —
 *   slow enough to feel premium, fast enough not to feel laggy.
 * - easing: easeOutExpo — quick response followed by a soft settle.
 * - Respects prefers-reduced-motion automatically (Lenis disables smoothing).
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.1,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  );
}
