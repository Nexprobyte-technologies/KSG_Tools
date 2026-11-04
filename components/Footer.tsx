import Link from "next/link";
import Icon from "@/components/icons";
import { footerLinks, company } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand footer-brand">
              <span className="brand-mark" aria-hidden="true">KSG</span>
              <span className="brand-name" style={{ color: "#ffffff" }}>K.S.G. Tools</span>
            </div>
            <p className="footer-about">
              Established as a Proprietorship firm in the year {company.estd}, K.S.G. Tools is a
              leading manufacturer, wholesaler, trader and retailer of industrial
              cutting tools and recycling machinery from {company.city}.
            </p>
            <div className="footer-trust-tags">
              <span className="footer-tag">
                <Icon name="check" size={14} /> GST: <strong>{company.gst}</strong>
              </span>
              <span className="footer-tag">
                <Icon name="factory" size={14} /> <strong>{company.years}+ Years</strong> Experience
              </span>
            </div>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
              <li>
                <a
                  href="/api/download-catalogue"
                  download="KSG-Tools-Product-Catalogue.pdf"
                  style={{ color: "var(--machinery-orange)", fontWeight: 700 }}
                  title="Download complete verified product catalogue PDF"
                >
                  📥 Download Catalogue (PDF)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Corporate Credentials</h4>
            <ul>
              <li>GST Identification: <strong>{company.gst}</strong></li>
              <li>Nature of Business: Manufacturer</li>
              <li>Firm Status: Proprietorship Firm</li>
              <li>CEO / Proprietor: K. Ganapathy</li>
              <li>Operational Base: {company.city}, Tamil Nadu</li>
            </ul>
          </div>

          <div>
            <h4>Works &amp; Enquiries</h4>
            <ul>
              <li>
                <a
                  href={company.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "var(--machinery-orange)", textDecoration: "none", fontWeight: 700 }}
                  title="Open exact workshop location in Google Maps"
                >
                  📍 {company.shortAddress} ↗
                </a>
              </li>
              <li>
                <a
                  href={`tel:${company.phoneLink}`}
                  title={`Call ${company.phone}`}
                >
                  📞 {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  title={`Email ${company.email}`}
                >
                  ✉️ {company.email}
                </a>
              </li>
            </ul>
            <p className="note">Workshop Hours: Mon - Sat · 9:00 AM to 7:00 PM</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} K.S.G. Tools. All rights reserved.</span>
          <span>Precision Tooling &amp; Recycling Blade Manufacturer &middot; {company.city}</span>
        </div>
      </div>
    </footer>
  );
}
