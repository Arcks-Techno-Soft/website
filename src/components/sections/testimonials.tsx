import Image from "next/image";

const reviews = [
  {
    text: "The team's expertise turned our vague ideas into a comprehensive strategy. The project exceeded expectations, showcasing their commitment to excellence and innovation.",
    author: "John M.",
    role: "Tech Lead",
    img: "/images/testimonial-1.jpg",
  },
  {
    text: "Working with them was a game-changer for our agency. They delivered innovative solutions tailored to our needs, resulting in noticeable growth and a stronger online presence.",
    author: "Sophia L.",
    role: "Agency Owner",
    img: "/images/testimonial-2.jpg",
  },
  {
    text: "Their strategic approach reshaped how we go to market. Every milestone was hit on time and the collaboration felt like an extension of our internal team.",
    author: "Michael T.",
    role: "Startup Founder",
    img: "/images/testimonial-3.jpg",
  },
  {
    text: "They delivered beyond what we scoped — thoughtful design, clean engineering, and a willingness to push back when it made the product better.",
    author: "Emma R.",
    role: "Product Manager",
    img: "/images/testimonial-4.jpg",
  },
];

export function Testimonials() {
  const loop = [...reviews, ...reviews];

  return (
    <section id="testimonials" className="mt-16 md:mt-24 py-12 md:py-20 overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-8">
        <div className="flex flex-col items-center gap-3 mb-14">
          <span className="inline-flex items-center px-2 py-1 bg-primary rounded text-white text-[13px] font-medium uppercase tracking-[1px]">
            Our Clients
          </span>
          <h2 className="text-3xl md:text-[42px] font-medium text-foreground text-center leading-[1.25]">
            Relied on by Companies{" "}
            <span className="block">Globally</span>
          </h2>
        </div>
      </div>

      <div className="pause-on-hover relative overflow-hidden">
        <div className="flex gap-6 w-max animate-marquee">
          {loop.map((review, i) => (
            <article
              key={i}
              className="shrink-0 w-[88vw] md:w-[620px] bg-primary rounded-[28px] p-4 md:p-5 flex gap-4 md:gap-6"
            >
              <div className="relative w-[42%] shrink-0 rounded-[20px] md:rounded-[24px] overflow-hidden aspect-[3/4]">
                <Image
                  src={review.img}
                  alt={review.author}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 260px, 40vw"
                />
              </div>
              <div className="flex-1 py-2 md:py-3 flex flex-col gap-4 md:gap-5 min-w-0">
                <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-primary"
                  >
                    <path
                      d="M7.5 7c-2.5 0-4.5 2-4.5 4.5V17h5.5v-5.5H5.5C5.5 10 6.5 9 7.5 9V7zm9 0c-2.5 0-4.5 2-4.5 4.5V17H17.5v-5.5h-3C14.5 10 15.5 9 16.5 9V7z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <p className="text-white text-[14px] md:text-[15px] leading-[1.55] flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="text-white/90 text-sm md:text-[15px]">
                  – {review.author}, {review.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
