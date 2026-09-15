import { company, factsheet } from "@/lib/data";

export default function FactsheetSection() {
  return (
    <section id="factsheet" className="section">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Company Profile</span>
          <h2>Factsheet</h2>
          <p className="sub">Basic information and statutory profile.</p>
        </div>
        <div className="fact-grid">
          <div className="fact-card">
            <div className="k">Nature of Business</div>
            <div className="v">{factsheet.natureOfBusiness}</div>
            <div className="chips">
              {factsheet.additionalBusiness.map((b) => (
                <span className="chip" key={b}>
                  {b}
                </span>
              ))}
            </div>
          </div>
          <div className="fact-card">
            <div className="k">Company CEO</div>
            <div className="v">{factsheet.ceo}</div>
          </div>
          <div className="fact-card">
            <div className="k">Total Number of Employees</div>
            <div className="v">{factsheet.employees}</div>
          </div>
          <div className="fact-card">
            <div className="k">GST Registration Date</div>
            <div className="v">{factsheet.gstRegYear}</div>
          </div>
          <div className="fact-card">
            <div className="k">Legal Status of Firm</div>
            <div className="v">{factsheet.legalStatus}</div>
          </div>
          <div className="fact-card">
            <div className="k">GST No.</div>
            <div className="v">{company.gst}</div>
          </div>
          <div className="fact-card">
            <div className="k">Bankers</div>
            <div className="chips">
              {factsheet.bankers.map((b) => (
                <span className="chip" key={b}>
                  {b}
                </span>
              ))}
            </div>
          </div>
          <div className="fact-card">
            <div className="k">Payment Modes</div>
            <div className="chips">
              {factsheet.paymentModes.map((p) => (
                <span className="chip" key={p}>
                  {p}
                </span>
              ))}
            </div>
          </div>
          <div className="fact-card">
            <div className="k">Shipment Mode</div>
            <div className="v">{factsheet.shipmentMode}</div>
          </div>
          <div className="fact-card">
            <div className="k">GST Number</div>
            <div className="v">{company.gst}</div>
          </div>
        </div>
      </div>
    </section>
  );
}