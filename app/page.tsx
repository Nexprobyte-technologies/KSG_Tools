import Hero from "@/components/sections/Hero";
import ShredderCatalog from "@/components/sections/ShredderCatalog";
import StatsBand from "@/components/sections/StatsBand";
import ServicesSection from "@/components/sections/ServicesSection";
import VideosSection from "@/components/sections/VideosSection";
import PhotosSection from "@/components/sections/PhotosSection";
import CompanyProfile from "@/components/sections/CompanyProfile";
import LocationMapSection from "@/components/sections/LocationMapSection";
import CtaBand from "@/components/sections/CtaBand";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ShredderCatalog isHome={true} limit={6} />
      <StatsBand />
      <ServicesSection />
      <VideosSection />
      <PhotosSection />
      <CompanyProfile />
      <LocationMapSection />
      <CtaBand />
      <ContactSection />
    </>
  );
}
