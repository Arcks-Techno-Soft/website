"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";

const TEXTS = [
  "Expert advice to streamline operations and accelerate growth",
  "Tailored to your brand’s needs & designed to enhance your business",
];

export function VideoShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  // null = no text shown (the brief gap when entering the section)
  const [activeText, setActiveText] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    if (p < 0.1) setActiveText(null);
    else if (p < 0.5) setActiveText(0);
    else setActiveText(1);
  });

  return (
    <section ref={sectionRef} className="relative z-0 h-[250vh] md:h-[500vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src="/videos/video-1.mp4" type="video/mp4" />
        </video>

        <div className="hidden md:block absolute inset-0 z-10">
          <AnimatePresence mode="wait">
            {activeText !== null && (
              <motion.h2
                key={activeText}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 flex items-center justify-center px-8 text-center text-white font-semibold leading-[1.15] text-xl md:text-3xl lg:text-5xl text-balance tracking-[-0.02em]"
              >
                <span className="max-w-[900px]">{TEXTS[activeText]}</span>
              </motion.h2>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
