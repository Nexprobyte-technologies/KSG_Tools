import Image from "next/image";
import Link from "next/link";
import { shredderKnives } from "@/lib/data";

export default function ShredderCatalog() {
  return (
    <section id="shredder-knives" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Featured Range</span>
          <h2>{shredderKnives.title}</h2>
          <p className="sub">
            {shredderKnives.products.length} products available · Prices for your
            reference, final quote on enquiry
          </p>
        </div>
        <div className="product-intro">
          <strong>{shredderKnives.title}.</strong> {shredderKnives.intro}
        </div>
        <div className="product-grid">
          {shredderKnives.products.map((p) => (
            <div className="product-card" key={p.slug}>
              <div className="product-media">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 700px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="product-top">
                <h3>{p.name}</h3>
                <div className="product-price">
                  <span className={`price-tag${p.price === null ? " ask" : ""}`}>
                    {p.price === null
                      ? "Ask Price"
                      : `₹ ${p.price.toLocaleString("en-IN")} / Piece`}
                  </span>
                  {p.moq && <span className="moq-tag">MOQ: {p.moq}</span>}
                </div>
              </div>
              <div className="spec-list">
                {p.specs.slice(0, 3).map(([k, v]) => (
                  <div className="spec-row" key={k}>
                    <span className="k">{k}</span>
                    <span className="v">{v}</span>
                  </div>
                ))}
              </div>
              <div className="product-actions">
                <Link href={`/products/${p.slug}`} className="btn btn-primary">
                  View Details
                </Link>
                <a
                  href={`/contact?product=${encodeURIComponent(p.name)}`}
                  className="btn btn-dark"
                >
                  Get Best Quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}