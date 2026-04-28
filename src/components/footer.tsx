import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const pageLinks = ["Home", "Service", "About Us", "Case Study", "Contact", "404"];
  const socialLinks = ["Instagram", "Linkedin", "Twitter", "Facebook"];

  return (
    <footer className="relative z-10 -mt-5 md:-mt-[60px] bg-[#dbedfa] rounded-t-[40px] md:rounded-t-[60px] pt-16 md:pt-24 px-8 overflow-hidden">
      <div className="max-w-[1140px] mx-auto">
        {/* Top Section */}
        <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-8 pb-16">
          {/* Contact Info */}
          <div className="flex-1 flex flex-col gap-1 items-center md:items-start text-center md:text-left">
            <p className="text-foreground text-[15px] font-medium">Email Us</p>
            <p className="text-foreground text-3xl md:text-[40px] font-medium leading-[0.9] tracking-tight">
              arckstechnosoft@gmail.com
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-1 mt-2">
              <p className="text-foreground text-[15px] font-medium">&copy; 2026</p>
              <p className="text-foreground text-[15px] font-medium">
                All rights reserved.
              </p>
            </div>
            <Link
              href="#"
              className="text-foreground text-[15px] font-medium mt-4 hover:text-primary transition-colors self-center md:self-start"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Link Columns */}
          <div className="flex gap-6 md:gap-14 md:justify-end">
            {/* Page */}
            <div className="flex flex-col gap-3 md:min-w-[100px]">
              <p className="text-foreground text-[15px] font-medium">Page</p>
              <div className="flex flex-col gap-2">
                {pageLinks.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    className="text-foreground text-[15px] font-medium hover:text-primary transition-colors"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="flex flex-col gap-3 md:min-w-[100px]">
              <p className="text-foreground text-[15px] font-medium">Social</p>
              <div className="flex flex-col gap-2">
                {socialLinks.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    className="text-foreground text-[15px] font-medium hover:text-primary transition-colors"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>

            {/* Studio */}
            <div className="flex flex-col gap-3 md:min-w-[160px]">
              <p className="text-foreground text-[15px] font-medium">Studio</p>
              <p className="text-foreground text-[15px] font-medium leading-7">
                201M Suite,
                <br />
                N Broad St 651,
                <br />
                Middletown,
                <br />
                Delaware, USA
              </p>
            </div>
          </div>
        </div>

        {/* Oversized brand mark — centered, intentionally clipped at the bottom */}
        <div className="flex items-start justify-center gap-2 md:gap-4 mb-[-10px] md:mb-[-20px] lg:mb-[-30px]">
          <Image
            src="/arcks-logo.png"
            alt=""
            width={1468}
            height={1288}
            className="h-[60px] md:h-[160px] lg:h-[220px] w-auto shrink-0"
          />
          <span className="text-[60px] md:text-[160px] lg:text-[220px] font-medium text-foreground leading-none tracking-tight">
            ARCKS
          </span>
        </div>
      </div>
    </footer>
  );
}
