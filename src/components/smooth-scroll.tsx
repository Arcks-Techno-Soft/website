"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";

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
      <ScrollTopOnRouteChange />
      {children}
    </ReactLenis>
  );
}

// Lenis owns the scroll loop, so Next's default "scroll to top on route change"
// fights with it and produces a jump halfway through the page. Snap Lenis to
// the top instantly whenever the pathname changes.
function ScrollTopOnRouteChange() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    lenis.scrollTo(0, { immediate: true, force: true });
  }, [pathname, lenis]);

  return null;
}
