"use client";

import Link from "next/link";

import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { SiteIcon } from "@/lib/icon-map";

type BookingSectionProps = {
  data: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    actions: Array<{ label: string; href: string; icon: string }>;
  };
};

export function BookingSection({ data }: BookingSectionProps) {
  return (
    <section id={data.id} className="anchor-offset section-shell">
      <div className="container-shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.25rem] border border-primary/55 bg-[linear-gradient(135deg,#fbcfca_0%,#f99ecb_60%,#ffe8f1_100%)] p-6 shadow-[0_8px_30px_rgba(251,207,202,0.24)] backdrop-blur-2xl sm:p-8 lg:p-12">
            <div className="absolute -left-8 top-8 h-40 w-40 rounded-full bg-white/35 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-44 w-44 rounded-full bg-[#ffd7ec]/45 blur-3xl" />
            <div className="absolute right-24 top-16 h-28 w-28 rounded-full bg-accent-soft/35 blur-3xl" />

            <div className="relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <span className="section-kicker">Booking CTA</span>
                <h2 className="mt-5 text-4xl leading-tight sm:text-5xl lg:text-6xl">
                  {data.title}
                </h2>
                <p className="mt-4 text-xl font-medium text-[#6b4d53]">
                  {data.subtitle}
                </p>
                <p className="mt-5 max-w-xl text-base sm:text-lg">
                  {data.description}
                </p>
              </div>

              <div className="space-y-4">
                {data.actions.map((action, index) => (
                  <Reveal key={action.label} delay={index * 0.07}>
                    <Button
                      asChild
                      variant={
                        action.icon === "messenger"
                          ? "messenger"
                          : index === 0
                            ? "default"
                            : "soft"
                      }
                      size="lg"
                      className="h-auto w-full justify-between rounded-[1.6rem] px-5 py-5 text-left sm:px-6"
                    >
                      <Link
                        href={action.href}
                        target={
                          action.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          action.href.startsWith("http")
                            ? "noreferrer"
                            : undefined
                        }
                      >
                        <span className="flex items-center gap-3">
                          <span className="grid size-11 place-items-center rounded-full border border-white/65 bg-white/30 backdrop-blur-sm">
                            <SiteIcon name={action.icon} className="size-5" />
                          </span>
                          <span className="text-base sm:text-lg">
                            {action.label}
                          </span>
                        </span>
                        <span className="text-sm opacity-80">Mở nhanh</span>
                      </Link>
                    </Button>
                  </Reveal>
                ))}

              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
