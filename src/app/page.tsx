import Hero from "@/components/home/Hero";
import LogoTicker from "@/components/home/LogoTicker";
import UseCaseTabs from "@/components/home/UseCaseTabs";
import ServicesGrid from "@/components/home/ServicesGrid";
import StatsBar from "@/components/home/StatsBar";
import FeatureGrid from "@/components/home/FeatureGrid";
import CaseStudiesPreview from "@/components/home/CaseStudiesPreview";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Hero />
      <LogoTicker />
      <UseCaseTabs />
      <ServicesGrid />
      <StatsBar />
      <FeatureGrid />
      <CaseStudiesPreview />
      <TestimonialsCarousel />
      <CtaSection />
    </div>
  );
}