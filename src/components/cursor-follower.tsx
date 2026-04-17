"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { useEffect, useState } from "react";

const DOT_SIZE = 15;

/**
 * A blue dot that follows the cursor with a spring-based lag.
 * - Hidden on mobile (≤ 767px, matches Tailwind's `md:` breakpoint)
 * - Hidden on touch devices (no cursor)
 * - Hidden when the mouse leaves the window
 * - Snaps instantly (no spring) when prefers-reduced-motion is set
 * - Uses position:fixed + pointer-events:none, so it never blocks clicks
 */

// Disabled when either condition is true: touch-only (no hover) or mobile-sized viewport.
const DISABLE_QUERY = "(hover: none), (max-width: 767px)";
export function CursorFollower() {
  const mouseX = useMotionValue(-20);
  const mouseY = useMotionValue(-20);

  const prefersReducedMotion = useReducedMotion();

  // Spring config tuned for a soft, clearly-trailing follow (~300ms settle).
  // Lower stiffness + higher mass = more inertia = slower chase.
  const spring = { stiffness: 150, damping: 22, mass: 1 };
  const springX = useSpring(mouseX, spring);
  const springY = useSpring(mouseY, spring);

  const x = prefersReducedMotion ? mouseX : springX;
  const y = prefersReducedMotion ? mouseY : springY;

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(DISABLE_QUERY);
    let detach: (() => void) | null = null;

    const attach = () => {
      const onMove = (e: MouseEvent) => {
        // Offset by half the dot size so the center aligns with the cursor tip
        mouseX.set(e.clientX - DOT_SIZE / 2);
        mouseY.set(e.clientY - DOT_SIZE / 2);
        setVisible(true);
      };
      const onLeave = () => setVisible(false);
      const onEnter = () => setVisible(true);

      window.addEventListener("mousemove", onMove);
      document.documentElement.addEventListener("mouseleave", onLeave);
      document.documentElement.addEventListener("mouseenter", onEnter);

      detach = () => {
        window.removeEventListener("mousemove", onMove);
        document.documentElement.removeEventListener("mouseleave", onLeave);
        document.documentElement.removeEventListener("mouseenter", onEnter);
      };
    };

    const sync = () => {
      if (mql.matches) {
        // Mobile / touch — tear down listeners and hide
        detach?.();
        detach = null;
        setVisible(false);
      } else if (!detach) {
        // Desktop with hover — attach listeners
        attach();
      }
    };

    sync();
    mql.addEventListener("change", sync);

    return () => {
      detach?.();
      mql.removeEventListener("change", sync);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      aria-hidden="true"
      style={{ x, y, width: DOT_SIZE, height: DOT_SIZE }}
      className={`pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-primary transition-opacity duration-200 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}
