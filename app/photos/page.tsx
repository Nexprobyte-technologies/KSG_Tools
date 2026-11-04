import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PhotosSection from "@/components/sections/PhotosSection";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Manufacturing Area & Facilities | K.S.G. Tools",
  description:
    "Explore K.S.G. Tools manufacturing area, precision machining plant, FEELER CNC VMC centers, and industrial facilities in Coimbatore.",
};

export default function PhotosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Direct Factory Workshop"
        title="Manufacturing Area &amp; Facilities"
        subtitle="Explore our direct manufacturing plant, 4-Axis CNC VMC machining centers, turret milling machines, and precision toolroom infrastructure in Coimbatore."
      />
      <PhotosSection />
      <CtaBand />
    </>
  );
}
