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
    "count": 6
  },
  {
    "name": "Tools And Dies",
    "count": 8
  },
  {
    "name": "Shredding Machine",
    "count": 3
  },
  {
    "name": "Grinder Blades",
    "count": 4
  },
  {
    "name": "Granulator Blades",
    "count": 3
  },
  {
    "name": "VMC Machine Job Work",
    "count": 3
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
    "image": "/products/chipper-4inch-ss.jpg",
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
        "Usage/Application",
        "Wood Chipping & Industrial"
      ],
      [
        "Hardness",
        "58-60 HRC"
      ],
      [
        "Edge Type",
        "Double Bevel Precision Ground"
      ]
    ],
    "desc": "Industrial 4-inch stainless steel chipper knives with double-beveled precision ground edges. Designed for high-speed wood chipping, paper mills, and timber yards."
  },
  {
    "code": "KSG-202",
    "name": "2 Slot Wood Chipper Knives",
    "category": "Chipper Knives",
    "slug": "2-slot-wood-chipper-knives",
    "image": "/products/chipper-2slot-wood.jpg",
    "price": 500,
    "moq": "1 Piece",
    "specs": [
      [
        "Number of Slots",
        "2 Slots"
      ],
      [
        "Material",
        "High Carbon Die Steel"
      ],
      [
        "Usage/Application",
        "Wood Chipper Machine"
      ],
      [
        "Finishing",
        "Precision Ground Finish"
      ]
    ],
    "desc": "Precision 2-slot wood chipper knives providing secure bolt clamping and vibration-free chipping of hard timber, bamboo, and saw mill logs."
  },
  {
    "code": "KSG-203",
    "name": "Stainless Steel Chipper Knives",
    "category": "Chipper Knives",
    "slug": "stainless-steel-chipper-knives",
    "image": "/products/chipper-ss.jpg",
    "price": 650,
    "moq": "1 Piece",
    "specs": [
      [
        "Material",
        "Stainless Steel (SS)"
      ],
      [
        "Usage/Application",
        "Industrial Wood & Timber Chipper"
      ],
      [
        "Thickness",
        "8 mm"
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
    "image": "/products/chipper-10inch-agri.jpg",
    "price": 650,
    "moq": "1 Piece",
    "specs": [
      [
        "Length",
        "10 Inch"
      ],
      [
        "Usage/Application",
        "Agricultural Chipping Machine"
      ],
      [
        "Blade Material",
        "Alloy Die Steel"
      ],
      [
        "Finishing",
        "Anti-Rust Oil Coated"
      ]
    ],
    "desc": "Heavy-duty 10-inch agricultural chipper blades designed for field shredders and tractor-driven chippers to process farm residues and woody brush."
  },
  {
    "code": "KSG-205",
    "name": "4 Inch Wood Chipper Knives",
    "category": "Chipper Knives",
    "slug": "4-inch-wood-chipper-knives",
    "image": "/products/chipper-wood-cutting.jpg",
    "price": 450,
    "moq": "1 Piece",
    "specs": [
      [
        "Size",
        "4 Inch"
      ],
      [
        "Material",
        "High Grade Alloy Steel"
      ],
      [
        "Hardness",
        "56-58 HRC"
      ],
      [
        "Machine Compatibility",
        "Industrial Wood Chippers"
      ]
    ],
    "desc": "Compact 4-inch wood cutting chipper knives manufactured from high grade alloy steel with 56-58 HRC hardness for consistent cutting performance."
  },
  {
    "code": "KSG-206",
    "name": "Garden Shredder Chipper Knives",
    "category": "Chipper Knives",
    "slug": "garden-shredder-chipper-knives",
    "image": "/products/chipper-agri-cutting.jpg",
    "price": 350,
    "moq": "1 Piece",
    "specs": [
      [
        "Usage/Application",
        "Garden & Horticulture Shredders"
      ],
      [
        "Material",
        "Tempered Tool Steel"
      ],
      [
        "Thickness",
        "5 mm"
      ],
      [
        "Edge",
        "Reversible Dual Edge"
      ]
    ],
    "desc": "Double-edged reversible garden shredder knives for pruning chippers and compost shredders. Tempered for shock resistance against tough twigs and roots."
  },
  {
    "code": "KSG-301",
    "name": "Press Tool Die Manufacturer",
    "category": "Tools And Dies",
    "slug": "press-tool-die-manufacturer",
    "image": "/products/dies-press-tool.jpg",
    "price": 5000,
    "moq": "1 Piece",
    "specs": [
      [
        "Die Type",
        "Press Tool Die"
      ],
      [
        "Material",
        "D2 / High Speed Tool Steel"
      ],
      [
        "Application",
        "Sheet Metal Stamping & Blanking"
      ],
      [
        "Precision",
        "High Accuracy Tolerance (±0.01 mm)"
      ]
    ],
    "desc": "Custom engineered press tool dies for sheet metal stamping, punching, bending, and blanking. Manufactured using high-speed D2 tool steel in Coimbatore."
  },
  {
    "code": "KSG-302",
    "name": "Plastic Moulding Dies",
    "category": "Tools And Dies",
    "slug": "plastic-moulding-dies",
    "image": "/products/dies-plastic-moulding.jpg",
    "price": 10000,
    "moq": "1 Piece",
    "specs": [
      [
        "Mould Type",
        "Injection Moulding Die"
      ],
      [
        "Material",
        "P20 / H13 Steel"
      ],
      [
        "Surface Finish",
        "Mirror Polished / Hard Chrome"
      ],
      [
        "Cooling",
        "Optimized Water Line Channels"
      ]
    ],
    "desc": "Precision plastic injection moulding dies with hardened P20/H13 cavities. Optimized cooling channels and mirror finish for flawless moulded components."
  },
  {
    "code": "KSG-303",
    "name": "Aluminium Pattern Works",
    "category": "Tools And Dies",
    "slug": "aluminium-pattern-works",
    "image": "/products/dies-aluminium-pattern.jpg",
    "price": 5000,
    "moq": "1 Piece",
    "specs": [
      [
        "Material",
        "Cast Aluminium Alloy"
      ],
      [
        "Application",
        "Foundry Casting & Core Box"
      ],
      [
        "Pattern Type",
        "Match Plate & Gated Patterns"
      ],
      [
        "Durability",
        "Long Production Life"
      ]
    ],
    "desc": "High precision cast aluminium patterns, core boxes, and match plates for industrial foundries. Dimensionally stable for repetitive sand casting runs."
  },
  {
    "code": "KSG-304",
    "name": "Rubber Moulding Dies",
    "category": "Tools And Dies",
    "slug": "rubber-moulding-dies",
    "image": "/products/dies-rubber-moulding.jpg",
    "price": null,
    "specs": [
      [
        "Die Type",
        "Rubber Compression & Transfer Mould"
      ],
      [
        "Material",
        "Forged Tool Steel"
      ],
      [
        "Hardness",
        "50-54 HRC"
      ],
      [
        "Application",
        "O-Rings, Seals, Gaskets & Bushes"
      ]
    ],
    "desc": "High-temperature compression and transfer rubber moulding dies for manufacturing O-rings, industrial gaskets, vibration pads, and custom rubber bushes."
  },
  {
    "code": "KSG-305",
    "name": "Metal Dies Pattern",
    "category": "Tools And Dies",
    "slug": "metal-dies-pattern",
    "image": "/products/dies-metal-pattern.jpg",
    "price": 8000,
    "moq": "1 Piece",
    "specs": [
      [
        "Material",
        "Alloy Steel / EN Series"
      ],
      [
        "Application",
        "Industrial Tooling & Casting"
      ],
      [
        "Machining",
        "4-Axis VMC Machined"
      ]
    ],
    "desc": "Heavy-duty CNC/VMC machined metal die patterns for metal stamping, drop forging, and casting tooling with high wear resistance."
  },
  {
    "code": "KSG-306",
    "name": "Can Die & Forming Tools",
    "category": "Tools And Dies",
    "slug": "can-die-forming-tools",
    "image": "/products/dies-can-die.jpg",
    "price": 12000,
    "specs": [
      [
        "Application",
        "Metal Can & Flange Forming"
      ],
      [
        "Tool Set",
        "Hardened Punch & Die Assembly"
      ],
      [
        "Material Grade",
        "D2 / Tungsten Carbide Inserts"
      ],
      [
        "Tolerance",
        "±0.005 mm"
      ]
    ],
    "desc": "Precision hardened punch and die tooling assemblies for sheet metal can making, deep drawing, bottom forming, and container flanging."
  },
  {
    "code": "KSG-307",
    "name": "Progressive Die Tools",
    "category": "Tools And Dies",
    "slug": "progressive-die-tools",
    "image": "/products/dies-progressive.jpg",
    "price": 15000,
    "specs": [
      [
        "Type",
        "Multi-Station Progressive Tooling"
      ],
      [
        "Stamping Speed",
        "High Speed Continuous Stamping"
      ],
      [
        "Steel Grade",
        "D2 / SKD11 / Carbide"
      ]
    ],
    "desc": "Multi-station high speed progressive stamping dies for automated mass manufacturing of electrical terminals, brackets, and automotive stampings."
  },
  {
    "code": "KSG-308",
    "name": "Precision Moulds & Die Sets",
    "category": "Tools And Dies",
    "slug": "precision-moulds-and-die-sets",
    "image": "/products/dies-precision-moulds.jpg",
    "price": null,
    "specs": [
      [
        "Product Type",
        "Die Sets & Precision Mould Bases"
      ],
      [
        "Guide Pillar",
        "Hardened Ground Guide Pillars"
      ],
      [
        "Usage",
        "Stamping, Forming & Moulding"
      ]
    ],
    "desc": "Standard and custom four-pillar die sets with hardened and ground guide pillars ensuring perfect alignment and zero deflection during stamping."
  },
  {
    "code": "KSG-401",
    "name": "Double Shaft Automatic Shredding Machine",
    "category": "Shredding Machine",
    "slug": "double-shaft-automatic-shredding-machine",
    "image": "/products/shredder-double-shaft.jpg",
    "price": null,
    "specs": [
      [
        "Machine Type",
        "Dual Shaft Industrial Shredder"
      ],
      [
        "Automation Grade",
        "Automatic PLC Controlled"
      ],
      [
        "Capacity",
        "500 - 2000 kg/hr"
      ],
      [
        "Motor Power",
        "10 HP - 50 HP Heavy Duty"
      ],
      [
        "Materials Shredded",
        "Plastic, Rubber, E-Waste, Timber, Drums"
      ]
    ],
    "desc": "Heavy-duty dual shaft industrial shredder machine built in Coimbatore with high-torque reduction gearbox. Shreds plastic barrels, tires, e-waste, and timber pallets."
  },
  {
    "code": "KSG-402",
    "name": "Agricultural Shredder Machine In Coimbatore",
    "category": "Shredding Machine",
    "slug": "agricultural-shredder-machine",
    "image": "/products/shredder-auto-machine.jpg",
    "price": null,
    "specs": [
      [
        "Usage/Application",
        "Agro Waste, Crops & Branch Shredding"
      ],
      [
        "Drive Type",
        "Electric Motor / Tractor PTO Driven"
      ],
      [
        "Capacity",
        "500 - 1000 kg/hr"
      ],
      [
        "Blades",
        "Reversible Heat-Treated Alloy Steel"
      ]
    ],
    "desc": "PTO and electric motor operated agricultural shredding machine for chopping organic farm residues, banana stems, and pruned branches into bio-mulch."
  },
  {
    "code": "KSG-403",
    "name": "Mild Steel Coconut Husk Shredder Machine",
    "category": "Shredding Machine",
    "slug": "coconut-husk-shredder-machine",
    "image": "/products/shredder-coconut-husk.jpg",
    "price": null,
    "specs": [
      [
        "Body Material",
        "Mild Steel Heavy Duty Fabricated"
      ],
      [
        "Application",
        "Coconut Husk & Coir Defibering"
      ],
      [
        "Output Form",
        "Shredded Fiber & Coir Pith"
      ],
      [
        "Feeding",
        "Continuous Conveyor / Chute"
      ]
    ],
    "desc": "Continuous-feed coconut husk and coir shredder machine manufactured with heavy mild steel framework and hardened tearing teeth for coir mills."
  },
  {
    "code": "KSG-501",
    "name": "Shredder Machine Blade, For Industrial",
    "category": "Grinder Blades",
    "slug": "shredder-machine-blade-industrial",
    "image": "/products/grinder-blades-heavy.jpg",
    "price": 3000,
    "moq": "1 Piece",
    "specs": [
      [
        "Usage/Application",
        "Industrial Grinder / Shredder"
      ],
      [
        "Material",
        "D2 Alloy Steel"
      ],
      [
        "Hardness",
        "58-60 HRC"
      ],
      [
        "Finish",
        "Fine Ground Surface"
      ]
    ],
    "desc": "Wear-resistant D2 alloy steel industrial grinder blades with precision ground cutting bevels for high-throughput scrap reduction machinery."
  },
  {
    "code": "KSG-502",
    "name": "Stainless Steel Grinder Blades",
    "category": "Grinder Blades",
    "slug": "stainless-steel-grinder-blades",
    "image": "/products/grinder-blades-ss.jpg",
    "price": 2500,
    "moq": "1 Piece",
    "specs": [
      [
        "Material",
        "Stainless Steel (SS 304/420)"
      ],
      [
        "Application",
        "Chemical, Food & Plastic Grinding"
      ],
      [
        "Thickness",
        "8 - 12 mm"
      ],
      [
        "Corrosion Resistance",
        "Yes"
      ]
    ],
    "desc": "Corrosion-resistant stainless steel grinder blades providing contamination-free grinding for pharmaceuticals, food processing, and chemical polymers."
  },
  {
    "code": "KSG-503",
    "name": "Plastic Grinder Crusher Blade",
    "category": "Grinder Blades",
    "slug": "plastic-grinder-crusher-blade",
    "image": "/products/grinder-plastic-crusher.jpg",
    "price": 2000,
    "moq": "1 Piece",
    "specs": [
      [
        "Usage/Application",
        "Plastic Scrap Grinders & Crushers"
      ],
      [
        "Blade Type",
        "Rotating & Stationary Blades"
      ],
      [
        "Material",
        "Die Steel D2 / High Speed Steel"
      ]
    ],
    "desc": "Shock-resistant plastic crusher blades manufactured to cut blow molded bottles, injection runners, PVC profiles, and heavy polymer lumps without dulling."
  },
  {
    "code": "KSG-504",
    "name": "Heavy Duty Plastic Grinder Blades (Set)",
    "category": "Grinder Blades",
    "slug": "heavy-duty-plastic-grinder-blades",
    "image": "/products/grinder-plastic-blades-1.jpg",
    "price": 2200,
    "moq": "1 Set",
    "specs": [
      [
        "Set Configuration",
        "Rotor & Bed Knives Matched Set"
      ],
      [
        "Material",
        "Hardened High Alloy Tool Steel"
      ],
      [
        "Impact Strength",
        "Shock Resistant Edge"
      ]
    ],
    "desc": "Matched rotor and stator grinder knife sets machined to tight tolerances for uniform clearance, reduced power consumption, and longer blade life."
  },
  {
    "code": "KSG-601",
    "name": "Plastic Recycling Granulator Blade",
    "category": "Granulator Blades",
    "slug": "plastic-recycling-granulator-blade",
    "image": "/products/granulator-recycling-blade.jpg",
    "price": 550,
    "moq": "1 Piece",
    "specs": [
      [
        "Application",
        "Plastic Film, PET Bottle & Scrap Granulators"
      ],
      [
        "Material",
        "D2 / D3 Tool Steel"
      ],
      [
        "Hardness",
        "58 HRC"
      ],
      [
        "Blade Profile",
        "Beveled Shear Cutting Edge"
      ]
    ],
    "desc": "High-speed D2/D3 granulator blades designed for clean scissor-action cutting of plastic films, woven bags, and PET flakes with minimal fines."
  },
  {
    "code": "KSG-602",
    "name": "5 Inch Plastic Granulator Blades",
    "category": "Granulator Blades",
    "slug": "5-inch-plastic-granulator-blades",
    "image": "/products/granulator-recycling-blade.jpg",
    "price": 2500,
    "moq": "1 Piece",
    "specs": [
      [
        "Size",
        "5 Inch"
      ],
      [
        "Usage/Application",
        "Compact & Central Plastic Granulators"
      ],
      [
        "Material",
        "D2 Premium Die Steel"
      ],
      [
        "Mounting",
        "Precision Drilled & Counterbored"
      ]
    ],
    "desc": "Precision 5-inch granulator rotor and stationary blades engineered for beside-the-press grinders and sprue recovery units in moulding plants."
  },
  {
    "code": "KSG-603",
    "name": "10 Inch Plastic Granulator Blades",
    "category": "Granulator Blades",
    "slug": "10-inch-plastic-granulator-blades",
    "image": "/products/granulator-recycling-blade.jpg",
    "price": 2500,
    "moq": "1 Piece",
    "specs": [
      [
        "Size",
        "10 Inch"
      ],
      [
        "Application",
        "Heavy Plastic Pipe, Profile & Drum Granulation"
      ],
      [
        "Material Grade",
        "D2 Alloy Steel Vacuum Hardened"
      ]
    ],
    "desc": "Heavy-duty 10-inch granulator knives built for central granulators processing rigid PVC pipes, automotive bumpers, and rotational moulding scrap."
  },
  {
    "code": "KSG-701",
    "name": "VMC Job Work With Material with 4 axis",
    "category": "VMC Machine Job Work",
    "slug": "vmc-job-work-with-material-with-4-axis",
    "image": "/products/vmc-job-work-4axis.jpg",
    "price": null,
    "specs": [
      [
        "Axis Capability",
        "4-Axis Vertical Machining Center (VMC)"
      ],
      [
        "Material Included",
        "Die Steel, SS, Aluminium, Cast Iron, Brass"
      ],
      [
        "Accuracy Tolerance",
        "±0.005 mm"
      ],
      [
        "Services Offered",
        "Custom Tooling, Machined Parts, Mould Bases"
      ],
      [
        "Location",
        "Coimbatore, Tamil Nadu"
      ]
    ],
    "desc": "High-precision 4-axis VMC machining job work with raw material supply in Coimbatore. Capable of complex 3D contouring, deep cavity milling, and ±0.005mm tolerances."
  },
  {
    "code": "KSG-702",
    "name": "VMC Milling Machine Job Work",
    "category": "VMC Machine Job Work",
    "slug": "vmc-milling-machine-job-work",
    "image": "/products/vmc-milling-work.jpg",
    "price": 1000,
    "moq": "1 Hour",
    "specs": [
      [
        "Service Type",
        "Hourly / Contract VMC Milling Job Work"
      ],
      [
        "Machining Operations",
        "Face Milling, End Milling, Drilling, Tapping, Boring"
      ],
      [
        "Quality Check",
        "Coordinate & Height Gauge Verified"
      ]
    ],
    "desc": "Hourly and contract-based VMC milling, drilling, boring, and tapping services. Equipped with high-speed spindles and modern tooling for fast cycle times."
  },
  {
    "code": "KSG-703",
    "name": "Precision Machined CNC/VMC Components",
    "category": "VMC Machine Job Work",
    "slug": "precision-machined-vmc-components",
    "image": "/products/vmc-job-work-material.jpg",
    "price": null,
    "specs": [
      [
        "Components",
        "Custom Shafts, Blade Holders, Fixtures, Tooling Parts"
      ],
      [
        "Finishing",
        "Electroless Nickel, Black Oxide, Ground"
      ],
      [
        "Batch Size",
        "Prototype to High-Volume Production"
      ]
    ],
    "desc": "Custom precision machining of machinery components, specialized shafts, blade holders, and tooling fixtures according to 2D/3D client drawings."
  },
  {
    "code": "KSG-801",
    "name": "Rectangular Chaff Cutter Blade",
    "category": "Chaff Cutter Blades",
    "slug": "rectangular-chaff-cutter-blade",
    "image": "/products/chaff-cutter-rectangular.jpg",
    "price": 350,
    "moq": "100 Piece",
    "specs": [
      [
        "Shape",
        "Rectangular Flat Blade"
      ],
      [
        "Material",
        "High Carbon Spring / Die Steel"
      ],
      [
        "Usage/Application",
        "Chaff Cutter & Agricultural Fodder Cutting"
      ],
      [
        "Hardness",
        "54-56 HRC"
      ],
      [
        "Cutting Edge",
        "Precision Beveled"
      ]
    ],
    "desc": "Hardened high-carbon rectangular chaff cutter blades for green fodder, corn stalks, and silage cutters. Heat treated for extended edge sharpness."
  },
  {
    "code": "KSG-802",
    "name": "Steel Crusher Blade, For Industrial",
    "category": "Chaff Cutter Blades",
    "slug": "steel-crusher-blade-industrial",
    "image": "/products/chipper-4inch-ss.jpg",
    "price": 6000,
    "moq": "1 Piece",
    "specs": [
      [
        "Usage/Application",
        "Industrial Crusher & Heavy Fodder Machinery"
      ],
      [
        "Material",
        "Special Hardened Die Steel"
      ],
      [
        "Thickness",
        "12 mm"
      ],
      [
        "Durability",
        "Shock Resistant for Continuous Heavy Loads"
      ]
    ],
    "desc": "Extra-thick 12mm industrial steel crusher and cutter blade built for heavy agricultural fodder shredders, biomass crushers, and wood chippers."
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export const shredderKnives = {
  title: "Industrial Tools & Machinery",
  intro:
    "Leading Manufacturer of Chipper Knives, Tools & Dies, Shredding Machines, Grinder Blades, Granulator Blades, and VMC Job Work from Coimbatore.",
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