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
            Precision Industrial Cutting Tools &amp; Machinery by <span className="accent">K.S.G. Tools</span>
          </h1>
          <div className="hero-tech-pills">
            <span className="hero-tech-pill">
              <Icon name="gear" size={13} /> D2 &amp; HCHCr Tool Steels
            </span>
            <span className="hero-tech-pill">
              <Icon name="shield" size={13} /> HRC 58-62 Hardened
            </span>
            <span className="hero-tech-pill">
              <Icon name="wrench" size={13} /> 4-Axis VMC Tooling
            </span>
          </div>
          <p className="lead">
            <strong>{company.tagline}</strong> Trusted industrial partner for recycling and wood-processing industries since {company.estd}.
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
              <div className="val">{company.rating}</div>
              <div className="label">★ Client Rating</div>
            </div>
            <div className="stat-card">
              <div className="val">100%</div>
              <div className="label">User Satisfaction</div>
            </div>
          </div>
          <div className="hero-actions">
            <a href="/products" className="btn btn-primary">
              View Products &amp; Services
            </a>
            <a href="/contact" className="btn btn-outline">
              Contact Supplier
            </a>
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