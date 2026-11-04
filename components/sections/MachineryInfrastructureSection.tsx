import Image from "next/image";
import Link from "next/link";
import { infrastructureImages } from "@/lib/data";

export default function MachineryInfrastructureSection() {
  // Select top 4 premier machines for high-impact showcase
  const topMachines = infrastructureImages.slice(0, 4);

  return (
    <section className="section" style={{ background: "var(--bg-soft, #f8fafc)" }}>
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Our Manufacturing Infrastructure</span>
          <h2 style={{ fontSize: "clamp(24px, 3.2vw, 36px)", fontWeight: 800 }}>
            Precision VMC &amp; Toolroom Machinery
          </h2>
          <p className="sub" style={{ maxWidth: 720, margin: "10px auto 0" }}>
            Our Coimbatore factory outlet is powered by advanced CNC Vertical Machining Centers,
            rigid conventional milling machines, and dedicated tool sharpening equipment.
          </p>
        </div>

        <div className="infra-grid" style={{ marginBottom: 32 }}>
          {topMachines.map((m) => (
            <div
              key={m.img}
              style={{
                background: "var(--bg, #ffffff)",
                borderRadius: 14,
                border: "1px solid var(--line, #e2e8f0)",
                overflow: "hidden",
                boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ position: "relative", width: "100%", height: 210 }}>
                <Image
                  src={m.img}
                  alt={m.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    background: "rgba(15, 23, 42, 0.8)",
                    color: "#ffffff",
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "4px 10px",
                    borderRadius: 6,
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {m.category}
                </span>
              </div>
              <div style={{ padding: "18px 20px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <span style={{ fontSize: 11, fontWeight: 800, color: "var(--machinery-orange)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  {m.manufacturer}
                </span>
                <h3 style={{ fontSize: 16, fontWeight: 800, margin: "4px 0 8px", color: "var(--ink)" }}>
                  {m.title}
                </h3>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "var(--navy)",
                    background: "rgba(242, 140, 40, 0.1)",
                    border: "1px solid rgba(242, 140, 40, 0.25)",
                    padding: "6px 10px",
                    borderRadius: 6,
                    marginBottom: 10,
                  }}
                >
                  ⚙ {m.specs}
                </div>
                <p style={{ fontSize: 13, color: "var(--muted, #64748b)", lineHeight: 1.5, margin: 0, flexGrow: 1 }}>
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link
            href="/photos"
            className="btn btn-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 28px",
              borderRadius: 8,
              fontWeight: 700,
            }}
          >
            Explore Complete Manufacturing Area &amp; Facilities (12 Photos) →
          </Link>
        </div>
      </div>
    </section>
  );
}
