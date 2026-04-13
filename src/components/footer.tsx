import Link from "next/link";

export function Footer() {
  const pageLinks = ["Home", "Service", "About Us", "Case Study", "Contact", "404"];
  const socialLinks = ["Instagram", "Linkedin", "Twitter", "Facebook"];

  return (
    <footer className="pt-10 pb-24 px-8 overflow-hidden">
      <div className="max-w-[1140px] mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-5 pt-12 mb-8">
          {/* Contact Info */}
          <div className="flex-1 flex flex-col gap-2">
            <p className="text-foreground text-base font-medium leading-7">Email Us</p>
            <p className="text-foreground text-3xl md:text-[40px] font-medium leading-tight">
              Hello@flexio.co
            </p>
            <p className="text-foreground text-sm font-normal leading-relaxed mt-1">
              &copy; 2024 Design &amp; Developed Amani
            </p>
            <Link href="#" className="text-foreground text-[15px] font-medium mt-1">
              Privacy Policy
            </Link>
          </div>

          {/* Link Columns */}
          <div className="flex-1 flex gap-6">
            {/* Page */}
            <div className="flex-1 flex flex-col gap-2">
              <p className="text-foreground text-base font-medium leading-7">Page</p>
              <div className="flex flex-col">
                {pageLinks.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    className="text-foreground text-[15px] font-medium py-1 hover:text-primary transition-colors"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="flex-1 flex flex-col gap-2">
              <p className="text-foreground text-base font-medium leading-7">Social</p>
              <div className="flex flex-col">
                {socialLinks.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    className="text-foreground text-[15px] font-medium py-1 hover:text-primary transition-colors"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>

            {/* Studio */}
            <div className="flex-1 flex flex-col gap-2">
              <p className="text-foreground text-base font-medium leading-7">Studio</p>
              <p className="text-foreground text-base font-normal leading-7">
                201M Suite, N Broad<br />
                St 651, Middletown,<br />
                Delaware, USA
              </p>
            </div>
          </div>
        </div>

        {/* Large Logo */}
        <div className="flex items-center gap-4 mt-8">
          {/* Logo Icon */}
          <div className="relative w-[80px] h-[80px] md:w-[120px] md:h-[120px]">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-foreground rounded-b-full" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[62%] h-1/2 bg-primary rounded-t-full" />
          </div>
          {/* Logo Text */}
          <span className="text-[80px] md:text-[140px] lg:text-[180px] font-medium text-foreground leading-none tracking-tight">
            Flexio
          </span>
        </div>
      </div>
    </footer>
  );
}
