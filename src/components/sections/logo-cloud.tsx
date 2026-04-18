type Logo = {
  name: string;
  icon: React.ReactNode;
};

// Dummy brand marks — inline SVGs so they scale crisply and pick up `currentColor`.
const logos: Logo[] = [
  {
    name: "Acme Labs",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor" aria-hidden="true">
        <path d="M14 2L26 14L14 26L2 14L14 2Z" />
      </svg>
    ),
  },
  {
    name: "Nimbus",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor" aria-hidden="true">
        <path d="M21 14a5 5 0 10-9.6-1.9A4 4 0 108 21h12a3.5 3.5 0 001-6.9 4.6 4.6 0 000-.1z" />
      </svg>
    ),
  },
  {
    name: "Vertex",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor" aria-hidden="true">
        <path d="M14 4L26 24H18L14 17L10 24H2L14 4Z" />
      </svg>
    ),
  },
  {
    name: "Lumen",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <circle cx="14" cy="14" r="4.5" fill="currentColor" />
        <path d="M14 3v2.5M14 22.5V25M3 14h2.5M22.5 14H25M6.3 6.3l1.8 1.8M19.9 19.9l1.8 1.8M6.3 21.7l1.8-1.8M19.9 8.1l1.8-1.8" />
      </svg>
    ),
  },
  {
    name: "Quantum",
    icon: (
      <svg width="30" height="28" viewBox="0 0 30 28" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <circle cx="15" cy="14" r="2" fill="currentColor" />
        <ellipse cx="15" cy="14" rx="13" ry="5" />
        <ellipse cx="15" cy="14" rx="13" ry="5" transform="rotate(60 15 14)" />
        <ellipse cx="15" cy="14" rx="13" ry="5" transform="rotate(120 15 14)" />
      </svg>
    ),
  },
  {
    name: "Stellar",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor" aria-hidden="true">
        <path d="M14 2 L16.2 11.8 L26 14 L16.2 16.2 L14 26 L11.8 16.2 L2 14 L11.8 11.8 Z" />
      </svg>
    ),
  },
];

export function LogoCloud() {
  return (
    <section className="bg-primary py-10 md:py-12 overflow-hidden">
      {/* Heading — constrained to container width */}
      <div className="max-w-[1140px] mx-auto px-8 mb-12">
        <div className="flex flex-col items-center gap-3">
          <span className="inline-flex items-center px-2 py-1 bg-white rounded text-primary text-[13px] font-medium uppercase tracking-[1px]">
            Our Client&apos;s
          </span>
          <h2 className="text-3xl md:text-[42px] font-medium text-white text-center leading-[1.25]">
            Trusted by High-Growth Startups{" "}
            <span className="block">Across Industries</span>
          </h2>
        </div>
      </div>

      {/* Logo Marquee — edge-to-edge, breaks out of the container */}
      <div className="relative overflow-hidden">
        <div
          className="animate-marquee flex items-center w-max will-change-transform"
        >
          {/* Four identical copies → -50% keyframe translates 2 copies per cycle,
              keeping the full viewport filled at all times (even at ultra-wide sizes). */}
          {[0, 1, 2, 3].map((copyIndex) => (
            <ul
              key={copyIndex}
              aria-hidden={copyIndex !== 0}
              className="flex items-center shrink-0"
            >
              {logos.map((logo) => (
                <li
                  key={logo.name}
                  className="flex items-center gap-[60px] shrink-0 pr-[60px] text-white/75"
                >
                  {/* Brand mark + wordmark */}
                  <div className="flex items-center gap-3">
                    {logo.icon}
                    <span className="text-2xl font-semibold whitespace-nowrap">
                      {logo.name}
                    </span>
                  </div>

                  {/* Divider */}
                  <span
                    aria-hidden="true"
                    className="w-px h-11 bg-white/25 block"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
