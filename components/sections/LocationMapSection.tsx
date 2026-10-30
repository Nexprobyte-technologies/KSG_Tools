import Icon from "@/components/icons";
import { company } from "@/lib/data";

interface LocationMapSectionProps {
  title?: string;
  subtitle?: string;
}

export default function LocationMapSection({
  title = "Our Exact Location on Google Maps",
  subtitle = "Visit our workshop & manufacturing unit near Prozone Mall, Saravanampatti, Coimbatore.",
}: LocationMapSectionProps) {
  return (
    <section className="section section-alt location-section" id="location-map">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">
            <Icon name="pin" size={14} /> Factory &amp; Workshop Map
          </span>
          <h2>{title}</h2>
          <p className="sub">{subtitle}</p>
        </div>

        <div className="location-box-card">
          {/* Top Info Bar */}
          <div className="location-info-row">
            <div className="location-info-cell">
              <div className="location-icon-badge">
                <Icon name="factory" size={20} />
              </div>
              <div className="location-text">
                <span className="location-sub-label">Manufacturing Unit &amp; Office</span>
                <strong className="location-title">K.S.G. Tools</strong>
                <p className="location-address">{company.address}</p>
              </div>
            </div>

            <div className="location-buttons-row">
              <a
                href={company.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-directions-hero"
                title="Open live Google Maps app for turn-by-turn directions"
              >
                <Icon name="pin" size={16} /> Open in Google Maps ↗
              </a>
              <a
                href={`tel:${company.phoneLink}`}
                className="btn btn-outline btn-call-hero"
                title="Call our workshop"
              >
                <Icon name="phone" size={16} /> Call: {company.phone}
              </a>
            </div>
          </div>

          {/* Interactive Google Map Iframe */}
          <div className="location-map-wrap">
            <iframe
              src={company.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="K.S.G. Tools Exact Location on Google Maps - Saravanampatti, Coimbatore"
              aria-label="K.S.G. Tools Google Maps location"
              allowFullScreen
            />
          </div>

          {/* Bottom Quick Chips */}
          <div className="location-meta-chips">
            <div className="meta-chip">
              <Icon name="clock" size={14} />
              <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
            </div>
            <div className="meta-chip">
              <Icon name="check" size={14} />
              <span>Direct Customer Pickup &amp; Site Visits Welcome</span>
            </div>
            <div className="meta-chip">
              <Icon name="truck" size={14} />
              <span>Pan-India Safe Cargo Dispatch</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

