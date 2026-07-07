import fs from "node:fs/promises";
import path from "node:path";

import sharp from "sharp";

export type NavItem = {
  label: string;
  href: string;
};

export type LinkItem = {
  label: string;
  href: string;
  icon: string;
};

export type ImageItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const socialLinks: LinkItem[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/bilunbibeo",
    icon: "facebook",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@binun_ta",
    icon: "tiktok",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/binunt.a/",
    icon: "instagram",
  },
];

const bestImagesDirectory = path.join(
  process.cwd(),
  "public",
  "images",
  "bests"
);
const supportedImageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);

async function getBestPortfolioItems() {
  const files = (await fs.readdir(bestImagesDirectory))
    .filter((fileName) =>
      supportedImageExtensions.has(path.extname(fileName).toLowerCase())
    )
    .sort((a, b) => a.localeCompare(b, "en", { numeric: true }));

  return Promise.all(
    files.map(async (fileName, index) => {
      const displayIndex = String(index + 1).padStart(2, "0");
      const metadata = await sharp(
        path.join(bestImagesDirectory, fileName)
      ).metadata();

      return {
        id: `best-${index + 1}`,
        category: "Tất cả",
        title: `Khoảnh khắc makeup ${displayIndex}`,
        image: {
          src: `/images/bests/${fileName}`,
          alt: `Khoảnh khắc makeup trong album Bi Nùn ${displayIndex}`,
          width: metadata.width ?? 1800,
          height: metadata.height ?? 1200,
        },
      };
    })
  );
}

