import Image from "next/image";
import {
  Camera,
  Flower2,
  Gem,
  Phone,
  Sparkles,
  Star,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const tikTokPath =
  "M14.5 4.5c.7 1.2 1.8 2.2 3.1 2.8v2.2a7 7 0 0 1-4-1.3v5.9a5.3 5.3 0 1 1-5.3-5.3c.4 0 .8 0 1.2.1v2.3a2.9 2.9 0 1 0 1.8 2.7V2.5h2.3c.2.7.5 1.4.9 2Z";

const imageIcons: Record<string, { src: string; alt: string }> = {
  facebook: {
    src: "https://img.icons8.com/color/48/facebook-new.png",
    alt: "Facebook",
  },
  instagram: {
    src: "https://img.icons8.com/color/48/instagram-new--v1.png",
    alt: "Instagram",
  },
  messenger: {
    src: "https://img.icons8.com/fluency/48/facebook-messenger--v2.png",
    alt: "Messenger",
  },
};

function CustomIcon({ path, className }: { path: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-5", className)}
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}

export const iconMap: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  camera: Camera,
  flower: Flower2,
  gem: Gem,
  phone: Phone,
  star: Star,
};

export function SiteIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  if (name === "tiktok") {
    return <CustomIcon path={tikTokPath} className={className} />;
  }

  const imageIcon = imageIcons[name];
  if (imageIcon) {
    return (
      <Image
        src={imageIcon.src}
        alt={imageIcon.alt}
        width={48}
        height={48}
        className={cn("size-5 object-contain", className)}
        unoptimized
      />
    );
  }

  const Icon = iconMap[name] ?? Sparkles;
  return <Icon className={cn("size-5", className)} aria-hidden="true" />;
}
