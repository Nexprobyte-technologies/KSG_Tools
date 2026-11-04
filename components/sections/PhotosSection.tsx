"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Lightbox from "@/components/Lightbox";
import { infrastructureImages, type InfrastructureItem } from "@/lib/data";

const categories = [
  "All Facilities",
  "VMC Machinery",
  "Conventional Machining",
  "Pneumatics & Power",
  "Tooling & Fixtures",
  "Material Handling",
];

export default function PhotosSection() {
  const [selectedCat, setSelectedCat] = useState("All Facilities");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filteredImages = useMemo(() => {
    if (selectedCat === "All Facilities") return infrastructureImages;
    if (selectedCat === "VMC Machinery") {
      return infrastructureImages.filter(
        (img) => img.category === "VMC Machinery" || img.category === "Control & Spindle" || img.category === "Machining Setup"
      );
    }
    if (selectedCat === "Conventional Machining") {
      return infrastructureImages.filter(
        (img) => img.category === "Conventional Machining" || img.category === "Grinding & Finishing" || img.category === "Engineering & Production"
      );
    }
    if (selectedCat === "Pneumatics & Power") {
      return infrastructureImages.filter(
        (img) => img.category === "Pneumatics & Power" || img.category === "Electrical Infrastructure"
      );
    }
    if (selectedCat === "Tooling & Fixtures") {
      return infrastructureImages.filter((img) => img.category === "Tooling & Fixtures");
    }
    if (selectedCat === "Material Handling") {
      return infrastructureImages.filter(
        (img) => img.category === "Material Handling"
      );
    }
    return infrastructureImages;
  }, [selectedCat]);

  return (
    <section id="photos" className="section section-alt">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Our Manufacturing Infrastructure</span>
          <h2>Manufacturing Area &amp; Facilities</h2>
          <p className="sub" style={{ maxWidth: 740, margin: "10px auto 0" }}>
            Explore K.S.G. Tools&apos; physical workshop facilities in Coimbatore, equipped with high-precision
            FEELER CNC Vertical Machining Centers (VMC), turret milling machines, toolroom grinding, and industrial pneumatics.
          </p>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "center",
            marginBottom: 36,
          }}
        >
          {categories.map((cat) => {
            const isActive = selectedCat === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCat(cat)}
                style={{
                  padding: "9px 18px",
                  borderRadius: 999,
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  border: isActive ? "1px solid var(--primary)" : "1px solid var(--line)",
                  background: isActive ? "var(--primary)" : "var(--bg)",
                  color: isActive ? "#ffffff" : "var(--ink)",
                  boxShadow: isActive ? "0 4px 14px var(--machinery-orange-glow)" : "none",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Infrastructure Grid */}
        <div className="infra-grid">
          {filteredImages.map((img) => {
            // Find global index in infrastructureImages for lightbox navigation
            const globalIdx = infrastructureImages.findIndex((item) => item.img === img.img);

            return (
              <figure className="infra-item" key={img.img}>
                <button
                  type="button"
                  className="infra-img ph-btn"
                  onClick={() => setLightboxIdx(globalIdx >= 0 ? globalIdx : 0)}
                  aria-label={`View ${img.title}`}
                  style={{ width: "100%", height: 230, cursor: "pointer", display: "block" }}
                >
                  <Image
                    src={img.img}
                    alt={img.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    priority={globalIdx < 3}
                  />
                  <span className="tag" style={{ background: "rgba(15, 23, 42, 0.82)", backdropFilter: "blur(4px)" }}>
                    {img.category}
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      bottom: 12,
                      right: 12,
                      background: "rgba(15, 23, 42, 0.75)",
                      color: "#ffffff",
                      fontSize: 12,
                      fontWeight: 600,
                      padding: "4px 10px",
                      borderRadius: 6,
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    🔍 Zoom
                  </span>
                </button>
                <figcaption style={{ padding: "18px 20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                      {img.manufacturer}
                    </span>
                    <span style={{ fontSize: 11, color: "var(--muted)", fontWeight: 500 }}>
                      {img.model}
                    </span>
                  </div>
                  <h3 style={{ fontSize: 16.5, fontWeight: 700, lineHeight: 1.35, color: "var(--ink)", margin: "4px 0 8px" }}>
                    {img.title}
                  </h3>
                  <div
                    style={{
                      fontSize: 12.5,
                      fontWeight: 600,
                      color: "var(--brand-dark, #0284c7)",
                      background: "var(--bg-soft, #f0f9ff)",
                      border: "1px solid var(--border-soft, #e0f2fe)",
                      padding: "6px 10px",
                      borderRadius: 6,
                      marginBottom: 10,
                      lineHeight: 1.4,
                    }}
                  >
                    ⚙ {img.specs}
                  </div>
                  <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.5, margin: 0 }}>
                    {img.desc}
                  </p>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>

      {lightboxIdx !== null && (
        <Lightbox
          images={infrastructureImages}
          index={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
          onNav={setLightboxIdx}
        />
      )}
    </section>
  );
}
