import Link from "next/link";

import { SiteIcon } from "@/lib/icon-map";

type StickyMobileCtaProps = {
  actions: Array<{ label: string; href: string; icon: string }>;
};

export function StickyMobileCta({ actions }: StickyMobileCtaProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-primary/45 bg-[rgba(255,255,255,0.92)] px-3 py-3 shadow-[0_-8px_30px_rgba(251,207,202,0.16)] backdrop-blur-xl md:hidden">
      <div className="mx-auto grid max-w-xl grid-cols-3 gap-2">
        {actions.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            target={action.href.startsWith("http") ? "_blank" : undefined}
            rel={action.href.startsWith("http") ? "noreferrer" : undefined}
            className="flex min-h-14 flex-col items-center justify-center gap-1 rounded-[1.25rem] border border-primary/45 bg-[rgba(255,255,255,0.84)] px-2 text-center text-xs font-semibold text-foreground shadow-[0_6px_18px_rgba(251,207,202,0.12)]"
          >
            <SiteIcon
              name={action.icon}
              className={`size-4 ${action.icon === "messenger" ? "text-accent" : "text-secondary"}`}
            />
            <span>{action.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
