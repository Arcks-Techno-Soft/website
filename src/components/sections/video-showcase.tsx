"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export function VideoShowcase() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const text1Y = useTransform(
    scrollYProgress,
    [0, 0.05, 1],
    [50, 0, 0],
  );
  const text1Opacity = useTransform(
    scrollYProgress,
    [0, 0.2995, 0.3],
    [1, 1, 0],
  );
  const text2Y = useTransform(
    scrollYProgress,
    [0.3, 0.35, 1],
    [50, 0, 0],
  );
  const text2Opacity = useTransform(
    scrollYProgress,
    [0.3, 0.3005, 0.4995, 0.5],
    [0, 1, 1, 0],
  );

  return (
    <section ref={sectionRef} className="relative z-0 h-[300vh]">
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
        <div className="absolute inset-0 bg-black/50" />

        <motion.h2
          style={{ opacity: text1Opacity, y: text1Y }}
          className="absolute inset-0 z-10 flex items-center justify-center px-8 text-center text-white font-normal leading-[1.15] text-xl md:text-3xl lg:text-5xl text-balance tracking-[-0.02em]"
        >
          <span className="max-w-[900px]">
            Expert advice to streamline operations and accelerate growth
          </span>
        </motion.h2>

        <motion.h2
          style={{ opacity: text2Opacity, y: text2Y }}
          className="absolute inset-0 z-10 flex items-center justify-center px-8 text-center text-white font-normal leading-[1.15] text-xl md:text-3xl lg:text-5xl text-balance tracking-[-0.02em]"
        >
          <span className="max-w-[900px]">
            Tailored to your brand&apos;s needs &amp; designed to enhance your
            business
          </span>
        </motion.h2>
      </div>
    </section>
  );
}
