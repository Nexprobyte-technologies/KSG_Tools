import Icon from "@/components/icons";
import { company } from "@/lib/data";

export default function ContactSection() {
  return (
    <section id="contact" className="contact-strip">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-cell">
            <div className="ico" aria-hidden>
              <Icon name="pin" size={20} />
            </div>
            <div>
              <div className="t">Our Location</div>
              <div className="d">{company.city}, Tamil Nadu, India</div>
            </div>
          </div>
          <div className="contact-cell">
            <div className="ico" aria-hidden>
              <Icon name="phone" size={20} />
            </div>
            <div>
              <div className="t">Phone / WhatsApp</div>
              <a className="d link" href={`tel:${company.phoneLink}`}>{company.phone}</a>
            </div>
          </div>
          <div className="contact-cell">
            <div className="ico" aria-hidden>
              <Icon name="mail" size={20} />
            </div>
            <div>
              <div className="t">Email</div>
              <a className="d link" href={`mailto:${company.email}`}>{company.email}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}