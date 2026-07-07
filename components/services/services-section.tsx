"use client";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceCard } from "@/components/services/service-card";

type ServicesSectionProps = {
  data: {
    id: string;
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      icon: string;
      accent: string;
      rows: Array<{ label: string; value: string }>;
    }>;
  };
};

export function ServicesSection({ data }: ServicesSectionProps) {
  return (
    <section id={data.id} className="anchor-offset section-shell">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            title={data.title}
            description={data.subtitle}
            kicker="Makeup services"
          />
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {data.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <ServiceCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
