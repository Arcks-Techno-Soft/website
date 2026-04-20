"use client";

import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

const industries = [
  { name: "Nonprofit", color: "bg-[#ff8c66] text-white" },
  { name: "Corporate", color: "bg-[#4a90d9] text-white" },
  { name: "Startup", color: "bg-[#fe6037] text-white" },
  { name: "Small Business", color: "bg-[#90c4a8] text-[#2d5a3d]" },
  { name: "E-commerce Store", color: "bg-[#4a72b8] text-white" },
  { name: "Marketing Agency", color: "bg-[#5cb85c] text-white" },
  { name: "Consulting Firm", color: "bg-[#8bb8c4] text-white" },
  { name: "Tech Company", color: "bg-[#e8c860] text-[#5a4a1a]" },
];

export function Industries() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [started, setStarted] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(canvasRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || !canvasRef.current) return;
    if (!window.matchMedia("(min-width: 768px)").matches) return;

    const canvas = canvasRef.current;
    const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Runner } =
      Matter;

    let width = canvas.clientWidth;
    let height = canvas.clientHeight;

    const engine = Engine.create();
    engine.gravity.y = 0.45;

    const wallThickness = 200;
    const floor = Bodies.rectangle(
      width / 2,
      height + wallThickness / 2,
      width + wallThickness * 2,
      wallThickness,
      { isStatic: true },
    );
    const leftWall = Bodies.rectangle(
      -wallThickness / 2,
      height / 2,
      wallThickness,
      height * 3,
      { isStatic: true },
    );
    const rightWall = Bodies.rectangle(
      width + wallThickness / 2,
      height / 2,
      wallThickness,
      height * 3,
      { isStatic: true },
    );
    World.add(engine.world, [floor, leftWall, rightWall]);

    const pills = pillRefs.current
      .map((ref, i) => {
        if (!ref) return null;
        const w = ref.offsetWidth;
        const h = ref.offsetHeight;
        // Narrow the spawn band so pills pile up into ~2 rows instead of a line.
        const bandWidth = Math.min(width * 0.55, 640);
        const bandStart = (width - bandWidth) / 2;
        const x = bandStart + (bandWidth / industries.length) * i + w / 2;
        const y = -120 - i * 110;
        const body = Bodies.rectangle(x, y, w, h, {
          chamfer: { radius: h / 2 },
          restitution: 0.35,
          friction: 0.4,
          frictionAir: 0.01,
          density: 0.002,
          angle: (Math.random() - 0.5) * 0.6,
        });
        return { ref, body, w, h };
      })
      .filter(Boolean) as Array<{
      ref: HTMLDivElement;
      body: Matter.Body;
      w: number;
      h: number;
    }>;
    World.add(
      engine.world,
      pills.map((p) => p.body),
    );

    const mouse = Mouse.create(canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });
    World.add(engine.world, mouseConstraint);

    // Let native scroll/touch still work on the canvas wrapper
    // (Matter attaches non-passive listeners; we don't re-block them here)

    const runner = Runner.create();
    Runner.run(runner, engine);

    let raf = 0;
    const sync = () => {
      pills.forEach(({ ref, body, w, h }) => {
        ref.style.transform = `translate(${body.position.x - w / 2}px, ${
          body.position.y - h / 2
        }px) rotate(${body.angle}rad)`;
      });
      raf = requestAnimationFrame(sync);
    };
    sync();
    // Defer visibility so we don't sync-setState in the effect body (cascading renders).
    const readyRaf = requestAnimationFrame(() => setReady(true));

    const handleResize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      Body.setPosition(floor, {
        x: width / 2,
        y: height + wallThickness / 2,
      });
      Body.setPosition(rightWall, {
        x: width + wallThickness / 2,
        y: height / 2,
      });
      Body.setPosition(leftWall, {
        x: -wallThickness / 2,
        y: height / 2,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(readyRaf);
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
      Runner.stop(runner);
      World.clear(engine.world, false);
      Engine.clear(engine);
    };
  }, [started]);

  return (
    <section className="relative px-8 py-12 md:py-0 bg-[#dbedfa]">
      <div className="max-w-[1140px] mx-auto">
        {/* Mobile: static wrap layout (no physics) */}
        <div className="md:hidden">
          <div className="flex flex-col items-center gap-3 mb-10">
            <span className="inline-flex items-center px-2 py-1 bg-primary rounded text-white text-[13px] font-medium uppercase tracking-[1px]">
              Industries We Serve
            </span>
            <h2 className="text-3xl font-medium text-foreground text-center leading-[1.25]">
              Industry-Specific Expertise to{" "}
              <span className="block">Drive Your Success</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {industries.map((ind, i) => (
              <span
                key={i}
                className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap ${ind.color}`}
              >
                {ind.name}
              </span>
            ))}
          </div>
        </div>

        {/* Desktop: physics-driven falling pills */}
        <div
          ref={canvasRef}
          className="hidden md:block relative w-full h-[400px] overflow-hidden touch-none"
        >
          <div className="absolute top-8 md:top-12 left-0 right-0 z-10 pointer-events-none flex flex-col items-center gap-3 px-4">
            <span className="inline-flex items-center px-2 py-1 bg-primary rounded text-white text-[13px] font-medium uppercase tracking-[1px]">
              Industries We Serve
            </span>
            <h2 className="text-3xl md:text-[42px] font-medium text-foreground text-center leading-[1.25]">
              Industry-Specific Expertise to{" "}
              <span className="block">Drive Your Success</span>
            </h2>
          </div>

          {industries.map((ind, i) => (
            <div
              key={i}
              ref={(el) => {
                pillRefs.current[i] = el;
              }}
              className={`absolute top-0 left-0 z-20 px-7 py-4 rounded-full text-lg font-medium select-none cursor-grab active:cursor-grabbing whitespace-nowrap ${ind.color}`}
              style={{
                willChange: "transform",
                opacity: ready ? 1 : 0,
              }}
            >
              {ind.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
