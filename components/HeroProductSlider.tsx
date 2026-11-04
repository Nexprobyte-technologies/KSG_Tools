"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/icons";
import { allProducts, company, type Product } from "@/lib/data";

const FEATURED_SLUGS = [
  "4-inch-stainless-steel-chipper-knife",
  "press-tool-die-manufacturer",
  "metal-shredder-machine",
  "plastic-recycling-granulator-blade",
  "vmc-job-work-with-material-with-4-axis",
];

const FEATURED_PRODUCTS: Product[] = FEATURED_SLUGS.map((slug) =>
  allProducts.find((p) => p.slug === slug)
).filter(Boolean) as Product[];

const INTERVAL_MS = 4000;

export default function HeroProductSlider() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance in the exact same place every 4 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % FEATURED_PRODUCTS.length);
    }, INTERVAL_MS);

    return () => clearInterval(timer);
  }, [isPaused, currentIdx]);

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % FEATURED_PRODUCTS.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + FEATURED_PRODUCTS.length) % FEATURED_PRODUCTS.length);
  };

  const handleSelect = (idx: number) => {
    setCurrentIdx(idx);
  };

  const curr = FEATURED_PRODUCTS[currentIdx] || FEATURED_PRODUCTS[0];

  return (
    <div
      className="hero-slider-wrap"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Featured Products Showcase"
    >
      {/* Top Slider Header */}
      <div className="hero-slider-head">
        <div className="slider-badge">
          <span className="live-pulse-dot" />
          <span>FEATURED PRODUCTS</span>
        </div>
        <div className="slider-counter">
          <span className="current-num">{String(currentIdx + 1).padStart(2, "0")}</span>
          <span className="sep">/</span>
          <span className="total-num">{String(FEATURED_PRODUCTS.length).padStart(2, "0")}</span>
        </div>
        <div className="slider-nav-btns">
          <button
            type="button"
            className="slider-nav-btn"
            onClick={handlePrev}
            aria-label="Previous product"
            title="Previous product"
          >
            ←
          </button>
          <button
            type="button"
            className="slider-nav-btn"
            onClick={handleNext}
            aria-label="Next product"
            title="Next product"
          >
            →
          </button>
        </div>
      </div>

      {/* Progress Bar indicating auto-slide */}
      <div className="slider-progress-track">
        <div
          key={currentIdx}
          className={`slider-progress-bar${isPaused ? " is-paused" : ""}`}
        />
      </div>

      {/* In-Place Product Card (stays in the exact same place, changes smoothly) */}
      <div className="hero-product-card" key={curr.slug}>
        {/* Media with Code Tag and Badge */}
        <div className="hp-media-box">
          <Image
            src={curr.image}
            alt={curr.name}
            fill
            sizes="(max-width: 960px) 100vw, 420px"
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="hp-badges-overlay">
            <span className="hp-code-pill">
              {curr.subCategory ?? curr.category}
            </span>
            <span className="hp-quote-tag">
              Factory Direct
            </span>
          </div>
        </div>

        {/* Product Details */}
        <div className="hp-info-box">
          <div className="hp-title-row">
            <span className="hp-code-label">
              Category: <strong>{curr.category}</strong>
            </span>
            {curr.moq && (
              <span className="hp-moq-chip">MOQ: {curr.moq}</span>
            )}
          </div>

          <h3 className="hp-name">
            <Link href={`/products/${curr.slug}`}>{curr.name}</Link>
          </h3>

          {/* Quick Specs Chips */}
          <div className="hp-specs-row">
            {curr.specs.slice(0, 3).map(([k, v]) => (
              <span className="hp-spec-chip" key={k}>
                <span className="k">{k}:</span> {v}
              </span>
            ))}
          </div>

          {/* Action Button */}
          <div className="hp-actions">
            <Link
              href={`/products/${curr.slug}`}
              className="btn btn-primary hp-btn-details w-full"
            >
              View Details →
            </Link>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="slider-dots">
        {FEATURED_PRODUCTS.map((p, i) => (
          <button
            key={p.slug}
            type="button"
            className={`slider-dot ${i === currentIdx ? "active" : ""}`}
            onClick={() => handleSelect(i)}
            aria-label={`Go to ${p.name}`}
            title={p.name}
          />
        ))}
      </div>

      {/* Mini Trust Footer */}
      <div className="slider-trust-bar">
        <span>
          <Icon name="check" size={13} /> {company.city} Factory Direct
        </span>
        <span>
          <Icon name="check" size={13} /> Custom Sizes & Specifications Supported
        </span>
      </div>
    </div>
  );
}
