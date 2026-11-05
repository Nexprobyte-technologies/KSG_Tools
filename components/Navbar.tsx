"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Icon from "@/components/icons";
import { navLinks, company } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname.startsWith(href);
  };

  // Scroll detection for sticky header transition
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-close on page navigation
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll and handle Escape key when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <>
      <header
        className={`navbar${scrolled ? " scrolled" : ""}`}
        role="banner"
      >
        <div className="container">
          <Link
            href="/"
            className="brand"
            onClick={() => setOpen(false)}
            aria-label="K.S.G. Tools Home"
          >
            <span className="brand-mark" aria-hidden="true">KSG</span>
            <span className="brand-name">K.S.G. Tools</span>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main Navigation">
            <ul className="nav-links">
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
            </ul>
          </nav>

          {/* Desktop Actions */}
          <div className="nav-cta">
            <a
              href={`tel:${company.phoneLink}`}
              className="phone-pill"
              title={`Call K.S.G. Tools direct: ${company.phone}`}
            >
              <Icon name="phone" size={14} />
              <span className="phone-pill-text">{company.phone}</span>
            </a>
            <Link
              href="/contact"
              className="btn btn-primary nav-quote-btn"
              title="Request a Factory Quote"
            >
              <Icon name="tag" size={13} />
              <span className="btn-text-full">Request Quote</span>
              <span className="btn-text-short">Quote</span>
            </Link>
            <a
              href="/api/download-catalogue"
              download="KSG-Tools-Product-Catalogue.pdf"
              className="btn btn-outline-light nav-download-btn"
              title="Download Product Catalogue (PDF)"
              aria-label="Download Product Catalogue (PDF)"
            >
              <Icon name="download" size={14} />
              <span className="btn-text-full">Catalogue</span>
            </a>
          </div>

          {/* Mobile Right Controls: Quick Quote + Modern Hamburger */}
          <div className="mobile-nav-controls">
            <Link
              href="/contact"
              className="mobile-nav-quote"
              onClick={() => setOpen(false)}
              aria-label="Request a quote"
            >
              <Icon name="tag" size={13} />
              <span>Quote</span>
            </Link>
            <button
              className="burger"
              type="button"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              aria-controls="mobile-nav-drawer"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Navigation Drawer */}
      {open && (
        <>
          <div
            className="nav-backdrop"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <aside
            id="mobile-nav-drawer"
            className="mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
          >
            <div className="mobile-drawer-head">
              <div className="mobile-drawer-brand">
                <span className="brand-mark small" aria-hidden="true">KSG</span>
                <span className="mobile-drawer-name">K.S.G. Tools</span>
              </div>
              <button
                type="button"
                className="mobile-drawer-close"
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
              >
                ✕
              </button>
            </div>

            <nav aria-label="Mobile Navigation Links">
              <ul className="mobile-drawer-links">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className={isActive(l.href) ? "active" : ""}
                      onClick={() => setOpen(false)}
                    >
                      <span>{l.label}</span>
                      <span className="arrow" aria-hidden="true">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mobile-drawer-cta">
              <Link
                href="/contact"
                className="btn btn-primary mobile-cta-quote"
                onClick={() => setOpen(false)}
              >
                <Icon name="tag" size={16} /> Request Factory Quote
              </Link>
              <a
                href={`tel:${company.phoneLink}`}
                className="btn btn-outline-dark mobile-cta-phone"
                onClick={() => setOpen(false)}
              >
                <Icon name="phone" size={16} /> Call {company.phone}
              </a>
              <a
                href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
                  "Hi K.S.G. Tools, I would like to request technical specifications and custom quote."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-wa mobile-cta-wa"
                onClick={() => setOpen(false)}
              >
                <Icon name="chat" size={16} /> WhatsApp Us
              </a>
              <a
                href="/api/download-catalogue"
                download="KSG-Tools-Product-Catalogue.pdf"
                className="btn btn-outline-dark mobile-cta-download"
                onClick={() => setOpen(false)}
              >
                <Icon name="download" size={16} /> Download Catalogue (PDF)
              </a>
            </div>
          </aside>
        </>
      )}
    </>
  );
}
