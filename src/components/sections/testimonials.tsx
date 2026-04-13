import Image from "next/image";

export function Testimonials() {
  const reviews = [
    {
      text: "The team's expertise turned our vague ideas into a comprehensive strategy. The project exceeded expectations, showcasing their commitment to excellence and innovation.",
      author: "John M.",
      role: "Tech Lead",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
    {
      text: "Working with them was a game-changer for our agency. They delivered innovative solutions tailored to our needs, resulting in noticeable growth and a stronger online presence.",
      author: "Sophia L.",
      role: "Agency Owner",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    },
  ];

  return (
    <section className="py-24 md:py-32 px-8">
      <div className="max-w-[1140px] mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-center gap-3 mb-14">
          <span className="inline-flex items-center px-2 py-1 bg-primary rounded text-white text-[13px] font-medium uppercase tracking-[1px]">
            Our Clients
          </span>
          <h2 className="text-3xl md:text-[42px] font-medium text-foreground text-center leading-[1.25]">
            Relied on by Companies{" "}
            <span className="block">Globally</span>
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-primary rounded-[20px] p-8 md:p-10 flex flex-col"
            >
              {/* Star rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, idx) => (
                  <svg key={idx} width="20" height="20" viewBox="0 0 20 20" fill="white">
                    <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.7l5.34-.78L10 1z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-white text-lg md:text-xl leading-relaxed mb-8 flex-1">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={review.img}
                    alt={review.author}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="text-white font-medium">{review.author}, {review.role}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Center portrait photos */}
          <div className="hidden md:flex md:col-span-2 items-center justify-center gap-6 -mt-4">
            <div className="w-[200px] h-[250px] rounded-[20px] overflow-hidden relative">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
                alt="Professional"
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
