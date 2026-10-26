"use client";

import Link from "next/link";
import ShapeGrid from "@/components/ShapeGrid";
import Icon from "@/components/icons";
import { company } from "@/lib/data";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  pageType?: "products" | "about" | "contact" | "photos" | "videos" | "product-detail" | "custom";
  breadcrumbs?: BreadcrumbItem[];
  aside?: React.ReactNode;
}

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  pageType,
  breadcrumbs,
  aside,
}: PageHeaderProps) {
  // Determine page type if not explicitly passed
  const type =
    pageType ||
    (title.toLowerCase().includes("product")
      ? "products"
      : title.toLowerCase().includes("about")
      ? "about"
      : title.toLowerCase().includes("contact")
      ? "contact"
      : title.toLowerCase().includes("photo")
      ? "photos"
      : title.toLowerCase().includes("video")
      ? "videos"
      : "custom");

  // Render default industrial capability card for the right side
  const renderDefaultAside = () => {
    switch (type) {
      case "products":
        return (
          <div className="hero-capability-card">
            <div className="capability-card-head">
              <span className="capability-badge">
                <Icon name="gear" size={13} /> Factory Capabilities
              </span>
              <span className="capability-verified">
                <Icon name="check" size={13} /> Verified Mfr
              </span>
            </div>
            <div className="capability-title">Precision Tooling &amp; Supply Desk</div>
            <div className="capability-items-grid">
              <div className="capability-item">
                <div className="capability-item-title">
                  <Icon name="blade" size={13} /> 29+ Industrial Lines
                </div>
                <div className="capability-item-desc">
                  Chipper knives, tools &amp; dies, shredders, grinder blades &amp; VMC
                </div>
              </div>
              <div className="capability-item">
                <div className="capability-item-title">
                  <Icon name="shield" size={13} /> High-Alloy Steels
                </div>
                <div className="capability-item-desc">
                  Vacuum hardened D2, HCHCr, High Carbon &amp; SS304
                </div>
              </div>
              <div className="capability-item">
                <div className="capability-item-title">
                  <Icon name="wrench" size={13} /> Custom Machining
                </div>
                <div className="capability-item-desc">
                  CNC profiling to customer drawing &amp; ±0.02mm tolerance
                </div>
              </div>
              <div className="capability-item">
                <div className="capability-item-title">
                  <Icon name="truck" size={13} /> All-India Logistics
                </div>
                <div className="capability-item-desc">
                  Safe palletised road transport directly from Coimbatore
                </div>
              </div>
            </div>
            <div className="capability-actions">
              <a
                href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
                  "Hi K.S.G. Tools, I would like to request technical specifications and custom price quote for industrial cutting tools."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-hero-wa"
              >
                <Icon name="chat" size={14} /> WhatsApp RFQ
              </a>
              <a href={`tel:${company.phoneLink}`} className="btn-hero-call">
                <Icon name="phone" size={13} /> Call Works
              </a>
            </div>
          </div>
        );

      case "about":
        return (
          <div className="hero-capability-card">
            <div className="capability-card-head">
              <span className="capability-badge">
                <Icon name="factory" size={13} /> Coimbatore Works
              </span>
              <span className="capability-verified">
                <Icon name="check" size={13} /> Estd. 2009
              </span>
            </div>
            <div className="capability-title">Manufacturing Credentials</div>
            <div className="capability-items-grid">
              <div className="capability-item">
                <div className="capability-item-title">
                  <Icon name="award" size={13} /> 16+ Years Experience
                </div>
                <div className="capability-item-desc">
                  Supplying recycling, paper, timber &amp; foundry industries
                </div>
              </div>
              <div className="capability-item">
                <div className="capability-item-title">
                  <Icon name="user" size={13} /> Founder &amp; CEO
                </div>
                <div className="capability-item-desc">
                  Mr. K. Ganapathy — Proprietorship Firm
                </div>
              </div>
              <div className="capability-item">
                <div className="capability-item-title">
                  <Icon name="pin" size={13} /> Workshop Location
                </div>
                <div className="capability-item-desc">
                  Jothipuram, Coimbatore — Industrial Hub
                </div>
              </div>
              <div className="capability-item">
                <div className="capability-item-title">
                  <Icon name="shield" size={13} /> GST Registered
                </div>
                <div className="capability-item-desc">
                  GSTIN: {company.gst} · 100% Tax Compliant
                </div>
              </div>
            </div>
            <div className="capability-actions">
              <a
                href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
                  "Hi K.S.G. Tools, I want to learn more about your manufacturing unit in Coimbatore."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-hero-wa"
              >
                <Icon name="chat" size={14} /> Connect With Works
              </a>
              <a href={`tel:${company.phoneLink}`} className="btn-hero-call">
                <Icon name="phone" size={13} /> Call {company.phone}
              </a>
            </div>
          </div>
        );

      case "contact":
        return (
          <div className="hero-capability-card">
            <div className="capability-card-head">
              <span className="capability-badge">
                <Icon name="zap" size={13} /> Express Response
              </span>
              <span className="capability-verified">
                <Icon name="clock" size={13} /> Avg &lt; 15 Mins
              </span>
            </div>
            <div className="capability-title">Direct Sales &amp; Technical Desk</div>
            <div className="capability-items-grid">
              <div className="capability-item">
                <div className="capability-item-title">
                  <Icon name="phone" size={13} /> Factory Hotline
                </div>
                <div className="capability-item-desc">
                  {company.phone} (Direct to Works Desk)
                </div>
              </div>
              <div className="capability-item">
                <div className="capability-item-title">
                  <Icon name="chat" size={13} /> WhatsApp Instant
                </div>
                <div className="capability-item-desc">
                  Send sketches, drawings &amp; samples 24/7
                </div>
              </div>
              <div className="capability-item">
                <div className="capability-item-title">
                  <Icon name="clock" size={13} /> Working Hours
                </div>
                <div className="capability-item-desc">
                  Mon – Sat · 9:00 AM to 7:00 PM
                </div>
              </div>
              <div className="capability-item">
                <div className="capability-item-title">
                  <Icon name="pin" size={13} /> Plant Location
                </div>
                <div className="capability-item-desc">
                  Coimbatore Industrial Corridor, Tamil Nadu
                </div>
              </div>
            </div>
            <div className="capability-actions">
              <a
                href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
                  "Hi K.S.G. Tools, I have an urgent tooling inquiry."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-hero-wa"
              >
                <Icon name="chat" size={14} /> Instant WhatsApp
              </a>
              <a href={`tel:${company.phoneLink}`} className="btn-hero-call">
                <Icon name="phone" size={13} /> Call Now
              </a>
            </div>
          </div>
        );

      case "photos":
        return (
          <div className="hero-capability-card">
            <div className="capability-card-head">
              <span className="capability-badge">
                <Icon name="factory" size={13} /> Infrastructure
              </span>
              <span className="capability-verified">
                <Icon name="check" size={13} /> Coimbatore Unit
              </span>
            </div>
            <div className="capability-title">Machining &amp; Toolroom Park</div>
            <div className="capability-items-grid">
              <div className="capability-item">
                <div className="capability-item-title">
                  <Icon name="hammer" size={13} /> Tool &amp; Die Bay
                </div>
                <div className="capability-item-desc">
                  Press tool dies, aluminium patterns &amp; progressive tools
                </div>
              </div>
              <div className="capability-item">
                <div className="capability-item-title">
                  <Icon name="wrench" size={13} /> 4-Axis VMC
                </div>
                <div className="capability-item-desc">
                  High-speed vertical milling &amp; precision CNC boring
                </div>
              </div>
              <div className="capability-item">
                <div className="capability-item-title">
                  <Icon name="blade" size={13} /> Surface Grinding
                </div>
                <div className="capability-item-desc">
                  Razor-sharp, mirror polished cutting edges
                </div>
              </div>
              <div className="capability-item">
                <div className="capability-item-title">
                  <Icon name="package" size={13} /> Raw Material Stock
                </div>
                <div className="capability-item-desc">
                  Prime grade D2, HCHCr &amp; stainless alloy billets
                </div>
              </div>
            </div>
            <div className="capability-actions">
              <a
                href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
                  "Hi K.S.G. Tools, I would like to schedule a visit to your Coimbatore manufacturing workshop."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-hero-wa"
              >
                <Icon name="chat" size={14} /> Schedule Visit
              </a>
              <a href={`tel:${company.phoneLink}`} className="btn-hero-call">
                <Icon name="phone" size={13} /> Contact Works
              </a>
            </div>
          </div>
        );

      case "videos":
        return (
          <div className="hero-capability-card">
            <div className="capability-card-head">
              <span className="capability-badge">
                <Icon name="play" size={13} /> Live Trials
              </span>
              <span className="capability-verified">
                <Icon name="check" size={13} /> Real Machine Tests
              </span>
            </div>
            <div className="capability-title">Workshop Demonstration Rig</div>
            <div className="capability-items-grid">
              <div className="capability-item">
                <div className="capability-item-title">
                  <Icon name="factory" size={13} /> Double Shaft Trial
                </div>
                <div className="capability-item-desc">
                  High-torque continuous shredding of tough scrap
                </div>
              </div>
              <div className="capability-item">
                <div className="capability-item-title">
                  <Icon name="blade" size={13} /> Knife Load Test
                </div>
                <div className="capability-item-desc">
                  D2 hardened knives cutting with zero tooth chipping
                </div>
              </div>
              <div className="capability-item">
                <div className="capability-item-title">
                  <Icon name="gear" size={13} /> Shaft Balancing
                </div>
                <div className="capability-item-desc">
                  Precise dynamic alignment for smooth 24/7 operation
                </div>
              </div>
              <div className="capability-item">
                <div className="capability-item-title">
                  <Icon name="check" size={13} /> Coimbatore Made
                </div>
                <div className="capability-item-desc">
                  Engineered &amp; recorded at our Coimbatore workshop
                </div>
              </div>
            </div>
            <div className="capability-actions">
              <a
                href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
                  "Hi K.S.G. Tools, can you run a machine trial demo on our raw material?"
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-hero-wa"
              >
                <Icon name="chat" size={14} /> Request Live Trial
              </a>
              <a href={`tel:${company.phoneLink}`} className="btn-hero-call">
                <Icon name="phone" size={13} /> Talk to Engineer
              </a>
            </div>
          </div>
        );

      default:
        return (
          <div className="hero-capability-card">
            <div className="capability-card-head">
              <span className="capability-badge">
                <Icon name="gear" size={13} /> K.S.G. Tools
              </span>
              <span className="capability-verified">
                <Icon name="check" size={13} /> Estd. 2009
              </span>
            </div>
            <div className="capability-title">Precision Tooling Manufacturer</div>
            <div className="capability-items-grid">
              <div className="capability-item">
                <div className="capability-item-title">
                  <Icon name="blade" size={13} /> Industrial Knives
                </div>
                <div className="capability-item-desc">Chipper, shredder, grinder &amp; granulator blades</div>
              </div>
              <div className="capability-item">
                <div className="capability-item-title">
                  <Icon name="hammer" size={13} /> Tools &amp; Dies
                </div>
                <div className="capability-item-desc">Press tool dies, patterns &amp; progressive tools</div>
              </div>
            </div>
            <div className="capability-actions">
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="btn-hero-wa"
              >
                <Icon name="chat" size={14} /> WhatsApp Quote
              </a>
              <a href={`tel:${company.phoneLink}`} className="btn-hero-call">
                <Icon name="phone" size={13} /> Call {company.phone}
              </a>
            </div>
          </div>
        );
    }
  };

  return (
    <section className="page-hero">
      <ShapeGrid
        className="page-hero-canvas"
        direction="right"
        speed={0.35}
        squareSize={42}
        borderColor="rgba(148, 163, 184, 0.16)"
        hoverFillColor="rgba(217, 119, 36, 0.1)"
        shape="square"
        hoverTrailAmount={6}
        backgroundColor="rgba(11, 18, 32, 0.65)"
      />
      <div className="container">
        <div className="page-hero-grid">
          {/* Left Column: Heading, Breadcrumbs, Eyebrow & Badges */}
          <div className="page-hero-content">
            <div className="page-breadcrumb">
              {breadcrumbs ? (
                breadcrumbs.map((b, i) => (
                  <span key={i} className="breadcrumb-item">
                    {i > 0 && <span className="bc-sep">/</span>}
                    {b.href ? <Link href={b.href}>{b.label}</Link> : <span>{b.label}</span>}
                  </span>
                ))
              ) : (
                <>
                  <Link href="/">Home</Link>
                  <span className="bc-sep">/</span>
                  <span>{title}</span>
                </>
              )}
            </div>

            <span className="eyebrow">{eyebrow}</span>
            <h1>{title}</h1>
            <p>{subtitle}</p>

            <div className="page-hero-pills">
              <span className="page-hero-pill">
                <Icon name="gear" size={13} /> ±0.02mm CNC Tolerance
              </span>
              <span className="page-hero-pill">
                <Icon name="shield" size={13} /> HRC 58-62 Hardened Steel
              </span>
              <span className="page-hero-pill">
                <Icon name="factory" size={13} /> Coimbatore Works Direct
              </span>
            </div>
          </div>

          {/* Right Column: Industrial Capability Showcase (Fulfills Empty Space) */}
          <div className="page-hero-aside">{aside ? aside : renderDefaultAside()}</div>
        </div>
      </div>
    </section>
  );
}