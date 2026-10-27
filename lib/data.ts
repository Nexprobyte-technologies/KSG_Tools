export const company = {
  name: "K.S.G. Tools",
  shortName: "K.S.G Tools",
  city: "Coimbatore",
  estd: 2009,
  tagline:
    "Manufacturer, Wholesaler, Trader and Retailer of Chipper Knives, Tools & Dies, Industrial Shredding Machines, Grinder Blades, Plastic Granulator Blades, and VMC Job Work.",
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
  {
    "name": "Chipper Knives",
    "count": 8
  },
  {
    "name": "Shredder Knives",
    "count": 9
  },
  {
    "name": "Tools And Dies",
    "count": 13
  },
  {
    "name": "Shredding Machine",
    "count": 5
  },
  {
    "name": "Grinder Blades",
    "count": 3
  },
  {
    "name": "Granulator Blades",
    "count": 3
  },
  {
    "name": "VMC Machine Job Work",
    "count": 2
  },
  {
    "name": "Chaff Cutter Blades",
    "count": 2
  }
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
  code: string;
  name: string;
  category?: string;
  slug: string;
  image: string;
  price: number | null;
  moq?: string;
  specs: [string, string][];
  desc?: string;
}

export const allProducts: Product[] = [
  {
    "code": "KSG-201",
    "name": "4 inch Stainless Steel Chipper Knife",
    "category": "Chipper Knives",
    "slug": "4-inch-stainless-steel-chipper-knife",
    "image": "/products/indiamart-2851585949630.jpg",
    "price": 4000,
    "moq": "1 Piece",
    "specs": [
      [
        "Size",
        "4 Inch"
      ],
      [
        "Material",
        "Stainless Steel"
      ],
      [
        "Brand",
        "Own Brand"
      ],
      [
        "Hardness",
        "58-60 HRC"
      ],
      [
        "Usage/Application",
        "Wood Chipping & Industrial"
      ]
    ],
    "desc": "Genuine 4 inch stainless steel chipper knives manufactured by K.S.G. Tools in Coimbatore with high-precision ground edges for industrial wood chipping and timber yards."
  },
  {
    "code": "KSG-202",
    "name": "2 Slot Wood Chipper Knives",
    "category": "Chipper Knives",
    "slug": "2-slot-wood-chipper-knives",
    "image": "/products/indiamart-2850047399762.jpeg",
    "price": 500,
    "moq": "1 Piece",
    "specs": [
      [
        "Material",
        "Stainless Steel"
      ],
      [
        "Usage/Application",
        "Industrial"
      ],
      [
        "Machine Type",
        "Wood Working Machine"
      ],
      [
        "Number of Slots",
        "2 Slots"
      ]
    ],
    "desc": "Precision 2-slot wood chipper knives providing secure bolt clamping and vibration-free chipping of hard timber, bamboo, and saw mill logs."
  },
  {
    "code": "KSG-203",
    "name": "Stainless Steel Chipper Knives",
    "category": "Chipper Knives",
    "slug": "stainless-steel-chipper-knives",
    "image": "/products/indiamart-2850047515930.jpg",
    "price": 650,
    "moq": "1 Piece",
    "specs": [
      [
        "Size (Length)",
        "17 mm"
      ],
      [
        "Material",
        "Stainless Steel"
      ],
      [
        "Usage/Application",
        "Industrial"
      ],
      [
        "Corrosion Resistance",
        "High"
      ]
    ],
    "desc": "All-weather stainless steel chipper blades resisting sap acidity and corrosion. Delivers uniform wood chips with minimal sawdust generation."
  },
  {
    "code": "KSG-204",
    "name": "10 Inch Agriculture Chipper Knives",
    "category": "Chipper Knives",
    "slug": "10-inch-agriculture-chipper-knives",
    "image": "/products/indiamart-2850047488548.jpg",
    "price": 650,
    "moq": "1 Piece",
    "specs": [
      [
        "Length",
        "10 Inch"
      ],
      [
        "Material",
        "Stainless Steel"
      ],
      [
        "Usage/Application",
        "Industrial"
      ],
      [
        "Type",
        "Chipper Knives"
      ]
    ],
    "desc": "Heavy-duty 10-inch agricultural chipper blades designed for field shredders and tractor-driven chippers to process farm residues and woody brush."
  },
  {
    "code": "KSG-205",
    "name": "4 Inch Wood Chipper Knives",
    "category": "Chipper Knives",
    "slug": "4-inch-wood-chipper-knives",
    "image": "/products/indiamart-2850047534997.jpg",
    "price": 450,
    "moq": "1 Piece",
    "specs": [
      [
        "Size",
        "4 Inch"
      ],
      [
        "Application",
        "Wood Cutting"
      ],
      [
        "Material",
        "Stainless Steel"
      ],
      [
        "Usage/Application",
        "Industrial"
      ]
    ],
    "desc": "Compact 4-inch wood cutting chipper knives manufactured with 56-58 HRC hardness for consistent cutting performance."
  },
  {
    "code": "KSG-206",
    "name": "5 Inch Wood Chipper Knives",
    "category": "Chipper Knives",
    "slug": "5-inch-wood-chipper-knives",
    "image": "/products/indiamart-2850039862855.jpeg",
    "price": 1500,
    "moq": "1 Piece",
    "specs": [
      [
        "Size",
        "5 Inch"
      ],
      [
        "Material",
        "Stainless Steel"
      ],
      [
        "Type",
        "Chipper Blades"
      ],
      [
        "Color",
        "Silver"
      ]
    ],
    "desc": "High-grade 5-inch wood chipper cutting blades designed for high impact resistance in wood processing and sawmill operations."
  },
  {
    "code": "KSG-207",
    "name": "Garden Shredder Chipper Knives",
    "category": "Chipper Knives",
    "slug": "garden-shredder-chipper-knives",
    "image": "/products/indiamart-2850047574088.jpg",
    "price": 350,
    "moq": "1 Piece",
    "specs": [
      [
        "Application",
        "Wood Cutting"
      ],
      [
        "Material",
        "Stainless Steel"
      ],
      [
        "Usage/Application",
        "Industrial & Garden Shredders"
      ]
    ],
    "desc": "Reversible garden shredder knives for pruning chippers and compost shredders. Tempered for shock resistance against tough twigs and roots."
  },
  {
    "code": "KSG-208",
    "name": "Wood Chipper Knives",
    "category": "Chipper Knives",
    "slug": "wood-chipper-knives",
    "image": "/products/indiamart-2850047389462.png",
    "price": 500,
    "moq": "1 Piece",
    "specs": [
      [
        "Material",
        "Stainless Steel"
      ],
      [
        "Usage/Application",
        "Industrial"
      ],
      [
        "Type",
        "Chipper Knives"
      ]
    ],
    "desc": "Heavy-duty industrial wood chipper knives built for uniform chipping and extended blade cutting cycles across all timber species."
  },
  {
    "code": "KSG-101",
    "name": "10 Inch Double Shaft Shredder Knives",
    "category": "Shredder Knives",
    "slug": "10-inch-double-shaft-shredder-knives",
    "image": "/products/indiamart-2850047594948.jpeg",
    "price": 1500,
    "moq": "1 Piece",
    "specs": [
      [
        "Size (Diameter)",
        "10 inch"
      ],
      [
        "Material",
        "Stainless Steel"
      ],
      [
        "Usage/Application",
        "Industrial"
      ],
      [
        "Machine Compatibility",
        "Double Shaft Shredder"
      ]
    ],
    "desc": "10-inch diameter multi-hook rotary shredder knives for double shaft industrial shredders handling plastic, metal scrap, tires, and drums."
  },
  {
    "code": "KSG-102",
    "name": "Shredding Machine Knives & Blades",
    "category": "Shredder Knives",
    "slug": "shredding-machine-knives-and-blades",
    "image": "/products/indiamart-2851586119173.jpg",
    "price": 2000,
    "moq": "1 Piece",
    "specs": [
      [
        "Size",
        "4 Inch"
      ],
      [
        "Shredding Capacity",
        "1500 kg/hr"
      ],
      [
        "Material",
        "Stainless Steel"
      ],
      [
        "Application",
        "Heavy Industrial Shredding"
      ]
    ],
    "desc": "Wear-resistant shredding machine knives and blades manufactured from vacuum heat-treated alloy steel for maximum throughput."
  },
  {
    "code": "KSG-103",
    "name": "Shredder Blade Manufacturer, For Industrial",
    "category": "Shredder Knives",
    "slug": "shredder-blade-manufacturer-industrial",
    "image": "/products/indiamart-2851586172133.jpeg",
    "price": 1000,
    "moq": "1 Piece",
    "specs": [
      [
        "Shredding Capacity",
        "1-500 kg/hr"
      ],
      [
        "Usage/Application",
        "Industrial"
      ],
      [
        "Automation Grade",
        "Automatic"
      ]
    ],
    "desc": "Custom industrial shredder blades manufactured in Coimbatore for plastic granulators, e-waste shredders, and solid waste processing."
  },
  {
    "code": "KSG-104",
    "name": "Mild Steel Shredder Blade",
    "category": "Shredder Knives",
    "slug": "mild-steel-shredder-blade",
    "image": "/products/indiamart-2851586264212.jpeg",
    "price": 3000,
    "moq": "1 Piece",
    "specs": [
      [
        "Shredding Capacity",
        "500-1000 kg/hr"
      ],
      [
        "Usage/Application",
        "Industrial"
      ],
      [
        "Brand",
        "Own brand"
      ]
    ],
    "desc": "Mild steel high-strength shredder blades built for heavy torque industrial shredding machines and recycling installations."
  },
  {
    "code": "KSG-105",
    "name": "Shredder Knives, For Industrial",
    "category": "Shredder Knives",
    "slug": "shredder-knives-for-industrial",
    "image": "/products/indiamart-2851586277597.jpg",
    "price": 3000,
    "moq": "1 Piece",
    "specs": [
      [
        "Shredding Capacity",
        "1-500 kg/hr"
      ],
      [
        "Usage/Application",
        "Industrial"
      ],
      [
        "Automation Grade",
        "Automatic"
      ]
    ],
    "desc": "Heavy duty industrial shredder knives with precision ground teeth for efficient size reduction of polymers, textiles, and composite materials."
  },
  {
    "code": "KSG-106",
    "name": "8mm Agricultural Shredder Knives",
    "category": "Shredder Knives",
    "slug": "8mm-agricultural-shredder-knives",
    "image": "/products/indiamart-23048052933.jpg",
    "price": 650,
    "moq": "1 Piece",
    "specs": [
      [
        "Usage/Application",
        "Agricultural Machine"
      ],
      [
        "Material",
        "Die Steel"
      ],
      [
        "Thickness",
        "8 mm"
      ]
    ],
    "desc": "8mm thick hardened die steel agricultural shredder knives for crop residue shredders, sugarcane trash choppers, and farm machinery."
  },
  {
    "code": "KSG-107",
    "name": "8 Inch Double Shaft Shredder Knives",
    "category": "Shredder Knives",
    "slug": "8-inch-double-shaft-shredder-knives",
    "image": "/products/indiamart-2850047604433.jpeg",
    "price": 1500,
    "moq": "1 Piece",
    "specs": [
      [
        "Usage/Application",
        "Industrial"
      ],
      [
        "Shredding Machine Type",
        "Double Shaft"
      ],
      [
        "Size",
        "8 inch"
      ]
    ],
    "desc": "8-inch multi-claw double shaft shredder blades delivering high tearing forces for municipal waste, plastic drums, and e-waste."
  },
  {
    "code": "KSG-108",
    "name": "Chicken Cutting Shredder Knives",
    "category": "Shredder Knives",
    "slug": "chicken-cutting-shredder-knives",
    "image": "/products/indiamart-23048040255.jpg",
    "price": 300,
    "moq": "1 Piece",
    "specs": [
      [
        "Usage/Application",
        "Chicken Cutting"
      ],
      [
        "Blade Material",
        "Die Steel"
      ],
      [
        "Thickness",
        "10 mm"
      ]
    ],
    "desc": "10mm precision poultry and meat processing cutting knives with surgical-grade sharpness and corrosion-resistant finish."
  },
  {
    "code": "KSG-109",
    "name": "Plastic Shredder Knives, For Garage/Workshop",
    "category": "Shredder Knives",
    "slug": "plastic-shredder-knives-garage-workshop",
    "image": "/products/indiamart-2851586046655.jpeg",
    "price": 2000,
    "moq": "1 Piece",
    "specs": [
      [
        "Shredding Capacity",
        "1-500 kg/hr"
      ],
      [
        "Brand",
        "Own Brand"
      ],
      [
        "Automation Grade",
        "Automatic"
      ]
    ],
    "desc": "Workshop grade plastic shredder knives engineered for compact recycling machines, 3D print scrap shredders, and garage workshops."
  },
  {
    "code": "KSG-301",
    "name": "Press Tool Die Manufacturer",
    "category": "Tools And Dies",
    "slug": "press-tool-die-manufacturer",
    "image": "/products/indiamart-2852735040912.jpeg",
    "price": 5000,
    "moq": "1 Piece",
    "specs": [
      [
        "Material",
        "Aluminium / D2 Steel"
      ],
      [
        "Usage/Application",
        "Industrial"
      ],
      [
        "Pattern Type",
        "Engraved Precision Tooling"
      ]
    ],
    "desc": "Custom engineered press tool dies for sheet metal stamping, punching, bending, and blanking. Manufactured using high-speed tool steel in Coimbatore."
  },
  {
    "code": "KSG-302",
    "name": "Plastic Moulding Dies",
    "category": "Tools And Dies",
    "slug": "plastic-moulding-dies",
    "image": "/products/indiamart-2852735041012.jpg",
    "price": 10000,
    "moq": "1 Piece",
    "specs": [
      [
        "Moulding Material",
        "PP"
      ],
      [
        "Material",
        "P 20 Mold Steel"
      ],
      [
        "Shape",
        "Rectangular"
      ]
    ],
    "desc": "High precision plastic injection moulding dies with mirror polish cavity finish for automotive, electrical, and consumer goods manufacturing."
  },
  {
    "code": "KSG-303",
    "name": "Indian Knives Wood Chipper Knives",
    "category": "Tools And Dies",
    "slug": "indian-knives-wood-chipper-knives",
    "image": "/products/indiamart-2851585911888.jpeg",
    "price": 3000,
    "moq": "1 Piece",
    "specs": [
      [
        "Size",
        "5 Inch"
      ],
      [
        "Material",
        "Stainless Steel"
      ],
      [
        "Brand",
        "Own Brand"
      ]
    ],
    "desc": "Heavy-duty 5-inch chipper knives manufactured to Indian industrial standards for high-capacity wood reduction."
  },
  {
    "code": "KSG-304",
    "name": "Aluminium Pattern Works",
    "category": "Tools And Dies",
    "slug": "aluminium-pattern-works",
    "image": "/products/indiamart-2852735041212.jpg",
    "price": 5000,
    "moq": "1 Piece",
    "specs": [
      [
        "Usage/Application",
        "Industrial Foundry"
      ],
      [
        "Material",
        "Aluminium"
      ],
      [
        "Color",
        "Silver"
      ]
    ],
    "desc": "Custom CNC machined aluminium patterns and core boxes for sand casting foundries with accurate draft angles and shrinkage allowances."
  },
  {
    "code": "KSG-305",
    "name": "Rubber Moulding",
    "category": "Tools And Dies",
    "slug": "rubber-moulding",
    "image": "/products/indiamart-2852735041155.jpg",
    "price": null,
    "moq": "1 Piece",
    "specs": [
      [
        "Mould Height",
        "100 mm"
      ],
      [
        "Mould Material",
        "Stainless Steel"
      ],
      [
        "Material",
        "Rubber Moulding"
      ]
    ],
    "desc": "Compression and transfer rubber moulding dies for manufacturing O-rings, oil seals, automotive gaskets, and vibration dampeners."
  },
  {
    "code": "KSG-306",
    "name": "Press And Die Casting Moulds",
    "category": "Tools And Dies",
    "slug": "press-and-die-casting-moulds",
    "image": "/products/indiamart-2852735041497.jpg",
    "price": 8000,
    "moq": "1 Piece",
    "specs": [
      [
        "Casting Material",
        "Aluminium"
      ],
      [
        "Material",
        "P 20 Mold Steel"
      ],
      [
        "Color",
        "Silver"
      ]
    ],
    "desc": "Precision pressure die casting and press tooling moulds engineered for high thermal conductivity and extended production life."
  },
  {
    "code": "KSG-307",
    "name": "Die Sets",
    "category": "Tools And Dies",
    "slug": "die-sets",
    "image": "/products/indiamart-2854402968997.jpg",
    "price": null,
    "moq": "1 Piece",
    "specs": [
      [
        "Usage/Application",
        "Sheet Metal & Press Work"
      ],
      [
        "Material",
        "High Carbon Die Steel"
      ],
      [
        "Precision",
        "High Accuracy Tolerance"
      ]
    ],
    "desc": "Standard and custom pillar die sets with hardened guide pillars and bronze bushes for precision press tooling alignment."
  },
  {
    "code": "KSG-308",
    "name": "Pattern Dies",
    "category": "Tools And Dies",
    "slug": "pattern-dies",
    "image": "/products/indiamart-2854402928630.jpg",
    "price": null,
    "moq": "1 Piece",
    "specs": [
      [
        "Die Type",
        "Foundry Pattern Die"
      ],
      [
        "Material",
        "Tool Steel & Aluminium"
      ],
      [
        "Application",
        "Foundry Casting Patterns"
      ]
    ],
    "desc": "Foundry pattern dies designed for high-repeatability casting moulds in automotive and pump manufacturing industries."
  },
  {
    "code": "KSG-309",
    "name": "Cnc Turret Punch Press Tool",
    "category": "Tools And Dies",
    "slug": "cnc-turret-punch-press-tool",
    "image": "/products/indiamart-2854402927397.jpg",
    "price": null,
    "moq": "1 Piece",
    "specs": [
      [
        "Die Type",
        "CNC Turret Punch"
      ],
      [
        "Material",
        "D2 / High Speed Tool Steel"
      ],
      [
        "Application",
        "Punching & Blanking"
      ]
    ],
    "desc": "Precision ground CNC turret punches and dies compatible with thick and thin turret machines for sheet metal fabrication."
  },
  {
    "code": "KSG-310",
    "name": "Progressive Die Tools",
    "category": "Tools And Dies",
    "slug": "progressive-die-tools",
    "image": "/products/indiamart-2854402927430.jpg",
    "price": null,
    "moq": "1 Piece",
    "specs": [
      [
        "Die Type",
        "Progressive Stamping Die"
      ],
      [
        "Material",
        "D2 High Carbon Steel"
      ],
      [
        "Application",
        "High Volume Stamping"
      ]
    ],
    "desc": "Multi-stage progressive stamping dies designed to blank, pierce, bend, and form complex sheet metal components in a single press cycle."
  },
  {
    "code": "KSG-311",
    "name": "Automotive Steel Die Pattern",
    "category": "Tools And Dies",
    "slug": "automotive-steel-die-pattern",
    "image": "/products/indiamart-2854402928497.jpg",
    "price": null,
    "moq": "1 Piece",
    "specs": [
      [
        "Die Type",
        "Automotive Forming Die"
      ],
      [
        "Material",
        "Alloy Steel"
      ],
      [
        "Application",
        "Automotive Component Pressing"
      ]
    ],
    "desc": "Heavy-duty automotive steel dies manufactured with tight dimensional tolerances for chassis and body panel press work."
  },
  {
    "code": "KSG-312",
    "name": "Precision Moulds & Dies",
    "category": "Tools And Dies",
    "slug": "precision-moulds-and-dies",
    "image": "/products/indiamart-2854402959433.jpg",
    "price": null,
    "moq": "1 Piece",
    "specs": [
      [
        "Mould Type",
        "Precision Injection Mould"
      ],
      [
        "Material",
        "P20 Tool Steel"
      ],
      [
        "Application",
        "Plastic & Polymer Moulding"
      ]
    ],
    "desc": "High precision moulds and dies crafted for optical, medical, and high-tolerance electronic polymer components."
  },
  {
    "code": "KSG-313",
    "name": "Automotive Dies",
    "category": "Tools And Dies",
    "slug": "automotive-dies",
    "image": "/products/indiamart-2854402949297.jpg",
    "price": null,
    "moq": "1 Piece",
    "specs": [
      [
        "Application",
        "Automotive Pressing & Blanking"
      ],
      [
        "Material",
        "Hardened Alloy Steel"
      ]
    ],
    "desc": "Specialized automotive forming dies built to withstand high cycle fatigue in Tier-1 automotive parts production."
  },
  {
    "code": "KSG-401",
    "name": "Metal Shredder Machine",
    "category": "Shredding Machine",
    "slug": "metal-shredder-machine",
    "image": "/products/indiamart-2850479907955.jpg",
    "price": 50000,
    "moq": "1 Piece",
    "specs": [
      [
        "Capacity",
        "5000 kg/hr"
      ],
      [
        "Shredding Capacity",
        "500-1000 kg/hr"
      ],
      [
        "Shredding Machine Type",
        "Single Shaft"
      ]
    ],
    "desc": "High torque metal shredder machine designed to shred aluminium profiles, tin cans, light scrap, and turnings with low noise and high energy efficiency."
  },
  {
    "code": "KSG-402",
    "name": "Mild Steel Shredder Cutter, For Industrial",
    "category": "Shredding Machine",
    "slug": "mild-steel-shredder-cutter-industrial",
    "image": "/products/indiamart-2851586301355.jpg",
    "price": null,
    "moq": "1 Piece",
    "specs": [
      [
        "Usage/Application",
        "Industrial"
      ],
      [
        "Brand",
        "Own Brand"
      ],
      [
        "Automation Grade",
        "Automatic"
      ]
    ],
    "desc": "Automatic mild steel industrial shredder cutters configured for continuous shredding operations in manufacturing plants."
  },
  {
    "code": "KSG-403",
    "name": "Double Shaft Automatic Shredding Machine",
    "category": "Shredding Machine",
    "slug": "double-shaft-automatic-shredding-machine",
    "image": "/products/shredder-double-shaft.jpg",
    "price": null,
    "moq": "1 Piece",
    "specs": [
      [
        "Machine Type",
        "Double Shaft Automatic Shredder"
      ],
      [
        "Motor Power",
        "15 HP / 30 HP Dual Motors"
      ],
      [
        "Application",
        "Industrial Waste, Rubber, Plastic & Wood"
      ]
    ],
    "desc": "Heavy-duty double shaft automatic shredder with dual counter-rotating shafts for tearing bulky solid waste, drums, tires, and wood."
  },
  {
    "code": "KSG-404",
    "name": "Agricultural Shredder Machine In Coimbatore",
    "category": "Shredding Machine",
    "slug": "agricultural-shredder-machine-in-coimbatore",
    "image": "/products/shredder-auto-machine.jpg",
    "price": null,
    "moq": "1 Piece",
    "specs": [
      [
        "Application",
        "Farm Waste, Coconut Fronds & Biomass"
      ],
      [
        "Capacity",
        "1000-2000 kg/hr"
      ],
      [
        "Drive",
        "Tractor PTO / Electric Motor"
      ]
    ],
    "desc": "Field-tested agricultural shredder machine manufactured in Coimbatore for shredding coconut fronds, maize stalks, and cotton stalks into compost."
  },
  {
    "code": "KSG-405",
    "name": "Mild Steel Coconut Husk Shredder Machine",
    "category": "Shredding Machine",
    "slug": "mild-steel-coconut-husk-shredder-machine",
    "image": "/products/shredder-coconut-husk.jpg",
    "price": null,
    "moq": "1 Piece",
    "specs": [
      [
        "Material",
        "Mild Steel Heavy Body"
      ],
      [
        "Application",
        "Coir & Coconut Husk Processing"
      ],
      [
        "Output",
        "Coir Fibre and Husk Pith"
      ]
    ],
    "desc": "Specialized coconut husk shredder machine breaking down green and dry coconut husks for coir fibre extraction and coir pith production."
  },
  {
    "code": "KSG-501",
    "name": "Shredder Machine Blade, For Industrial",
    "category": "Grinder Blades",
    "slug": "shredder-machine-blade-industrial",
    "image": "/products/indiamart-2851585980433.jpg",
    "price": 3000,
    "moq": "1 Piece",
    "specs": [
      [
        "Size",
        "4 Inch"
      ],
      [
        "Shredding Capacity",
        "2000 kg/hr"
      ],
      [
        "Material",
        "Stainless Steel"
      ]
    ],
    "desc": "High capacity 4-inch shredder machine blades capable of continuous processing up to 2000 kg/hr in industrial grinding setups."
  },
  {
    "code": "KSG-502",
    "name": "Stainless Steel Grinder Blades",
    "category": "Grinder Blades",
    "slug": "stainless-steel-grinder-blades",
    "image": "/products/indiamart-2850047409355.jpg",
    "price": 2500,
    "moq": "1 Piece",
    "specs": [
      [
        "Size (Length)",
        "8 inch"
      ],
      [
        "Usage",
        "Metal Grinding"
      ],
      [
        "Material",
        "Stainless Steel"
      ]
    ],
    "desc": "8-inch stainless steel industrial grinder blades designed for rigorous metal grinding, recycling crushers, and abrasive material reduction."
  },
  {
    "code": "KSG-503",
    "name": "Plastic Grinder Crusher Blade",
    "category": "Grinder Blades",
    "slug": "plastic-grinder-crusher-blade",
    "image": "/products/indiamart-2850039868588.jpeg",
    "price": 2000,
    "moq": "1 Piece",
    "specs": [
      [
        "Size (Length)",
        "4 inch"
      ],
      [
        "Usage",
        "Plastic Grinding"
      ],
      [
        "Material",
        "Stainless Steel"
      ]
    ],
    "desc": "4-inch plastic grinder crusher blades manufactured from high chromium alloy steel for pulverizing plastics, polymers, and PVC runners."
  },
  {
    "code": "KSG-601",
    "name": "Plastic Recycling Granulator Blade",
    "category": "Granulator Blades",
    "slug": "plastic-recycling-granulator-blade",
    "image": "/products/indiamart-2850047382797.jpeg",
    "price": 550,
    "moq": "1 Piece",
    "specs": [
      [
        "Size (Length)",
        "5 inch"
      ],
      [
        "Usage",
        "For Plastic Granules"
      ],
      [
        "Material",
        "Stainless Steel"
      ]
    ],
    "desc": "Precision 5-inch rotor and bed blades for plastic recycling granulators, converting rejected mouldings into uniform granules."
  },
  {
    "code": "KSG-602",
    "name": "5 Inch Plastic Granulator Blades",
    "category": "Granulator Blades",
    "slug": "5-inch-plastic-granulator-blades",
    "image": "/products/indiamart-2850039861455.jpg",
    "price": 2500,
    "moq": "1 Piece",
    "specs": [
      [
        "Size (Length)",
        "5 inch"
      ],
      [
        "Material",
        "Stainless Steel"
      ],
      [
        "Usage",
        "For Plastic Granules"
      ]
    ],
    "desc": "5-inch plastic granulator blades with precision ground cutting angles to minimize dust formation and power consumption."
  },
  {
    "code": "KSG-603",
    "name": "10 Inch Plastic Granulator Blades",
    "category": "Granulator Blades",
    "slug": "10-inch-plastic-granulator-blades",
    "image": "/products/indiamart-2850039856933.jpeg",
    "price": 2500,
    "moq": "1 Piece",
    "specs": [
      [
        "Size (Length)",
        "10 inch"
      ],
      [
        "Usage",
        "For Plastic Granules"
      ],
      [
        "Material",
        "Stainless Steel"
      ]
    ],
    "desc": "10-inch heavy-duty granulator rotor and stator blades designed for centralized granulators handling bottles, lumps, and pipes."
  },
  {
    "code": "KSG-701",
    "name": "Vmc Job Work With Material with 4 axis",
    "category": "VMC Machine Job Work",
    "slug": "vmc-job-work-with-material-with-4-axis",
    "image": "/products/indiamart-2852735040848.jpeg",
    "price": null,
    "moq": "1 Piece",
    "specs": [
      [
        "Material Selection",
        "Aluminum"
      ],
      [
        "Country of Origin",
        "Made in India"
      ],
      [
        "Axis",
        "4-Axis VMC Machining Center"
      ]
    ],
    "desc": "Comprehensive 4-axis VMC machining center job work including raw material procurement, CNC milling, precision boring, and tapping."
  },
  {
    "code": "KSG-702",
    "name": "Vmc Milling Machine Job Work",
    "category": "VMC Machine Job Work",
    "slug": "vmc-milling-machine-job-work",
    "image": "/products/indiamart-2853043337488.jpeg",
    "price": 1000,
    "moq": "1 Hour",
    "specs": [
      [
        "Workpiece Material",
        "Steel / Cast Iron / Aluminium"
      ],
      [
        "MADE IN",
        "INDIA"
      ],
      [
        "Service Unit",
        "Per Hour Machining"
      ]
    ],
    "desc": "Hourly based precision VMC milling machine job work for tooling components, fixture plates, precision dies, and prototype parts."
  },
  {
    "code": "KSG-801",
    "name": "Steel Crusher Blade, For Industrial",
    "category": "Chaff Cutter Blades",
    "slug": "steel-crusher-blade-industrial",
    "image": "/products/indiamart-2851586220048.jpeg",
    "price": 6000,
    "moq": "1 Piece",
    "specs": [
      [
        "Size",
        "4 Inch"
      ],
      [
        "Material",
        "Stainless Steel"
      ],
      [
        "Machine Type",
        "Metal Working Machine"
      ]
    ],
    "desc": "Heavy-duty steel crusher and cutting blades for industrial shredding and agricultural fodder processing machines."
  },
  {
    "code": "KSG-802",
    "name": "Rectangular Chaff Cutter Blade",
    "category": "Chaff Cutter Blades",
    "slug": "rectangular-chaff-cutter-blade",
    "image": "/products/indiamart-2850039864888.jpeg",
    "price": 350,
    "moq": "1 Piece",
    "specs": [
      [
        "Size (Length)",
        "15 mm"
      ],
      [
        "Material",
        "Stainless Steel"
      ],
      [
        "Color",
        "Silver"
      ]
    ],
    "desc": "Precision rectangular chaff cutter blades crafted from high carbon steel for fast fodder chopping and silage preparation."
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export const shredderKnives = {
  title: "Industrial Tools & Machinery",
  intro:
    "Leading Manufacturer of Chipper Knives, Shredder Knives, Tools & Dies, Shredding Machines, Grinder Blades, Granulator Blades, and VMC Job Work from Coimbatore.",
  products: allProducts.slice(0, 8),
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

export interface VideoItem {
  id: string;
  title: string;
  desc: string;
  tag: string;
  src: string;
  badge?: string;
  duration?: string;
  highlights?: string[];
}

export const videos: VideoItem[] = [
  {
    id: "video-1",
    title: "Double Shaft Shredder Machine Live Operation",
    desc: "High-torque dual shaft industrial shredder tearing through tough materials with synchronized heavy-duty cutting teeth.",
    tag: "Machine Demo",
    badge: "Live Trial",
    duration: "Live Demo",
    src: "/videos/video-1.mp4",
    highlights: ["Dual Synchronized Shafts", "High Torque Gearbox", "Continuous Shredding"],
  },
  {
    id: "video-2",
    title: "D2 Shredder Knives & Precision Cutting Test",
    desc: "Operational testing of precision-ground D2 alloy steel knives under heavy mechanical load with uniform output.",
    tag: "Blade Performance",
    badge: "Cutting Test",
    duration: "Factory Test",
    src: "/videos/video-2.mp4",
    highlights: ["D2 / Die Steel Grade", "Wear-Resistant Edges", "Zero Blade Chipping"],
  },
  {
    id: "video-3",
    title: "Workshop Blade Assembly & Inspection",
    desc: "Assembly, shaft balancing, and tolerance checks inside our Coimbatore manufacturing unit before final delivery.",
    tag: "Manufacturing",
    badge: "Factory Tour",
    duration: "Workshop",
    src: "/videos/video-3.mp4",
    highlights: ["Coimbatore Workshop", "Strict Tolerance Check", "Custom Tooth Profiles"],
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