const siteData = {
  navItems: [
    { label: "Trang chủ", href: "#trang-chu" },
    { label: "Album", href: "#album" },
    { label: "Dịch vụ", href: "#dich-vu" },
  ] satisfies NavItem[],
  socialLinks,
  hero: {
    id: "trang-chu",
    brand: "Bi Nùn Makeup",
    tagline: "Tỏa sáng theo cách dịu dàng nhất",
    description:
      "Mỗi gương mặt đều có một nét đẹp riêng. Bi giúp bạn trở nên xinh đẹp theo cách tự nhiên nhất",
    primaryCta: {
      label: "Đặt lịch ngay",
      href: "#booking",
    },
    secondaryCta: {
      label: "Xem album",
      href: "#album",
    },
    slides: [
      {
        src: "/images/slides/avatar.jpg",
        alt: "Chân dung makeup Bi Nùn",
        width: 1200,
        height: 1500,
      },
      {
        src: "/images/slides/DSCF1174.jpg",
        alt: "Layout makeup Bi Nùn",
        width: 1200,
        height: 1500,
      },
    ],
    chips: [
      "Layout mềm mại, sáng da",
      "Tone ảnh editorial nữ tính",
      "Phù hợp đi tiệc, kỷ yếu, concept",
    ],
  },
  promotion: {
    id: "promotion",
    kicker: "Combo cuối tuần",
    title: "📸 COMBO CUỐI TUẦN",
    subtitle: "🔥 Makeup + Chụp hình",
    originalPrice: "450.000đ",
    offerPrice: "350.000đ",
    badge: "Chỉ áp dụng cho 5 slot đầu tiên",
    cta: {
      label: "Giữ slot ngay",
      href: "#booking",
    },
  },
  services: {
    id: "dich-vu",
    title: "Dịch vụ Makeup cá nhân",
    subtitle:
      "Áp dụng cho khách hàng đi chơi, dự tiệc, chụp hình, kỷ yếu hoặc lễ tốt nghiệp với layout được cá nhân hóa theo gương mặt và trang phục.",
    items: [
      {
        title: "Make-up Đi chơi / Dự tiệc",
        icon: "flower",
        accent: "Nhẹ nhàng, glow mềm, phù hợp lên hình gần",
        rows: [
          { label: "Cơ bản (Không mi)", value: "150.000đ" },
          { label: "Có gắn mi", value: "180.000đ" },
        ],
      },
      {
        title: "Make-up Chụp hình / Kỷ yếu",
        icon: "camera",
        accent: "Tập trung vào độ sắc nét khi chụp ảnh và quay video",
        rows: [
          { label: "Cơ bản (Không mi)", value: "200.000đ" },
          { label: "Có gắn mi", value: "250.000đ" },
        ],
      },
      {
        title: "Make-up Lễ tốt nghiệp",
        icon: "gem",
        accent: "Trọn gói chỉn chu để nổi bật trong ngày tốt nghiệp",
        rows: [{ label: "Trọn gói (Đã bao gồm mi)", value: "250.000đ" }],
      },
    ],
  },
  portfolio: {
    id: "album",
    title: "Một vài khoảnh khắc đẹp",
    subtitle: "Những layout makeup được Bi Nùn thực hiện.",
    tabs: [{ value: "all", label: "Tất cả" }],
    items: [],
  },
  testimonials: {
    id: "feedback",
    title: "Khách hàng nói gì về Bi Nùn",
    subtitle: "Một vài feedback từ khách hàng.",
    items: [
      {
        name: "Mỹ Linh",
        role: "Makeup kỷ yếu",
        rating: 5,
        quote:
          "Tone makeup lên hình rất xinh và trong, che khuyết điểm nhẹ mà da vẫn thoáng. Chụp ảnh cả buổi vẫn đẹp.",
        avatar: {
          src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
          alt: "Ảnh đại diện khách hàng Mỹ Linh",
          width: 300,
          height: 300,
        },
      },
      {
        name: "Gia Hân",
        role: "Makeup dự tiệc",
        rating: 5,
        quote:
          "Bi tư vấn kiểu makeup rất hợp váy và gương mặt, nhìn vừa sang vừa mềm mại. Ai cũng khen da đẹp và mắt rất cuốn.",
        avatar: {
          src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=300&q=80",
          alt: "Ảnh đại diện khách hàng Gia Hân",
          width: 300,
          height: 300,
        },
      },
      {
        name: "Tường Vy",
        role: "Makeup concept",
        rating: 5,
        quote:
          "Điểm mình thích nhất là makeup lên ảnh rất có chiều sâu, không bị dày phấn. Cảm giác được chăm chút cực kỳ kỹ.",
        avatar: {
          src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=300&q=80",
          alt: "Ảnh đại diện khách hàng Tường Vy",
          width: 300,
          height: 300,
        },
      },
      {
        name: "Khánh Ngân",
        role: "Makeup tốt nghiệp",
        rating: 5,
        quote:
          "Lên layout rất nhanh nhưng vẫn chỉn chu. Hôm tốt nghiệp di chuyển nhiều mà makeup vẫn bền và chụp hình siêu ăn ảnh.",
        avatar: {
          src: "https://images.unsplash.com/photo-1542204625-de293a2f8ff2?auto=format&fit=crop&w=300&q=80",
          alt: "Ảnh đại diện khách hàng Khánh Ngân",
          width: 300,
          height: 300,
        },
      },
    ],
  },
  booking: {
    id: "booking",
    title: "Sẵn sàng tỏa sáng?",
    subtitle: "",
    description:
      "Nhắn Bi Nùn để giữ slot sớm, nhận tư vấn tone makeup theo outfit và thống nhất lịch phù hợp cho buổi đi chơi, dự tiệc hoặc chụp hình của bạn.",
    primary: {
      label: "Xem lịch",
      href: "#booking",
      icon: "sparkles",
    },
    actions: [
      {
        label: "Messenger",
        href: "https://www.facebook.com/bilunbibeo",
        icon: "messenger",
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/binunt.a/",
        icon: "instagram",
      },
      {
        label: "Gọi ngay",
        href: "#booking",
        icon: "phone",
      },
    ],
    mobileActions: [
      {
        label: "Messenger",
        href: "https://www.facebook.com/bilunbibeo",
        icon: "messenger",
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/binunt.a/",
        icon: "instagram",
      },
      {
        label: "Call",
        href: "#booking",
        icon: "phone",
      },
    ],
  },
  footer: {
    brand: "Bi Nùn Makeup",
    quickLinks: [
      { label: "Trang chủ", href: "#trang-chu" },
      { label: "Album", href: "#album" },
      { label: "Dịch vụ", href: "#dich-vu" },
    ],
    socialLinks,
  },
};

export async function getSiteData() {
  return {
    ...siteData,
    portfolio: {
      ...siteData.portfolio,
      items: await getBestPortfolioItems(),
    },
  };
}
