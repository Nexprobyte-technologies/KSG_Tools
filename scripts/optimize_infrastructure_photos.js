const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const srcDir = 'C:/Users/JEEVAA M M/Downloads/WhatsApp Unknown 2026-11-04 at 12.17.37 PM';
const destDir = path.join(__dirname, '../public/infrastructure');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Mapping of selected unique high-value photos with professional semantic names
const imagePlan = [
  {
    src: 'WhatsApp Image 2026-11-04 at 10.36.54 AM (2).jpeg',
    outBase: 'feeler-vmp-45a-machining-center',
    title: 'FEELER VMP-45A Vertical Machining Center',
    category: 'VMC Machinery',
    model: 'FEELER VMP-45A',
    manufacturer: 'FEELER / Fair Friend Group (FFG)',
    specs: 'Table 1200x600mm | X: 1100mm, Y: 610mm, Z: 600mm | BT40 / 10,000 RPM Spindle | High-Rigidity Column',
    desc: 'Heavy-duty high-speed vertical machining center engineered for precision milling, die cavity profiling, and large component manufacturing with rigid box guideways.'
  },
  {
    src: 'WhatsApp Image 2026-11-04 at 10.36.57 AM (1).jpeg',
    outBase: 'feeler-vmp-40a-cnc-machine',
    title: 'FEELER VMP-40A CNC Vertical Machining Center',
    category: 'VMC Machinery',
    model: 'FEELER VMP-40A',
    manufacturer: 'FEELER / Fair Friend Group (FFG)',
    specs: 'Table 1150x520mm | X: 1020mm, Y: 520mm, Z: 505mm | 4th Axis Rotary Ready | High Torque BT40 Spindle',
    desc: 'Precision CNC machining center utilized for manufacturing precision components, dual-shaft shredder cutters, knife pockets, and 4th-axis indexing operations.'
  },
  {
    src: 'WhatsApp Image 2026-11-04 at 10.36.53 AM.jpeg',
    outBase: 'feeler-vmp-40a-controller-spindle',
    title: 'FEELER VMP-40A CNC Controller & Spindle Head',
    category: 'Control & Spindle',
    model: 'VMP-40A Control Pendant',
    manufacturer: 'FEELER / FFG',
    specs: 'Multi-Axis CNC Control Pendant | Direct Spindle Coolant Delivery | Tooling Fixture Bed',
    desc: 'Detailed view of the digital CNC operator control pendant, programmable feed controls, spindle tooling interface, and multi-nozzle cutting fluid system.'
  },
  {
    src: 'WhatsApp Image 2026-11-04 at 10.36.58 AM.jpeg',
    outBase: 'vmc-internal-machining-chamber',
    title: 'High-Precision Machining Chamber & Clamping Fixture',
    category: 'Machining Setup',
    model: 'VMC Internal Work Envelope',
    manufacturer: 'FEELER Industrial VMC',
    specs: 'Precision Ground T-Slot Bed | Heavy Clamping Fixture | ATC Arm & Telescopic Stainless Bellows',
    desc: 'Interior machining chamber showcasing rigid workholding clamping, telescopic way covers, and automatic tool changer interface for vibration-free production.'
  },
  {
    src: 'WhatsApp Image 2026-11-04 at 10.36.56 AM (1).jpeg',
    outBase: 'cnc-tooling-holders-setup',
    title: 'Precision CNC Tooling, Collet Chucks & Accessories',
    category: 'Tooling & Fixtures',
    model: 'BT-40 / BT-50 Tooling Suite',
    manufacturer: 'Industrial Grade Tooling',
    specs: 'BT40 Tool Holders | ER Collet Chucks | Boring Heads | Heavy Modular Clamping Blocks',
    desc: 'Dedicated tooling workstation equipped with comprehensive BT40 toolholders, end mill adapters, precision collets, and clamping fixtures for versatile machining runs.'
  },
  {
    src: 'WhatsApp Image 2026-11-04 at 10.36.54 AM.jpeg',
    outBase: 'rexan-rotary-screw-compressor',
    title: 'REXAN Rotary Screw Air Compressor',
    category: 'Pneumatics & Power',
    model: 'REXAN Screw Compressor Series',
    manufacturer: 'REXAN Industrial Equipment',
    specs: 'Continuous Industrial Duty | Low-Noise Acoustic Enclosure | Microprocessor PLC Controller | CE Certified',
    desc: 'High-efficiency industrial rotary screw air compressor providing uninterrupted, pulsation-free compressed air for pneumatic workholding and machine tool operation.'
  },
  {
    src: 'WhatsApp Image 2026-11-04 at 10.37.00 AM.jpeg',
    outBase: 'industrial-air-receiver-station',
    title: 'Air Receiver Storage Vessel & Refrigerated Air Dryer',
    category: 'Pneumatics & Power',
    model: 'Vertical Receiver & Air Dryer System',
    manufacturer: 'Industrial Pneumatics',
    specs: 'Vertical Pressure Vessel | Connected Refrigerated Dryer | Pressure Gauge & Safety Relief Valve',
    desc: 'Auxiliary compressed air treatment station ensuring moisture-free, regulated pneumatic supply to protect VMC pneumatic actuators and precision spindles.'
  },
  {
    src: 'WhatsApp Image 2026-11-04 at 10.36.55 AM (1).jpeg',
    outBase: 'vertical-turret-milling-machine',
    title: 'Vertical Turret Milling Machine with Digital Readout (DRO)',
    category: 'Conventional Machining',
    model: 'Knee-Type Turret Milling Machine',
    manufacturer: 'Industrial Precision Milling',
    specs: 'Multi-Axis Digital Readout (DRO) | Motorized X-Axis Power Table Feed | Heavy Duty Milling Vice',
    desc: 'Versatile vertical milling machine utilized for rapid squaring, keyway slotting, edge chamfering, and custom tool room operations with micrometer-level DRO accuracy.'
  },
  {
    src: 'WhatsApp Image 2026-11-04 at 10.36.55 AM (2).jpeg',
    outBase: 'cad-cam-milling-workstation',
    title: 'CAD/CAM Design & Programming Machining Station',
    category: 'Engineering & Production',
    model: 'Shop Floor CAD/CAM Integration',
    manufacturer: 'KSG Tools Workshop',
    specs: 'Direct CNC Program Generation | Toolpath Simulation | Adjacent Turret Milling Unit',
    desc: 'Integrated manufacturing setup linking digital 2D/3D component design, CAM toolpath programming, and physical machining on the shop floor.'
  },
  {
    src: 'WhatsApp Image 2026-11-04 at 10.37.01 AM.jpeg',
    outBase: 'universal-tool-cutter-grinder',
    title: 'Universal Tool & Cutter Grinding Machine',
    category: 'Grinding & Finishing',
    model: 'Universal Tool & Cutter Grinder',
    manufacturer: 'Precision Grinding Machinery',
    specs: 'Universal Swivel Grinding Head | Workhead with Dividing Indexer | Fine Micrometer Infeed Controls',
    desc: 'Specialized grinding unit utilized for resharpening, bevel grinding, and precision edge finishing of industrial chipper knives, granulator blades, and milling cutters.'
  },
  {
    src: 'WhatsApp Image 2026-11-04 at 10.37.02 AM.jpeg',
    outBase: 'industrial-servo-stabilizer-415v',
    title: 'Heavy-Duty 3-Phase Servo Voltage Stabilizer (415V)',
    category: 'Electrical Infrastructure',
    model: 'Oil-Cooled 415V Servo Stabilizer',
    manufacturer: 'ABL Power Systems',
    specs: '415 Volts 3-Phase Balanced Output | Heavy Transformer Oil Cooling Tank | Digital Monitoring Panel',
    desc: 'Dedicated heavy-duty industrial servo stabilizer ensuring constant, surge-free clean electrical supply to safeguard sensitive CNC drives and spindle electronics.'
  },
  {
    src: 'WhatsApp Image 2026-11-04 at 10.37.03 AM.jpeg',
    outBase: 'hydraulic-stacker-2000kg',
    title: '2-Ton (2000 Kg) Heavy-Duty Hydraulic Material Stacker',
    category: 'Material Handling',
    model: '2000 Kgs Hydraulic Fork Stacker',
    manufacturer: 'Industrial Material Handling',
    specs: '2000 Kg (2 Ton) Lifting Capacity | Dual Leaf Safety Lift Chains | Heavy Forged Fork Tines',
    desc: 'Robust hydraulic fork stacker utilized for safe loading, unloading, and staging of heavy raw steel billets, die blocks, and large tooling fixtures across machines.'
  },
  {
    src: 'WhatsApp Image 2026-11-04 at 10.37.05 AM.jpeg',
    outBase: 'ksg-tools-factory-entrance',
    title: 'KSG Tools Official Manufacturing Unit & Facility Entrance',
    category: 'Company Infrastructure',
    model: 'Coimbatore Registered Facility',
    manufacturer: 'K.S.G. Tools',
    specs: 'GSTIN: 33CEYPS0366D2Z6 | Sivanandhapuram, Saravanampatti, Coimbatore - 641035',
    desc: 'The official registered factory outlet and manufacturing plant of K.S.G. Tools in Coimbatore, Tamil Nadu, housing our complete machining and tooling facilities.'
  }
];

