# K.S.G. Tools - Official Website

> Manufacturer, Wholesaler, Trader and Retailer of Shredder Knives, Plastic Granulator Blades, Chipper Knives, Wood Chipper Knives and more.

## Overview

Marketing website for **K.S.G. Tools**, a Coimbatore-based manufacturer of industrial cutting tools established in 2009. Built with Next.js and featuring an offline AI chat assistant with WhatsApp lead capture.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript + React 19
- **Styling:** Custom CSS (no Tailwind)
- **AI:** Offline rule-based chatbot with WhatsApp integration

## Features

- **Product Catalog** - 10 Shredder Knives with prices, specs and detail pages
- **AI Chatbot** - Collects name, phone, address and requirement details, sends via WhatsApp
- **Photo Gallery** - Lightbox carousel with keyboard navigation
- **Milestone Timeline** - Scroll-animated vertical timeline with progress fill
- **Product Marquee** - Auto-scrolling category cards, pause on hover
- **Google Maps** - Embedded location map on contact page
- **SEO** - Static generation for all routes with metadata

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home - Hero, products marquee, timeline, stats, reviews |
| `/products` | All products + full Shredder Knives catalog |
| `/products/[slug]` | Product detail with gallery, specs, related items |
| `/about` | Company factsheet, ratings and reviews |
| `/videos` | Video gallery (coming soon) |
| `/photos` | Infrastructure photo gallery with lightbox |
| `/contact` | Enquiry form, map and contact details |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
npm start
```

## Project Structure

```
app/
  page.tsx                    # Home page
  products/page.tsx           # Products listing
  products/[slug]/page.tsx    # Product detail (SSG)
  about/page.tsx
  videos/page.tsx
  photos/page.tsx
  contact/page.tsx
  globals.css                 # All styles
components/
  sections/                   # Page sections (Hero, StatsBand, etc.)
  Lightbox.tsx                # Photo gallery lightbox
  Chatbot.tsx                 # AI chat widget
  Navbar.tsx / Footer.tsx
  ShapeGrid.tsx               # Animated background (ReactBits port)
lib/
  data.ts                     # Company, products, reviews data
  chatbot.ts                  # Lead-capture + FAQ engine
public/
  hero/shredder-blade.jpg
  infrastructure/             # Facility photos
  products/                   # Product images
```

## Company Details

- **Name:** K.S.G. Tools
- **Location:** Coimbatore, Tamil Nadu, India
- **Established:** 2009
- **CEO:** K. Ganapathy
- **GST No:** 33CEYPS0366D2Z6

## License

Proprietary - Nexprobyte Technologies
