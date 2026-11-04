"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Icon from "@/components/icons";
import { company, allProducts } from "@/lib/data";

const specificProductOptions = Array.from(
  new Set(allProducts.map((p) => p.name))
);

const generalCategories = [
  "Chipper Knives",
  "Granulator Blades",
  "Grinder Blades",
  "Shredding Machine",
  "Tools And Dies",
  "VMC Machine Job Work",
  "Chaff Cutter Blades",
  "Other / Custom Tooling",
];

const productOptions = Array.from(
  new Set([...generalCategories, ...specificProductOptions])
);

function ContactFormInner({ defaultProduct: propProduct }: { defaultProduct?: string }) {
  const searchParams = useSearchParams();
  const defaultProduct = propProduct || searchParams?.get("product") || undefined;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [product, setProduct] = useState(() => {
    if (!defaultProduct) return productOptions[0];
    const match = productOptions.find(
      (o) => o.toLowerCase().includes(defaultProduct.toLowerCase())
    );
    return match || defaultProduct;
  });
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (defaultProduct) {
      const match = productOptions.find(
        (o) => o.toLowerCase().includes(defaultProduct.toLowerCase())
      );
      setProduct(match || defaultProduct);
    }
  }, [defaultProduct]);

  const options = defaultProduct && !productOptions.includes(product)
    ? [product, ...productOptions]
    : productOptions;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
    const trimmedName = name.trim();
    const cleanPhone = phone.trim().replace(/\s+/g, "");

    if (trimmedName.length < 2) {
      setError("Please provide your full name (minimum 2 characters).");
      return;
    }

    const phoneRegex = /^[0-9+\-()]{8,18}$/;
    if (!phoneRegex.test(cleanPhone)) {
      setError("Please enter a valid phone number (e.g. +91 98765 43210).");
      return;
    }

    setSent(true);
  };

  const handleReset = () => {
    setName("");
    setPhone("");
    setEmail("");
    setMsg("");
    setError(null);
    setSent(false);
  };

  const waEnquiryText = encodeURIComponent(
    `Hi K.S.G. Tools, I submitted a website enquiry.\n\n` +
      `Product: ${product}\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      (email ? `Email: ${email}\n` : "") +
      `Requirements: ${msg || "Please share quotation, technical drawings, and lead time."}`
  );

  return (
    <div className="contact-form-wrap">
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-head">
          <span className="form-eyebrow">Direct Procurement</span>
          <h3>Request a Factory Quotation</h3>
          <p className="form-sub">
            Direct pricing from our Coimbatore works. For urgent orders, technical drawings,
            or custom sampling, our engineering team responds within 24 working hours.
          </p>
        </div>

        {error && (
          <div className="form-error-banner" role="alert">
            <Icon name="close" size={15} />
            <span>{error}</span>
          </div>
        )}

        {sent ? (
          <div className="success" role="status">
            <div className="success-badge">
              <Icon name="check" size={24} />
            </div>
            <h4>Enquiry Successfully Recorded</h4>
            <p className="success-desc">
              Thank you, <strong>{name}</strong>. Your enquiry for <em>{product}</em> has
              been logged with our sales desk.
            </p>
            <div className="success-meta-box">
              <div className="meta-row">
                <span className="k">Selected Product:</span>
                <span className="v">{product}</span>
              </div>
              <div className="meta-row">
                <span className="k">Contact Phone:</span>
                <span className="v">{phone}</span>
              </div>
              <div className="meta-row">
                <span className="k">Response Time:</span>
                <span className="v">Within 24 working hours</span>
              </div>
            </div>

            <div className="success-actions">
              <a
                href={`https://wa.me/${company.whatsapp}?text=${waEnquiryText}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-wa success-wa-btn"
              >
                <Icon name="chat" size={16} /> Instant Confirmation on WhatsApp
              </a>
              <button
                type="button"
                className="btn btn-outline-dark"
                onClick={handleReset}
              >
                Submit Another Enquiry
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="field">
              <label htmlFor="name">
                Your Full Name <span className="req">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rajesh Kumar"
                autoComplete="name"
              />
            </div>

            <div className="field">
              <label htmlFor="phone">
                Phone Number <span className="req">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 99447 44509"
                autoComplete="tel"
              />
            </div>

            <div className="field">
              <label htmlFor="email">Email Address (Optional)</label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="procurement@company.com"
                autoComplete="email"
              />
            </div>

            <div className="field">
              <label htmlFor="product">Product Interested In</label>
              <select
                id="product"
                name="product"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
              >
                {options.map((o, idx) => (
                  <option key={`${o}-${idx}`} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="msg">Custom Specifications or Requirements</label>
              <textarea
                id="msg"
                name="msg"
                rows={3}
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="Enter dimensions (length x width x thickness), required quantity, machine brand, or material grade (D2, HCHCr)..."
              />
            </div>

            <button type="submit" className="btn btn-primary submit-btn">
              <Icon name="tag" size={16} /> Submit Quotation Request
            </button>

            <p className="form-note">
              <Icon name="shield" size={13} /> Your contact details remain confidential.
              Direct manufacturer quote from Coimbatore.
            </p>
          </>
        )}
      </form>
    </div>
  );
}

export default function ContactForm(props: { defaultProduct?: string }) {
  return (
    <Suspense fallback={<div className="contact-card loading-skeleton" style={{ minHeight: "420px" }} />}>
      <ContactFormInner {...props} />
    </Suspense>
  );
}
