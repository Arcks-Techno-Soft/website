import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "404 — Page Not Found | ARCKS",
  description: "The page you were looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="grow">
        <section className="flex items-center justify-center px-8 pt-[180px] pb-[120px] min-h-[70vh]">
          <div className="flex flex-col items-center gap-5 text-center max-w-[700px]">
            <span className="inline-flex items-center px-2 py-1 bg-primary rounded text-white text-[13px] font-medium uppercase tracking-[1px]">
              404
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-medium text-foreground leading-[1.1] tracking-tight">
              OOPS, Something went wrong.
            </h1>
            <p className="text-foreground text-base md:text-[16px] leading-7">
              We couldn&apos;t find the page you were looking for
            </p>
            <Link
              href="/"
              className="group relative block h-[50px] w-[170px] bg-primary rounded-full overflow-hidden mt-3"
            >
              <div className="flex flex-col motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out group-hover:motion-safe:-translate-y-1/2">
                <span className="h-[50px] flex items-center justify-center text-primary-foreground text-[14px] font-medium">
                  Go back home
                </span>
                <span
                  aria-hidden="true"
                  className="h-[50px] flex items-center justify-center text-primary-foreground text-[14px] font-medium"
                >
                  Go back home
                </span>
              </div>
            </Link>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
