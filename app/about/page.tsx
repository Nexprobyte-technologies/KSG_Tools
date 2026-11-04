import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import AboutSection from "@/components/sections/AboutSection";
import StatsBand from "@/components/sections/StatsBand";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "About Us | K.S.G. Tools",
  description:
    "K.S.G. Tools is a leading industrial cutting tool and recycling machinery blade manufacturer in Coimbatore established in 2009. Precision shredder knives, chipper blades, tools, dies, and 4-axis VMC machining.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Heritage &amp; Expertise"
        title="About K.S.G. Tools"
        subtitle="Pioneering precision industrial cutting tools, heavy-duty shredder knives, wood chipper blades, and advanced 4-Axis VMC tooling in Coimbatore since 2009."
      />
      <AboutSection />
      <StatsBand />
      <CtaBand />
    </>
  );
}
