import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/icons";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/sections/CtaBand";
import { allProducts, getProductBySlug, company } from "@/lib/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return allProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found | K.S.G. Tools" };
  return {
    title: `${product.name} | K.S.G. Tools`,
    description: `${product.name} precision manufactured by ${company.name}, Coimbatore. Direct manufacturer quote, custom sampling and fast road delivery.`,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = allProducts
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .concat(allProducts.filter((p) => p.slug !== product.slug && p.category !== product.category))
    .slice(0, 4);

  const waText = encodeURIComponent(
    `Hi K.S.G. Tools, I want to enquire about:\n*${product.name}*\n` +
      `Category: ${product.category ?? "Industrial Tools"}\n` +
      (product.moq ? `MOQ: ${product.moq}\n` : "") +
      `Please share technical drawings, pricing, and dispatch schedule.`
  );

  return (
    <>
      <PageHeader
        eyebrow="Precision Tooling"
        title={product.name}
        subtitle={`Engineered and manufactured by ${company.name}, ${company.city} using wear-resistant tool steels with precision ground edges.`}
        pageType="product-detail"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: product.name },
        ]}
        aside={
          <div className="hero-capability-card">
            <div className="capability-card-head">
              <span className="capability-badge">{product.category}</span>
              <span className="capability-verified">
                <Icon name="check" size={13} /> Genuine Spec
              </span>
            </div>
            <div className="detail-hero-price-row">
              <div className="detail-hero-quote-badge">
                <Icon name="award" size={14} />
                <span>Custom Quote on Request</span>
              </div>
              {product.moq && (
                <span className="detail-hero-moq">MOQ: {product.moq}</span>
              )}
            </div>
            <div className="capability-items-grid">
              <div className="capability-item">
                <div className="capability-item-title">
                  <Icon name="tag" size={13} /> Category
                </div>
                <div className="capability-item-desc">
                  {product.subCategory ? `${product.category} · ${product.subCategory}` : (product.category ?? "Industrial Tools")}
                </div>
              </div>
              <div className="capability-item">
                <div className="capability-item-title">
                  <Icon name="truck" size={13} /> Dispatch Mode
                </div>
                <div className="capability-item-desc">Palletized by Road from Coimbatore</div>
              </div>
            </div>
            <div className="capability-actions">
              <a
                href={`https://wa.me/${company.whatsapp}?text=${waText}`}
                target="_blank"
                rel="noreferrer"
                className="btn-hero-wa"
              >
                <Icon name="chat" size={14} /> WhatsApp Enquiry
              </a>
              <a href={`tel:${company.phoneLink}`} className="btn-hero-call">
                <Icon name="phone" size={13} /> Call Sales
              </a>
            </div>
          </div>
        }
      />

      <section className="section">
        <div className="container">
          <div className="product-detail-layout">
            <div className="detail-main">
              {/* Product Image Gallery Box */}
              <div className="detail-gallery">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  style={{ objectFit: "cover" }}
                  priority
                />
                <span className="tag">{product.subCategory ?? product.category}</span>
                <span className="detail-origin-badge">Coimbatore Made</span>
              </div>

              {/* Verified Machinery Operation Demos Link */}
              <div className="detail-video">
                <div className="detail-video-thumb">
                  <Icon name="play" size={24} />
                </div>
                <div className="detail-video-info">
                  <strong>Live Machine Operation Trials</strong>
                  <span>
                    Watch our heavy-duty shredders and industrial knives running in real workshop trials.
                  </span>
                </div>
                <Link href="/videos" className="btn btn-outline-dark" style={{ padding: "8px 16px", fontSize: 13 }}>
                  Watch Videos →
                </Link>
              </div>

              {/* Verified Product Specifications Table */}
              <div className="detail-card">
                <div className="detail-card-head">
                  <Icon name="wrench" size={20} />
                  <h3>Verified Technical Specifications</h3>
                </div>
                <div className="spec-list full">
                  {product.specs.map(([k, v]) => (
                    <div className="spec-row" key={k}>
                      <span className="k">{k}</span>
                      <span className="v">{v}</span>
                    </div>
                  ))}
                  {product.moq && (
                    <div className="spec-row">
                      <span className="k">Minimum Order Quantity (MOQ)</span>
                      <span className="v">{product.moq}</span>
                    </div>
                  )}
                  <div className="spec-row">
                    <span className="k">Supply Origin</span>
                    <span className="v">{company.shortAddress}</span>
                  </div>
                  <div className="spec-row">
                    <span className="k">Machining Tolerance</span>
                    <span className="v">&plusmn;0.02mm CNC Accuracy</span>
                  </div>
                </div>
              </div>

              {/* Engineering Description & Applications */}
              <div className="detail-card">
                <div className="detail-card-head">
                  <Icon name="document" size={20} />
                  <h3>Product Description &amp; Engineering Fitment</h3>
                </div>
                <p>{product.desc}</p>
                <p className="muted-p">
                  {company.name} is a dedicated manufacturer based in {company.city}, Tamil Nadu.
                  Every blade is engineered with specialized bevel angles, custom bolt hole pitches,
                  and selected tool steels (D2 / HCHCr / High Carbon / SS304) to match your machine
                  specifications and maximize production uptime.
                </p>

                {/* Engineering Highlights Grid */}
                <div className="engineering-highlights-grid">
                  <div className="highlight-pill">
                    <Icon name="check" size={14} />
                    <span>D2 / HCHCr High-Wear Tool Steels</span>
                  </div>
                  <div className="highlight-pill">
                    <Icon name="check" size={14} />
                    <span>Optical Edge Hardness Checked</span>
                  </div>
                  <div className="highlight-pill">
                    <Icon name="check" size={14} />
                    <span>Custom Sampling to Customer Drawing</span>
                  </div>
                  <div className="highlight-pill">
                    <Icon name="check" size={14} />
                    <span>Direct Factory Value from Coimbatore</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky Pricing & RFQ Sidebar */}
            <aside className="detail-side">
              <div className="detail-pricecard">
                <div className="detail-code-banner">
                  <span className="code-label">Direct Manufacturer</span>
                  <span className="code-value">{company.city}</span>
                </div>
                <div className="detail-quote-heading">
                  <div className="detail-quote-title">Direct Factory Quote</div>
                  <div className="detail-quote-subtitle">Custom dimensions, hole pitch &amp; material grades</div>
                </div>
                {product.moq && (
                  <div className="detail-moq">Minimum order quantity: {product.moq}</div>
                )}
                <Link
                  href={`/contact?product=${encodeURIComponent(product.name)}`}
                  className="btn btn-primary w100"
                >
                  Request Official RFQ
                </Link>
                <a
                  href={`https://wa.me/${company.whatsapp}?text=${waText}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-wa w100"
                >
                  <Icon name="chat" size={16} /> Instant WhatsApp Quote
                </a>
                <a href={`tel:${company.phoneLink}`} className="btn btn-dark w100">
                  <Icon name="phone" size={15} /> Call Sales: {company.phone}
                </a>
                <p className="form-note">
                  Direct manufacturer supply. Safe road transport dispatch across India.
                </p>
              </div>

              {/* Related Tooling */}
              <div className="detail-card related-title">
                <h3>Related Tooling &amp; Spares</h3>
              </div>
              <div className="related-list">
                {related.map((r) => (
                  <Link
                    href={`/products/${r.slug}`}
                    className="related-card"
                    key={r.slug}
                  >
                    <span className="related-img">
                      <Image
                        src={r.image}
                        alt={r.name}
                        fill
                        sizes="96px"
                        style={{ objectFit: "cover" }}
                      />
                    </span>
                    <span className="related-body">
                      <span className="related-name">{r.name}</span>
                      <span className="related-category-tag">
                        {r.subCategory ?? r.category}
                      </span>
                    </span>
                    <Icon name="chevronDown" size={16} className="related-arrow" />
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
