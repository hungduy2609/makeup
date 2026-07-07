"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";

type PromotionSectionProps = {
  data: {
    id: string;
    kicker: string;
    title: string;
    subtitle: string;
    originalPrice: string;
    offerPrice: string;
    badge: string;
    cta: { label: string; href: string };
  };
};

export function PromotionSection({ data }: PromotionSectionProps) {
  return (
    <section id={data.id} className="anchor-offset section-shell">
      <div className="container-shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-primary/55 bg-[linear-gradient(135deg,#fbcfca_0%,#f99ecb_60%,#ffe8f1_100%)] p-6 shadow-[0_8px_30px_rgba(251,207,202,0.24)] backdrop-blur-2xl sm:p-8 lg:p-10">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/35 blur-3xl" />
            <div className="absolute bottom-0 left-10 h-32 w-32 rounded-full bg-[#ffd4eb]/45 blur-3xl" />
            <div className="relative grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <span className="section-kicker">{data.kicker}</span>
                <h2 className="mt-5 text-4xl leading-tight sm:text-5xl">
                  {data.title}
                </h2>
                <p className="mt-3 text-xl font-medium text-[#6b4d53]">
                  {data.subtitle}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-secondary/50 bg-white/72 px-4 py-2 text-sm font-semibold text-[#8d596f] shadow-[0_8px_24px_rgba(249,158,203,0.2)]">
                  <Sparkles className="size-4" />
                  {data.badge}
                </div>
              </div>

              <div className="relative rounded-[1.75rem] border border-white/60 bg-[rgba(255,255,255,0.78)] p-6 shadow-[0_8px_30px_rgba(251,207,202,0.22)] backdrop-blur-xl sm:p-8">
                <p className="text-sm uppercase tracking-[0.24em] text-[#9f6f7b]">
                  Giá gốc
                </p>
                <p className="mt-3 text-3xl text-[#9f858c] line-through decoration-secondary/70 decoration-2 sm:text-4xl">
                  {data.originalPrice}
                </p>
                <p className="mt-6 text-sm uppercase tracking-[0.24em] text-[#9f6f7b]">
                  Ưu đãi khai trương
                </p>
                <p className="mt-3 text-5xl leading-none text-[#df669d] sm:text-6xl">
                  {data.offerPrice}
                </p>
                <p className="mt-4 max-w-sm text-sm text-muted">
                  Phù hợp cho khách muốn có layout makeup đẹp ảnh và một bộ
                  concept cuối tuần chỉn chu, nữ tính.
                </p>
                <Button asChild size="lg" className="mt-8 w-full sm:w-auto">
                  <Link href={data.cta.href}>
                    {data.cta.label}
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
