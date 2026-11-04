"use client";

import { useEffect, useRef, useState } from "react";

function animateValue(to: number, duration: number, onUpdate: (v: number) => void) {
  if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    onUpdate(to);
    return;
  }
  const start = performance.now();
  const tick = (now: number) => {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    onUpdate(to * eased);
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function Stat({
  to,
  duration,
  label,
  render,
}: {
  to: number;
  duration: number;
  label: string;
  render: (v: number) => string;
}) {
  const [val, setVal] = useState(to);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setVal(0);
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          animateValue(to, duration, setVal);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);

  return (
    <div className="stat" ref={ref}>
      <div className="val">{render(val)}</div>
      <div className="label">{label}</div>
    </div>
  );
}

export default function StatsBand() {
  return (
    <section className="stats-band" aria-label="Company statistics">
      <div className="container">
        <Stat to={2009} duration={1200} label="Established Year" render={(v) => String(Math.round(v))} />
        <Stat to={83} duration={1400} label="Products & Services" render={(v) => `${Math.round(v)}+`} />
        <Stat to={16} duration={1300} label="Years Manufacturing Hub" render={(v) => `${Math.round(v)}+`} />
        <Stat to={100} duration={1400} label="Quality Tested & Direct Dispatch" render={(v) => `${Math.round(v)}%`} />
      </div>
    </section>
  );
}
