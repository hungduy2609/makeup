import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";

type PortfolioSectionProps = {
  data: {
    id: string;
    title: string;
    subtitle: string;
    tabs: Array<{ value: string; label: string }>;
    items: Array<{
      id: string;
      category: string;
      title: string;
      image: { src: string; alt: string; width: number; height: number };
    }>;
  };
};

export function PortfolioSection({ data }: PortfolioSectionProps) {
  return (
    <section id={data.id} className="anchor-offset section-shell">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            title={data.title}
            description={data.subtitle}
            kicker="Portfolio album"
          />
        </Reveal>
        <div className="mt-10">
          <PortfolioGrid tabs={data.tabs} items={data.items} />
        </div>
      </div>
    </section>
  );
}
