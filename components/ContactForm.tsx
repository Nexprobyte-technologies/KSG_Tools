"use client";

import { useState } from "react";
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
  "Other / General Enquiry",
];

const productOptions = Array.from(
  new Set([...specificProductOptions, ...generalCategories])
);

export default function ContactForm({ defaultProduct }: { defaultProduct?: string }) {
  const [sent, setSent] = useState(false);
  const [product, setProduct] = useState(() => {
    if (!defaultProduct) return specificProductOptions[0];
    const match = productOptions.find(
      (o) => o.toLowerCase().includes(defaultProduct.toLowerCase())
    );
    return match || defaultProduct;
  });

  const options = defaultProduct && !productOptions.includes(product)
    ? [product, ...productOptions]
    : productOptions;

  return (
    <form
      className="contact-form"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <h3>Send an Enquiry</h3>
      {sent ? (
        <div className="success">
          <p>
            <strong>Enquiry Received!</strong> Your enquiry for <em>{product}</em> has
            been recorded.
          </p>
          <p style={{ marginTop: 8 }}>
            Our sales team will contact you within 24 working hours.
          </p>
          <a
            href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
              `Hi K.S.G. Tools, I submitted a website enquiry for: ${product}. Please share pricing and catalogue.`
            )}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-wa"
            style={{ marginTop: 14, display: "inline-flex", width: "auto" }}
          >
            <Icon name="chat" size={15} /> Chat on WhatsApp Now
          </a>
        </div>
      ) : (
        <>
          <div className="field">
            <label htmlFor="name">Your Name</label>
            <input id="name" name="name" required placeholder="Enter your name" />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" name="phone" type="tel" required placeholder="+91 XXXXX XXXXX" />
          </div>
          <div className="field">
            <label htmlFor="email">Email (optional)</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" />
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
            <label htmlFor="msg">Message</label>
            <textarea
              id="msg"
              name="msg"
              placeholder="Tell us your quantity, size and requirements..."
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit Enquiry
          </button>
          <p className="form-note">
            Expect a call within 24 working hours. You can also call us directly at {company.phone}.
          </p>
        </>
      )}
    </form>
  );
}