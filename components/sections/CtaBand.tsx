import { company } from "@/lib/data";

export default function CtaBand() {
  return (
    <section className="cta-band">
      <div className="container">
        <h2>Looking for Shredder Knives or Blades?</h2>
        <p>
          Get competitive prices and timely delivery for your industrial cutting
          requirements.
        </p>
        <div className="cta-actions">
          <a href={`tel:${company.phoneLink}`} className="btn btn-primary">
            Call Now
          </a>
          <a href="/contact" className="btn btn-outline">
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}