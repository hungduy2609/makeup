import type { Metadata } from "next";
import { Be_Vietnam_Pro, Lora } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

const bodyFont = Be_Vietnam_Pro({
  subsets: ["vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Lora({
  subsets: ["vietnamese"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bi Nùn Makeup | Makeup cá nhân cao cấp",
  description:
    "Landing page portfolio cho Bi Nùn Makeup với album makeup, bảng giá dịch vụ và CTA đặt lịch nhanh qua Messenger hoặc gọi điện.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Bi Nùn Makeup",
    description:
      "",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${bodyFont.variable} ${displayFont.variable} font-body`}>
        {children}
      </body>
    </html>
  );
}