// Skipped duplicates log
const skippedDuplicates = [
  {
    file: 'WhatsApp Image 2026-11-04 at 10.36.54 AM (1).jpeg',
    reason: 'Portrait crop duplicate of REXAN Rotary Screw Air Compressor. The landscape version (WhatsApp Image 2026-11-04 at 10.36.54 AM.jpeg) was chosen for superior responsive card framing.'
  },
  {
    file: 'WhatsApp Image 2026-11-04 at 10.36.55 AM.jpeg',
    reason: 'Angled shot of FEELER VMP-40A with cluttered workbench. Replaced by the cleaner front view (feeler-vmp-40a-cnc-machine.jpg) and dedicated tooling shot (cnc-tooling-holders-setup.jpg).'
  },
  {
    file: 'WhatsApp Image 2026-11-04 at 10.36.56 AM.jpeg',
    reason: 'Visually near-identical duplicate shot of FEELER VMP-45A front view. Already represented by feeler-vmp-45a-machining-center.jpg and feeler-vmp-45a-frontal-view.'
  },
  {
    file: 'WhatsApp Image 2026-11-04 at 10.36.57 AM.jpeg',
    reason: 'Exact visual duplicate shot of FEELER VMP-40A front view. Already represented by feeler-vmp-40a-cnc-machine.jpg.'
  },
  {
    file: 'WhatsApp Image 2026-11-04 at 10.36.55 AM (3).jpeg',
    reason: 'Frontal frame of VMP-45A with same angle as Photo 3 / Photo 10. Kept Photo 3 (feeler-vmp-45a-machining-center.jpg) as the premier wide perspective shot.'
  }
];

