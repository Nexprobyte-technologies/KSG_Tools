"use client";

import { useEffect } from "react";
import Image from "next/image";

export interface LightboxImage {
  caption: string;
  img: string;
}

export default function Lightbox({
  images,
  index,
  onClose,
  onNav,
}: {
  images: LightboxImage[];
  index: number;
  onClose: () => void;
  onNav: (i: number) => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav((index + 1) % images.length);
      if (e.key === "ArrowLeft") onNav((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [index, images.length, onClose, onNav]);

  const img = images[index];

  return (
    <div className="lightbox" role="dialog" aria-modal="true" onClick={onClose}>
      <button
        className="lightbox-close"
        type="button"
        aria-label="Close gallery"
        onClick={onClose}
      >
        ✕
      </button>
      <button
        className="lightbox-nav prev"
        type="button"
        aria-label="Previous image"
        onClick={(e) => {
          e.stopPropagation();
          onNav((index - 1 + images.length) % images.length);
        }}
      >
        ‹
      </button>
      <figure className="lightbox-fig" onClick={(e) => e.stopPropagation()}>
        <Image
          src={img.img}
          alt={img.caption}
          fill
          sizes="92vw"
          priority
          style={{ objectFit: "contain" }}
        />
      </figure>
      <button
        className="lightbox-nav next"
        type="button"
        aria-label="Next image"
        onClick={(e) => {
          e.stopPropagation();
          onNav((index + 1) % images.length);
        }}
      >
        ›
      </button>
      <div className="lightbox-meta">
        <div className="lightbox-caption">{img.caption}</div>
        <div className="lightbox-count">
          {index + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}