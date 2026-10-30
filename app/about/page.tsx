import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import AboutSection from "@/components/sections/AboutSection";
import StatsBand from "@/components/sections/StatsBand";
import FactsheetSection from "@/components/sections/FactsheetSection";
import CtaBand from "@/components/sections/CtaBand";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "About Us | K.S.G. Tools",
  description:
    "K.S.G. Tools is a Proprietorship firm established in 2009 in Coimbatore - manufacturer, wholesaler, trader and retailer of industrial cutting tools.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="About K.S.G. Tools"
        subtitle="Established in 2009 as a Proprietorship firm, we manufacture and supply a wide range of industrial cutting tools from Coimbatore."
      />
      <AboutSection />
      <StatsBand />
      <FactsheetSection />
      <CtaBand />
      <ContactSection />
    </>
  );
}