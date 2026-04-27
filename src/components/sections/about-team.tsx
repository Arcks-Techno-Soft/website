"use client";

import Image from "next/image";
import { motion } from "motion/react";

const team = [
  {
    name: "Amith B V",
    role: "CEO & Founder",
    img: "/images/testimonial-1.jpg",
  },
  {
    name: "Open Role",
    role: "Chief Marketing Officer",
    img: "/images/testimonial-2.jpg",
  },
  {
    name: "Open Role",
    role: "Head of Operations",
    img: "/images/testimonial-3.jpg",
  },
  {
    name: "Open Role",
    role: "Lead Developer",
    img: "/images/testimonial-4.jpg",
  },
];

export function AboutTeam() {
  return (
    <section className="py-12 md:py-20 px-8">
      <div className="max-w-[1140px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
        {/* Left: title + CTA — sticky on desktop */}
        <div className="w-full lg:w-[400px] flex flex-col gap-8 items-center lg:items-start lg:sticky lg:top-32 lg:self-start">
          <div className="flex flex-col gap-4 items-center lg:items-start">
            <span className="inline-flex items-center px-2 py-1 bg-primary rounded text-white text-[13px] font-medium uppercase tracking-[1px]">
              Meet Our Team
            </span>
            <h2 className="text-center lg:text-left text-3xl sm:text-4xl md:text-[55px] font-medium text-foreground leading-[1.1]">
              Our Dedicated Team
            </h2>
          </div>

          <a
            href="#contact"
            className="group relative block h-[50px] w-[140px] bg-primary rounded-full overflow-hidden"
          >
            <div className="flex flex-col motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out group-hover:motion-safe:-translate-y-1/2">
              <span className="h-[50px] flex items-center justify-center text-primary-foreground text-[15px] font-medium">
                Join Us
              </span>
              <span
                aria-hidden="true"
                className="h-[50px] flex items-center justify-center text-primary-foreground text-[15px] font-medium"
              >
                Join Us
              </span>
            </div>
          </a>
        </div>

        {/* Right: scrolling cards */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {team.map((m, i) => (
            <motion.article
              key={m.role}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
                delay: (i % 2) * 0.12,
              }}
              className="relative aspect-[5/6] rounded-[20px] overflow-hidden text-white"
            >
              <motion.div
                initial={{ scale: 1.25 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                  delay: (i % 2) * 0.12,
                }}
                className="absolute inset-0"
              >
                <Image
                  src={m.img}
                  alt={m.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                  className="object-cover"
                />
              </motion.div>
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-1.5">
                <h3 className="text-xl md:text-[22px] font-medium leading-tight">
                  {m.name}
                </h3>
                <p className="text-white/85 text-[14px] md:text-[15px]">
                  {m.role}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
