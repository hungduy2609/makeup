"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { SiteIcon } from "@/lib/icon-map";

type HeroSectionProps = {
  data: {
    id: string;
    brand: string;
    tagline: string;
    description: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    slides: Array<{ src: string; alt: string; width: number; height: number }>;
    chips: string[];
  };
  socialLinks: Array<{ label: string; href: string; icon: string }>;
};

export function HeroSection({ data, socialLinks }: HeroSectionProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const brandTitle = data.brand.replace(/\s*Makeup$/u, "").trim();
  const statCards = [
    {
      title: "Combo cuối tuần 350.000đ",
      caption: "Ưu đãi bridal glow giới hạn cho lịch hẹn cuối tuần.",
    },
  ];

  useEffect(() => {
    if (data.slides.length < 2) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % data.slides.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [data.slides.length]);

  return (
    <section
      id={data.id}
      className="anchor-offset relative overflow-hidden pt-24 sm:pt-28 lg:pt-22 xl:pt-24 [@media(min-width:1024px)_and_(max-height:860px)]:pt-20"
    >
      <div className="absolute inset-x-0 top-20 -z-20 h-[32rem] bg-[radial-gradient(circle_at_12%_22%,rgba(251,207,202,0.55),transparent_30%),radial-gradient(circle_at_86%_16%,rgba(249,158,203,0.3),transparent_24%),radial-gradient(circle_at_75%_72%,rgba(251,207,202,0.28),transparent_20%)]" />
      <div className="absolute left-[8%] top-[18rem] -z-10 h-24 w-24 rounded-full bg-[#fbcfca]/50 blur-3xl" />
      <div className="absolute right-[10%] top-[10rem] -z-10 h-28 w-28 rounded-full bg-[#f99ecb]/30 blur-3xl" />

      <div className="container-shell flex min-h-[calc(100svh-6.5rem)] items-center py-4 sm:min-h-[calc(100svh-7.25rem)] sm:py-5 lg:min-h-[calc(100svh-6.8rem)] lg:py-4 xl:min-h-[calc(100svh-7rem)] xl:py-5 [@media(min-width:1024px)_and_(max-height:860px)]:min-h-[calc(100svh-6.1rem)] [@media(min-width:1024px)_and_(max-height:860px)]:py-3">
        <div className="relative isolate w-full overflow-hidden rounded-[2.75rem] border border-[#f4d8d5] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,247,246,0.94))] px-5 py-5 shadow-[0_28px_100px_rgba(226,170,178,0.24)] sm:px-7 sm:py-6 lg:px-8 lg:py-5 xl:px-10 xl:py-6 [@media(min-width:1024px)_and_(max-height:860px)]:px-8 [@media(min-width:1024px)_and_(max-height:860px)]:py-5">
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(251,207,202,0.3),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(249,158,203,0.2),transparent_22%)]" />
          <div className="absolute left-8 top-10 h-20 w-20 rounded-full border border-white/60 bg-white/45 blur-2xl" />
          <div className="absolute right-10 top-16 h-28 w-28 rounded-full bg-[#fbcfca]/30 blur-3xl" />
          <div className="absolute bottom-12 left-[48%] h-32 w-32 rounded-full bg-[#f99ecb]/20 blur-3xl" />

          <span className="absolute left-[6%] top-[12%] h-3 w-3 rotate-45 rounded-[0.35rem] bg-white/80 shadow-[0_0_20px_rgba(249,158,203,0.28)]" />
          <span className="absolute right-[18%] top-[14%] h-2.5 w-2.5 rotate-45 rounded-[0.35rem] bg-[#f99ecb]/55 shadow-[0_0_18px_rgba(249,158,203,0.28)]" />
          <span className="absolute left-[10%] bottom-[18%] h-2.5 w-2.5 rotate-45 rounded-[0.35rem] bg-[#fbcfca]/75 shadow-[0_0_18px_rgba(251,207,202,0.24)]" />
          <span className="absolute right-[8%] bottom-[26%] h-3 w-3 rotate-45 rounded-[0.35rem] bg-white/80 shadow-[0_0_20px_rgba(249,158,203,0.26)]" />

          <span className="absolute left-[14%] top-[38%] h-8 w-5 -rotate-12 rounded-[100%_0_100%_0] bg-[#fbcfca]/35 blur-[1px]" />
          <span className="absolute right-[12%] top-[34%] h-7 w-4 rotate-[22deg] rounded-[100%_0_100%_0] bg-[#f99ecb]/28 blur-[1px]" />
          <span className="absolute right-[20%] bottom-[16%] h-8 w-5 rotate-[10deg] rounded-[100%_0_100%_0] bg-[#fbcfca]/30 blur-[1px]" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.84fr)] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(390px,0.88fr)] xl:gap-10 [@media(min-width:1024px)_and_(max-height:860px)]:gap-7">
            <div className="relative z-10 max-w-2xl">
              <Reveal>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-3 rounded-full border border-[#f3d7d3] bg-white/85 px-4 py-2 shadow-[0_10px_30px_rgba(251,207,202,0.14)] backdrop-blur-xl">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#f99ecb] shadow-[0_0_18px_rgba(249,158,203,0.65)]" />
                    <span className="font-playfair text-sm font-semibold uppercase tracking-[0.26em] text-[#8e646b] sm:text-[0.85rem]">
                      {data.brand}
                    </span>
                  </div>
                  <span className="section-kicker bg-[#fff8f7] text-[#a16d75]">
                    Ưu đãi khai trương
                  </span>
                </div>
              </Reveal>

              <Reveal
                delay={0.05}
                className="mt-6 sm:mt-7 lg:mt-5 xl:mt-6 [@media(min-width:1024px)_and_(max-height:860px)]:mt-5"
              >
                <h1 className="text-balance leading-[0.82] text-[#5a3940]">
                  <span className="font-playfair block text-[clamp(3rem,7vw,5.6rem)] font-semibold tracking-[-0.05em] lg:text-[clamp(2.8rem,5.2vw,4.85rem)] xl:text-[clamp(3rem,5.4vw,5.15rem)] [@media(min-width:1024px)_and_(max-height:860px)]:text-[clamp(2.55rem,5.7vw,4.7rem)]">
                    {brandTitle}
                  </span>
                  <span className="text-shadow-soft font-script -mt-1 block pl-1 text-[clamp(3.6rem,8.6vw,6.15rem)] leading-none text-[#f08fbe] lg:text-[clamp(3.15rem,6.1vw,5.25rem)] xl:text-[clamp(3.35rem,6.2vw,5.55rem)] [@media(min-width:1024px)_and_(max-height:860px)]:text-[clamp(3rem,6.7vw,5.15rem)]">
                    Makeup
                  </span>
                </h1>
              </Reveal>

              <Reveal
                delay={0.1}
                className="mt-4 sm:mt-5 lg:mt-3 xl:mt-4 [@media(min-width:1024px)_and_(max-height:860px)]:mt-3"
              >
                <p className="max-w-xl font-playfair text-[1.28rem] italic leading-relaxed text-[#8f6168] sm:text-[1.6rem] lg:text-[1.42rem] xl:text-[1.56rem] [@media(min-width:1024px)_and_(max-height:860px)]:text-[1.4rem] [@media(min-width:1024px)_and_(max-height:860px)]:leading-normal">
                  {data.tagline}
                </p>
              </Reveal>

              <Reveal
                delay={0.15}
                className="mt-4 lg:mt-3 xl:mt-4 [@media(min-width:1024px)_and_(max-height:860px)]:mt-3"
              >
                <p className="max-w-xl text-[0.95rem] leading-7 text-[#826d71] sm:text-base lg:text-[0.94rem] lg:leading-6 xl:text-[0.98rem] xl:leading-7 [@media(min-width:1024px)_and_(max-height:860px)]:text-[0.95rem] [@media(min-width:1024px)_and_(max-height:860px)]:leading-6">
                  {data.description}
                </p>
              </Reveal>

              <Reveal
                delay={0.2}
                className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row lg:mt-5 xl:mt-6 [@media(min-width:1024px)_and_(max-height:860px)]:mt-5"
              >
                <Button
                  asChild
                  size="lg"
                  className="h-13 rounded-full bg-[linear-gradient(135deg,#fbcfca,#f99ecb)] px-8 text-[#633f46] shadow-[0_18px_40px_rgba(249,158,203,0.28)] hover:shadow-[0_22px_48px_rgba(249,158,203,0.34)] [@media(min-width:1024px)_and_(max-height:860px)]:h-11"
                >
                  <Link href={data.primaryCta.href}>
                    {data.primaryCta.label}
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="h-13 rounded-full border-[#efcecf] bg-white/80 px-8 text-[#7f5a62] shadow-[0_14px_34px_rgba(251,207,202,0.16)] backdrop-blur-xl hover:border-[#f99ecb]/50 hover:bg-white [@media(min-width:1024px)_and_(max-height:860px)]:h-11"
                >
                  <Link href={data.secondaryCta.href}>
                    {data.secondaryCta.label}
                  </Link>
                </Button>
              </Reveal>

              <Reveal
                delay={0.25}
                className="mt-6 grid gap-3 sm:mt-7 sm:grid-cols-2 lg:mt-5 xl:mt-6 [@media(min-width:1024px)_and_(max-height:860px)]:mt-5"
              >
                {statCards.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.45rem] border border-white/70 bg-white/72 px-4 py-3.5 shadow-[0_16px_38px_rgba(251,207,202,0.18)] backdrop-blur-xl [@media(min-width:1024px)_and_(max-height:860px)]:py-3"
                  >
                    <p className="font-playfair text-[1.08rem] font-semibold text-[#6f4d54] sm:text-[1.16rem]">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[#9a7c81] sm:text-sm sm:leading-6 [@media(min-width:1024px)_and_(max-height:860px)]:hidden">
                      {item.caption}
                    </p>
                  </div>
                ))}
              </Reveal>

              <Reveal
                delay={0.3}
                className="mt-6 flex flex-wrap items-center gap-3 sm:mt-7 lg:mt-5 xl:mt-6 [@media(min-width:1024px)_and_(max-height:860px)]:mt-5"
              >
                {socialLinks.map((item) => (
                  <Button
                    asChild
                    variant="soft"
                    size="icon"
                    key={item.label}
                    className="h-14 w-14 rounded-full border border-[#efc5d2] bg-[#fff1f6] text-[#b84f86] shadow-[0_12px_28px_rgba(251,207,202,0.16)] hover:border-[#de8cb2] hover:bg-[#ffe4ef] hover:text-[#963566] lg:h-16 lg:w-16"
                  >
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                    >
                      <SiteIcon name={item.icon} className="size-7 lg:size-8" />
                      <span className="sr-only">{item.label}</span>
                    </Link>
                  </Button>
                ))}
              </Reveal>
            </div>

            <Reveal
              delay={0.12}
              className="relative mx-auto w-full max-w-[30rem] lg:max-w-[28rem] xl:max-w-[30rem] [@media(min-width:1024px)_and_(max-height:860px)]:max-w-[27rem]"
            >
              <div className="absolute inset-x-8 top-10 h-[82%] bg-[radial-gradient(circle_at_center,rgba(249,158,203,0.34),rgba(251,207,202,0.18),transparent_74%)] blur-3xl" />
              <div className="absolute -left-2 top-16 h-24 w-24 rounded-full bg-[#fbcfca]/55 blur-2xl" />
              <div className="absolute right-4 top-10 h-28 w-28 rounded-full bg-[#f99ecb]/30 blur-3xl" />

              <div className="relative animate-float [animation-duration:8s]">
                <div className="relative overflow-hidden rounded-[2.4rem] border-[6px] border-white bg-[linear-gradient(160deg,rgba(255,255,255,0.92),rgba(255,247,246,0.76))] p-[0.4rem] shadow-[0_34px_90px_rgba(231,173,182,0.34),0_0_0_1px_rgba(255,255,255,0.55)] sm:rounded-[2.8rem] sm:p-[0.45rem]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(251,207,202,0.3),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.28),rgba(255,255,255,0.05))]" />

                  <div className="relative h-[23rem] overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),rgba(255,247,246,0.65)_34%,rgba(249,158,203,0.35)_100%)] sm:h-[28rem] sm:rounded-[2.35rem] lg:h-[min(56svh,31rem)] xl:h-[min(60svh,34rem)] [@media(min-width:1024px)_and_(max-height:860px)]:h-[min(50svh,27rem)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_22%,rgba(255,255,255,0.72),transparent_20%),radial-gradient(circle_at_72%_18%,rgba(249,158,203,0.24),transparent_18%),radial-gradient(circle_at_78%_78%,rgba(251,207,202,0.28),transparent_26%)]" />
                    <div className="absolute left-[10%] top-[14%] h-14 w-9 -rotate-[24deg] rounded-[100%_0_100%_0] bg-white/55 blur-[1px]" />
                    <div className="absolute right-[12%] top-[22%] h-10 w-6 rotate-[20deg] rounded-[100%_0_100%_0] bg-[#fbcfca]/36 blur-[1px]" />
                    <div className="absolute right-[18%] bottom-[20%] h-16 w-10 rotate-[16deg] rounded-[100%_0_100%_0] bg-[#f99ecb]/26 blur-[1px]" />

                    {data.slides.map((slide, index) => (
                      <div
                        key={`${slide.src}-${index}`}
                        className={`absolute inset-0 transition-opacity duration-[1400ms] ${
                          index === activeSlide ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <Image
                          src={slide.src}
                          alt={slide.alt}
                          fill
                          priority={index === 0}
                          sizes="(min-width: 1280px) 42rem, (min-width: 1024px) 46vw, 100vw"
                          className="object-cover object-center scale-[1.04] saturate-[1.02]"
                        />
                      </div>
                    ))}

                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0)_24%,rgba(255,247,246,0.08)_50%,rgba(255,247,246,0.18)_100%)]" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/70 bg-white/72 px-3 py-2 shadow-[0_14px_30px_rgba(251,207,202,0.16)] backdrop-blur-xl">
                  {data.slides.map((slide, index) => (
                    <button
                      type="button"
                      key={slide.src}
                      aria-label={`Chuyển tới ảnh ${index + 1}`}
                      onClick={() => setActiveSlide(index)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        index === activeSlide
                          ? "w-7 bg-[#f08fbe]"
                          : "w-2.5 bg-[#fbcfca]"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
