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
  "Shredder Knives":
    "Heavy-duty double shaft shredder knives, rotary claw blades, and industrial shredding machinery knives.",
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

// Hand-picked top flagship products representing each core category for home preview
const HOME_FEATURED_CODES = [
  "KSG-101", // 10 Inch Double Shaft Shredder Knives (Shredder Knives)
  "KSG-201", // 4 inch Stainless Steel Chipper Knife (Chipper Knives)
  "KSG-401", // Metal Shredder Machine (Shredding Machine)
  "KSG-301", // Press Tool Die Manufacturer (Tools And Dies)
  "KSG-601", // Plastic Recycling Granulator Blade (Granulator Blades)
  "KSG-701", // Vmc Job Work With Material with 4 axis (VMC Machine Job Work)
  "KSG-501", // Shredder Machine Blade, For Industrial (Grinder Blades)
  "KSG-801", // Steel Crusher Blade, For Industrial (Chaff Cutter Blades)
];

interface ShredderCatalogProps {
  isHome?: boolean;
  limit?: number;
}

export default function ShredderCatalog({ isHome = false, limit = 6 }: ShredderCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [search, setSearch] = useState<string>("");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc">("featured");
  const [visibleCount, setVisibleCount] = useState<number>(isHome ? limit : 18);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(isHome ? limit : 18);
  };

  const handleSearchChange = (val: string) => {
    setSearch(val);
    setVisibleCount(isHome ? limit : 18);
  };

  const filteredProducts = useMemo(() => {
    // If on homepage and viewing "All" without search, showcase the diverse flagship products
    if (isHome && activeCategory === "All" && !search.trim()) {
      const codeMap = new Map(allProducts.map((p) => [p.code, p]));
      const featured = HOME_FEATURED_CODES
        .map((c) => codeMap.get(c))
        .filter((p): p is (typeof allProducts)[number] => Boolean(p));
      return featured;
    }

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
        const inSubCat = p.subCategory?.toLowerCase().includes(q);
        const inSpecs = p.specs.some(([k, v]) => k.toLowerCase().includes(q) || v.toLowerCase().includes(q));
        return inCode || inName || inCat || inSubCat || inSpecs;
      });
    }

    // Sort
    if (sortBy === "price-asc") {
      list.sort((a, b) => (a.price ?? 999999) - (b.price ?? 999999));
    } else if (sortBy === "price-desc") {
      list.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
    }

    return list;
  }, [activeCategory, search, sortBy, isHome]);

  const displayedProducts = isHome ? filteredProducts.slice(0, limit) : filteredProducts.slice(0, visibleCount);

  return (
    <section id="shredder-knives" className="section section-alt catalog-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head center">
          {isHome ? (
            <>
              <span className="eyebrow">Featured Products &amp; Services</span>
              <h2>Precision Industrial Tools &amp; Machinery</h2>
              <p className="sub">
                Manufacturer of Double Shaft Shredder Knives, Chipper Blades, Press Tool Dies &amp; Industrial Shredders in Coimbatore.
              </p>
            </>
          ) : (
            <>
              <span className="eyebrow">Verified Industrial Product Catalog</span>
              <h2>Products &amp; Industrial Services</h2>
              <p className="sub">
                Direct from manufacturer in Coimbatore · {allProducts.length} Products &amp; Services available · All prices in Indian Rupees (₹)
              </p>
            </>
          )}
        </div>

        {/* Category Navigation Tabs */}
        <div className="catalog-tabs-wrap">
          <div className="catalog-tabs">
            <button
              type="button"
              className={`cat-tab ${activeCategory === "All" ? "active" : ""}`}
              onClick={() => handleCategoryChange("All")}
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
                onClick={() => handleCategoryChange(c.name)}
              >
                <Icon name={CATEGORY_ICONS[c.name] ?? "gear"} size={16} />
                <span>{c.name}</span>
                <span className="cat-count">{c.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Search, Sort and Controls Bar (shown on full Products page) */}
        {!isHome && (
          <div className="catalog-toolbar">
            <div className="catalog-search-box">
              <Icon name="zoom" size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search by product name, item code (e.g. KSG-201), material or specs..."
                value={search}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="catalog-search-input"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => handleSearchChange("")}
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
        )}

        {/* Active Category Description Banner (shown on full Products page) */}
        {!isHome && (
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
        )}

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
                handleCategoryChange("All");
                handleSearchChange("");
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <>
            <div className="product-grid">
              {displayedProducts.map((p) => (
                <div className="product-card modern-card" key={p.slug}>
                  {/* Image with Category Badge */}
                  <Link href={`/products/${p.slug}`} className="product-media-link" aria-label={`View ${p.name}`}>
                    <div className="product-media">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        sizes="(max-width: 700px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        style={{ objectFit: "cover" }}
                      />
                      <span className="product-cat-pill">
                        {p.subCategory ?? p.category}
                      </span>
                    </div>
                  </Link>

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

                  {/* Single Clean View Details Action */}
                  <div className="product-actions">
                    <Link href={`/products/${p.slug}`} className="btn btn-primary btn-product-view">
                      View Details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Show More Button (Home Page Preview) */}
            {isHome && (
              <div className="catalog-show-more-wrap">
                <p className="catalog-show-more-note">
                  Showing {displayedProducts.length} of {allProducts.length} items from our manufacturing catalogue
                </p>
                <Link
                  href="/products"
                  className="catalog-show-more-btn"
                  title="View complete catalogue with search and filter"
                >
                  <span>Show More</span>
                  <Icon name="arrowRight" size={18} />
                </Link>
              </div>
            )}

            {/* Pagination / Load More Button (Full Products Page) */}
            {!isHome && visibleCount < filteredProducts.length && (
              <div className="catalog-load-more" style={{ textAlign: "center", marginTop: 40 }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setVisibleCount((prev) => prev + 18)}
                  style={{ minWidth: 260, padding: "14px 28px", fontSize: 16 }}
                >
                  Load More Products ({filteredProducts.length - visibleCount} remaining)
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
