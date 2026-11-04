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
    gradient: "linear-gradient(135deg, #101c2c 0%, #1e334d 100%)",
    borderColor: "rgba(242, 140, 40, 0.45)",
    count: 10,
  },
  {
    name: "Chipper Knives",
    title: "CHIPPER KNIVES",
    image: "/products/indiamart-2851585949630.jpg",
    gradient: "linear-gradient(135deg, #132235 0%, #223752 100%)",
    borderColor: "rgba(242, 140, 40, 0.45)",
    count: 9,
  },
  {
    name: "Tools And Dies",
    title: "TOOLS AND DIES",
    image: "/products/indiamart-2852735040912.jpeg",
    gradient: "linear-gradient(135deg, #17293e 0%, #243c5a 100%)",
    borderColor: "rgba(242, 140, 40, 0.45)",
    count: 37,
  },
  {
    name: "Shredding Machine",
    title: "SHREDDING MACHINE",
    image: "/products/indiamart-2850479907955.jpg",
    gradient: "linear-gradient(135deg, #0e1724 0%, #1a2a40 100%)",
    borderColor: "rgba(242, 140, 40, 0.45)",
    count: 12,
  },
  {
    name: "Grinder Blades",
    title: "GRINDER BLADES",
    image: "/products/indiamart-2851585980433.jpg",
    gradient: "linear-gradient(135deg, #112033 0%, #1f3550 100%)",
    borderColor: "rgba(242, 140, 40, 0.45)",
    count: 3,
  },
  {
    name: "Granulator Blades",
    title: "GRANULATOR BLADES",
    image: "/products/indiamart-2850047382797.jpeg",
    gradient: "linear-gradient(135deg, #152539 0%, #233b58 100%)",
    borderColor: "rgba(242, 140, 40, 0.45)",
    count: 3,
  },
  {
    name: "VMC Machine Job Work",
    title: "VMC MACHINE JOB WORK",
    image: "/products/indiamart-2852735040848.jpeg",
    gradient: "linear-gradient(135deg, #182b41 0%, #264060 100%)",
    borderColor: "rgba(242, 140, 40, 0.45)",
    count: 7,
  },
  {
    name: "Chaff Cutter Blades",
    title: "CHAFF CUTTER BLADES",
    image: "/products/indiamart-2851586220048.jpeg",
    gradient: "linear-gradient(135deg, #101c2c 0%, #20344d 100%)",
    borderColor: "rgba(242, 140, 40, 0.45)",
    count: 2,
  },
];

// Hand-picked top flagship products representing each core category for home preview
const HOME_FEATURED_SLUGS = [
  "10-inch-double-shaft-shredder-knives", // Shredder Knives
  "4-inch-stainless-steel-chipper-knife", // Chipper Knives
  "metal-shredder-machine", // Shredding Machine
  "press-tool-die-manufacturer", // Tools And Dies
  "plastic-recycling-granulator-blade", // Granulator Blades
  "vmc-job-work-with-material-with-4-axis", // VMC Machine Job Work
  "shredder-machine-blade-for-industrial", // Grinder Blades
  "steel-crusher-blade-for-industrial", // Chaff Cutter Blades
];

interface ShredderCatalogProps {
  isHome?: boolean;
  limit?: number;
}

export default function ShredderCatalog({ isHome = false, limit = 6 }: ShredderCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [search, setSearch] = useState<string>("");
  const [sortBy, setSortBy] = useState<"featured" | "name-asc" | "name-desc">("featured");
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
      const slugMap = new Map(allProducts.map((p) => [p.slug, p]));
      const featured = HOME_FEATURED_SLUGS
        .map((s) => slugMap.get(s))
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
        const inName = p.name.toLowerCase().includes(q);
        const inCat = p.category?.toLowerCase().includes(q);
        const inSubCat = p.subCategory?.toLowerCase().includes(q);
        const inSpecs = p.specs.some(([k, v]) => k.toLowerCase().includes(q) || v.toLowerCase().includes(q));
        return inName || inCat || inSubCat || inSpecs;
      });
    }

    // Sort
    if (sortBy === "name-asc") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "name-desc") {
      list.sort((a, b) => b.name.localeCompare(a.name));
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
            <div style={{ marginTop: 12, marginBottom: 6 }}>
              <a
                href="/api/download-catalogue"
                download="KSG-Tools-Product-Catalogue.pdf"
                className="btn btn-primary"
                style={{ width: "100%", justifyContent: "center", gap: 8, fontSize: 14 }}
                title="Download Complete Product Catalogue (PDF)"
              >
                <Icon name="download" size={16} />
                <span>Download Catalogue (PDF)</span>
              </a>
            </div>
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
                  Direct from manufacturer in Coimbatore · {allProducts.length} Products &amp; Services available · Custom sizes &amp; grades manufactured to order
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
                <option value="name-asc">Product Name: A to Z</option>
                <option value="name-desc">Product Name: Z to A</option>
              </select>
            </div>

            <a
              href="/api/download-catalogue"
              download="KSG-Tools-Product-Catalogue.pdf"
              className="btn btn-outline catalog-download-btn"
              title="Download Complete Product Catalogue (PDF)"
            >
              <Icon name="download" size={15} />
              <span>Download PDF</span>
            </a>
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
                  {/* Product Image on top */}
                  <Link href={`/products/${p.slug}`} className="product-media-link" aria-label={`View ${p.name}`}>
                    <div className="product-media">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        style={{ objectFit: "cover" }}
                      />
                      <span className="product-card-badge">Custom Quote</span>
                    </div>
                  </Link>

                  {/* Below the image: Category Label, Product Name, Specs snippet, and Actions */}
                  <div className="product-card-body">
                    <div className="product-meta-row">
                      <span className="product-cat-label">
                        {p.subCategory ?? p.category}
                      </span>
                      {p.moq && (
                        <span className="product-moq-chip">MOQ: {p.moq}</span>
                      )}
                    </div>
                    <h3 className="product-card-title">
                      <Link href={`/products/${p.slug}`} className="product-title-link">
                        {p.name}
                      </Link>
                    </h3>

                    {/* Verified Specs Preview */}
                    {p.specs && p.specs.length > 0 && (
                      <div className="product-specs-preview">
                        {p.specs.slice(0, 2).map(([k, v]) => (
                          <div className="spec-item" key={k}>
                            <span className="spec-k">{k}:</span>
                            <span className="spec-v">{v}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Card Footer with Dual Action Buttons */}
                    <div className="product-card-footer">
                      <div className="price-tag-label">Factory Quote on Request</div>
                      <div className="product-actions-grid">
                        <Link href={`/products/${p.slug}`} className="btn btn-outline-dark btn-product-view">
                          View Specs
                        </Link>
                        <a
                          href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
                            `Hi K.S.G. Tools, I want to request a quote for ${p.name}.`
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-primary btn-product-quote"
                          title={`Get WhatsApp Quote for ${p.name}`}
                        >
                          Get Quote
                        </a>
                      </div>
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
