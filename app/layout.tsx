import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ksg-tools.com"),
  title: {
    default: "K.S.G. Tools | Shredder Knives & Granulator Blades | Coimbatore",
    template: "%s | K.S.G. Tools",
  },
  description:
    "K.S.G. Tools is a leading manufacturer, wholesaler, trader and retailer of Shredder Knives, Plastic Granulator Blades, Chipper Knives, Wood Chipper Knives and more. Estd. 2009, Coimbatore.",
  keywords: [
    "Shredder Knives",
    "Granulator Blades",
    "Chipper Knives",
    "Wood Chipper Knives",
    "Shredder Blades",
    "Industrial Cutting Tools",
    "Coimbatore Manufacturer",
    "Chaff Cutter Blades",
    "Shredding Machine",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ksg-tools.com",
    siteName: "K.S.G. Tools",
    title: "K.S.G. Tools | Shredder Knives & Granulator Blades | Coimbatore",
    description:
      "Manufacturer, Wholesaler, Trader and Retailer of Shredder Knives, Plastic Granulator Blades, Chipper Knives and more from Coimbatore.",
    images: [
      {
        url: "/hero/shredder-blade.jpg",
        width: 600,
        height: 600,
        alt: "Shredder blade by K.S.G. Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "K.S.G. Tools | Shredder Knives & Granulator Blades",
    description:
      "Industrial cutting tools manufacturer from Coimbatore. Shredder Knives, Granulator Blades, Chipper Knives and more.",
    images: ["/hero/shredder-blade.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  category: "Industrial Tools Manufacturing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Chatbot />
        <JsonLd />
      </body>
    </html>
  );
}