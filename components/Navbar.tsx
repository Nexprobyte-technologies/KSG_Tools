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
              className="btn btn-primary"
            >
              Download Catalogue
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