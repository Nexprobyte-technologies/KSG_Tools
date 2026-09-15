export const company = {
  name: "K.S.G. Tools",
  shortName: "K.S.G Tools",
  city: "Coimbatore",
  estd: 2009,
  tagline:
    "Manufacturer, Wholesaler, Trader and Retailer of Shredder Knives, Plastic Granulator Blades, Chipper Knives, Wood Chipper Knives and more.",
  phone: "+91 99447 44509",
  phoneLink: "+919944744509",
  whatsapp: "919944744509",
  email: "sales@ksgtools.example.com",
  rating: 4.5,
  totalRatings: 10,
  response: "100%",
  gst: "33CEYPS0366D2Z6",
  years: 16,
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products & Services", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Videos", href: "/videos" },
  { label: "Photos", href: "/photos" },
  { label: "Contact Us", href: "/contact" },
];

export const categories = [
  { name: "Shredder Knives", count: 10 },
  { name: "Chipper Knives", count: 8 },
  { name: "Tools And Dies", count: 8 },
  { name: "Shredding Machine", count: 13 },
  { name: "Grinder Blades", count: 3 },
  { name: "Granulator Blades", count: 3 },
  { name: "VMC Machine Job Work", count: 2 },
  { name: "Chaff Cutter Blades", count: 2 },
];

export const whyUsPoints = [
  "Experienced team of professionals",
  "Client-centric approach",
  "Competitive price structure",
  "Timely delivery",
  "Qualitative range of product",
];

export const factsheet = {
  natureOfBusiness: "Manufacturer",
  additionalBusiness: ["Wholesale Business", "Retail Business", "Factory / Manufacturing", "Recipient of Goods or Services", "Works Contract"],
  ceo: "K. Ganapathy",
  employees: "Upto 10 People",
  gstRegYear: 2017,
  legalStatus: "Proprietorship",
  bankers: ["Equitas Small Finance Bank Ltd", "Punjab National Bank"],
  paymentModes: ["Cash", "Credit Card", "Cheque", "DD", "Online", "Bank Transfer"],
  shipmentMode: "By Road",
};

export interface Product {
  name: string;
  slug: string;
  image: string;
  price: number | null;
  moq?: string;
  specs: [string, string][];
  desc?: string;
}

