"use client";

import { useEffect, useRef, useState } from "react";

function animateValue(to: number, duration: number, onUpdate: (v: number) => void) {
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
  render,
}: {
  to: number;
  duration: number;
  render: (v: number) => string;
}) {
  const [val, setVal] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started) {
          setStarted(true);
          animateValue(to, duration, setVal);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration, started]);

  return (
    <div className="stat" ref={ref}>
      <div className="val">{started ? render(val) : render(0)}</div>
      <div className="label">
        {to === 2009
          ? "Established"
          : to === 49
            ? "Products & Services"
            : to === 4.5
              ? "Customer Rating"
              : "User Satisfaction"}
      </div>
    </div>
  );
}

export default function StatsBand() {
  return (
    <section className="stats-band" aria-label="Company statistics">
      <div className="container">
        <Stat to={2009} duration={1200} render={(v) => String(Math.round(v))} />
        <Stat to={49} duration={1400} render={(v) => `${Math.round(v)}+`} />
        <Stat to={4.5} duration={1500} render={(v) => `${v.toFixed(1)}★`} />
        <Stat to={100} duration={1400} render={(v) => `${Math.round(v)}%`} />
      </div>
    </section>
  );
}