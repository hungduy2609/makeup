"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import { MobileMenu } from "@/components/navbar/mobile-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavbarProps = {
  navItems: Array<{ label: string; href: string }>;
  bookingHref: string;
};

export function Navbar({ navItems, bookingHref }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="container-shell pt-4">
        <div
          className={cn(
            "flex items-center justify-between rounded-full border px-4 py-3 transition-all sm:px-6 md:py-1.5",
            scrolled
              ? "border-primary/55 bg-[rgba(255,255,255,0.82)] shadow-[0_8px_30px_rgba(251,207,202,0.2)] backdrop-blur-xl"
              : "border-primary/35 bg-white/58 backdrop-blur-md"
          )}
        >
          <Link href="#trang-chu" className="flex items-center gap-3">
            <span className="grid size-12 place-items-center overflow-hidden rounded-full shadow-[0_8px_26px_rgba(251,207,202,0.28)]">
              <Image
                src="/images/logo/logo.png"
                alt="Bi Nun Makeup logo"
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            </span>
            <div>
              <p className="font-display text-xl leading-none text-foreground sm:text-2xl">
                Bi Nùn Makeup
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-body hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button asChild className="hidden md:inline-flex">
              <Link href={bookingHref}>Đặt lịch ngay</Link>
            </Button>
            <MobileMenu navItems={navItems} bookingHref={bookingHref} />
          </div>
        </div>
      </div>
    </header>
  );
}
