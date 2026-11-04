import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/icons";
import { company } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Hero Introduction">
      {/* Genuine Factory Infrastructure Background Image with slow zoom */}
      <div className="hero-bg-media" aria-hidden="true">
        <Image
          src="/infrastructure/feeler-vmp-45a-machining-center.webp"
          alt="K.S.G. Tools FEELER VMP-45A Precision CNC Machining Center"
          fill
          priority
          sizes="100vw"
          className="hero-bg-img"
        />
        <div className="hero-overlay" />
      </div>

      <div className="container hero-container-centered">
        <div className="hero-content-centered">
          <span className="hero-badge">
            <Icon name="factory" size={14} /> Estd. 2009 · Industrial Tool Manufacturer · Coimbatore
          </span>
          <h1>
            Industrial Cutting Tools, Shredder Knives &amp; VMC Machining by{" "}
            <span className="accent">K.S.G. Tools</span>
          </h1>
          <p className="lead">
            Coimbatore-based direct manufacturer of high-wear Chipper Knives, Shredder Blades,
            Granulator Cutters, Precision Tools &amp; Dies, and 4-Axis CNC VMC Machining.
          </p>

          <div className="hero-stats">
            <div className="stat-card">
              <div className="val">{company.years}+</div>
              <div className="label">Years Manufacturing Hub</div>
            </div>
            <div className="stat-card">
              <div className="val">83+</div>
              <div className="label">Product &amp; Service Lines</div>
            </div>
            <div className="stat-card">
              <div className="val">&plusmn;0.02mm</div>
              <div className="label">Machining Precision</div>
            </div>
            <div className="stat-card">
              <div className="val">100%</div>
              <div className="label">Direct Factory Supply</div>
            </div>
          </div>

          <div className="hero-actions">
            <Link href="/products" className="btn btn-primary hero-btn-primary">
              <Icon name="blade" size={16} /> Explore Products
            </Link>
            <Link href="/contact" className="btn btn-outline hero-btn-outline">
              <Icon name="tag" size={16} /> Request a Quote
            </Link>
          </div>

          <div className="hero-feature-tags">
            <span className="hero-tag-item">
              <Icon name="check" size={13} /> D2 &amp; HCHCr High-Grade Tool Steels
            </span>
            <span className="hero-tag-item">
              <Icon name="gear" size={13} /> 4-Axis CNC VMC &amp; Custom Sampling
            </span>
            <span className="hero-tag-item">
              <Icon name="truck" size={13} /> All-India Road Dispatch
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
