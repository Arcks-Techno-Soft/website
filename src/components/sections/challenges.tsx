"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function Challenges() {
  const painPoints = [
    { title: "Inefficient Processes", desc: "Wasting valuable time and resources." },
    { title: "Inconsistent Growth", desc: "Struggling to reach new milestones." },
    { title: "Limited Support", desc: "Wasting valuable time and resources." },
  ];

  return (
    <section id="about-us" className="py-24 md:py-28 px-8">
      <div className="max-w-[1140px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Text */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <span className="inline-flex self-start items-center px-2 py-1 bg-primary rounded text-white text-[13px] font-medium uppercase tracking-[1px]">
              Facing Challenges
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[55px] font-medium text-foreground leading-[1.1]">
              Overcoming These Key Barriers Starts Here Today
            </h2>
          </div>
          <p className="text-foreground text-base leading-7 max-w-lg">
            Identify the barriers that prevent your business from reaching
            its full potential. Addressing these issues can transform your
            path to success.
          </p>
          <ul className="flex flex-col gap-5 mt-2">
            {painPoints.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-1.5 w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6L5 8.5L9.5 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-foreground">{item.title}</span>
                  <span className="text-foreground"> – {item.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative aspect-[692/801] rounded-3xl overflow-hidden">
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.25 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: false, amount: 0.35 }}
            >
              <Image
                src="/images/problem-girl.jpg"
                alt="Professional reviewing work at laptop"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
          <Image
            src="/images/problem-tag.png"
            alt="Challenges: lost opportunities, lack of expertise, limited success"
            width={177}
            height={182}
            className="absolute -top-4 -right-4 md:-top-6 md:-right-8 w-[140px] md:w-[180px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
