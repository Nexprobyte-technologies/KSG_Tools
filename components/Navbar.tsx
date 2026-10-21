"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Icon from "@/components/icons";
import { navLinks, company } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <div className="topbar">
        <div className="container">
          <span>
            <span aria-hidden>★</span> {company.rating} rating - {company.city}, India
          </span>
          <span>
            <Icon name="check" size={13} /> Giving Specialized IndiaMART Services
          </span>
        </div>
      </div>
      <header className="navbar">
        <div className="container">
          <a href="/" className="brand">
            <span className="brand-mark">KSG</span>
            K.S.G. Tools
          </a>
          <nav>
            <ul className={`nav-links${open ? " open" : ""}`}>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={isActive(l.href) ? "active" : ""}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
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
                <a href={`tel:${company.phoneLink}`} className="phone-pill phone-pill-mobile">
                  <Icon name="phone" size={16} /> Call {company.phone}
                </a>
              </li>
            </ul>
          </nav>
          <div className="nav-cta">
            <a href={`tel:${company.phoneLink}`} className="phone-pill">
              <Icon name="phone" size={16} /> {company.phone}
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
              <Icon name="download" size={15} />
              <span className="btn-text-full">Download Catalogue</span>
              <span className="btn-text-short">Catalogue</span>
            </a>
          </div>
          <button
            className="burger"
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </header>
    </>
  );
}