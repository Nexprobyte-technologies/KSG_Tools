import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import "./globals.css";

export const metadata: Metadata = {
  title: "K.S.G. Tools | Shredder Knives & Granulator Blades | Coimbatore",
  description:
    "K.S.G. Tools is a leading manufacturer, wholesaler, trader and retailer of Shredder Knives, Plastic Granulator Blades, Chipper Knives, Wood Chipper Knives and more. Estd. 2009, Coimbatore.",
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
      </body>
    </html>
  );
}