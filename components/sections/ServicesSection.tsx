"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "@/components/icons";

const services = [
  {
    icon: "gear" as const,
    title: "Manufacturer",
    text: "Precision manufacturing of shredder knives, granulator blades, chipper knives and more — engineered to fit your machine exactly.",
  },
  {
    icon: "factory" as const,
    title: "Wholesale Supply",
    text: "Bulk and wholesale supply with competitive pricing, consistent stock and dependable dispatch schedules for dealers and industries.",
  },
  {
    icon: "wrench" as const,
    title: "Trading & Distribution",
    text: "Reliable trading and distribution of cutting tools, blades and dies across India, backed by dependable logistics by road.",
  },
  {
    icon: "knife" as const,
    title: "Retail Supply",
    text: "Fast, friendly retail support for small workshops and fabrication units with ready stock and flexible order quantities.",
  },
];

const industries = [
  "Plastic Recycling",
  "Metal Recycling",
  "Wood & Timber Processing",
  "Paper & Cardboard",
  "Agriculture",
  "Food Processing",
];

export default function ServicesSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const io = new IntersectionObserver(
      ([e]) => setInView(e.isIntersecting),
      { threshold: 0.15 }
    );
    io.observe(track);

    let raf = 0;
    const update = () => {
      raf = 0;
      const r = track.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = r.height + vh * 0.6;
      const passed = -r.top + vh * 0.2;
      const p = Math.min(Math.max(passed / total, 0), 1);
      // Fill moves forward only: once the line is full it stops and stays,
      // so you can scroll further into the next section without it resetting.
      setProgress((prev) => Math.max(prev, p));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="section section-alt timeline-section">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">What We Do</span>
          <h2>Our Services</h2>
          <p className="sub">
            From single blades to complete machine supplies, we serve every kind of
            cutting requirement — from small workshops to large industrial units.
          </p>
        </div>

        <div
          className={`timeline${inView ? " in" : ""}`}
          ref={trackRef}
          style={{ "--tl": progress } as React.CSSProperties}
        >
          <div className="tl-line" aria-hidden />
          <div className="tl-fill" aria-hidden />
          {services.map((s, i) => (
            <div
              className={`tl-node${i % 2 ? " left" : ""}`}
              style={{ "--delay": `${i * 0.12}s` } as React.CSSProperties}
              key={s.title}
            >
              <span className="tl-dot" aria-hidden>
                <span className="tl-dot-core" />
              </span>
              <div className="tl-card">
                <span className="tl-num">{String(i + 1).padStart(2, "0")}</span>
                <div className="tl-ico">
                  <Icon name={s.icon} size={20} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}