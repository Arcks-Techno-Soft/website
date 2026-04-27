"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

const ICONS = {
  shieldCheck: (
    <svg
      width="44"
      height="44"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3l8 4v5c0 5-3.5 8.5-8 10c-4.5-1.5-8-5-8-10V7l8-4z" />
      <path d="M8 12l3 3l5-5" />
    </svg>
  ),
  rocket: (
    <svg
      width="44"
      height="44"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3c2.4 2 4.5 5 4.5 9l-4.5 3l-4.5-3c0-4 2.1-7 4.5-9z" />
      <circle cx="12" cy="10" r="1.4" />
      <path d="M8.5 14.5L6 17l3 1l1-3" />
      <path d="M15.5 14.5L18 17l-3 1l-1-3" />
    </svg>
  ),
  scales: (
    <svg
      width="44"
      height="44"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 4v17" />
      <path d="M8 21h8" />
      <path d="M4 8h16" />
      <path d="M4 8l-2 6h6l-2-6" />
      <path d="M20 8l-2 6h6l-2-6" />
    </svg>
  ),
  lock: (
    <svg
      width="44"
      height="44"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 018 0v4" />
      <path d="M12 15v2" />
    </svg>
  ),
} satisfies Record<string, ReactNode>;

type IconKey = keyof typeof ICONS;

const values: { title: string; desc: string; color: string; icon: IconKey }[] = [
  {
    title: "Reliability",
    desc: "Count on us for dependable, consistent service, ensuring results that build trust at every step.",
    color: "#E0644A",
    icon: "shieldCheck",
  },
  {
    title: "Innovation",
    desc: "We craft forward-thinking solutions, keeping your business ahead of evolving challenges.",
    color: "#7CB89E",
    icon: "rocket",
  },
  {
    title: "Integrity",
    desc: "In every action we undertake, openness and sincerity are paramount, guaranteeing moral delivery.",
    color: "#3F50DC",
    icon: "scales",
  },
  {
    title: "Security",
    desc: "Your data's safety is our top priority, using robust measures to keep it protected.",
    color: "#F2C466",
    icon: "lock",
  },
];

// Flower-shaped badge: a center disc plus a ring of small overlapping discs
// rendered as plain SVG circles. Same fill across all of them creates the
// scalloped silhouette without needing a hand-drawn path.
function ScallopedBadge({ color, children }: { color: string; children: ReactNode }) {
  const bumps = 16;
  const baseR = 36;
  const bumpR = 10;
  return (
    <div className="relative w-[130px] h-[130px] flex items-center justify-center">
      <svg viewBox="-50 -50 100 100" className="absolute inset-0 w-full h-full">
        <circle cx="0" cy="0" r={baseR} fill={color} />
        {Array.from({ length: bumps }).map((_, i) => {
          const angle = (i / bumps) * 2 * Math.PI;
          const cx = baseR * Math.cos(angle);
          const cy = baseR * Math.sin(angle);
          return <circle key={i} cx={cx} cy={cy} r={bumpR} fill={color} />;
        })}
      </svg>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function AboutValues() {
  return (
    <section className="py-12 md:py-20 px-8">
      <div className="max-w-[1140px] mx-auto">
        <div className="flex flex-col items-center gap-4 mb-12 md:mb-16">
          <span className="inline-flex items-center px-2 py-1 bg-primary rounded text-white text-[13px] font-medium uppercase tracking-[1px]">
            Our Mission
          </span>
          <h2 className="text-3xl md:text-[55px] font-medium text-foreground text-center leading-[1.1]">
            Delivering Trust, Reliability,{" "}
            <span className="block">and Excellence</span>
          </h2>
          <p className="max-w-[720px] text-foreground text-center text-base md:text-[17px] leading-7 mt-2">
            Our mission is to provide tailored solutions with a focus on
            transparency, dependability, and client satisfaction. We strive to
            build lasting relationships by prioritizing the unique needs of
            every business we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-14 md:gap-y-20">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: (i % 2) * 0.1,
              }}
              className="flex flex-col items-center gap-5 text-center"
            >
              <ScallopedBadge color={v.color}>{ICONS[v.icon]}</ScallopedBadge>
              <h3 className="text-2xl md:text-[28px] font-medium text-foreground">
                {v.title}
              </h3>
              <p className="max-w-[360px] text-foreground text-base leading-7">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
