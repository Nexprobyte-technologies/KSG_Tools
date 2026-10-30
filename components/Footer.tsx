import { navLinks, company } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand">
              <span className="brand-mark">KSG</span>
              K.S.G. Tools
            </div>
            <p>
              Established as a Proprietorship firm in the year {company.estd}, we are a
              leading manufacturer, wholesaler, trader and retailer of industrial
              cutting tools from {company.city}.
            </p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>GST No: {company.gst}</li>
              <li>Nature of Business: Manufacturer</li>
              <li>Legal Status: Proprietorship</li>
              <li>CEO: K. Ganapathy</li>
            </ul>
          </div>
          <div>
            <h4>Reach Us</h4>
            <ul>
              <li>
                <a
                  href={company.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "var(--accent-glow)", textDecoration: "none", fontWeight: 700 }}
                  title="Open exact workshop location in Google Maps"
                >
                  📍 {company.shortAddress} ↗
                </a>
              </li>
              <li>{company.phone}</li>
              <li>{company.email}</li>
            </ul>
            <p className="note">Mon - Sat · 9:00 AM to 7:00 PM</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} K.S.G. Tools. All rights reserved.</span>
          <span>Made with care in {company.city}</span>
        </div>
      </div>
    </footer>
  );
}