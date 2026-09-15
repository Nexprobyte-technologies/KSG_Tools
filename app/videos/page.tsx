import type { Metadata } from "next";
import Icon from "@/components/icons";
import PageHeader from "@/components/PageHeader";
import { videos } from "@/lib/data";
import CtaBand from "@/components/sections/CtaBand";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Videos | K.S.G. Tools",
  description:
    "Watch videos of K.S.G. Tools - shredder knife manufacturing, double shaft shredding machines and company tour.",
};

export default function VideosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Watch Us"
        title="Videos"
        subtitle="Take a look at our products, machines and manufacturing facilities in action."
      />
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Video Gallery</span>
            <h2>Our Machines &amp; Products</h2>
            <p className="sub">
              Video content is being prepared — check back soon for live demonstrations.
            </p>
          </div>
          <div className="video-grid">
            {videos.map((v) => (
              <div className="video-card" key={v.title}>
                <div className="video-thumb">
                  <span className="video-play">
                    <Icon name="play" size={26} />
                  </span>
                  <span className="video-coming">Coming Soon</span>
                </div>
                <div className="video-body">
                  <span className="tag">{v.tag}</span>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
      <ContactSection />
    </>
  );
}