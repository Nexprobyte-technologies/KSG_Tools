import Link from "next/link";
import Icon from "@/components/icons";
import { company } from "@/lib/data";

export default function NotFound() {
  return (
    <div className="section section-alt not-found-section" style={{ minHeight: "70vh", display: "flex", alignItems: "center" }}>
      <div className="container" style={{ textAlign: "center", maxWidth: 680, margin: "40px auto" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 16px",
            background: "rgba(242, 140, 40, 0.12)",
            color: "var(--machinery-orange)",
            borderRadius: 999,
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: 0.5,
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          <Icon name="close" size={14} /> 404 &middot; Not Found
        </div>

        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 850, color: "var(--ink)", marginBottom: 16, lineHeight: 1.2 }}>
          Page or Product Not Found
        </h1>

        <p style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.6, marginBottom: 32 }}>
          The link you followed may be broken, or the product specification may have been updated.
          You can return to our homepage, explore our industrial tool catalog, or reach our Coimbatore sales desk directly.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center", marginBottom: 36 }}>
          <Link href="/" className="btn btn-primary" style={{ padding: "12px 24px" }}>
            <Icon name="gear" size={16} /> Return to Home
          </Link>
          <Link href="/products" className="btn btn-outline" style={{ padding: "12px 24px" }}>
            <Icon name="blade" size={16} /> Browse Products &amp; Services
          </Link>
          <Link href="/contact" className="btn btn-outline-dark" style={{ padding: "12px 24px" }}>
            <Icon name="phone" size={16} /> Contact Sales
          </Link>
        </div>

        <div
          style={{
            padding: "18px 24px",
            background: "var(--card-bg, #ffffff)",
            border: "1px solid var(--line)",
            borderRadius: 14,
            fontSize: 14,
            color: "var(--ink)",
            display: "inline-flex",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <span>Need immediate assistance?</span>
          <a
            href={`tel:${company.phoneLink}`}
            style={{ color: "var(--primary)", fontWeight: 700, textDecoration: "none" }}
          >
            📞 {company.phone}
          </a>
          <span style={{ color: "var(--line)" }}>|</span>
          <a
            href={`https://wa.me/${company.whatsapp}?text=Hi%20K.S.G.%20Tools%2C%20I%20need%20help%20finding%20a%20product%20on%20your%20website.`}
            target="_blank"
            rel="noreferrer"
            style={{ color: "#25D366", fontWeight: 700, textDecoration: "none" }}
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
