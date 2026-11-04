import Icon from "@/components/icons";

interface Step {
  num: string;
  title: string;
  tag: string;
  desc: string;
  icon: "gear" | "blade" | "wrench" | "shield" | "truck";
}

const steps: Step[] = [
  {
    num: "01",
    title: "Tool Profiling & Sampling",
    tag: "Engineering Drawing",
    desc: "We analyze client component drawings, sample blades, or machinery specifications to engineer exact knife profiles with ±0.02mm tolerances.",
    icon: "gear",
  },
  {
    num: "02",
    title: "Certified Tool Steel Selection",
    tag: "Metallurgy Grade",
    desc: "Rigorous material selection utilizing premium D2 (AISI D2), HCHCr (High Carbon High Chromium), High Carbon Steel, or SS304 to match the cutting application.",
    icon: "blade",
  },
  {
    num: "03",
    title: "4-Axis CNC VMC Machining",
    tag: "Precision Milling",
    desc: "Heavy-duty CNC milling executed on rigid FEELER VMP-45A and VMP-40A vertical machining centers for exacting bolt patterns and bevel angles.",
    icon: "wrench",
  },
  {
    num: "04",
    title: "Controlled Heat Treatment",
    tag: "Hardening & Tempering",
    desc: "Precisely controlled thermal hardening and multi-stage tempering to achieve peak Rockwell hardness without edge brittleness under shock loads.",
    icon: "shield",
  },
  {
    num: "05",
    title: "Precision Edge Grinding & Dispatch",
    tag: "QC & Safe Transport",
    desc: "Ultra-sharp precision surface grinding, dimensional optical verification, protective anti-rust coating, and palletized road dispatch across India.",
    icon: "truck",
  },
];

export default function ManufacturingProcessSection() {
  return (
    <section id="process" className="section process-section" aria-label="Manufacturing Process">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Technical Workflow</span>
          <h2>Our 5-Stage Precision Manufacturing Process</h2>
          <p className="sub">
            From raw alloy billet to finished high-wear blade: how K.S.G. Tools ensures
            exceptional longevity, sharp cut quality, and zero-defect fitment.
          </p>
        </div>

        <div className="process-flow-grid">
          {steps.map((s, idx) => (
            <div className="process-card" key={s.num}>
              <div className="process-card-top">
                <span className="process-num">{s.num}</span>
                <div className="process-icon-wrap" aria-hidden="true">
                  <Icon name={s.icon} size={20} />
                </div>
              </div>
              <span className="process-tag">{s.tag}</span>
              <h3 className="process-title">{s.title}</h3>
              <p className="process-desc">{s.desc}</p>
              {idx < steps.length - 1 && (
                <div className="process-connector" aria-hidden="true">
                  <span className="connector-dot" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
