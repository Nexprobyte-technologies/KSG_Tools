import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/icons";
import ShapeGrid from "@/components/ShapeGrid";
import CtaBand from "@/components/sections/CtaBand";
import ContactSection from "@/components/sections/ContactSection";
import { shredderKnives, company, videos } from "@/lib/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return shredderKnives.products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = shredderKnives.products.find((p) => p.slug === slug);
  if (!product) return { title: "Product Not Found | K.S.G. Tools" };
  return {
    title: `${product.name} | K.S.G. Tools`,
    description: `${product.name} by ${company.name}, Coimbatore. ${
      product.price === null ? "Ask for price" : `Price ₹ ${product.price} / Piece.`
    } Get best quote for your requirement.`,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = shredderKnives.products.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = shredderKnives.products
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);

  return (
    <>
      <section className="page-hero">
        <ShapeGrid
          className="page-hero-canvas"
          direction="right"
          speed={0.4}
          squareSize={42}
          borderColor="rgba(148, 163, 184, 0.22)"
          hoverFillColor="rgba(251, 191, 36, 0.12)"
          shape="square"
          hoverTrailAmount={6}
          backgroundColor="rgba(11, 18, 32, 0.5)"
        />
        <div className="container">
          <div className="page-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <a href="/products">Products</a>
            <span>/</span>
            <span>{product.name}</span>
          </div>
          <span className="eyebrow">Product Details</span>
          <h1>{product.name}</h1>
          <p>
            Manufactured by {company.name}, {company.city} with precision materials and
            finishes.
          </p>
        </div>
      </section>

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
                <span className="tag">Product</span>
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
                <div className="detail-rating">
                  <span className="stars">
                    {"★".repeat(2)}
                    {"☆".repeat(3)}
                  </span>
                  <span className="rating-note">
                    {company.rating} / 5 · {company.totalRatings} ratings
                  </span>
                </div>
                <a href={`/contact?product=${encodeURIComponent(product.name)}`} className="btn btn-primary w100">
                  Get Best Quote
                </a>
                <a href={`tel:${company.phoneLink}`} className="btn btn-dark w100">
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
                    `Hi K.S.G. Tools, I am interested in: ${product.name}\nPrice: ${product.price === null ? "Ask" : `₹ ${product.price.toLocaleString("en-IN")} / Piece`}\nPlease share more details.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-wa w100"
                >
                  WhatsApp Us
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