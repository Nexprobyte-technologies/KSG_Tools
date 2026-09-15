"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "@/components/Lightbox";
import { infrastructureImages } from "@/lib/data";

export default function PhotosSection() {
  const [idx, setIdx] = useState<number | null>(null);

  return (
    <section id="photos" className="section section-alt">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Our Infrastructure</span>
          <h2>Infrastructure &amp; Manufacturing Facilities</h2>
          <p className="sub">
            Well-equipped facilities and stock that help us deliver quality in time.
            Click any photo to zoom and browse the gallery.
          </p>
        </div>
        <div className="infra-grid">
          {infrastructureImages.map((img, i) => (
            <figure className="infra-item" key={img.caption}>
              <button
                type="button"
                className="infra-img ph-btn"
                onClick={() => setIdx(i)}
                aria-label={`View ${img.caption}`}
              >
                <Image
                  src={img.img}
                  alt={img.caption}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  priority={i < 3}
                />
                <span className="tag">Infrastructure</span>
              </button>
              <figcaption>{img.caption}</figcaption>
            </figure>
          ))}
        </div>
        <p
          style={{
            marginTop: 28,
            fontSize: 13,
            color: "var(--muted)",
            textAlign: "center",
          }}
        >
          Photos are representative illustrations sourced from Wikimedia Commons; actual
          facility photos coming soon.
        </p>
      </div>

      {idx !== null && (
        <Lightbox
          images={infrastructureImages}
          index={idx}
          onClose={() => setIdx(null)}
          onNav={setIdx}
        />
      )}
    </section>
  );
}