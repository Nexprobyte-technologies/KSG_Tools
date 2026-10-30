import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ShredderCatalog from "@/components/sections/ShredderCatalog";
import StatsBand from "@/components/sections/StatsBand";
import CtaBand from "@/components/sections/CtaBand";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Products & Services | K.S.G. Tools",
  description:
    "Explore Shredder Knives, Chipper Knives, Granulator Blades, Grinder Blades, Shredding Machines, Tools and Dies, VMC Job Work and Chaff Cutter Blades by K.S.G. Tools, Coimbatore.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="What we offer"
        title="Products & Services"
        subtitle="A wide and exclusive range of industrial cutting tools, blades and shredding machinery, manufactured and supplied from Coimbatore."
      />
      <ShredderCatalog />
      <StatsBand />
      <CtaBand />
      <ContactSection />
    </>
  );
}