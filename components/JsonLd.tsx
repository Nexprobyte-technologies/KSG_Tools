export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "K.S.G. Tools",
    description:
      "Manufacturer, Wholesaler, Trader and Retailer of Shredder Knives, Plastic Granulator Blades, Chipper Knives, Wood Chipper Knives and more.",
    url: "https://ksg-tools.com",
    telephone: "+919944744509",
    email: "sales@ksgtools.example.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Coimbatore",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "11.0168",
      longitude: "76.9558",
    },
    image: "https://ksg-tools.com/hero/shredder-blade.jpg",
    priceRange: "₹300–₹3,000",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
    sameAs: [],
    foundingDate: "2009",
    legalName: "K.S.G. Tools",
    taxID: "33CEYPS0366D2Z6",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      reviewCount: "10",
      bestRating: "5",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Industrial Cutting Tools",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Shredder Knives",
            description:
              "Precision manufactured shredder knives for double shaft, single shaft and industrial shredding machines.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Granulator Blades",
            description: "Plastic granulator blades for recycling industries.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Chipper Knives",
            description: "Wood chipper knives and agricultural chaff cutter blades.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}