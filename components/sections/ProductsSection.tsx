import Icon from "@/components/icons";
import { categories } from "@/lib/data";

const ICONS: Record<string, string> = {
  "Shredder Knives": "gear",
  "Chipper Knives": "blade",
  "Tools And Dies": "hammer",
  "Shredding Machine": "factory",
  "Grinder Blades": "disc",
  "Granulator Blades": "knife",
  "VMC Machine Job Work": "wrench",
  "Chaff Cutter Blades": "grass",
};

export default function ProductsSection() {
  const track = [...categories, ...categories];
  return (
    <section id="products" className="section">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">What we offer</span>
          <h2>Products &amp; Services</h2>
          <p className="sub">
            A wide and exclusive range of industrial cutting tools, blades and shredding
            machinery.
          </p>
        </div>
        <div className="category-marquee" role="region" aria-label="Product categories">
          <div className="marquee-track">
            {track.map((c, i) => (
              <a
                href="/products#shredder-knives"
                className="category-card"
                key={`${c.name}-${i}`}
                aria-hidden={i >= categories.length}
              >
                <div className="category-icon" aria-hidden>
                  <Icon name={ICONS[c.name] ?? "gear"} size={26} />
                </div>
                <div>
                  <h3>{c.name}</h3>
                  <p>{c.count} products available</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}