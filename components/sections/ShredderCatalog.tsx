"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/icons";
import { company, allProducts, categories } from "@/lib/data";

const CATEGORY_INTROS: Record<string, string> = {
  All: "Explore our complete range of precision chipper knives, press tool dies, shredding machinery, industrial grinder blades, and VMC job work from Coimbatore.",
  "Chipper Knives":
    "High-grade Stainless Steel and Alloy Chipper Knives, 2-Slot Wood Chipper Blades, and Agricultural Chipping Knives.",
  "Tools And Dies":
    "Precision Press Tool Dies, Plastic Injection Moulding Dies, Aluminium Foundry Patterns, and Custom Progressive Tooling.",
  "Shredding Machine":
    "Heavy-duty Double Shaft Industrial Shredders, Agricultural Waste Shredder Machines, and Coconut Husk Coir Shredders.",
  "Grinder Blades":
    "Wear-resistant D2 and Stainless Steel Industrial Grinder & Crusher Blades for Plastic, Metal, and Scrap Recycling.",
  "Granulator Blades":
    "High-precision Rotor and Stator Granulator Blades for Plastic Films, PET Bottles, and Polymer Recycling.",
  "VMC Machine Job Work":
    "Expert 4-Axis VMC Machining Center Job Work with Material, CNC Precision Milling, Drilling, and Custom Component Tooling.",
  "Chaff Cutter Blades":
    "Hardened High-Carbon Rectangular and Heavy-Duty Steel Crusher Blades for Agricultural Fodder and Biomass Cutting.",
};

const CATEGORY_ICONS: Record<string, string> = {
  All: "gear",
  "Shredder Knives": "gear",
  "Chipper Knives": "blade",
  "Tools And Dies": "hammer",
  "Shredding Machine": "factory",
  "Grinder Blades": "disc",
  "Granulator Blades": "knife",
  "VMC Machine Job Work": "wrench",
  "Chaff Cutter Blades": "grass",
};

export default function ShredderCatalog() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [search, setSearch] = useState<string>("");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc">("featured");

  const filteredProducts = useMemo(() => {
    let list = [...allProducts];

    // Filter by Category
    if (activeCategory !== "All") {
      list = list.filter((p) => p.category === activeCategory);
    }

    // Filter by Search Query
    if (search.trim()) {
      const q = search.toLowerCase().trim();
      list = list.filter((p) => {
        const inCode = p.code.toLowerCase().includes(q) || p.code.toLowerCase().replace("-", "").includes(q);
        const inName = p.name.toLowerCase().includes(q);
        const inCat = p.category?.toLowerCase().includes(q);
        const inSpecs = p.specs.some(([k, v]) => k.toLowerCase().includes(q) || v.toLowerCase().includes(q));
        return inCode || inName || inCat || inSpecs;
      });
    }

    // Sort
    if (sortBy === "price-asc") {
      list.sort((a, b) => (a.price ?? 999999) - (b.price ?? 999999));
    } else if (sortBy === "price-desc") {
      list.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
    }

    return list;
  }, [activeCategory, search, sortBy]);

  return (
    <section id="shredder-knives" className="section section-alt catalog-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head center">
          <span className="eyebrow">Verified IndiaMART Catalog</span>
          <h2>Products &amp; Industrial Services</h2>
          <p className="sub">
            Direct from manufacturer in Coimbatore · {allProducts.length} Products &amp; Services available · All prices in Indian Rupees (₹)
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="catalog-tabs-wrap">
          <div className="catalog-tabs">
            <button
              type="button"
              className={`cat-tab ${activeCategory === "All" ? "active" : ""}`}
              onClick={() => setActiveCategory("All")}
            >
              <Icon name="gear" size={16} />
              <span>All Products</span>
              <span className="cat-count">{allProducts.length}</span>
            </button>
            {categories.map((c) => (
              <button
                type="button"
                key={c.name}
                className={`cat-tab ${activeCategory === c.name ? "active" : ""}`}
                onClick={() => setActiveCategory(c.name)}
              >
                <Icon name={CATEGORY_ICONS[c.name] ?? "gear"} size={16} />
                <span>{c.name}</span>
                <span className="cat-count">{c.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Search, Sort and Controls Bar */}
        <div className="catalog-toolbar">
          <div className="catalog-search-box">
            <Icon name="zoom" size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search by product name, item code (e.g. KSG-201), material or specs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="catalog-search-input"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="clear-search-btn"
                title="Clear Search"
              >
                <Icon name="close" size={14} />
              </button>
            )}
          </div>

          <div className="catalog-sort-box">
            <label htmlFor="catalog-sort-select">Sort by:</label>
            <select
              id="catalog-sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="catalog-select"
            >
              <option value="featured">Featured Order</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Active Category Description Banner */}
        <div className="product-intro modern-intro">
          <div className="intro-left">
            <div className="intro-category-badge">
              <Icon name={CATEGORY_ICONS[activeCategory] ?? "gear"} size={18} />
              <span>{activeCategory}</span>
            </div>
            <p className="intro-desc">
              {CATEGORY_INTROS[activeCategory] ?? CATEGORY_INTROS.All}
            </p>
          </div>
          <div className="intro-stats">
            <span className="stats-num">{filteredProducts.length}</span>
            <span className="stats-label">Items Shown</span>
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="no-products-box">
            <Icon name="blade" size={42} className="no-prod-icon" />
            <h3>No products found</h3>
            <p>Try searching with another keyword or select a different category tab.</p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setActiveCategory("All");
                setSearch("");
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="product-grid">
            {filteredProducts.map((p) => (
              <div className="product-card modern-card" key={p.slug}>
                {/* Image with Category Badge */}
                <div className="product-media">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                  {p.category && <span className="product-cat-pill">{p.category}</span>}
                </div>

                {/* Card Title & Pricing */}
                <div className="product-top">
                  <div className="product-code-row">
                    <span className="product-code-chip">{p.code}</span>
                    <span className="product-code-label">Product Code</span>
                  </div>
                  <h3>
                    <Link href={`/products/${p.slug}`} className="product-title-link">
                      {p.name}
                    </Link>
                  </h3>
                  <div className="product-price">
                    <span className={`price-tag${p.price === null ? " ask" : ""}`}>
                      {p.price === null
                        ? "Ask Price"
                        : `₹ ${p.price.toLocaleString("en-IN")} / Piece`}
                    </span>
                    {p.moq && <span className="moq-tag">MOQ: {p.moq}</span>}
                  </div>
                </div>

                {/* Specifications Preview */}
                <div className="spec-list">
                  {p.specs.slice(0, 3).map(([k, v]) => (
                    <div className="spec-row" key={k}>
                      <span className="k">{k}</span>
                      <span className="v">{v}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="product-actions">
                  <Link href={`/products/${p.slug}`} className="btn btn-primary">
                    View Details
                  </Link>
                  <a
                    href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
                      `Hi K.S.G. Tools, I am interested in ${p.name} (Product Code: ${p.code}).\nPrice: ${
                        p.price === null ? "Ask Price" : `₹ ${p.price.toLocaleString("en-IN")} / Piece`
                      }\nPlease share technical specifications and best quote.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-wa-catalog"
                    title="Enquire on WhatsApp with Product Code"
                  >
                    <Icon name="chat" size={15} /> WhatsApp
                  </a>
                  <a href={`tel:${company.phoneLink}`} className="btn btn-dark" title="Call Sales">
                    Call
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}