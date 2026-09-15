import Image from "next/image";
import Icon from "@/components/icons";
import ShapeGrid from "@/components/ShapeGrid";
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
        hoverFillColor="rgba(251, 191, 36, 0.14)"
        shape="hexagon"
        hoverTrailAmount={8}
        backgroundColor="rgba(11, 18, 32, 0.45)"
      />
      <div className="container">
        <div>
          <span className="hero-badge">
            <Icon name="zap" size={14} /> Estd. 2009 · Manufacturer
          </span>
          <h1>
            Precision Cutting Tools by <span className="accent">K.S.G. Tools</span>
          </h1>
          <p className="lead">
            {company.tagline} Trusted partner for the recycling and wood-processing
            industries since {company.estd}.
          </p>
          <div className="hero-stats">
            <div className="stat-card">
              <div className="val">{company.years}+</div>
              <div className="label">Years of Experience</div>
            </div>
            <div className="stat-card">
              <div className="val">49+</div>
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

        <div className="hero-visual">
          <div className="blade-spin">
            <div className="blade-rings" aria-hidden />
            <div className="blade-img">
              <Image
                src="/hero/shredder-blade.jpg"
                alt="Shredder blade manufactured by K.S.G. Tools"
                fill
                sizes="380px"
                priority
                style={{ objectFit: "cover" }}
              />
            </div>
            <span className="blade-chip">
              Shredder Knives &amp; Blades · {company.city}
            </span>
          </div>
        </div>
      </div>
      <div className="hero-scroll">Scroll to explore ↓</div>
    </section>
  );
}