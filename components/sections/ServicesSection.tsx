import Icon from "@/components/icons";

const services = [
  {
    icon: "gear" as const,
    title: "Manufacturer",
    text: "Precision manufacturing of shredder knives, granulator blades, chipper knives and more — engineered to fit your machine exactly.",
    tag: "In-house production",
  },
  {
    icon: "factory" as const,
    title: "Wholesale Supply",
    text: "Bulk and wholesale supply with competitive pricing, consistent stock and dependable dispatch schedules for dealers and industries.",
    tag: "Bulk & dealer pricing",
  },
  {
    icon: "wrench" as const,
    title: "Trading & Distribution",
    text: "Reliable trading and distribution of cutting tools, blades and dies across India, backed by dependable logistics by road.",
    tag: "All-India delivery",
  },
  {
    icon: "knife" as const,
    title: "Retail Supply",
    text: "Fast, friendly retail support for small workshops and fabrication units with ready stock and flexible order quantities.",
    tag: "Any order size",
  },
];

const industries = [
  "Plastic Recycling",
  "Metal Recycling",
  "Wood & Timber Processing",
  "Paper & Cardboard",
  "Agriculture",
  "Food Processing",
];

function ServiceCard({ s, n }: { s: (typeof services)[number]; n: number }) {
  return (
    <div className="milestone-card">
      <div className="ms-head">
        <span className="ms-num">{String(n).padStart(2, "0")}</span>
        <div className="ms-ico">
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
    <section className="section section-alt milestone-section">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">What We Do</span>
          <h2>Our Services</h2>
          <p className="sub">
            From single blades to complete machine supplies, we serve every kind of
            cutting requirement — from small workshops to large industrial units.
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