import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import JsonLd from "@/components/JsonLd";
import "./globals.css";
import "./hero-slider.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ksg-tools.com"),
  title: {
    default: "K.S.G. Tools | Chipper Knives, Tools & Dies, Machinery | Coimbatore",
    template: "%s | K.S.G. Tools",
  },
  description:
    "K.S.G. Tools is a leading manufacturer of Chipper Knives, Tools & Dies, Industrial Shredding Machinery, Grinder Blades, Granulator Blades, and VMC Job Work. Estd. 2009, Coimbatore.",
  keywords: [
    "Chipper Knives",
    "Tools And Dies",
    "Shredding Machine",
    "Grinder Blades",
    "Granulator Blades",
    "VMC Machine Job Work",
    "Chaff Cutter Blades",
    "Industrial Cutting Tools",
    "Coimbatore Manufacturer",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ksg-tools.com",
    siteName: "K.S.G. Tools",
    title: "K.S.G. Tools | Industrial Cutting Tools & Precision Dies | Coimbatore",
    description:
      "Manufacturer and Supplier of Chipper Knives, Tools & Dies, Industrial Shredding Machinery, and VMC Job Work from Coimbatore.",
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