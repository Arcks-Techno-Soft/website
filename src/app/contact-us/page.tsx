import { Contact } from "@/components/sections/contact";
import { CTA } from "@/components/sections/cta";

export const metadata = {
  title: "Contact Us | ARCKS",
  description:
    "Get in touch with ARCKS — send us a message or reach out directly via email and phone.",
};

export default function ContactUsPage() {
  return (
    <>
      <Contact />
      <CTA />
    </>
  );
}
