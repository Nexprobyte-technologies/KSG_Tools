const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright-core');

const { allProducts, categories, company, factsheet, whyUsPoints } = require('../lib/data.ts');

// Helper to escape HTML
function esc(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Convert image file to base64 Data URL for standalone reliable rendering
function getBase64Image(relPath) {
  try {
    const cleanPath = relPath.startsWith('/') ? relPath.slice(1) : relPath;
    const fullPath = path.join(__dirname, '..', 'public', cleanPath);
    if (fs.existsSync(fullPath)) {
      const ext = path.extname(fullPath).toLowerCase();
      const mime = ext === '.png' ? 'image/png' : ext === '.webp' ? 'image/webp' : 'image/jpeg';
      const b64 = fs.readFileSync(fullPath).toString('base64');
      return `data:${mime};base64,${b64}`;
    }
  } catch (err) {
    console.error('Image read failed for:', relPath, err.message);
  }
  return '';
}

// Group products by category preserving original order
const categoryOrder = categories.map(c => c.name);
const productsByCategory = {};
for (const cat of categoryOrder) {
  productsByCategory[cat] = [];
}
// Any product with other category
for (const prod of allProducts) {
  const cat = prod.category || 'Other Industrial Tools';
  if (!productsByCategory[cat]) {
    productsByCategory[cat] = [];
  }
  productsByCategory[cat].push(prod);
}

function generateHtml() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>K.S.G. Tools — Official Industrial Product Catalogue</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 14mm 12mm 16mm 12mm;
      @bottom-right {
        content: counter(page);
      }
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      color: #0f172a;
      background: #ffffff;
      font-size: 11pt;
      line-height: 1.45;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    /* Print page breaks */
    .page-break {
      page-break-before: always;
      break-before: page;
    }

    .avoid-break {
      page-break-inside: avoid;
      break-inside: avoid;
    }

    /* Running Header & Footer simulation */
    .catalog-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 8px;
      margin-bottom: 14px;
      border-bottom: 2px solid #0284c7;
      font-size: 8.5pt;
      color: #64748b;
    }
    .catalog-header strong {
      color: #0f172a;
      font-size: 9.5pt;
    }
    .catalog-header .badge {
      background: #0284c7;
      color: #ffffff;
      padding: 2px 8px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 8pt;
    }

    /* ================= COVER PAGE ================= */
    .cover-page {
      min-height: 255mm;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: linear-gradient(145deg, #090f1d 0%, #0f172a 60%, #1e293b 100%);
      color: #ffffff;
      padding: 28mm 18mm;
      border-radius: 12px;
      position: relative;
      overflow: hidden;
    }
    .cover-page::before {
      content: "";
      position: absolute;
      top: -100px;
      right: -100px;
      width: 400px;
      height: 400px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(2, 132, 199, 0.25) 0%, transparent 70%);
      pointer-events: none;
    }
    .cover-top {
      position: relative;
      z-index: 2;
    }
    .cover-brand {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 28px;
    }
    .cover-mark {
      background: linear-gradient(135deg, #0284c7, #2563eb);
      color: #ffffff;
      font-weight: 900;
      font-size: 26pt;
      padding: 8px 18px;
      border-radius: 10px;
      letter-spacing: 1px;
      box-shadow: 0 8px 24px rgba(2, 132, 199, 0.4);
    }
    .cover-brand-text h1 {
      font-size: 24pt;
      font-weight: 800;
      letter-spacing: -0.5px;
      color: #ffffff;
      line-height: 1.1;
    }
    .cover-brand-text span {
      font-size: 10.5pt;
      color: #38bdf8;
      font-weight: 600;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }
    .cover-title-box {
      margin-top: 40px;
      padding-left: 20px;
      border-left: 6px solid #38bdf8;
    }
    .cover-eyebrow {
      display: inline-block;
      font-size: 10pt;
      color: #f59e0b;
      font-weight: 700;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .cover-main-title {
      font-size: 32pt;
      font-weight: 900;
      line-height: 1.1;
      color: #ffffff;
      margin-bottom: 12px;
    }
    .cover-subtitle {
      font-size: 12pt;
      color: #cbd5e1;
      max-width: 520px;
      line-height: 1.5;
    }

    .cover-stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
      margin-top: 50px;
    }
    .cover-stat-card {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 8px;
      padding: 14px 12px;
      text-align: center;
    }
    .cover-stat-num {
      display: block;
      font-size: 20pt;
      font-weight: 800;
      color: #38bdf8;
      line-height: 1;
      margin-bottom: 4px;
    }
    .cover-stat-label {
      font-size: 8pt;
      color: #94a3b8;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-weight: 600;
    }

    .cover-bottom {
      position: relative;
      z-index: 2;
      border-top: 1px solid rgba(255, 255, 255, 0.15);
      padding-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      font-size: 9pt;
      color: #94a3b8;
    }
    .cover-contact-item {
      margin-bottom: 4px;
    }
    .cover-contact-item strong {
      color: #ffffff;
    }
    .cover-badge-tag {
      background: rgba(56, 189, 248, 0.15);
      border: 1px solid #38bdf8;
      color: #38bdf8;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 9pt;
      font-weight: 700;
      text-align: right;
    }

    /* ================= INDEX / COMPANY PROFILE PAGE ================= */
    .section-title {
      font-size: 18pt;
      font-weight: 800;
      color: #0f172a;
      border-bottom: 3px solid #0284c7;
      padding-bottom: 6px;
      margin-bottom: 16px;
    }
    .intro-block {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 20px;
      font-size: 10pt;
      color: #334155;
    }
    .intro-block p {
      margin-bottom: 8px;
    }
    .intro-block p:last-child {
      margin-bottom: 0;
    }

    .toc-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-bottom: 24px;
    }
    .toc-card {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 14px;
      background: #ffffff;
      border: 1px solid #cbd5e1;
      border-left: 4px solid #0284c7;
      border-radius: 6px;
    }
    .toc-name {
      font-weight: 700;
      font-size: 10.5pt;
      color: #0f172a;
    }
    .toc-count {
      background: #f1f5f9;
      color: #0369a1;
      font-size: 8.5pt;
      font-weight: 700;
      padding: 3px 8px;
      border-radius: 12px;
    }

    .capabilities-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      margin-top: 16px;
    }
    .cap-box {
      border: 1px solid #e2e8f0;
      background: #fafafa;
      padding: 12px;
      border-radius: 6px;
    }
    .cap-box h4 {
      font-size: 9.5pt;
      font-weight: 800;
      color: #0f172a;
      margin-bottom: 6px;
    }
    .cap-box p {
      font-size: 8.5pt;
      color: #64748b;
      line-height: 1.4;
    }

    /* ================= CATEGORY HEADER ================= */
    .cat-divider {
      background: linear-gradient(90deg, #0f172a 0%, #1e293b 100%);
      color: #ffffff;
      padding: 12px 16px;
      border-radius: 8px;
      margin-top: 10px;
      margin-bottom: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .cat-divider h2 {
      font-size: 14pt;
      font-weight: 800;
      color: #ffffff;
      letter-spacing: -0.3px;
    }
    .cat-divider span {
      background: #0284c7;
      color: #ffffff;
      font-size: 8.5pt;
      font-weight: 700;
      padding: 3px 10px;
      border-radius: 12px;
    }

    /* ================= PRODUCT CARD ================= */
    .product-row-card {
      display: block;
      border: 1px solid #e2e8f0;
      border-left: 4px solid #0284c7;
      border-radius: 8px;
      padding: 12px 14px;
      margin-bottom: 11px;
      background: #ffffff;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
    }
    .prod-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .prod-head {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 4px;
    }
    .prod-title {
      font-size: 11pt;
      font-weight: 800;
      color: #0f172a;
      line-height: 1.25;
      margin-right: 8px;
    }
    .prod-badges {
      display: flex;
      gap: 6px;
      flex-shrink: 0;
    }
    .mfg-pill {
      background: #f0f9ff;
      color: #0369a1;
      font-size: 7.5pt;
      font-weight: 700;
      padding: 2px 7px;
      border-radius: 4px;
      border: 1px solid #bae6fd;
    }
    .moq-pill {
      background: #f1f5f9;
      color: #475569;
      font-size: 7.5pt;
      font-weight: 600;
      padding: 2px 6px;
      border-radius: 4px;
      border: 1px solid #e2e8f0;
    }
    .prod-subcat {
      font-size: 8pt;
      color: #0284c7;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.3px;
      margin-bottom: 6px;
    }

    /* Specs table */
    .specs-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 6px;
      font-size: 8pt;
    }
    .specs-table td {
      padding: 2px 6px;
      border-bottom: 1px solid #f1f5f9;
    }
    .specs-table td.k {
      width: 28%;
      color: #64748b;
      font-weight: 600;
    }
    .specs-table td.v {
      width: 72%;
      color: #0f172a;
      font-weight: 600;
    }
    .specs-table tr:nth-child(even) {
      background: #f8fafc;
    }

    .prod-desc-text {
      font-size: 8pt;
      color: #475569;
      line-height: 1.35;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .prod-footer-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 6px;
      padding-top: 6px;
      border-top: 1px dashed #e2e8f0;
      font-size: 7.5pt;
      color: #64748b;
    }
    .prod-footer-meta strong {
      color: #0284c7;
    }

    /* ================= BACK COVER ================= */
    .back-cover {
      min-height: 255mm;
      background: #0f172a;
      color: #ffffff;
      padding: 24mm 18mm;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .back-cover h2 {
      font-size: 24pt;
      font-weight: 800;
      color: #ffffff;
      margin-bottom: 8px;
    }
    .back-cover p.lead {
      font-size: 11pt;
      color: #94a3b8;
      margin-bottom: 24px;
    }
    .back-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-bottom: 30px;
    }
    .back-card {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      padding: 16px;
    }
    .back-card h3 {
      font-size: 11pt;
      font-weight: 700;
      color: #38bdf8;
      margin-bottom: 10px;
    }
    .back-card ul {
      list-style: none;
      font-size: 8.5pt;
      color: #cbd5e1;
    }
    .back-card ul li {
      margin-bottom: 6px;
      padding-left: 14px;
      position: relative;
    }
    .back-card ul li::before {
      content: "✔";
      position: absolute;
      left: 0;
      color: #38bdf8;
      font-size: 8pt;
    }
    .contact-hero-box {
      background: linear-gradient(135deg, #0284c7, #1d4ed8);
      border-radius: 8px;
      padding: 20px;
      text-align: center;
      margin-bottom: 20px;
    }
    .contact-hero-box h3 {
      font-size: 15pt;
      font-weight: 800;
      color: #ffffff;
      margin-bottom: 6px;
    }
    .contact-hero-box p {
      font-size: 10pt;
      color: #e0f2fe;
      margin-bottom: 12px;
    }
    .contact-hero-phone {
      font-size: 18pt;
      font-weight: 900;
      color: #ffffff;
      letter-spacing: 1px;
    }
    .back-footer-notes {
      font-size: 8pt;
      color: #64748b;
      text-align: center;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: 14px;
    }
  </style>
</head>
<body>

  <!-- ==================== PAGE 1: COVER ==================== -->
  <div class="cover-page">
    <div class="cover-top">
      <div class="cover-brand">
        <div class="cover-mark">KSG</div>
        <div class="cover-brand-text">
          <h1>K.S.G. TOOLS</h1>
          <span>Direct Precision Tool Manufacturer · Coimbatore</span>
        </div>
      </div>

      <div class="cover-title-box">
        <span class="cover-eyebrow">Manufacturing Edition</span>
        <h2 class="cover-main-title">PRODUCT<br>CATALOGUE</h2>
        <p class="cover-subtitle">
          Complete verified range of Industrial Shredder Knives, Wood Chipper Blades, Granulator Knives, Press Tool Dies &amp; Custom Industrial Machinery.
        </p>
      </div>

      <div class="cover-stats-grid">
        <div class="cover-stat-card">
          <span class="cover-stat-num">${allProducts.length}</span>
          <span class="cover-stat-label">Industrial Products</span>
        </div>
        <div class="cover-stat-card">
          <span class="cover-stat-num">${categories.length}</span>
          <span class="cover-stat-label">Product Categories</span>
        </div>
        <div class="cover-stat-card">
          <span class="cover-stat-num">${company.years}+</span>
          <span class="cover-stat-label">Years of Toolmaking</span>
        </div>
        <div class="cover-stat-card">
          <span class="cover-stat-num">100%</span>
          <span class="cover-stat-label">In-House Manufacturing</span>
        </div>
      </div>
    </div>

    <div class="cover-bottom">
      <div>
        <div class="cover-contact-item"><strong>Works &amp; Office:</strong> ${esc(company.shortAddress)}</div>
        <div class="cover-contact-item"><strong>Direct Phone / WhatsApp:</strong> ${esc(company.phone)}</div>
        <div class="cover-contact-item"><strong>GST Registration:</strong> ${esc(company.gst)}</div>
      </div>
      <div>
        <div class="cover-badge-tag">ISO / Industry Grade Steel</div>
      </div>
    </div>
  </div>

  <!-- ==================== PAGE 2: TABLE OF CONTENTS & CAPABILITIES ==================== -->
  <div class="page-break"></div>
  <div class="catalog-header">
    <span><strong>K.S.G. Tools</strong> · Official Catalogue</span>
    <span class="badge">Directory &amp; Capabilities</span>
  </div>

  <h2 class="section-title">Product Categories &amp; Overview</h2>

  <div class="intro-block">
    <p>
      <strong>K.S.G. Tools</strong> (Estd. ${company.estd}) is a leading industrial tool manufacturer based in Coimbatore, Tamil Nadu. We specialize in precision-engineered industrial cutting knives, replacement shredder blades, granulator blades, sheet metal press tool dies, and custom-designed shredding machines.
    </p>
    <p>
      All blades are manufactured from premier alloy steels including AISI D2, HCHCr (D3), High Speed Steel (HSS), and EN-31, vacuum hardened and precision ground to 56–62 HRC for maximum wear resistance, edge retention, and impact toughness.
    </p>
  </div>

  <div class="toc-grid">
    ${categories.map(c => `
      <div class="toc-card">
        <span class="toc-name">${esc(c.name)}</span>
        <span class="toc-count">${c.count} Products</span>
      </div>
    `).join('')}
  </div>

  <h2 class="section-title" style="margin-top: 10px;">Engineering &amp; Manufacturing Capabilities</h2>
  <div class="capabilities-grid">
    <div class="cap-box">
      <h4>High-Grade Tool Steels</h4>
      <p>AISI D2, HCHCr D3, EN-31, and carbide-tipped alloys selected for extreme impact resistance and extended cutting lifespan.</p>
    </div>
    <div class="cap-box">
      <h4>Controlled Heat Treatment</h4>
      <p>Precision vacuum furnace hardening and multi-stage tempering achieving uniform 58–62 HRC hardness without surface brittleness.</p>
    </div>
    <div class="cap-box">
      <h4>VMC &amp; CNC Machining</h4>
      <p>4-Axis VMC milling and precision CNC surface grinding ensuring ±0.01mm tolerance on mounting holes and cutting edges.</p>
    </div>
    <div class="cap-box">
      <h4>Dynamic Balancing</h4>
      <p>Individual and gang-balancing of multi-blade shredder assemblies to eliminate machine vibration and premature shaft bearing wear.</p>
    </div>
    <div class="cap-box">
      <h4>Custom Tool Sampling</h4>
      <p>Rapid reverse engineering, sample development, and custom profiling based on physical worn samples or CAD drawings.</p>
    </div>
    <div class="cap-box">
      <h4>All-India Road Dispatch</h4>
      <p>Carefully oiled, rust-proof wrapped, and wooden-pallet packed for safe transit via road transport from Coimbatore across India.</p>
    </div>
  </div>

  <!-- ==================== CATEGORY PAGES & PRODUCTS ==================== -->
  ${categoryOrder.map((catName) => {
    const products = productsByCategory[catName] || [];
    if (products.length === 0) return '';

    return `
      <div class="page-break"></div>
      <div class="catalog-header">
        <span><strong>K.S.G. Tools</strong> · Industrial Catalogue</span>
        <span class="badge">${esc(catName)}</span>
      </div>

      <div class="cat-divider">
        <h2>${esc(catName)}</h2>
        <span>${products.length} Items Listed</span>
      </div>

      <div class="products-list">
        ${products.map((p, idx) => {
          const imgData = getBase64Image(p.image);
          const topSpecs = p.specs.slice(0, 6);

          return `
            <div class="product-row-card avoid-break">
              <div class="prod-content">
                <div>
                  <div class="prod-head">
                    <div class="prod-title">${esc(p.name)}</div>
                    <div class="prod-badges">
                      ${p.moq ? `<span class="moq-pill">MOQ: ${esc(p.moq)}</span>` : ''}
                      <span class="mfg-pill">Direct Workshop</span>
                    </div>
                  </div>
                  <div class="prod-subcat">${esc(p.subCategory || p.category || 'Industrial Tools')}</div>

                  <table class="specs-table">
                    <tbody>
                      ${topSpecs.map(([k, v]) => `
                        <tr>
                          <td class="k">${esc(k)}</td>
                          <td class="v">${esc(v)}</td>
                        </tr>
                      `).join('')}
                    </tbody>
                  </table>

                  ${p.desc ? `<p class="prod-desc-text">${esc(p.desc)}</p>` : ''}
                </div>

                <div class="prod-footer-meta">
                  <span>Direct Factory Supply · <strong>Coimbatore Workshop</strong></span>
                  <span>Custom Sizes, Tolerances &amp; Sampling Supported</span>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }).join('')}

  <!-- ==================== BACK COVER ==================== -->
  <div class="page-break"></div>
  <div class="back-cover">
    <div>
      <div class="catalog-header" style="border-bottom-color: rgba(255,255,255,0.2); color: #94a3b8;">
        <span style="color: #ffffff;"><strong>K.S.G. Tools</strong></span>
        <span class="badge" style="background: #2563eb;">Direct Workshop</span>
      </div>

      <h2>Request a Custom Quote &amp; Technical Drawing</h2>
      <p class="lead">
        We manufacture precision industrial blades, press tool dies, and complete shredder assemblies custom tailored to your machinery and application requirements.
      </p>

      <div class="contact-hero-box">
        <h3>Direct Factory Contact</h3>
        <p>Call or WhatsApp our engineering team with your sample dimensions or drawing:</p>
        <div class="contact-hero-phone">${esc(company.phone)}</div>
      </div>

      <div class="back-grid">
        <div class="back-card">
          <h3>Why Choose K.S.G. Tools?</h3>
          <ul>
            ${whyUsPoints.map(pt => `<li>${esc(pt)}</li>`).join('')}
            <li>Direct factory supply without middlemen or trading markups</li>
            <li>In-house CNC milling, EDM wire-cut, and precision grinding</li>
            <li>Pan-India logistics with secure palletised packaging</li>
          </ul>
        </div>

        <div class="back-card">
          <h3>Works &amp; Business Credentials</h3>
          <ul>
            <li><strong>Proprietor:</strong> ${esc(factsheet.ceo)}</li>
            <li><strong>Legal Status:</strong> ${esc(factsheet.legalStatus)}</li>
            <li><strong>GSTIN:</strong> ${esc(company.gst)}</li>
            <li><strong>GST Reg. Year:</strong> ${esc(factsheet.gstRegYear)}</li>
            <li><strong>Address:</strong> ${esc(company.address)}</li>
            <li><strong>Nature of Business:</strong> Direct Manufacturer</li>
            <li><strong>Shipment:</strong> By Road from Coimbatore across India</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="back-footer-notes">
      <p>© ${new Date().getFullYear()} K.S.G. Tools, Coimbatore. All rights reserved. Specifications subject to custom manufacturing variations.</p>
      <p>Notice: All quotations are tailored to order volume, steel grade, and exact dimensional tolerances. Contact sales for formal proposals.</p>
    </div>
  </div>

</body>
</html>
`;
}

async function run() {
  console.log('Generating HTML catalogue with all', allProducts.length, 'products...');
  const html = generateHtml();
  const htmlPath = path.join(__dirname, '..', 'scratch', 'catalogue.html');
  fs.writeFileSync(htmlPath, html, 'utf8');
  console.log('Saved HTML to', htmlPath);

  console.log('Launching browser to render PDF...');
  const browser = await chromium.launch({ channel: 'chrome' }).catch(() => {
    return chromium.launch({ channel: 'msedge' });
  });

  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'load' });
  // Wait a short moment for images to decode fully
  await page.waitForTimeout(1500);

  const outputPath = path.join(__dirname, '..', 'public', 'ksg-tools-product-catalogue.pdf');
  console.log('Generating PDF to:', outputPath);

  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '12mm',
      bottom: '12mm',
      left: '10mm',
      right: '10mm',
    },
  });

  await browser.close();

  const stats = fs.statSync(outputPath);
  console.log(`Success! PDF Catalogue generated: ${(stats.size / (1024 * 1024)).toFixed(2)} MB`);
}

run().catch((err) => {
  console.error('Error generating PDF:', err);
  process.exit(1);
});
