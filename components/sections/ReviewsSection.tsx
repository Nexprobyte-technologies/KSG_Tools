import Stars from "@/components/Stars";
import { company, ratingBreakdown, reviews } from "@/lib/data";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="section section-alt">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Testimonials</span>
          <h2>Ratings &amp; Reviews</h2>
          <p className="sub">What our customers say about us.</p>
        </div>
        <div className="review-grid">
          <div className="rating-summary">
            <div className="big">{company.rating}</div>
            <div className="of">out of 5</div>
            <Stars count={company.rating} />
            <div className="meta">
              {company.totalRatings} Ratings &amp; Reviews ·{" "}
              <strong style={{ color: "#fff" }}>{company.response} Response</strong>
            </div>
            <div className="breakdown">
              {ratingBreakdown.map((r) => (
                <div className="bar-row" key={r.stars}>
                  <span style={{ width: 30 }}>{r.stars} ★</span>
                  <span className="track">
                    <span className="fill" style={{ width: `${r.percent}%` }} />
                  </span>
                  <span className="pct">{r.percent}%</span>
                </div>
              ))}
            </div>
          </div>
          <div className="review-list">
            {reviews.map((r) => (
              <div className="review-card" key={r.name}>
                <div className="head">
                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <div className="avatar">{r.name.charAt(0)}</div>
                    <div>
                      <div className="name">{r.name}</div>
                      <div className="loc">{r.location}</div>
                    </div>
                  </div>
                  <Stars count={5} />
                </div>
                <span className="product">{r.product}</span>
                <p className="text">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}