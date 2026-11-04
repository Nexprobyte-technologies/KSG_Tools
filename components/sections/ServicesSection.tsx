import Icon from "@/components/icons";

const services = [
  {
    icon: "gear" as const,
    title: "Precision Tool Manufacturer",
    text: "Direct manufacturing of shredder knives, granulator blades, chipper knives and custom dies engineered to fit your machinery OEM specs.",
    tag: "In-house production",
  },
  {
    icon: "factory" as const,
    title: "Wholesale & Volume Supply",
    text: "Bulk and wholesale supply with direct factory value, consistent metallurgical stock and dependable dispatch schedules for recycling plants.",
    tag: "Bulk & OEM supply",
  },
  {
    icon: "wrench" as const,
    title: "4-Axis VMC Machining & Job Work",
    text: "Precision CNC vertical machining center job work with material, custom component profiling, drilling, and precision slotting to drawing.",
    tag: "±0.02mm Tolerance",
  },
  {
    icon: "knife" as const,
    title: "Custom Sampling & Resharpening",
    text: "Rapid sampling from worn blades or CAD drawings, and specialized industrial blade regrinding to OEM edge sharpness and bevel angles.",
    tag: "Custom profiling",
  },
];

function ServiceCard({ s, n }: { s: (typeof services)[number]; n: number }) {
  return (
    <div className="milestone-card">
      <div className="ms-head">
        <span className="ms-num">{String(n).padStart(2, "0")}</span>
        <div className="ms-ico" aria-hidden="true">
          <Icon name={s.icon} size={22} />
        </div>
      </div>
      <span className="ms-tag">{s.tag}</span>
      <h3>{s.title}</h3>
      <p>{s.text}</p>
    </div>
  );
}

export default function ServicesSection() {
  const cols = [
    [
      { s: services[0], n: 1 },
      { s: services[1], n: 2 },
    ],
    [
      { s: services[2], n: 3 },
      { s: services[3], n: 4 },
    ],
  ];

  return (
    <section id="services" className="section section-alt milestone-section" aria-label="Our Services">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Manufacturing &amp; Supply</span>
          <h2>Industrial Services &amp; Capabilities</h2>
          <p className="sub">
            From single blade sampling to full machine tooling setups, K.S.G. Tools delivers
            end-to-end tooling expertise from our Coimbatore workshop.
          </p>
        </div>

        <div className="milestone-grid">
          {cols.map((col) => (
            <div className="ms-col" key={col[0].s.title}>
              {col.map((card) => (
                <ServiceCard key={card.s.title} s={card.s} n={card.n} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
