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

// Screenshot-style category cards for Mobile View themed to KSG Tools brand
export const DEAL_IN_CATEGORIES = [
  {
    name: "Shredder Knives",
    title: "SHREDDER KNIVES",
    image: "/products/indiamart-2850047594948.jpeg",
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)", // KSG Royal Blue
    borderColor: "rgba(96, 165, 250, 0.45)",
    count: 10,
  },
  {
    name: "Chipper Knives",
    title: "CHIPPER KNIVES",
    image: "/products/indiamart-2851585949630.jpg",
    gradient: "linear-gradient(135deg, #0369a1 0%, #0284c7 100%)", // Cobalt Ocean Blue
    borderColor: "rgba(56, 189, 248, 0.45)",
    count: 9,
  },
  {
    name: "Tools And Dies",
    title: "TOOLS AND DIES",
    image: "/products/indiamart-2852735040912.jpeg",
    gradient: "linear-gradient(135deg, #312e81 0%, #4f46e5 100%)", // Precision Indigo
    borderColor: "rgba(129, 140, 248, 0.45)",
    count: 37,
  },
  {
    name: "Shredding Machine",
    title: "SHREDDING MACHINE",
    image: "/products/indiamart-2850479907955.jpg",
    gradient: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", // Heavy Machinery Slate Carbon
    borderColor: "rgba(148, 163, 184, 0.4)",
    count: 12,
  },
  {
    name: "Grinder Blades",
    title: "GRINDER BLADES",
    image: "/products/indiamart-2851585980433.jpg",
    gradient: "linear-gradient(135deg, #064e3b 0%, #059669 100%)", // Industrial Machine Green
    borderColor: "rgba(52, 211, 153, 0.45)",
    count: 3,
  },
  {
    name: "Granulator Blades",
    title: "GRANULATOR BLADES",
    image: "/products/indiamart-2850047382797.jpeg",
    gradient: "linear-gradient(135deg, #0e7490 0%, #0891b2 100%)", // High-Carbon Cyan Teal
    borderColor: "rgba(45, 212, 191, 0.45)",
    count: 3,
  },
  {
    name: "VMC Machine Job Work",
    title: "VMC MACHINE JOB WORK",
    image: "/products/indiamart-2852735040848.jpeg",
    gradient: "linear-gradient(135deg, #4338ca 0%, #6366f1 100%)", // High-Precision CNC Violet
    borderColor: "rgba(165, 180, 252, 0.45)",
    count: 7,
  },
  {
    name: "Chaff Cutter Blades",
    title: "CHAFF CUTTER BLADES",
    image: "/products/indiamart-2851586220048.jpeg",
    gradient: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)", // Sapphire Steel Blue
    borderColor: "rgba(147, 197, 253, 0.45)",
    count: 2,
  },
];

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

  const handleCategorySelect = (catName: string) => {
    const nextCat = activeCategory === catName ? "All" : catName;
    setActiveCategory(nextCat);
    setVisibleCount(nextCat === "All" ? (isHome ? limit : 18) : 999);

    if (typeof window !== "undefined") {
      const anchor = document.getElementById("catalog-products-anchor");
      if (anchor) {
        anchor.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleSearchChange = (val: string) => {
    setSearch(val);
    setVisibleCount(18);
  };

  const filteredProducts = useMemo(() => {
    // If on homepage and viewing "All" without search, showcase the top flagship products
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

  const displayedProducts = isHome && activeCategory === "All"
    ? filteredProducts.slice(0, limit)
    : filteredProducts.slice(0, visibleCount);

  return (
    <section id="shredder-knives" className="section section-alt catalog-section">
      <div className="container">

        {/* 1. MOBILE VIEW ONLY: Screenshot-style "Products we deal in" colored cards */}
        <div className="mobile-deal-in-section">
          <div className="deal-in-head">
            <span className="eyebrow">Direct from Coimbatore Manufacturer</span>
            <h2 className="deal-in-main-title">Products we deal in</h2>
            <p className="deal-in-main-sub">
              Tap any category card below to view all manufactured cutting tools, blades &amp; machinery.
            </p>
          </div>

          <div className="deal-in-grid" role="region" aria-label="Products we deal in categories">
            {DEAL_IN_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.name;
              return (
                <button
                  type="button"
                  key={cat.name}
                  className={`deal-in-card ${isActive ? "is-active" : ""}`}
                  style={{
                    background: cat.gradient,
                    borderColor: cat.borderColor,
                  }}
                  onClick={() => handleCategorySelect(cat.name)}
                  aria-pressed={isActive}
                >
                  <div className="deal-in-thumb">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      width={92}
                      height={82}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="deal-in-divider" />
                  <div className="deal-in-text">
                    <h3>{cat.title}</h3>
                    <span className="deal-in-count">
                      {cat.count} Products {isActive ? "• Selected" : "→"}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. LAPTOP / DESKTOP VIEW ONLY: Original Desktop Category Tabs & Toolbar */}
        <div className="desktop-catalog-nav">
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

          {/* Desktop Category Navigation Tabs */}
          <div className="catalog-tabs-wrap">
            <div className="catalog-tabs">
              <button
                type="button"
                className={`cat-tab ${activeCategory === "All" ? "active" : ""}`}
                onClick={() => handleCategorySelect("All")}
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
                  onClick={() => handleCategorySelect(c.name)}
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
                placeholder="Search by product name, category, material or specifications..."
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

          {/* Category Description Banner */}
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
        </div>

        {/* Anchor for smooth scroll when category is selected */}
        <div id="catalog-products-anchor" className="catalog-anchor-spacer" />

        {/* Selected Category Status Bar (Active on Mobile or when filtered) */}
        {activeCategory !== "All" && (
          <div className="active-cat-indicator-bar">
            <div className="active-cat-info">
              <span className="active-cat-label">Filtered Category:</span>
              <span className="active-cat-name">{activeCategory}</span>
              <span className="active-cat-badge">({filteredProducts.length} items)</span>
            </div>
            <button
              type="button"
              className="btn-reset-cat"
              onClick={() => handleCategorySelect("All")}
            >
              Show All Products ✕
            </button>
          </div>
        )}

        {/* Product Cards Grid: Product Name and View Details button at the bottom of the image */}
        {filteredProducts.length === 0 ? (
          <div className="no-products-box">
            <Icon name="blade" size={42} className="no-prod-icon" />
            <h3>No products found</h3>
            <p>Try selecting another category or clear your search term.</p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                handleCategorySelect("All");
                setSearch("");
              }}
            >
              Reset to All Products
            </button>
          </div>
        ) : (
          <>
            <div className="product-grid">
              {displayedProducts.map((p, idx) => (
                <div
                  className="product-card modern-card animated-product-card"
                  key={p.slug}
                  style={{ animationDelay: `${(idx % 6) * 0.08}s` }}
                >
                  {/* Product Image on top (clean, no badge overlay on top) */}
                  <Link href={`/products/${p.slug}`} className="product-media-link" aria-label={`View ${p.name}`}>
                    <div className="product-media">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Link>

                  {/* Below the image: Category Label, Product Name, and View Details Button */}
                  <div className="product-card-body">
                    <span className="product-cat-label">
                      {p.subCategory ?? p.category}
                    </span>
                    <h3 className="product-card-title">
                      <Link href={`/products/${p.slug}`} className="product-title-link">
                        {p.name}
                      </Link>
                    </h3>

                    {/* View Details Action: Opens full product page with all specs, price, description & enquiry */}
                    <div className="product-actions">
                      <Link href={`/products/${p.slug}`} className="btn btn-primary btn-product-view">
                        View Details →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Show More Button (Home Page Preview when viewing "All") */}
            {isHome && activeCategory === "All" && (
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
