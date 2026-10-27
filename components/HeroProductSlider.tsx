"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/icons";
import { allProducts, company } from "@/lib/data";

const INTERVAL_MS = 3800;

export default function HeroProductSlider() {
  const products = [
    allProducts.find((p) => p.code === "KSG-201"),
    allProducts.find((p) => p.code === "KSG-301"),
    allProducts.find((p) => p.code === "KSG-401"),
    allProducts.find((p) => p.code === "KSG-501"),
    allProducts.find((p) => p.code === "KSG-601"),
    allProducts.find((p) => p.code === "KSG-701"),
    allProducts.find((p) => p.code === "KSG-801"),
  ].filter(Boolean) as typeof allProducts;
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  // Auto-rotation effect
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    startTimeRef.current = Date.now();
    setProgress(0);

    const updateProgress = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min(100, (elapsed / INTERVAL_MS) * 100);
      setProgress(pct);

      if (elapsed < INTERVAL_MS) {
        animFrameRef.current = requestAnimationFrame(updateProgress);
      }
    };

    animFrameRef.current = requestAnimationFrame(updateProgress);

    timerRef.current = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % products.length);
      startTimeRef.current = Date.now();
      setProgress(0);
    }, INTERVAL_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [currentIdx, isPaused, products.length]);

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % products.length);
    startTimeRef.current = Date.now();
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + products.length) % products.length);
    startTimeRef.current = Date.now();
    setProgress(0);
  };

  const handleSelect = (idx: number) => {
    setCurrentIdx(idx);
    startTimeRef.current = Date.now();
    setProgress(0);
  };

  const curr = products[currentIdx];

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
          <span className="total-num">{String(products.length).padStart(2, "0")}</span>
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
          className="slider-progress-bar"
          style={{ width: isPaused ? "100%" : `${progress}%` }}
        />
      </div>

      {/* Main Animated Card */}
      <div className="hero-product-card" key={curr.code}>
        {/* Media with Code Tag and Price */}
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
              <span className="hash">#</span>
              {curr.code}
            </span>
            <span className={`hp-price-tag${curr.price === null ? " ask" : ""}`}>
              {curr.price === null
                ? "Ask Price"
                : `₹ ${curr.price.toLocaleString("en-IN")}`}
            </span>
          </div>
        </div>

        {/* Product Details */}
        <div className="hp-info-box">
          <div className="hp-title-row">
            <span className="hp-code-label">Item Code: <strong>{curr.code}</strong></span>
            {curr.moq && <span className="hp-moq-chip">MOQ: {curr.moq}</span>}
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

          {/* Action Button - single clean View Details button */}
          <div className="hp-actions">
            <Link href={`/products/${curr.slug}`} className="btn btn-primary hp-btn-details w-full">
              View Details →
            </Link>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="slider-dots">
        {products.map((p, i) => (
          <button
            key={p.code}
            type="button"
            className={`slider-dot ${i === currentIdx ? "active" : ""}`}
            onClick={() => handleSelect(i)}
            aria-label={`Go to ${p.name} (${p.code})`}
            title={`${p.name} (${p.code})`}
          />
        ))}
      </div>

      {/* Mini Trust Footer */}
      <div className="slider-trust-bar">
        <span>
          <Icon name="check" size={13} /> {company.city} Factory Direct
        </span>
        <span>
          <Icon name="check" size={13} /> All Products Enquirable by Code
        </span>
      </div>
    </div>
  );
}
