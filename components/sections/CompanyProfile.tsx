import Icon from "@/components/icons";
import { company, factsheet } from "@/lib/data";

type Fact = {
  icon: string;
  k: string;
  v: React.ReactNode;
};

const leftFacts: Fact[] = [
  {
    icon: "factory",
    k: "Nature of Business",
    v: (
      <>
        {factsheet.natureOfBusiness}
        <div className="profile-chips">
          {factsheet.additionalBusiness.slice(0, 4).map((b) => (
            <span className="chip" key={b}>
              {b}
            </span>
          ))}
        </div>
      </>
    ),
  },
  {
    icon: "check",
    k: "Company CEO",
    v: <strong>{factsheet.ceo}</strong>,
  },
  {
    icon: "users",
    k: "Total Number of Employees",
    v: factsheet.employees,
  },
  {
    icon: "shield",
    k: "Legal Status of Firm",
    v: factsheet.legalStatus,
  },
  {
    icon: "truck",
    k: "Shipment Mode",
    v: factsheet.shipmentMode,
  },
];

const rightFacts: Fact[] = [
  {
    icon: "document",
    k: "GST Registration Date",
    v: factsheet.gstRegYear,
  },
  {
    icon: "badge",
    k: "GST No.",
    v: company.gst,
  },
  {
    icon: "building",
    k: "Bankers",
    v: (
      <div className="profile-chips">
        {factsheet.bankers.map((b) => (
          <span className="chip" key={b}>
            {b}
          </span>
        ))}
      </div>
    ),
  },
  {
    icon: "money",
    k: "Payment Modes",
    v: (
      <div className="profile-chips">
        {factsheet.paymentModes.map((p) => (
          <span className="chip" key={p}>
            {p}
          </span>
        ))}
      </div>
    ),
  },
];

function FactCard({ f }: { f: Fact }) {
  return (
    <div className="profile-card">
      <div className="profile-icon">
        <Icon name={f.icon} size={20} />
      </div>
      <div>
        <div className="profile-k">{f.k}</div>
        <div className="profile-v">{f.v}</div>
      </div>
    </div>
  );
}

export default function CompanyProfile() {
  return (
    <section id="company-profile" className="section profile-section">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Company Profile</span>
          <h2>Factsheet</h2>
          <p className="sub">Basic information and statutory profile.</p>
        </div>
        <div className="profile-grid">
          <div className="profile-col">
            <div className="profile-track">
              {[...leftFacts, ...leftFacts].map((f, i) => (
                <FactCard key={`${f.k}-${i}`} f={f} />
              ))}
            </div>
          </div>
          <div className="profile-col down">
            <div className="profile-track">
              {[...rightFacts, ...rightFacts].map((f, i) => (
                <FactCard key={`${f.k}-${i}`} f={f} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}