export const shredderKnives = {
  title: "Shredder Knives",
  intro:
    "Leading Manufacturer of 10 Inch Double Shaft Shredder Knives, Shredding Machine Knives & Blades, Shredder Blade Manufacturer, For Industrial, Mild Steel Shredder Blade, Shredder Knives, For Industrial and 8mm Agricultural Shredder Knives from Coimbatore.",
  products: [
    {
      name: "10 Inch Double Shaft Shredder Knives",
      slug: "10-inch-double-shaft-shredder-knives",
      image: "/products/product-5.jpg",
      price: 1500,
      moq: "100 Piece",
      specs: [
        ["Size (Diameter)", "10 inch"],
        ["Material", "Stainless Steel"],
        ["Usage/Application", "Industrial"],
        ["Shredding Machine Type", "Double Shaft"],
        ["Finishing", "Polished"],
        ["Thickness", "10mm"],
        ["Shape", "Round"],
        ["Shredding Capacity", "1000 kg/hr"],
      ],
      desc: "KSG Tools is dealing in best quality of materials and product to get the customers for long term and based on the customer requirement everything is done.",
    },
    {
      name: "Shredding Machine Knives & Blades",
      slug: "shredding-machine-knives-and-blades",
      image: "/products/product-2.jpg",
      price: 2000,
      specs: [
        ["Size", "4 Inch"],
        ["Shredding Capacity", "1500 kg/hr"],
        ["Material", "Stainless Steel"],
        ["Thickness", "6 Inch"],
        ["Machine Type", "Metal Working Machine"],
      ],
      desc: "Dual shaft shredder machine blades used for shredding of any sort of organic and inorganic waste.",
    },
    {
      name: "Shredder Blade Manufacturer, For Industrial",
      slug: "shredder-blade-manufacturer-for-industrial",
      image: "/products/product-3.jpg",
      price: 1000,
      specs: [
        ["Shredding Capacity", "1-500 kg/hr"],
        ["Usage/Application", "Industrial"],
        ["Automation Grade", "Automatic"],
      ],
      desc: "Dual shaft shredder machine blades used for shredding of any sort of organic and inorganic waste.",
    },
    {
      name: "Mild Steel Shredder Blade",
      slug: "mild-steel-shredder-blade",
      image: "/products/product-4.jpg",
      price: 3000,
      specs: [
        ["Shredding Capacity", "500-1000 kg/hr"],
        ["Usage/Application", "Industrial"],
        ["Brand", "Own Brand"],
        ["Automation Grade", "Automatic"],
      ],
      desc: "Dual shaft shredder machine blades used for shredding of any sort of organic and inorganic waste.",
    },
    {
      name: "Shredder Knives, For Industrial",
      slug: "shredder-knives-for-industrial",
      image: "/products/product-7.jpg",
      price: 3000,
      specs: [
        ["Shredding Capacity", "1-500 kg/hr"],
        ["Usage/Application", "Industrial"],
        ["Automation Grade", "Automatic"],
        ["Country of Origin", "Made in India"],
      ],
      desc: "Dual shaft shredder machine blades used for shredding of any sort of organic and inorganic waste.",
    },
    {
      name: "8mm Agricultural Shredder Knives",
      slug: "8mm-agricultural-shredder-knives",
      image: "/products/product-6.jpg",
      price: 650,
      moq: "100 Piece",
      specs: [
        ["Usage/Application", "Agricultural Machine"],
        ["Material", "Die Steel"],
        ["Thickness", "8 mm"],
        ["Shape", "Rectangle"],
        ["Length", "10 inch"],
        ["Width", "180 mm"],
      ],
      desc: "KSG Tools is dealing in best quality of materials and product to get the customers for long term and based on the customer requirement everything is done.",
    },
    {
      name: "8 Inch Double Shaft Shredder Knives",
      slug: "8-inch-double-shaft-shredder-knives",
      image: "/products/product-1.jpg",
      price: 1500,
      moq: "100 Piece",
      specs: [
        ["Usage/Application", "Industrial"],
        ["Shredding Machine Type", "Double Shaft"],
        ["Size", "8 inch"],
        ["Finishing", "Polished"],
        ["Material", "Stainless Steel"],
        ["Thickness", "10mm"],
        ["Shape", "Round"],
        ["Capacity", "500 kg/hr"],
        ["Color", "Silver"],
      ],
      desc: "KSG Tools is dealing in best quality of materials and product to get the customers for long term and based on the customer requirement everything is done.",
    },
    {
      name: "Chicken Cutting Shredder Knives",
      slug: "chicken-cutting-shredder-knives",
      image: "/products/product-8.jpg",
      price: 300,
      moq: "100 Piece",
      specs: [
        ["Usage/Application", "Chicken Cutting"],
        ["Blade Material", "Die Steel"],
        ["Thickness", "10 mm"],
        ["Shape", "Rectangular"],
        ["Material Grade", "D2"],
        ["Length", "9 inch"],
        ["Width", "260 mm"],
      ],
      desc: "KSG Tools is dealing in best quality of materials and product to get the customers for long term and based on the customer requirement everything is done.",
    },
    {
      name: "Plastic Shredder Knives, For Garage/Workshop",
      slug: "plastic-shredder-knives",
      image: "/products/product-9.jpg",
      price: 2000,
      specs: [
        ["Shredding Capacity", "1-500 kg/hr"],
        ["Brand", "Own Brand"],
        ["Automation Grade", "Automatic"],
        ["Usage/Application", "Industrial"],
      ],
      desc: "Dual shaft shredder machine blades used for shredding of any sort of organic and inorganic waste.",
    },
    {
      name: "Plastic Shredder Knives, For Garage/Workshop",
      slug: "plastic-shredder-knives-2",
      image: "/products/product-10.jpg",
      price: null,
      specs: [
        ["Shredding Capacity", "1-500 kg/hr"],
        ["Usage/Application", "Industrial"],
        ["Brand", "Own Brand"],
        ["Automation Grade", "Automatic"],
      ],
      desc: "Dual shaft shredder machine blades used for shredding of any sort of organic and inorganic waste.",
    },
  ] as Product[],
};

export const ratingBreakdown = [
  { stars: 5, percent: 60 },
  { stars: 4, percent: 30 },
  { stars: 3, percent: 10 },
  { stars: 2, percent: 0 },
  { stars: 1, percent: 0 },
];

export const reviews = [
  {
    name: "Malik Taj Khalil",
    location: "Pakistan",
    date: "13 September 2024",
    product: "Shredder Knives",
    text: "Excellent product quality and timely dispatch. Very satisfied with the Shredder Knives supplied by K.S.G. Tools.",
  },
  {
    name: "Majeendran Kunnath",
    location: "Cheruthuruthi, Kerala",
    date: "Verified Buyer",
    product: "Granulator Blades",
    text: "Good quality blades with competitive pricing. Would recommend for industrial knife requirements.",
  },
];

export const videos = [
  {
    title: "Shredder Knives Manufacturing",
    desc: "A look at how our shredder knives are precision machined and finished.",
    tag: "Manufacturing",
  },
  {
    title: "Double Shaft Shredding Machine Demo",
    desc: "Watch our double shaft shredding machine in action.",
    tag: "Machines",
  },
  {
    title: "Granulator Blades / Chipper Knives",
    desc: "Overview of our granulator blades and chipper knife range.",
    tag: "Products",
  },
  {
    title: "Company Tour",
    desc: "A walk through our infrastructure and manufacturing facilities.",
    tag: "Facilities",
  },
];

export const infrastructureImages = [
  { caption: "Infrastructure Facilities", img: "/infrastructure/infrastructure-1.jpg" },
  { caption: "Infrastructural Set-Up", img: "/infrastructure/infrastructure-2.jpg" },
  { caption: "Our Shop Exterior", img: "/infrastructure/infrastructure-3.jpg" },
  { caption: "Infrastructure & Manufacturing Facilities", img: "/infrastructure/infrastructure-4.jpg" },
  { caption: "Our Shop Interior", img: "/infrastructure/infrastructure-5.jpg" },
  { caption: "Our Storage Stock", img: "/infrastructure/infrastructure-6.jpg" },
];