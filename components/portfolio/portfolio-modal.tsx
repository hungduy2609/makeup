"use client";

import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

type PortfolioItem = {
  image: { src: string; alt: string; width: number; height: number };
};

export function PortfolioModal({
  item,
  open,
  onOpenChange,
}: {
  item: PortfolioItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="overflow-hidden p-3 sm:p-4">
        {item ? (
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-[1.6rem] bg-background-section">
              <div className="absolute inset-0 z-10 image-grade" />
              <Image
                src={item.image.src}
                alt={item.image.alt}
                width={item.image.width}
                height={item.image.height}
                className="max-h-[78vh] w-full object-contain"
              />
            </div>
            <DialogTitle className="sr-only">Ảnh album</DialogTitle>
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
