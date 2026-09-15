import { company, whyUsPoints } from "@/lib/data";

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <span className="eyebrow">About Us</span>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 800, marginTop: 10 }}>
              Manufacturer of Industrial Cutting Tools
            </h2>
            <p style={{ marginTop: 18 }}>
              Established as a <strong>Proprietorship firm in the year 2009</strong>,
              “K.S.G Tools” are a leading <strong>Manufacturer, Wholesaler, Trader and
              Retailer</strong> of a wide range Shredder Knives, Plastic Granulator
              Blades, Chipper Knives, Wood Chipper Knives Etc.
            </p>
            <p>
              Based in {company.city}, we combine skilled craftsmanship with modern
              machining to deliver durable, high-performance tooling for recycling and
              processing industries across India and beyond.
            </p>
            <p>
              Recipient of Goods or Services for works contracts, we cater to requirements
              from small workshops to large industrial units.
            </p>
          </div>
          <div className="about-card">
            <div className="big-mark">K.S.G Tools</div>
            <p style={{ color: "#cbd5e1", marginTop: 6 }}>Why clients choose us:</p>
            <ul>
              {whyUsPoints.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}