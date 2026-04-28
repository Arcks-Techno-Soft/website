import { notFound } from "next/navigation";
import { CTA } from "@/components/sections/cta";
import { ServiceDetail } from "@/components/sections/service-detail";
import { RelatedServices } from "@/components/sections/related-services";
import {
  getServiceBySlug,
  pickRandomOtherServices,
  services,
} from "@/lib/services";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service not found | ARCKS" };
  return {
    title: `${service.title} | ARCKS`,
    description: service.tagline,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const others = pickRandomOtherServices(slug, 2);

  return (
    <>
      <ServiceDetail service={service} />
      <RelatedServices services={others} />
      <CTA />
    </>
  );
}
