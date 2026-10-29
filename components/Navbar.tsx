"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Icon from "@/components/icons";
import { navLinks, company } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Auto-close on page navigation
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="topbar-left">
            <span>
              <Icon name="award" size={13} /> Estd. {company.estd} · 16+ Years Industrial Toolmaking
            </span>
            <span className="topbar-divider">|</span>
            <span>
              <Icon name="shield" size={13} /> GST: {company.gst}
            </span>
          </div>
          <div className="topbar-right">
            <span>
              <span aria-hidden>★</span> {company.rating} Rating · {company.city}
            </span>
            <span className="topbar-divider">|</span>
            <span>
              <Icon name="check" size={13} /> Verified Precision Manufacturer
            </span>
          </div>
        </div>
      </div>

      <header className="navbar">
        <div className="container">
          <Link href="/" className="brand" onClick={() => setOpen(false)}>
            <span className="brand-mark">KSG</span>
            <span className="brand-title-wrap">
              <span className="brand-name">K.S.G. Tools</span>
              <span className="brand-badge">Precision Tooling · Coimbatore</span>
            </span>
          </Link>

          <nav>
            <ul className={`nav-links${open ? " open" : ""}`}>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={isActive(l.href) ? "active" : ""}
                    onClick={() => setOpen(false)}
                  >
                    <span>{l.label}</span>
                  </Link>
                </li>
              ))}
              <li className="nav-mobile-cta">
                <a
                  href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
                    "Hi K.S.G. Tools, please share your product catalogue."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary nav-mobile-download-btn"
                  onClick={() => setOpen(false)}
                >
                  <Icon name="download" size={16} /> Download Full Catalogue
                </a>
                <a
                  href={`tel:${company.phoneLink}`}
                  className="phone-pill phone-pill-mobile"
                  onClick={() => setOpen(false)}
                >
                  <Icon name="phone" size={16} /> Call {company.phone}
                </a>
              </li>
            </ul>
          </nav>

          <div className="nav-cta">
            <a href={`tel:${company.phoneLink}`} className="phone-pill">
              <Icon name="phone" size={14} />
              <span className="phone-pill-text">{company.phone}</span>
            </a>
            <a
              href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
                "Hi K.S.G. Tools, please share your product catalogue."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary nav-download-btn"
              title="Download Catalogue"
              aria-label="Download Catalogue"
            >
              <Icon name="download" size={14} />
              <span className="btn-text-full">Download Catalogue</span>
              <span className="btn-text-short">Catalogue</span>
            </a>
          </div>

          <button
            className="burger"
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {open && (
        <div
          className="nav-backdrop"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
