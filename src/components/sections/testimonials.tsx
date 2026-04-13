import React from 'react';

export function Testimonials() {
  const reviews = [
    {
      text: "Since partnering with Flexio, we've seen a noticeable improvement in our operational efficiency. Their team is incredibly responsive and truly understands our business goals.",
      author: "John M., Tech Lead",
      role: "GlobalTech"
    },
    {
      text: "The bespoke solutions provided have totally transformed the way we handle customer retention. The results speak for themselves. Outstanding service!",
      author: "Sophia L., Agency Owner",
      role: "Creative Studio"
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-4 md:px-8 bg-brand text-white overflow-hidden selection:bg-white selection:text-brand">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-bold tracking-wide uppercase border border-white/20">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Hear From Our Clients
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white p-10 md:p-12 rounded-[24px] shadow-2xl hover:-translate-y-2 transition-transform duration-300 relative text-foreground">
              <div className="text-brand text-6xl font-serif absolute top-6 right-8 opacity-20">"</div>
              <div className="flex gap-1 text-brand mb-8">
                {[...Array(5)].map((_, idx) => <span key={idx} className="text-2xl">★</span>)}
              </div>
              <p className="text-xl md:text-2xl leading-relaxed mb-10 font-bold tracking-tight">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-slate-200 rounded-full overflow-hidden">
                   <img src={`https://i.pravatar.cc/150?img=${i + 32}`} alt={review.author} />
                </div>
                <div>
                  <div className="font-extrabold text-lg">{review.author}</div>
                  <div className="text-muted font-medium">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
