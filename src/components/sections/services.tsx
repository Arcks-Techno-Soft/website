"use client";

import Image from "next/image";
import { motion } from "motion/react";

const services = [
  {
    title: "Custom software development",
    desc: "Tailor-made applications built to your exact requirements — from architecture to deployment.",
    img: "/images/service-1.jpg",
  },
  {
    title: "Mobile & web app development",
    desc: "Responsive web apps and native or cross-platform mobile experiences users love.",
    img: "/images/service-2.jpg",
  },
  {
    title: "Cloud & DevOps solutions",
    desc: "Scalable cloud architecture, CI/CD pipelines, and reliable infrastructure to ship faster.",
    img: "/images/service-3.jpg",
  },
  {
    title: "AI-First Development ",
    desc: "Designing and building products with AI at the core — from LLM integrations to intelligent features that make software smarter from day one.",
    img: "/images/service-1.jpg",
  },
  {
    title: "AI Agents & Automation",
    desc: "Creating autonomous AI agents and workflow automations that handle repetitive tasks, streamline operations, and reduce manual effort.",
    img: "/images/service-2.jpg",
  },
  {
    title: "SaaS & Product Engineering ",
    desc: "End-to-end development of scalable SaaS platforms and digital products, built for growth, reliability, and speed to market.",
    img: "/images/service-3.jpg",
  },
];

export function Services() {
  return (
    <section id="services" className="py-12 md:py-20 px-8">
      <div className="max-w-[1140px] mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-center gap-3 mb-14">
          <span className="inline-flex items-center px-3 py-1 bg-primary rounded text-white text-[13px] font-medium uppercase tracking-[1px]">
            Our Service
          </span>
          <h2 className="text-3xl md:text-[42px] font-medium text-foreground text-center leading-[1.25]">
            Our Expert Services to <span className="block">Drive Growth</span>
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <article
              key={service.title}
              className="group relative rounded-[20px] overflow-hidden aspect-[4/5] text-white"
            >
              {/* Image fills the whole card, with both scroll-zoom-out and hover-zoom-in */}
              <motion.div
                initial={{ scale: 1.4 }}
                whileInView={{ scale: 1 }}
                viewport={{
                  once: true,
                  amount: 0.2,
                  margin: "0px 0px -10% 0px",
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.12,
                }}
                className="absolute inset-0"
              >
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out group-hover:motion-safe:scale-110"
                />
              </motion.div>

              {/* Dark gradient at top + bottom for text legibility; middle stays clear */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-black/75 pointer-events-none"
              />

              {/* Top overlay: title + plus icon */}
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-5">
                <h3 className="text-lg font-medium">{service.title}</h3>
                <button
                  aria-label={`Open ${service.title} details`}
                  className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors shrink-0 backdrop-blur-sm"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M7 2.5V11.5M2.5 7H11.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Bottom overlay: description */}
              <p className="absolute bottom-0 left-0 right-0 p-5 text-white/90 text-sm leading-relaxed">
                {service.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
