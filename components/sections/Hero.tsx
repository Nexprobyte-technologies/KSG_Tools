import Icon from "@/components/icons";
import ShapeGrid from "@/components/ShapeGrid";
import HeroProductSlider from "@/components/HeroProductSlider";
import { company } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <ShapeGrid
        className="hero-canvas"
        direction="diagonal"
        speed={0.5}
        squareSize={46}
        borderColor="rgba(148, 163, 184, 0.3)"
        hoverFillColor="rgba(56, 189, 248, 0.18)"
        shape="hexagon"
        hoverTrailAmount={8}
        backgroundColor="rgba(7, 13, 30, 0.45)"
      />
      <div className="container">
        <div>
          <span className="hero-badge">
            <Icon name="factory" size={14} /> Estd. 2009 · Industrial Tool Manufacturer · Coimbatore
          </span>
          <h1>
            Precision Components Manufacturing and Tradings by <span className="accent">K.S.G. Tools</span>
          </h1>
          <p className="lead">
            <strong>Manufacturing, Sampling, Recycling Machine Spares, Shredded Blade, Wood Chipper Blades, Plastic Grinder Blades.</strong>
          </p>

          <div className="hero-stats">
            <div className="stat-card">
              <div className="val">{company.years}+</div>
              <div className="label">Years of Experience</div>
            </div>
            <div className="stat-card">
              <div className="val">83+</div>
              <div className="label">Products &amp; Services</div>
            </div>
            <div className="stat-card">
              <div className="val">100%</div>
              <div className="label">Quality Tested</div>
            </div>
            <div className="stat-card">
              <div className="val">100%</div>
              <div className="label">Direct Dispatch</div>
            </div>
          </div>

          <div className="hero-actions">
            <a href="/products" className="btn btn-primary hero-btn-primary">
              <Icon name="blade" size={16} /> View Products &amp; Services
            </a>
            <a href="/contact" className="btn btn-outline hero-btn-outline">
              <Icon name="phone" size={16} /> Contact Supplier
            </a>
          </div>

          <div className="hero-feature-tags">
            <span className="hero-tag-item">
              <Icon name="check" size={13} /> D2 &amp; HCHCr High-Grade Tool Steels
            </span>
            <span className="hero-tag-item">
              <Icon name="gear" size={13} /> 4-Axis VMC &amp; Custom Sampling
            </span>
            <span className="hero-tag-item">
              <Icon name="truck" size={13} /> Direct Manufacturer Pricing
            </span>
          </div>
        </div>

        <div className="hero-slider-column">
          <HeroProductSlider />
        </div>
      </div>
      <div className="hero-scroll">Scroll to explore ↓</div>
    </section>
  );
}
