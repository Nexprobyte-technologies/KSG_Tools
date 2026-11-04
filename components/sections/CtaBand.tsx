import { company } from "@/lib/data";

export default function CtaBand() {
  return (
    <section className="cta-band" aria-label="Call to action">
      <div className="container">
        <h2 style={{ color: "#ffffff", fontWeight: 800 }}>Looking for Shredder Knives or Blades?</h2>
        <p style={{ color: "#e2e8f0" }}>
          Get competitive quotes and timely delivery for your industrial cutting
          requirements.
        </p>
        <div className="cta-actions">
          <a href={`tel:${company.phoneLink}`} className="btn btn-primary">
            Call Now
          </a>
          <a
            href="/contact"
            className="btn btn-outline"
            style={{ color: "#ffffff", borderColor: "rgba(255, 255, 255, 0.5)" }}
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
