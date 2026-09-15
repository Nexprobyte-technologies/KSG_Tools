import Hero from "@/components/sections/Hero";
import ProductsSection from "@/components/sections/ProductsSection";
import ShredderCatalog from "@/components/sections/ShredderCatalog";
import StatsBand from "@/components/sections/StatsBand";
import ServicesSection from "@/components/sections/ServicesSection";
import PhotosSection from "@/components/sections/PhotosSection";
import FactsheetSection from "@/components/sections/FactsheetSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import CtaBand from "@/components/sections/CtaBand";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsSection />
      <ShredderCatalog />
      <StatsBand />
      <ServicesSection />
      <PhotosSection />
      <FactsheetSection />
      <ReviewsSection />
      <CtaBand />
      <ContactSection />
    </>
  );
}