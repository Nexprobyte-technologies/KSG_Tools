import type { Metadata } from "next";
import Icon from "@/components/icons";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import LocationMapSection from "@/components/sections/LocationMapSection";
import CtaBand from "@/components/sections/CtaBand";
import ContactSection from "@/components/sections/ContactSection";
import { company, factsheet } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us | K.S.G. Tools",
  description:
    "Contact K.S.G. Tools, Coimbatore for Shredder Knives, Granulator Blades and industrial cutting tools. Call, email or send an enquiry.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  const { product } = await searchParams;
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="Reach our team for prices, specifications and custom tooling orders. We respond within 24 working hours."
      />
      <section className="section">
        <div className="container">
          <div className="contact-layout">
            <ContactForm defaultProduct={product} />
            <div className="contact-side">
              <div className="contact-cell">
                <div className="ico" aria-hidden>
                  <Icon name="pin" size={20} />
                </div>
                <div>
                  <div className="t">Our Location</div>
                  <div className="d">{company.shortAddress}</div>
                </div>
              </div>
              <div className="contact-cell">
                <div className="ico" aria-hidden>
                  <Icon name="phone" size={20} />
                </div>
                <div>
                  <div className="t">Phone / WhatsApp</div>
                  <div className="d">
                    <a className="link" href={`tel:${company.phoneLink}`}>
                      {company.phone}
                    </a>
                  </div>
                  <div className="d">Mon - Sat · 9:00 AM to 7:00 PM</div>
                </div>
              </div>
              <div className="contact-cell">
                <div className="ico" aria-hidden>
                  <Icon name="mail" size={20} />
                </div>
                <div>
                  <div className="t">Email</div>
                  <div className="d">
                    <a className="link" href={`mailto:${company.email}`}>
                      {company.email}
                    </a>
                  </div>
                </div>
              </div>
              <div className="contact-cell">
                <div className="ico" aria-hidden>
                  <Icon name="check" size={20} />
                </div>
                <div>
                  <div className="t">Payment &amp; Shipment</div>
                  <div className="d">
                    Modes: {factsheet.paymentModes.join(", ")} · Shipment:{" "}
                    {factsheet.shipmentMode}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LocationMapSection
        title="Find Our Factory & Workshop"
        subtitle="We welcome clients and procurement managers for live tool inspections and technical discussions."
      />
      <CtaBand />
      <ContactSection />
    </>
  );
}
