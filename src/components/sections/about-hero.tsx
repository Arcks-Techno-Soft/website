"use client";

import Image from "next/image";
import { motion } from "motion/react";

const directors = [
  {
    name: "Director 1",
    src: "/images/testimonial-1.jpg",
  },
  {
    name: "Director 2",
    src: "/images/testimonial-2.jpg",
  },
];

export function AboutHero() {
  return (
    <section className="relative pt-[180px] pb-[60px] md:pb-[100px] overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-8">
        <div className="flex flex-col gap-6 items-center md:items-start mb-12 md:mb-16">
          <span className="inline-flex items-center px-2 py-1 bg-primary rounded text-white text-[13px] font-medium uppercase tracking-[1px]">
            About Us
          </span>
          <h1 className="text-center md:text-left text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-medium text-foreground leading-tight md:leading-none tracking-tight">
            Everything We Do,{" "}
            <span className="block">Founded on Our Core Values</span>
          </h1>
          <p className="max-w-[640px] text-center md:text-left text-foreground text-base md:text-[17px] font-medium leading-7">
            Discover our story, principles, and the fervor that prompts us to
            provide outstanding services for companies akin to yours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.55fr_1fr] gap-4 md:gap-5">
          {directors.map((d, i) => (
            <div
              key={d.name}
              className={`relative aspect-[4/3] rounded-[24px] overflow-hidden ${
                i === 0 ? "md:aspect-[5/3]" : "md:aspect-auto"
              }`}
            >
              <motion.div
                initial={{ scale: 1.25 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.12,
                }}
                className="absolute inset-0"
              >
                <Image
                  src={d.src}
                  alt={d.name}
                  fill
                  sizes={
                    i === 0
                      ? "(max-width: 768px) 100vw, 60vw"
                      : "(max-width: 768px) 100vw, 40vw"
                  }
                  className="object-cover"
                  priority={i === 0}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
