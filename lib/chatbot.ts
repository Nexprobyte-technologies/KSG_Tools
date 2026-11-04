import {
  company,
  categories,
  factsheet,
  whyUsPoints,
  allProducts,
} from "./data";

export interface Lead {
  name: string;
  phone: string;
  address: string;
  product: string;
  details?: string;
}

export interface BotState {
  mode: "idle" | "capture";
  step:
  | "ask-name"
  | "ask-phone"
  | "ask-address"
  | "ask-product"
  | "ask-details"
  | "done";
  lead: Partial<Lead>;
}

export interface BotReply {
  text: string;
  suggestions: string[];
  next: BotState;
  lead?: Lead;
}

export const INITIAL_STATE: BotState = { mode: "idle", step: "ask-name", lead: {} };

export function buildEnquiryMessage(lead: Lead): string {
  const lines: string[] = [
    "New Enquiry - K.S.G. Tools",
    "",
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    `Address: ${lead.address}`,
    `Product interested in: ${lead.product}`,
  ];
  if (lead.details?.trim()) lines.push(`Requirement details: ${lead.details.trim()}`);
  return lines.join("\n");
}

const LEAD_INTENT = [
  "enquiry",
  "enquire",
  "order",
  "buy",
  "purchase",
  "whatsapp",
  "wa number",
  "send to whatsapp",
  "place order",
  "book",
  "interested",
  "call me",
  "contact me",
  "get a call",
  "call back",
];

const PRODUCT_LABEL = (): string => "Custom Quote on Request";

const SPECS_TEXT = (specs: [string, string][], moq?: string | null): string => {
  const rows = specs.map(([k, v]) => `${k}: ${v}`).join(" · ");
  return moq ? `${rows} · MOQ: ${moq}` : rows;
};

const matchProduct = (q: string) => {
  const qClean = q.toLowerCase();
  for (const p of allProducts) {
    if (
      qClean.includes(p.name.toLowerCase()) ||
      (p.subCategory && qClean.includes(p.subCategory.toLowerCase()))
    ) {
      return p;
    }
  }
  const has = (words: string[]) => words.some((w) => qClean.includes(w));
  if (has(["vmc", "4 axis", "4-axis"])) return allProducts.find((p) => p.slug === "vmc-job-work-with-material-with-4-axis");
  if (has(["press tool", "die manufacturer"])) return allProducts.find((p) => p.slug === "press-tool-die-manufacturer");
  if (has(["moulding die", "moulding dies"])) return allProducts.find((p) => p.slug === "plastic-moulding-dies");
  if (has(["chipper", "wood chipper"])) return allProducts.find((p) => p.slug === "4-inch-stainless-steel-chipper-knife");
  if (has(["chaff", "chaff cutter"])) return allProducts.find((p) => p.slug === "steel-crusher-blade-for-industrial");
  if (has(["granulator"])) return allProducts.find((p) => p.slug === "plastic-recycling-granulator-blade");
  if (has(["shredding machine", "automatic shredder"])) return allProducts.find((p) => p.slug === "metal-shredder-machine");
  if (has(["coconut husk", "coir"])) return allProducts.find((p) => p.slug === "double-shaft-automatic-shredding-machine");
  if (has(["grinder", "plastic crusher"])) return allProducts.find((p) => p.slug === "shredder-machine-blade-for-industrial");
  if (has(["aluminium pattern"])) return allProducts.find((p) => p.slug === "aluminium-pattern-works");
  return null;
};

const CATEGORY_TOPICS: {
  match: string[];
  name: string;
  count: number;
  note: string;
}[] = [
    {
      match: ["granulator"],
      name: "Granulator Blades",
      count: 3,
      note: "Ask for plastic granulator blade sizes and grades.",
    },
    {
      match: ["chipper", "wood chipper"],
      name: "Chipper Knives",
      count: 8,
      note: "Wood chipper and chipper knives available.",
    },
    {
      match: ["chaff"],
      name: "Chaff Cutter Blades",
      count: 2,
      note: "Agricultural chaff cutter blades.",
    },
    {
      match: ["vmc", "job work"],
      name: "VMC Machine Job Work",
      count: 2,
      note: "Precision VMC machining services.",
    },
    {
      match: ["grinder"],
      name: "Grinder Blades",
      count: 3,
      note: "Grinder blades for industrial grinding.",
    },
    {
      match: ["shredding machine", "machine"],
      name: "Shredding Machine",
      count: 13,
      note: "A wide range of shredding machines.",
    },
    { match: ["tool", "dies", "die"], name: "Tools And Dies", count: 8, note: "Industrial tools and dies." },
  ];

