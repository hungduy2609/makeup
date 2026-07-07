"use client";

import Link from "next/link";

import { SiteIcon } from "@/lib/icon-map";

type FooterProps = {
  data: {
    brand: string;
    quickLinks: Array<{ label: string; href: string }>;
    socialLinks: Array<{ label: string; href: string; icon: string }>;
  };
};

export function Footer({ data }: FooterProps) {
  return (
    <footer className="section-shell pt-0">
      <div className="container-shell">
        <div className="soft-panel overflow-hidden px-6 py-7 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <p className="font-display text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
                {data.brand}
              </p>
              <div className="h-px w-24 bg-[linear-gradient(90deg,#f99ecb,rgba(249,158,203,0))]" />
            </div>

            <div className="grid gap-8 sm:grid-cols-2 md:min-w-[28rem]">
              <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9b7371]">
                Quick Links
              </p>
              <div className="mt-4 flex flex-col gap-3">
                {data.quickLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-body hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              </div>

              <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9b7371]">
                Social Media
              </p>
              <div className="mt-4 flex flex-col gap-3">
                {data.socialLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 text-sm font-medium text-body hover:text-foreground"
                  >
                    <SiteIcon
                      name={item.icon}
                      className="size-4 text-secondary"
                    />
                    {item.label}
                  </Link>
                ))}
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
