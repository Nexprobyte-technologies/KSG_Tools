"use client";

import { useState } from "react";
import Icon from "@/components/icons";
import { company, factsheet } from "@/lib/data";

export default function CompanyProfile() {
  const [copied, setCopied] = useState(false);

  const handleCopyGst = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(company.gst);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <section id="factsheet" className="section factsheet-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head center">
          <span className="eyebrow">Corporate Credentials</span>
          <h2>Company Factsheet</h2>
          <p className="sub">
            Verified statutory information, operational credentials, and commercial profile of K.S.G. Tools.
          </p>
        </div>

        {/* Quick Trust Highlights Pill Bar */}
        <div className="factsheet-trust-bar">
          <div className="trust-pill">
            <span className="trust-pill-icon"><Icon name="badge" size={16} /></span>
            <span>Estd. <strong>{company.estd}</strong> ({company.years}+ Years of Excellence)</span>
          </div>
          <div className="trust-pill">
            <span className="trust-pill-icon"><Icon name="pin" size={16} /></span>
            <span>Based in <strong>{company.city}, Tamil Nadu</strong></span>
          </div>
          <div className="trust-pill">
            <span className="trust-pill-icon green"><Icon name="check" size={16} /></span>
            <span>GST Registered &amp; Active</span>
          </div>
          <div className="trust-pill">
            <span className="trust-pill-icon"><Icon name="shield" size={16} /></span>
            <span>Direct Manufacturer</span>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="factsheet-bento">
          {/* Card 1: Executive & Legal Entity */}
          <div className="fact-box highlight">
            <div className="fact-box-header">
              <div className="fact-icon-wrap">
                <Icon name="users" size={20} />
              </div>
              <div>
                <span className="fact-box-tag">Leadership &amp; Entity</span>
                <h3 className="fact-box-title">Company Profile</h3>
              </div>
            </div>

            <div className="fact-row-list">
              <div className="fact-item">
                <span className="fact-label">Company CEO</span>
                <span className="fact-val emphasize">
                  <strong>{factsheet.ceo}</strong>
                  <span className="fact-subtag">Proprietor</span>
                </span>
              </div>
              <div className="fact-item">
                <span className="fact-label">Legal Status of Firm</span>
                <span className="fact-val">{factsheet.legalStatus} Firm</span>
              </div>
              <div className="fact-item">
                <span className="fact-label">Total Number of Employees</span>
                <span className="fact-val">{factsheet.employees}</span>
              </div>
              <div className="fact-item">
                <span className="fact-label">Operating Headquarters</span>
                <span className="fact-val">{company.city}, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Card 2: Statutory & Tax Profile (GST) */}
          <div className="fact-box gst-highlight">
            <div className="fact-box-header">
              <div className="fact-icon-wrap emerald">
                <Icon name="document" size={20} />
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                  <span className="fact-box-tag">Tax &amp; Legal Compliance</span>
                  <span className="verified-badge">
                    <Icon name="check" size={13} /> Active &amp; Verified
                  </span>
                </div>
                <h3 className="fact-box-title">GST Identification</h3>
              </div>
            </div>

            <div className="gst-display-container">
              <span className="gst-number-label">GSTIN / Tax ID</span>
              <div className="gst-number-box">
                <span className="gst-code">{company.gst}</span>
                <button
                  type="button"
                  onClick={handleCopyGst}
                  className={`gst-copy-btn ${copied ? "copied" : ""}`}
                  aria-label="Copy GST Number"
                  title="Copy GST Number"
                >
                  <Icon name={copied ? "check" : "copy"} size={14} />
                  <span>{copied ? "Copied!" : "Copy"}</span>
                </button>
              </div>
            </div>

            <div className="fact-row-list">
              <div className="fact-item">
                <span className="fact-label">GST Registration Date</span>
                <span className="fact-val">{factsheet.gstRegYear} (Regular Taxpayer)</span>
              </div>
              <div className="fact-item">
                <span className="fact-label">B2B Tax Invoicing</span>
                <span className="fact-val green-text">100% Tax Compliant GST Invoices</span>
              </div>
            </div>
          </div>

          {/* Card 3: Nature of Business */}
          <div className="fact-box">
            <div className="fact-box-header">
              <div className="fact-icon-wrap">
                <Icon name="factory" size={20} />
              </div>
              <div>
                <span className="fact-box-tag">Industry Scope</span>
                <h3 className="fact-box-title">Nature of Business</h3>
              </div>
            </div>

            <div className="primary-nature-banner">
              <span className="nature-badge-primary">
                <Icon name="blade" size={16} /> Primary: {factsheet.natureOfBusiness}
              </span>
            </div>

            <div className="fact-label" style={{ marginBottom: 8, marginTop: 14 }}>
              Operational Verticals
            </div>
            <div className="fact-chip-container">
              {factsheet.additionalBusiness.map((b) => (
                <span className="fact-chip" key={b}>
                  <Icon name="check" size={12} className="chip-icon" />
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Card 4: Bankers */}
          <div className="fact-box">
            <div className="fact-box-header">
              <div className="fact-icon-wrap">
                <Icon name="building" size={20} />
              </div>
              <div>
                <span className="fact-box-tag">Financial Partners</span>
                <h3 className="fact-box-title">Bankers</h3>
              </div>
            </div>

            <div className="bank-list">
              {factsheet.bankers.map((bank, idx) => (
                <div className="bank-card" key={bank}>
                  <div className="bank-icon-dot">{idx + 1}</div>
                  <div className="bank-info">
                    <span className="bank-name">{bank}</span>
                    <span className="bank-type">Authorized Commercial Banking</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="fact-sub-note">
              Secure institutional accounts for RTGS, NEFT, IMPS, and corporate transfers.
            </p>
          </div>

          {/* Card 5: Payment Modes */}
          <div className="fact-box">
            <div className="fact-box-header">
              <div className="fact-icon-wrap">
                <Icon name="money" size={20} />
              </div>
              <div>
                <span className="fact-box-tag">Commercial Terms</span>
                <h3 className="fact-box-title">Accepted Payment Modes</h3>
              </div>
            </div>

            <div className="payment-modes-grid">
              {factsheet.paymentModes.map((mode) => (
                <div className="payment-mode-pill" key={mode}>
                  <span className="payment-dot" />
                  <span>{mode}</span>
                </div>
              ))}
            </div>

            <p className="fact-sub-note">
              Flexible payment channels for corporate procurement, wholesale, and retail orders.
            </p>
          </div>

          {/* Card 6: Shipment & Logistics */}
          <div className="fact-box">
            <div className="fact-box-header">
              <div className="fact-icon-wrap">
                <Icon name="truck" size={20} />
              </div>
              <div>
                <span className="fact-box-tag">Supply Chain</span>
                <h3 className="fact-box-title">Shipment &amp; Delivery</h3>
              </div>
            </div>

            <div className="shipment-badge-box">
              <div className="shipment-primary">
                <Icon name="truck" size={24} />
                <div>
                  <span className="shipment-title">Mode: {factsheet.shipmentMode}</span>
                  <span className="shipment-sub">Surface freight &amp; secure road transport</span>
                </div>
              </div>
            </div>

            <div className="fact-row-list" style={{ marginTop: 12 }}>
              <div className="fact-item">
                <span className="fact-label">Dispatch Location</span>
                <span className="fact-val">{company.city}, Tamil Nadu</span>
              </div>
              <div className="fact-item">
                <span className="fact-label">Delivery Range</span>
                <span className="fact-val">Tamil Nadu &amp; Pan-India Dispatch</span>
              </div>
            </div>
          </div>
        </div>

        {/* Factsheet Bottom Action Banner */}
        <div className="factsheet-footer-banner">
          <div className="footer-banner-text">
            <h4>Need Quotation, GST Invoicing or Supplier Onboarding?</h4>
            <p>
              Our team provides instant proforma invoices, GST compliance certificates, and fast delivery timelines.
            </p>
          </div>
          <div className="footer-banner-actions">
            <a href={`tel:${company.phoneLink}`} className="btn-banner-primary">
              <Icon name="phone" size={16} /> Call {company.phone}
            </a>
            <a
              href={`https://wa.me/${company.whatsapp}?text=Hello%20KSG%20Tools,%20I%20would%20like%20to%20get%20a%20quotation%20and%20factsheet%20details.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-banner-secondary"
            >
              <Icon name="chat" size={16} /> WhatsApp Inquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}