function captureReply(
  state: BotState,
  rawInput: string,
  contextProduct?: string
): BotReply {
  const lead = { ...state.lead };
  const step = state.step;
  let nextStep: BotState["step"] = "done";
  let text = "";
  const input = rawInput.trim();

  if (step === "ask-name") {
    lead.name = input.replace(/^(my name is|i am|i'm|name is|this is|its)\s+/i, "");
    nextStep = "ask-phone";
    text = `Thanks, ${lead.name}! What is your phone number?`;
  } else if (step === "ask-phone") {
    const digits = input.replace(/\D/g, "");
    if (digits.length < 6) {
      return {
        text: "That phone number looks too short. Please share a valid 10-digit mobile number.",
        suggestions: [],
        next: state,
      };
    }
    lead.phone = input;
    nextStep = "ask-address";
    text = "Got it. Next, what is your address / location?";
  } else if (step === "ask-address") {
    lead.address = input;
    nextStep = "ask-product";
    text = contextProduct
      ? `Perfect. Which product are you interested in? (You are currently viewing: ${contextProduct})`
      : "Perfect. Which product are you interested in? (e.g. Shredder Knives, Granulator Blades...)";
  } else if (step === "ask-product") {
    lead.product = input || contextProduct || "-";
    nextStep = "ask-details";
    text = "Almost done! Any specific size, quantity, material or requirement details? (type 'none' if not needed)";
  } else {
    lead.details = input.toLowerCase() === "none" ? undefined : input;
    nextStep = "done";
    const complete = lead as Lead;
    text = `All set, ${complete.name}! Here is a summary:\n\nName: ${complete.name}\nPhone: ${complete.phone}\nAddress: ${complete.address}\nProduct: ${complete.product}${complete.details ? `\nDetails: ${complete.details}` : ""
      }\n\nTap "Send to WhatsApp" below and the details will reach our team instantly.`;
  }

  const next: BotState = {
    mode: "capture",
    step: nextStep,
    lead,
  };

  return {
    text,
    suggestions: [],
    next,
    lead: nextStep === "done" ? (lead as Lead) : undefined,
  };
}

export function getBotReply(
  rawInput: string,
  state: BotState = INITIAL_STATE,
  contextProduct?: string
): BotReply {
  const q = rawInput.toLowerCase().replace(/[?.!,\s]+/g, " ").trim();

  // ---- Lead capture flow ----
  if (state.mode === "capture") {
    if (state.step === "done") {
      return {
        text: "Your enquiry has been prepared. Tap the WhatsApp button below to send it. You can also start a fresh enquiry anytime by typing 'enquiry'.",
        suggestions: ["Start new enquiry", "Our products", "Catalogue"],
        next: INITIAL_STATE,
      };
    }
    return captureReply(state, rawInput, contextProduct);
  }

  const isLeadIntent = LEAD_INTENT.some((w) => q.includes(w));
  if (isLeadIntent) {
    const next: BotState = {
      mode: "capture",
      step: "ask-name",
      lead: { product: contextProduct },
    };
    return {
      text: contextProduct
        ? `Great choice! I noticed you are viewing "${contextProduct}". To place your enquiry on WhatsApp, please tell me:\n\n1) Your name?`
        : `Sure! I will collect your details and send them straight to our WhatsApp. Let's begin:\n\n1) Your name?`,
      suggestions: [],
      next,
    };
  }

  // Product specific
  const product = matchProduct(q);
  if (product) {
    const spec = SPECS_TEXT(product.specs, product.moq);
    return {
      text: `*${product.name}*\nSpecification: ${spec}\n\n${product.desc ?? ""}\n\nType 'enquiry' to order this on WhatsApp.`,
      suggestions: ["Order now", "MOQ details", "More products"],
      next: INITIAL_STATE,
    };
  }

  const has = (...words: string[]) => words.some((w) => q.includes(w));

  for (const topic of CATEGORY_TOPICS) {
    if (has(...topic.match)) {
      return {
        text: `${topic.name}: ${topic.count} product${topic.count > 1 ? "s" : ""} available.\n${topic.note}\n\nFor our full product catalogue and quotation, contact our team.`,
        suggestions: ["Download Catalogue", "Shredder Knives", "Send enquiry"],
        next: INITIAL_STATE,
      };
    }
  }

  const hasWord = (...words: string[]) =>
    words.some((word) => new RegExp(`(?:^|[^a-z])${word}(?=$|[^a-z])`, "i").test(q));
  if (hasWord("hi", "hello", "hey", "vanakkam", "namaste", "namaskaram", "good morning", "good afternoon", "good evening")) {
    return {
      text: `Hello! Welcome to ${company.name}, ${company.city}. I can help with products, specifications, catalogue, GST details, payments and shipping. You can also leave your details here and get an instant WhatsApp order enquiry. How can I assist?`,
      suggestions: ["Our products", "Catalogue", "GST details", "Send enquiry"],
      next: INITIAL_STATE,
    };
  }

  if (has("price", "prices", "cost", "rate", "rates", "quote", "quotation", "best price", "cheap")) {
    return {
      text: `All ${company.name} products are custom manufactured to your machine's exact dimensions, hole pitch, and steel grade (AISI D2, HCHCr, Carbide, High Speed Steel). Quotations are tailored based on order quantities and technical drawings.\n\nType 'enquiry' to get an instant direct factory quote on WhatsApp, or download our full PDF catalogue!`,
      suggestions: ["Download Catalogue", "Chipper Knives", "Tools & Dies", "Send enquiry"],
      next: INITIAL_STATE,
    };
  }

  if (has("moq", "minimum order", "order quantity", "bulk", "wholesale")) {
    return {
      text: `Minimum Order Quantity is 100 Piece for most Shredder Knives. We also support wholesale and bulk orders with direct factory supply and timely delivery.`,
      suggestions: ["Catalogue", "Payment modes", "Shipment", "Send enquiry"],
      next: INITIAL_STATE,
    };
  }

  if (has("spec", "specification", "detail", "dimension", "size ", "material", "thickness", "capacity", "technical")) {
    return {
      text: `We can share full specifications for every product. For example, our 10 Inch Double Shaft Shredder Knives:\n\nSize: 10 inch · Material: Stainless Steel · Thickness: 10 mm · Shape: Round · Finishing: Polished · Capacity: 1000 kg/hr\n\nTell me which product you need details for.`,
      suggestions: ["8mm knives", "10 inch knives", "Chicken cutting knives"],
      next: INITIAL_STATE,
    };
  }

  if (has("product", "catalogue", "catalog", "range", "offering", "services", "everything")) {
    const cats = categories.map((c) => `${c.name} (${c.count})`).join(", ");
    return {
      text: `We offer a wide range:\n\n${cats}\n\nAsk me about any range, specifications or catalogue.`,
      suggestions: ["Shredder Knives", "Granulator Blades", "Catalogue"],
      next: INITIAL_STATE,
    };
  }

  if (has("gst", "tax", "gstin", "tin")) {
    return {
      text: `GST No: ${company.gst}\nGST Registration: ${factsheet.gstRegYear}\nLegal Status: ${factsheet.legalStatus}\n\nYou can also ask for our invoices on every order.`,
      suggestions: ["Payment modes", "Bankers", "Contact"],
      next: INITIAL_STATE,
    };
  }

  if (has("pay", "payment", "cash", "upi", "card", "cheque", "dd", "bank transfer", "online")) {
    return {
      text: `We accept the following payment modes:\n\n${factsheet.paymentModes.map((m) => `• ${m}`).join("\n")}`,
      suggestions: ["Shipment", "GST details", "Bankers"],
      next: INITIAL_STATE,
    };
  }

  if (has("ship", "delivery", "courier", "transport", "logistic", "dispatch", "shipping", "freight")) {
    return {
      text: `Shipment Mode: ${factsheet.shipmentMode}.\n\nWe deliver across India by road and assure timely dispatch to meet your production schedule.`,
      suggestions: ["Payment modes", "MOQ details", "Contact"],
      next: INITIAL_STATE,
    };
  }

  if (has("about", "who", "profile", "established", "estd", "found", "history", "story", "since")) {
    return {
      text: `${company.name} was established as a Proprietorship firm in ${company.estd} and is located in ${company.city}, Tamil Nadu.\n\nCEO: ${factsheet.ceo} · Employees: ${factsheet.employees} · Nature of Business: ${factsheet.natureOfBusiness}\n\nWe are a Manufacturer, Wholesaler, Trader and Retailer of industrial cutting tools and shredding machinery.`,
      suggestions: ["Why us?", "Products", "Contact"],
      next: INITIAL_STATE,
    };
  }

  if (has("why", "advantage", "benefit", "quality", "trust", "best", "reliable", "warranty", "guarantee")) {
    return {
      text: `Why our clients choose ${company.name}:\n\n${whyUsPoints.map((p) => `• ${p}`).join("\n")}`,
      suggestions: ["Reviews", "About us", "Catalogue"],
      next: INITIAL_STATE,
    };
  }

  if (has("review", "rating", "testimonial", "feedback", "customers", "trustpilot")) {
    return {
      text: `We hold a rating of ${company.rating} / 5 from ${company.totalRatings} ratings with ${company.response} user satisfaction.\n\nBreakdown: 5★ 60% · 4★ 30% · 3★ 10%`,
      suggestions: ["Why us?", "About us", "Contact"],
      next: INITIAL_STATE,
    };
  }

  if (has("bank", "banker", "account", "nodal")) {
    return {
      text: `Our bankers are:\n\n• ${factsheet.bankers[0]}\n• ${factsheet.bankers[1]}`,
      suggestions: ["GST details", "Payment modes", "Contact"],
      next: INITIAL_STATE,
    };
  }

  if (has("address", "location", "where", "coimbatore", "city", "visit", "reach", "office")) {
    return {
      text: `${company.name} is based in ${company.city}, Tamil Nadu, India.\n\nWe welcome walk-in enquiries and works contract requirements. Call or message us before your visit for quick assistance.`,
      suggestions: ["Contact", "Call Now", "Products"],
      next: INITIAL_STATE,
    };
  }

  if (has("contact", "phone", "number", "mobile", "call", "whatsapp", "email", "mail", "reach")) {
    return {
      text: `You can reach us:\n\nPhone / WhatsApp: ${company.phone}\nEmail: ${company.email}\nLocation: Coimbatore, Tamil Nadu, India\nHours: Mon - Sat, 9 AM - 7 PM\n\nYou can also type 'enquiry' and I will send your order details to our WhatsApp instantly.`,
      suggestions: ["Send enquiry", "Products", "Catalogue"],
      next: INITIAL_STATE,
    };
  }

  if (has("employee", "team", "staff", "people", "workforce", "manpower")) {
    return {
      text: `We are a focused team of up to 10 people backed by experienced professionals ensuring quality and timely delivery.`,
      suggestions: ["Why us?", "About us", "Contact"],
      next: INITIAL_STATE,
    };
  }

  return {
    text: `I'm sorry, I didn't fully understand that. I can help with:\n\n• Our products & specifications\n• Specifications & MOQ\n• GST, payment and shipping\n• About us, reviews and contact details\n\nYou can also type 'enquiry' to place an order on WhatsApp. Try one of the quick options below.`,
    suggestions: ["Our products", "Catalogue", "GST details", "Send enquiry"],
    next: INITIAL_STATE,
  };
}