import Hero from "@/components/sections/Hero";
import ShredderCatalog from "@/components/sections/ShredderCatalog";
import ManufacturingProcessSection from "@/components/sections/ManufacturingProcessSection";
import QualityAndMaterialsSection from "@/components/sections/QualityAndMaterialsSection";
import StatsBand from "@/components/sections/StatsBand";
import ServicesSection from "@/components/sections/ServicesSection";
import VideosSection from "@/components/sections/VideosSection";
import CompanyProfile from "@/components/sections/CompanyProfile";
import LocationMapSection from "@/components/sections/LocationMapSection";
import CtaBand from "@/components/sections/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <ShredderCatalog isHome={true} limit={6} />
      <ManufacturingProcessSection />
      <QualityAndMaterialsSection />
      <StatsBand />
      <ServicesSection />
      <VideosSection />
      <CompanyProfile />
      <LocationMapSection />
      <CtaBand />
    </>
  );
}
