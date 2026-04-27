"use client";

import type { ReactNode } from "react";

const contactInfo: { title: string; value: string; icon: ReactNode }[] = [
  {
    title: "Email",
    value: "arckstechnosoft@gmail.com",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6l9-6" />
      </svg>
    ),
  },
  {
    title: "Get support",
    value: "Chat with us",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
        <path d="M15 4h5v5" />
        <path d="M15 9l5-5" />
      </svg>
    ),
  },
  {
    title: "Address",
    value: "Middletown, Delaware, USA",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 21s7-7 7-12a7 7 0 10-14 0c0 5 7 12 7 12z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative pt-[180px] pb-[80px] md:pb-[120px] px-8"
    >
      <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-12 lg:gap-16">
        {/* Left: heading + contact cards */}
        <div className="flex flex-col gap-10 md:gap-12">
          <div className="flex flex-col gap-5 items-center lg:items-start">
            <span className="inline-flex items-center px-2 py-1 bg-primary rounded text-white text-[13px] font-medium uppercase tracking-[1px]">
              Contact Us
            </span>
            <h1 className="text-center lg:text-left text-5xl sm:text-6xl md:text-[80px] lg:text-[96px] font-medium text-foreground leading-[1] tracking-tight">
              Contact Us
            </h1>
            <p className="text-center lg:text-left max-w-[480px] text-foreground text-base md:text-[17px] leading-7 mt-3">
              For inquiries or support related to ARCKS, please contact us
              using the form on this page or use the provided email address and
              phone number to contact us directly.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-4 bg-[#dbedfa] rounded-full p-3 pr-6"
              >
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shrink-0 text-white">
                  {item.icon}
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-foreground text-[17px] md:text-[19px] font-medium">
                    {item.title}
                  </span>
                  <span className="text-foreground/80 text-[14px] md:text-[15px] mt-1">
                    {item.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-[#dbedfa] rounded-[24px] p-6 md:p-8 flex flex-col gap-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field
              label="First Name"
              name="firstName"
              placeholder="First name"
              required
            />
            <Field
              label="Last Name"
              name="lastName"
              placeholder="Last name"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="Your email"
              required
            />
            <Field
              label="Phone Number"
              name="phone"
              type="tel"
              placeholder="Your phone"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-foreground text-[14px] font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message"
              rows={6}
              className="w-full bg-white rounded-2xl px-4 py-3 text-foreground text-[14px] placeholder:text-foreground/40 outline-none focus:ring-2 focus:ring-primary/40 transition-shadow resize-y"
            />
          </div>

          <button
            type="submit"
            className="group relative block h-[48px] w-full bg-primary rounded-full overflow-hidden mt-1"
          >
            <div className="flex flex-col motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out group-hover:motion-safe:-translate-y-1/2">
              <span className="h-[48px] flex items-center justify-center text-primary-foreground text-[14px] font-medium">
                Submit
              </span>
              <span
                aria-hidden="true"
                className="h-[48px] flex items-center justify-center text-primary-foreground text-[14px] font-medium"
              >
                Submit
              </span>
            </div>
          </button>

          <p className="text-center text-foreground/80 text-[13px]">
            By submitting this form you agree to our friendly{" "}
            <a href="#" className="underline hover:text-primary transition-colors">
              Privacy Policy
            </a>
            .
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-foreground text-[14px] font-medium"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full h-[46px] bg-white rounded-full px-4 text-foreground text-[14px] placeholder:text-foreground/40 outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
      />
    </div>
  );
}
