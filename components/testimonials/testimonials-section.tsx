"use client";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { TestimonialCarousel } from "@/components/testimonials/testimonial-carousel";

type TestimonialsSectionProps = {
  data: {
    id: string;
    title: string;
    subtitle: string;
    items: Array<{
      name: string;
      role: string;
      rating: number;
      quote: string;
      avatar: { src: string; alt: string; width: number; height: number };
    }>;
  };
};

export function TestimonialsSection({ data }: TestimonialsSectionProps) {
  return (
    <section
      id={data.id}
      className="anchor-offset section-shell bg-[linear-gradient(180deg,#fff7f6_0%,#ffffff_100%)]"
    >
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            title={data.title}
            description={data.subtitle}
            kicker="Testimonials"
          />
        </Reveal>
        <Reveal delay={0.08} className="mt-10">
          <TestimonialCarousel items={data.items} />
        </Reveal>
      </div>
    </section>
  );
}
