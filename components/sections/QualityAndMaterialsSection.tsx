import Icon from "@/components/icons";

const materials = [
  {
    grade: "D2 Tool Steel",
    full: "AISI D2 / 1.2379 Cold Work Steel",
    desc: "Exceptional wear resistance and edge retention. Ideal for plastic granulators, abrasive polymer regrind, and recycling shredders.",
    badge: "High Wear Resistance",
  },
  {
    grade: "HCHCr Steel",
    full: "High Carbon High Chromium Alloy",
    desc: "High compressive strength and tough shear resistance for heavy-duty timber chippers, wood processing, and metal shredder blocks.",
    badge: "Heavy Impact Toughness",
  },
  {
    grade: "High Carbon Steel",
    full: "Special Hardened Carbon Tool Steel",
    desc: "Engineered for agricultural biomass, chaff cutting, and recycling applications requiring shock absorbency and resharpenability.",
    badge: "High Resilience",
  },
  {
    grade: "Stainless Steel SS304",
    full: "Austenitic Stainless Steel",
    desc: "High corrosion resistance for agricultural coir shredders, food-grade chopping knives, and wet-granulation environments.",
    badge: "Corrosion Resistant",
  },
];

const qcChecks = [
  {
    title: "±0.02mm Dimensional Accuracy",
    desc: "Rigid tolerance inspection ensures precision alignment in dual-shaft shredder shafts and die sets.",
    icon: "check" as const,
  },
  {
    title: "Rockwell Hardness Verification",
    desc: "Controlled thermal hardening checked to ensure maximum edge life without brittleness under shock.",
    icon: "shield" as const,
  },
  {
    title: "Optical Edge & Bevel Inspection",
    desc: "Every cutting edge is ground to exact OEM bevel angles for clean shearing and low motor load.",
    icon: "blade" as const,
  },
  {
    title: "100% Direct Factory Dispatch",
    desc: "Final rust-preventive packaging and secure palletized road dispatch directly from Coimbatore.",
    icon: "truck" as const,
  },
];

const industries = [
  { name: "Plastic & Polymer Recycling", count: "Granulators & Shredders" },
  { name: "Wood & Biomass Chipping", count: "Wood Chipper Blades" },
  { name: "Scrap Metal Processing", count: "Double Shaft Shredders" },
  { name: "Agricultural Biomass & Coir", count: "Chaff & Husk Cutters" },
  { name: "Foundry & Press Tooling", count: "Dies & Moulds" },
  { name: "CNC Machining Center Job Work", count: "4-Axis Milling" },
];

export default function QualityAndMaterialsSection() {
  return (
    <section className="section section-alt quality-materials-section" aria-label="Materials and Quality Standards">
      <div className="container">
        {/* Section Head */}
        <div className="section-head center">
          <span className="eyebrow">Engineered For Longevity</span>
          <h2>Tool Steels, Quality Inspection &amp; Industries</h2>
          <p className="sub">
            We use verified metallurgical grades and rigorous workshop inspection to ensure
            your cutting equipment runs with minimal downtime and maximum shear efficiency.
          </p>
        </div>

        {/* 2-Column Split: Materials & Quality Checks */}
        <div className="qm-split-grid">
          {/* Column 1: Materials */}
          <div className="qm-col">
            <div className="qm-col-head">
              <span className="qm-icon-wrap" aria-hidden="true">
                <Icon name="blade" size={20} />
              </span>
              <div>
                <span className="qm-col-tag">Certified Metallurgy</span>
                <h3 className="qm-col-title">High-Grade Tool Steels</h3>
              </div>
            </div>

            <div className="qm-items-list">
              {materials.map((m) => (
                <div className="qm-item-card" key={m.grade}>
                  <div className="qm-item-top">
                    <strong className="qm-grade-name">{m.grade}</strong>
                    <span className="qm-grade-badge">{m.badge}</span>
                  </div>
                  <div className="qm-grade-full">{m.full}</div>
                  <p className="qm-grade-desc">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Quality Control & Tolerances */}
          <div className="qm-col">
            <div className="qm-col-head">
              <span className="qm-icon-wrap emerald" aria-hidden="true">
                <Icon name="shield" size={20} />
              </span>
              <div>
                <span className="qm-col-tag">Precision Engineering</span>
                <h3 className="qm-col-title">Quality Assurance Protocol</h3>
              </div>
            </div>

            <div className="qm-items-list">
              {qcChecks.map((q) => (
                <div className="qm-qc-card" key={q.title}>
                  <div className="qm-qc-icon" aria-hidden="true">
                    <Icon name={q.icon} size={18} />
                  </div>
                  <div>
                    <h4 className="qm-qc-title">{q.title}</h4>
                    <p className="qm-qc-desc">{q.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Industries Served Strip */}
            <div className="industries-box">
              <h4 className="industries-box-title">Industries We Serve Across India</h4>
              <div className="industries-chips-grid">
                {industries.map((ind) => (
                  <div className="industry-chip" key={ind.name}>
                    <span className="ind-dot" aria-hidden="true" />
                    <div>
                      <strong className="ind-name">{ind.name}</strong>
                      <span className="ind-sub">{ind.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
