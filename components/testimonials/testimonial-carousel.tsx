import Image from "next/image";
import { Quote } from "lucide-react";

import { SiteIcon } from "@/lib/icon-map";

type TestimonialItem = {
  name: string;
  role: string;
  rating: number;
  quote: string;
  avatar: { src: string; alt: string; width: number; height: number };
};

export function TestimonialCarousel({ items }: { items: TestimonialItem[] }) {
  const looped = [...items, ...items];

  return (
    <div className="hide-scrollbar overflow-hidden rounded-[2rem] border border-primary/45 bg-[rgba(255,255,255,0.72)] p-3 shadow-[0_8px_30px_rgba(251,207,202,0.16)] backdrop-blur-xl sm:p-4">
      <div className="flex w-max gap-4 motion-safe:animate-marquee hover:[animation-play-state:paused]">
        {looped.map((item, index) => (
          <article
            key={`${item.name}-${index}`}
            className="flex w-[20rem] shrink-0 flex-col justify-between rounded-[1.65rem] border border-primary/45 bg-[rgba(255,255,255,0.75)] p-5 shadow-[0_8px_30px_rgba(251,207,202,0.16)] backdrop-blur-xl sm:w-[24rem]"
          >
            <div>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="relative size-14 overflow-hidden rounded-full border border-primary/45 bg-background-section">
                    <Image
                      src={item.avatar.src}
                      alt={item.avatar.alt}
                      width={item.avatar.width}
                      height={item.avatar.height}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-foreground">
                      {item.name}
                    </p>
                    <p className="text-sm text-body">{item.role}</p>
                  </div>
                </div>
                <Quote className="size-5 text-[#e687ae]" />
              </div>

              <div className="mt-5 flex items-center gap-1.5 text-[#e687ae]">
                {Array.from({ length: item.rating }).map((_, starIndex) => (
                  <SiteIcon
                    key={starIndex}
                    name="star"
                    className="size-4 fill-current"
                  />
                ))}
              </div>

              <p className="mt-5 text-sm leading-7 text-body">“{item.quote}”</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
