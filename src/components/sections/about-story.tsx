export function AboutStory() {
  return (
    <section className="py-4 md:py-8 px-8">
      <div className="max-w-[1140px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
        <div className="flex-1 flex flex-col gap-6 items-start text-left">
          <span className="inline-flex items-center px-2 py-1 bg-primary rounded text-white text-[13px] font-medium uppercase tracking-[1px]">
            Our Story
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[55px] font-medium text-foreground leading-[1.1]">
            A Story of Passion, Growth, and Dedication
          </h2>
          <p className="max-w-[560px] text-foreground text-base md:text-[17px] leading-7">
            What began as a humble undertaking has grown into a trusted partner
            for modern businesses. From the start we have believed that great
            software isn&apos;t just about code — it&apos;s about understanding
            people, processes, and the goals that move a company forward.
          </p>
          <p className="max-w-[560px] text-foreground text-base md:text-[17px] leading-7">
            Today, ARCKS works alongside ambitious teams to design, build, and
            ship products that make work feel lighter and growth feel natural.
            Every project is rooted in close partnership and a relentless focus
            on outcomes that matter.
          </p>
        </div>

        <div className="w-full lg:w-[420px] shrink-0">
          <blockquote className="bg-accent rounded-2xl p-8 md:p-10 border border-border h-full flex flex-col justify-between gap-10">
            <p className="text-foreground text-xl md:text-[26px] font-medium leading-[1.3]">
              &ldquo;Impressive feats are erected on solid confidence,
              integrated teamwork, and a refusal to settle for ordinary.&rdquo;
            </p>
            <div className="hidden lg:flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white text-base font-medium">A</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-foreground text-[15px] font-medium">
                  ARCKS Team
                </span>
                <span className="text-muted-foreground text-[13px]">
                  Founders
                </span>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
