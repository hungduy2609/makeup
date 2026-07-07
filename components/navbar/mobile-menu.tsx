"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

type MobileMenuProps = {
  navItems: Array<{ label: string; href: string }>;
  bookingHref: string;
};

export function MobileMenu({ navItems, bookingHref }: MobileMenuProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="soft" size="icon" className="md:hidden">
          <Menu className="size-5" />
          <span className="sr-only">Mở menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col gap-10">
        <div className="space-y-3 pr-10">
          <p className="section-kicker">Bi Nùn Makeup</p>
          <h2 className="text-3xl leading-tight">
            Menu điều hướng nhẹ nhàng và tập trung vào booking.
          </h2>
          <p className="text-sm text-muted">
            Điều hướng nhanh đến album, dịch vụ và khu vực đặt lịch để giữ slot
            phù hợp.
          </p>
        </div>
        <nav className="flex flex-col gap-3">
          {navItems.map((item) => (
            <SheetClose asChild key={item.href}>
              <Link
                href={item.href}
                className="rounded-[1.25rem] border border-primary/50 bg-[rgba(255,255,255,0.76)] px-5 py-4 text-base font-medium text-foreground shadow-[0_8px_24px_rgba(251,207,202,0.12)] backdrop-blur hover:-translate-y-0.5 hover:border-secondary"
              >
                {item.label}
              </Link>
            </SheetClose>
          ))}
        </nav>
        <SheetClose asChild>
          <Button asChild size="lg" className="w-full">
            <Link href={bookingHref}>Đặt lịch ngay</Link>
          </Button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
