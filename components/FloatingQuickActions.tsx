"use client";

import { company } from "@/lib/data";

export default function FloatingQuickActions() {
  return (
    <aside
      className="floating-whatsapp-wrap"
      aria-label="Direct WhatsApp Contact"
    >
      <a
        href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
          "Hi K.S.G. Tools, I want to enquire about industrial knives and tooling quotations."
        )}`}
        target="_blank"
        rel="noreferrer"
        className="floating-wa-btn"
        title="Chat on WhatsApp with K.S.G. Tools"
        aria-label="Chat on WhatsApp with K.S.G. Tools"
      >
        <svg
          viewBox="0 0 24 24"
          width="30"
          height="30"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.39-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.32a8.188 8.188 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24m-2.52 3.36c-.2 0-.49.07-.73.33-.25.26-.95.92-.95 2.26s.98 2.63 1.11 2.81c.15.19 1.93 2.93 4.66 4.11.65.28 1.15.45 1.55.57.66.21 1.26.18 1.73.11.53-.08 1.63-.67 1.86-1.31.23-.65.23-1.2.16-1.32-.07-.12-.26-.18-.56-.33-.29-.15-1.73-.86-2-.96-.26-.1-.46-.15-.65.15-.19.29-.76.96-.94 1.16-.17.2-.34.22-.64.08-.29-.15-1.23-.46-2.35-1.46-.87-.78-1.46-1.74-1.63-2.03-.17-.3-.02-.45.13-.6.13-.13.29-.35.44-.52.14-.18.19-.3.29-.5.1-.2.05-.37-.03-.52-.07-.15-.66-1.6-.9-2.19-.24-.57-.48-.49-.66-.5-.17-.01-.37-.01-.56-.01z" />
        </svg>
        <span className="floating-wa-tooltip">Chat on WhatsApp</span>
      </a>
    </aside>
  );
}
