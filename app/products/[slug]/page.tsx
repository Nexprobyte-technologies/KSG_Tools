import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/icons";
import PageHeader from "@/components/PageHeader";
import ShapeGrid from "@/components/ShapeGrid";
import CtaBand from "@/components/sections/CtaBand";
import ContactSection from "@/components/sections/ContactSection";
import { allProducts, getProductBySlug, company, videos } from "@/lib/data";

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
    description: `${product.name} by ${company.name}, Coimbatore. ${product.price === null ? "Ask for price" : `Price ₹ ${product.price} / Piece.`
      } Get best quote for your requirement.`,
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

  return (
    <>
      <PageHeader
        eyebrow="Product Details"
        title={product.name}
        subtitle={`Precision manufactured by ${company.name}, ${company.city} with high-grade wear-resistant tool steels and precision ground edges.`}
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
              <div className="detail-hero-price">
                <span className="detail-hero-price-num">
                  {product.price === null ? "Ask Price" : `₹ ${product.price.toLocaleString("en-IN")}`}
                </span>
                <span className="detail-hero-price-unit">{product.price === null ? "" : " / Piece"}</span>
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
                <div className="capability-item-desc">By Road from Coimbatore</div>
              </div>
            </div>
            <div className="capability-actions">
              <a
                href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
                  `Hi K.S.G. Tools, I want to order/enquire about ${product.name}.\nPrice: ${product.price === null ? "Ask Price" : `₹ ${product.price.toLocaleString("en-IN")} / Piece`
                  }\nPlease share technical drawing and quote.`
                )}`}
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
              </div>

              <div className="detail-video">
                <div className="detail-video-thumb">
                  <Icon name="play" size={30} />
                </div>
                <div className="detail-video-info">
                  <strong>Product Video</strong>
                  <span>
                    {videos[0]?.desc ?? "Video coming soon for this product."} A demo video
                    is being prepared — coming soon.
                  </span>
                </div>
              </div>

              <div className="detail-card">
                <h3>Product Specifications</h3>
                <div className="spec-list full">
                  {product.specs.map(([k, v]) => (
                    <div className="spec-row" key={k}>
                      <span className="k">{k}</span>
                      <span className="v">{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="detail-card">
                <h3>Product Description</h3>
                <p>{product.desc}</p>
                <p className="muted-p">
                  {company.name} is a trusted manufacturer and supplier based in{" "}
                  {company.city}, Tamil Nadu. Every blade is offered in customized sizes,
                  materials and finishes to suit your machine and application.
                </p>
              </div>
            </div>

            <aside className="detail-side">
              <div className="detail-pricecard">
                <div className="detail-code-banner">
                  <span className="code-label">Direct Manufacturer</span>
                  <span className="code-value">{company.city}</span>
                </div>
                <div className="detail-price">
                  {product.price === null ? (
                    "Ask Price"
                  ) : (
                    <>
                      ₹ <strong>{product.price.toLocaleString("en-IN")}</strong> / Piece
                    </>
                  )}
                </div>
                {product.moq && (
                  <div className="detail-moq">Minimum order quantity: {product.moq}</div>
                )}
                <a
                  href={`/contact?product=${encodeURIComponent(product.name)}`}
                  className="btn btn-primary w100"
                >
                  Get Best Quote
                </a>
                <a href={`tel:${company.phoneLink}`} className="btn btn-dark w100">
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
                    `Hi K.S.G. Tools, I am interested in: ${product.name}\nPrice: ${product.price === null ? "Ask Price" : `₹ ${product.price.toLocaleString("en-IN")} / Piece`}\nPlease share technical specifications and best quote.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-wa w100"
                >
                  <Icon name="chat" size={16} /> WhatsApp Enquiry
                </a>
                <p className="form-note">
                  GST+ &amp; handling charges extra as applicable. Shipment by{" "}
                  {company.city} via road transport.
                </p>
              </div>

              <div className="detail-card related-title">
                <h3>Related Products</h3>
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
                      <span className="related-price">
                        {r.price === null
                          ? "Ask Price"
                          : `₹ ${r.price.toLocaleString("en-IN")} / Piece`}
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
      <ContactSection />
    </>
  );
}