async function run() {
  console.log(`Starting image enhancement and web optimization for ${imagePlan.length} facility images...`);

  const results = [];

  for (const item of imagePlan) {
    const srcPath = path.join(srcDir, item.src);
    if (!fs.existsSync(srcPath)) {
      console.error(`Source not found: ${srcPath}`);
      continue;
    }

    const outJpg = path.join(destDir, `${item.outBase}.jpg`);
    const outWebp = path.join(destDir, `${item.outBase}.webp`);

    // Process high-resolution master JPG (progressive, normalized, unsharp masked)
    const pipeline = sharp(srcPath)
      .rotate() // auto-orient from EXIF
      .normalize() // optimal exposure and contrast
      .sharpen({ sigma: 1.0, m1: 0.5, m2: 2.0 }); // enhanced crispness of machine labels and edges

    const meta = await sharp(srcPath).metadata();

    // Max 1920px width/height for fast web delivery without quality loss
    let resizeOpts = {};
    if (meta.width > 1920 || meta.height > 1920) {
      if (meta.width >= meta.height) {
        resizeOpts = { width: 1920, fit: 'inside' };
      } else {
        resizeOpts = { height: 1920, fit: 'inside' };
      }
    }

    await pipeline
      .clone()
      .resize(resizeOpts.width ? resizeOpts : undefined)
      .jpeg({ quality: 88, progressive: true, mozjpeg: true })
      .toFile(outJpg);

    await pipeline
      .clone()
      .resize(resizeOpts.width ? resizeOpts : undefined)
      .webp({ quality: 88 })
      .toFile(outWebp);

    const statJpg = fs.statSync(outJpg);
    const statWebp = fs.statSync(outWebp);

    console.log(`✓ Processed: ${item.outBase}.jpg (${Math.round(statJpg.size/1024)}KB) & .webp (${Math.round(statWebp.size/1024)}KB)`);

    results.push({
      ...item,
      img: `/infrastructure/${item.outBase}.jpg`,
      webp: `/infrastructure/${item.outBase}.webp`,
      originalFile: item.src,
      width: meta.width,
      height: meta.height
    });
  }

  // Write catalog data json for easy import
  const outputCatalogPath = path.join(__dirname, '../lib/facility_machinery_data.json');
  fs.writeFileSync(outputCatalogPath, JSON.stringify({
    machinery: results,
    skippedDuplicates
  }, null, 2));

  console.log(`\nSuccessfully exported ${results.length} machine images and facility data to ${outputCatalogPath}`);
}

run().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});

