import Link from "next/link";
import Icon from "@/components/icons";
import { company, whyUsPoints, factsheet } from "@/lib/data";

const pillars = [
  {
    icon: "blade",
    title: "Metallurgical Hardening (58-62 HRC)",
    desc: "Crafted from premium AISI D2 (1.2379 / SKD11) and High-Carbon High-Chromium (HCHCr) die steels, vacuum heat-treated for maximum wear resistance and zero edge-chipping.",
  },
  {
    icon: "gear",
    title: "4-Axis CNC VMC Machining",
    desc: "In-house FEELER VMP-45A and VMP-40A vertical machining centers equipped with 4th-axis rotary indexing for complex cutter profiles, precision hex bores, and knife pockets.",
  },
  {
    icon: "tools",
    title: "Precision Toolroom & Grinding",
    desc: "Equipped with digital readout (DRO) turret milling machines, CAD/CAM programming stations, and universal tool & cutter grinders achieving micron-level edge sharpness.",
  },
  {
    icon: "shield",
    title: "Strict 100% Quality Inspection",
    desc: "Every blade undergoes dimensional tolerance verification, hardness indentation testing, and dynamic rotor balancing before dispatch from our Coimbatore plant.",
  },
];

const industries = [
  {
    name: "Plastic & Polymer Recycling",
    desc: "High-wear granulator knives, rotary rotor blades, and bed knives for crushing HDPE, PP, PVC, and PET bottles.",
  },
  {
    name: "Wood Chipping & Timber Processing",
    desc: "2-slot and multi-hole wood chipper knives, veneer slicers, and debarking blades for paper mills and sawmills.",
  },
  {
    name: "Tyre & Rubber Shredding",
    desc: "Heavy-duty dual shaft shredder cutters engineered to tear through tough steel-belted radial tyres without jamming.",
  },
  {
    name: "Metal & E-Waste Shredding",
    desc: "Shock-resistant alloy cutters for electronic waste, aluminium scrap, and industrial barrel shredding.",
  },
  {
    name: "Agricultural & Chaff Cutting",
    desc: "Rectangular and curved chaff cutter blades providing clean fodder cutting with prolonged cutting life.",
  },
  {
    name: "Press Tools & Die Manufacturing",
    desc: "PDC moulds, automotive stamping dies, aluminium pattern tooling, and precision contract VMC job work.",
  },
  {
    name: "Paper, Pulp & Packaging",
    desc: "Precision paper slitter knives, corrugated board carton slitters, guillotine blades, and paper core cutting knives.",
  },
  {
    name: "Textile & Synthetic Fiber Recycling",
    desc: "High-speed fabric shredder blades, carpet shearing cutters, and rotary shear knives for synthetic textile waste.",
  },
  {
    name: "Automotive & Heavy Engineering",
    desc: "Automotive forming dies, casting pattern moulds, industrial fixtures, and high-precision CNC VMC contract components.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="container">
        {/* Main 2-Column About Introduction */}
        <div className="about-grid">
          <div className="about-text">
            <span className="eyebrow">About K.S.G. Tools</span>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 800, marginTop: 10, lineHeight: 1.25 }}>
              Precision Cutting Tool &amp; Recycling Machinery Manufacturer Since {company.estd}
            </h2>

            <p style={{ marginTop: 20 }}>
              Established as a <strong>Proprietorship firm in the year {company.estd}</strong> by <strong>{factsheet.ceo} (Proprietor &amp; CEO)</strong>,
              “<strong>K.S.G. Tools</strong>” has evolved into one of South India&apos;s most reliable manufacturers, wholesalers, traders,
              and retailers of high-grade industrial cutting tools, shredder knives, and custom VMC-machined components.
            </p>

            <p>
              Headquartered in the industrial heart of <strong>{company.city}, Tamil Nadu</strong>, our direct manufacturing plant
              integrates modern CAD/CAM software, <strong>4-Axis CNC Vertical Machining Centers (FEELER VMP-45A &amp; VMP-40A)</strong>,
              turret milling machines, and dedicated toolroom knife grinders.
            </p>

            <p>
              We specialize in wear-resistant tooling for recycling, wood processing, plastics, and automotive stamping dies.
              Whether delivering standard replacement knives or reverse-engineering custom blade profiles from worn samples,
              K.S.G. Tools delivers engineered precision that outlasts standard market alternatives.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 24 }}>
              <Link href="/products" className="btn btn-primary" style={{ padding: "12px 24px" }}>
                Browse Product Catalogue (83 Items) →
              </Link>
              <Link href="/photos" className="btn btn-outline" style={{ padding: "12px 24px" }}>
                View Manufacturing Area &amp; Facilities
              </Link>
            </div>
          </div>

          {/* Executive Trust Card */}
          <div className="about-card">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
              <div className="big-mark">K.S.G. Tools</div>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "var(--machinery-orange)",
                  background: "rgba(242, 140, 40, 0.15)",
                  padding: "4px 10px",
                  borderRadius: 6,
                  border: "1px solid rgba(242, 140, 40, 0.3)",
                }}
              >
                Estd. {company.estd} &middot; {company.years}+ Years
              </span>
            </div>

            <p style={{ color: "#cbd5e1", marginTop: 14, fontSize: 14.5, lineHeight: 1.6 }}>
              Direct factory outlet operating from Sivanandhapuram, Saravanampatti, Coimbatore.
              Fully registered and tax compliant under <strong>GSTIN: {company.gst}</strong>.
            </p>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: 16, marginTop: 16 }}>
              <span style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "1px", color: "var(--machinery-orange)", fontWeight: 700 }}>
                Core Operational Strengths:
              </span>
              <ul>
                {whyUsPoints.map((p) => (
                  <li key={p}>{p}</li>
                ))}
                <li>In-House 4-Axis CNC Vertical Machining Centers</li>
                <li>Custom Hardening &amp; Edge Grinding to 58-62 HRC</li>
                <li>Direct Factory Pricing with Zero Middlemen</li>
              </ul>
            </div>

            <div
              style={{
                marginTop: 22,
                padding: "12px 16px",
                background: "rgba(255, 255, 255, 0.06)",
                borderRadius: 8,
                fontSize: 13,
                color: "#94a3b8",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span>👤</span>
              <span>Proprietor &amp; Technical Head: <strong>{factsheet.ceo}</strong></span>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Manufacturing Excellence */}
        <div style={{ marginTop: 70 }}>
          <div className="section-head center" style={{ marginBottom: 36 }}>
            <span className="eyebrow">Engineering Precision</span>
            <h3 style={{ fontSize: "clamp(22px, 2.8vw, 32px)", fontWeight: 800 }}>
              The 4 Pillars of K.S.G. Tools Manufacturing
            </h3>
            <p className="sub" style={{ maxWidth: 640, margin: "8px auto 0" }}>
              Every knife and precision component produced in our workshop is engineered to endure extreme mechanical shock and continuous abrasion.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
              gap: 22,
            }}
          >
            {pillars.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--line)",
                  borderRadius: 14,
                  padding: "26px 22px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 10,
                    background: "rgba(37, 99, 235, 0.1)",
                    color: "var(--primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 16,
                  }}
                >
                  <Icon name={item.icon as any} size={22} />
                </div>
                <h4 style={{ fontSize: 17, fontWeight: 700, color: "var(--ink)", marginBottom: 8, lineHeight: 1.35 }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: 13.5, color: "var(--ink-soft)", lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Industries We Serve */}
        <div style={{ marginTop: 70 }}>
          <div className="section-head center" style={{ marginBottom: 36 }}>
            <span className="eyebrow">Application Sectors</span>
            <h3 style={{ fontSize: "clamp(22px, 2.8vw, 32px)", fontWeight: 800 }}>
              Industries Powered by Our Tooling
            </h3>
            <p className="sub" style={{ maxWidth: 680, margin: "8px auto 0" }}>
              Our industrial knives and precision fixtures serve demanding heavy-duty recycling and manufacturing operations across India.
            </p>
          </div>

          <div className="industries-grid">
            {industries.map((ind, idx) => (
              <div key={ind.name} className="industry-card">
                <div className="industry-num-badge">
                  {idx + 1}
                </div>
                <div className="industry-card-body">
                  <h4>{ind.name}</h4>
                  <p>{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
