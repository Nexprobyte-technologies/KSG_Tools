import Icon from "@/components/icons";
import ShapeGrid from "@/components/ShapeGrid";
import Stars from "@/components/Stars";
import { company } from "@/lib/data";

const highPriorityProducts = [
  "Shredder Knives",
  "Plastic Granulator Blades",
  "Chipper Knives",
  "Wood Chipper Knives",
];

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
          <div className="kicker">Our Specialities</div>
          <div className="title">Industrial Knives &amp; Machines</div>
          <div className="knife-row">
            {highPriorityProducts.map((p) => (
              <div className="knife-chip" key={p}>
                <span className="dot" aria-hidden />
                {p}
              </div>
            ))}
          </div>
          <div className="rating-row">
            <Stars count={company.rating} />
            <div>
              <strong style={{ color: "#fff" }}>{company.rating} / 5</strong>
              <div style={{ fontSize: "13px", color: "#9aa8bc" }}>
                {company.totalRatings} verified ratings
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll">Scroll to explore ↓</div>
    </section>
  );
}