import type { Metadata } from "next";
import VideosSection from "@/components/sections/VideosSection";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/sections/CtaBand";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Videos & Machine Demos | K.S.G. Tools",
  description:
    "Watch live operational trials of K.S.G. Tools double shaft shredders, precision knife testing, and Coimbatore factory demonstrations.",
};

export default function VideosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Live Demonstrations"
        title="Machine &amp; Knife Videos"
        subtitle="Watch our double shaft shredder machines, D2 knives cutting tests, and factory manufacturing in action."
      />
      <VideosSection />
      <CtaBand />
      <ContactSection />
    </>
  );
}