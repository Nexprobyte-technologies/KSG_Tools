"use client";

import { useState } from "react";
import { company } from "@/lib/data";

const productOptions = [
  "Shredder Knives",
  "Chipper Knives",
  "Granulator Blades",
  "Grinder Blades",
  "Shredding Machine",
  "Tools And Dies",
  "VMC Machine Job Work",
  "Chaff Cutter Blades",
  "Other / General Enquiry",
];

export default function ContactForm({ defaultProduct }: { defaultProduct?: string }) {
  const [sent, setSent] = useState(false);
  const [product, setProduct] = useState(defaultProduct ?? "Shredder Knives");
  const options = defaultProduct && !productOptions.includes(defaultProduct)
    ? [defaultProduct, ...productOptions]
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
          Thank you! Your enquiry has been received. Our team will call you back within
          24 working hours.
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
              {options.map((o) => (
                <option key={o}>{o}</option>
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