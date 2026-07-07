import { BookingSection } from "@/components/booking/booking-section";
import { StickyMobileCta } from "@/components/booking/sticky-mobile-cta";
import { Footer } from "@/components/footer/footer";
import { HeroSection } from "@/components/hero/hero-section";
import { Navbar } from "@/components/navbar/navbar";
import { PortfolioSection } from "@/components/portfolio/portfolio-section";
import { PromotionSection } from "@/components/promotion/promotion-section";
import { ScrollProgressBar } from "@/components/shared/scroll-progress-bar";
import { ServicesSection } from "@/components/services/services-section";
import { getSiteData } from "@/lib/data";

export default async function HomePage() {
  const siteData = await getSiteData();

  return (
    <>
      <ScrollProgressBar />
      <Navbar
        navItems={siteData.navItems}
        bookingHref={siteData.booking.primary.href}
      />
      <main className="relative overflow-x-clip pb-24 md:pb-0">
        <HeroSection data={siteData.hero} socialLinks={siteData.socialLinks} />
        <PromotionSection data={siteData.promotion} />
        <ServicesSection data={siteData.services} />
        <PortfolioSection data={siteData.portfolio} />
        <BookingSection data={siteData.booking} />
        <Footer data={siteData.footer} />
      </main>
      <StickyMobileCta actions={siteData.booking.mobileActions} />
    </>
  );
}
