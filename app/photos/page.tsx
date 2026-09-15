import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PhotosSection from "@/components/sections/PhotosSection";
import CtaBand from "@/components/sections/CtaBand";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Photos | K.S.G. Tools",
  description:
    "Browse photos of K.S.G. Tools infrastructure, manufacturing facilities, shop and storage.",
};

export default function PhotosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Infrastructure"
        title="Photos &amp; Facilities"
        subtitle="Well-equipped facilities and stock that help us deliver quality in time."
      />
      <PhotosSection />
      <CtaBand />
      <ContactSection />
    </>
  );
}