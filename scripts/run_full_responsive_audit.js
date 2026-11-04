const { chromium } = require('playwright-core');
const fs = require('fs');
const path = require('path');

const VIEWPORTS = [
  // Mobile Portrait
  { category: 'Mobile Portrait', name: 'Mobile-320x568', width: 320, height: 568, isMobile: true },
  { category: 'Mobile Portrait', name: 'Mobile-360x800', width: 360, height: 800, isMobile: true },
  { category: 'Mobile Portrait', name: 'Mobile-375x812', width: 375, height: 812, isMobile: true },
  { category: 'Mobile Portrait', name: 'Mobile-390x844', width: 390, height: 844, isMobile: true },
  { category: 'Mobile Portrait', name: 'Mobile-414x896', width: 414, height: 896, isMobile: true },
  { category: 'Mobile Portrait', name: 'Mobile-430x932', width: 430, height: 932, isMobile: true },
  // Mobile Landscape
  { category: 'Mobile Landscape', name: 'Mobile-568x320-L', width: 568, height: 320, isMobile: true },
  { category: 'Mobile Landscape', name: 'Mobile-844x390-L', width: 844, height: 390, isMobile: true },
  // Tablet
  { category: 'Tablet', name: 'Tablet-600x960', width: 600, height: 960, isMobile: true },
  { category: 'Tablet', name: 'Tablet-768x1024', width: 768, height: 1024, isMobile: false },
  { category: 'Tablet', name: 'Tablet-820x1180', width: 820, height: 1180, isMobile: false },
  { category: 'Tablet', name: 'Tablet-1024x768', width: 1024, height: 768, isMobile: false },
  // Laptop & Desktop
  { category: 'Laptop/Desktop', name: 'Laptop-1280x720', width: 1280, height: 720, isMobile: false },
  { category: 'Laptop/Desktop', name: 'Laptop-1366x768', width: 1366, height: 768, isMobile: false },
  { category: 'Laptop/Desktop', name: 'Desktop-1440x900', width: 1440, height: 900, isMobile: false },
  { category: 'Laptop/Desktop', name: 'Desktop-1600x900', width: 1600, height: 900, isMobile: false },
  { category: 'Laptop/Desktop', name: 'Desktop-1920x1080', width: 1920, height: 1080, isMobile: false },
];

const PAGES = [
  { name: 'Home', file: 'index.html' },
  { name: 'About', file: 'about.html' },
  { name: 'Products', file: 'products.html' },
  { name: 'Product-Detail-1', file: 'products/4-inch-stainless-steel-chipper-knife.html' },
  { name: 'Product-Detail-2', file: 'products/10-inch-double-shaft-shredder-knives.html' },
  { name: 'Product-Detail-3', file: 'products/vmc-job-work-with-material-with-4-axis.html' },
  { name: 'Contact', file: 'contact.html' },
  { name: 'Photos-Factory', file: 'photos.html' },
  { name: 'Videos', file: 'videos.html' },
  { name: '404-NotFound', file: '_not-found.html' },
];

async function runAudit() {
  const chunksDir = path.join(__dirname, '..', '.next', 'static', 'chunks');
  let compiledCss = '';
  if (fs.existsSync(chunksDir)) {
    const cssFiles = fs.readdirSync(chunksDir).filter(f => f.endsWith('.css'));
    for (const f of cssFiles) {
      compiledCss += fs.readFileSync(path.join(chunksDir, f), 'utf8') + '\n';
    }
  }
  const globalsCss = fs.readFileSync(path.join(__dirname, '..', 'app', 'globals.css'), 'utf8');
  const fullCss = `${compiledCss}\n${globalsCss}`;

  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const results = [];
  let failCount = 0;
  let totalTests = 0;

  console.log(`========================================================================`);
  console.log(`STARTING RESPONSIVE AUDIT ACROSS ${PAGES.length} PAGES & ${VIEWPORTS.length} VIEWPORTS`);
  console.log(`========================================================================\n`);

  for (const pageInfo of PAGES) {
    const fullHtmlPath = path.join(__dirname, '..', '.next', 'server', 'app', pageInfo.file);
    if (!fs.existsSync(fullHtmlPath)) {
      console.warn(`[WARN] File not found: ${fullHtmlPath}`);
      continue;
    }

    let rawHtml = fs.readFileSync(fullHtmlPath, 'utf8');
    // Inject current full CSS
    let html = rawHtml.replace('</head>', `<style id="injected-audit-css">${fullCss}</style></head>`);

    console.log(`--- Auditing Page: ${pageInfo.name} (${pageInfo.file}) ---`);

    for (const vp of VIEWPORTS) {
      totalTests++;
      const page = await browser.newPage({
        viewport: { width: vp.width, height: vp.height },
        isMobile: vp.isMobile,
        hasTouch: vp.isMobile,
      });

      await page.setContent(html, { waitUntil: 'load' });

      const evaluation = await page.evaluate((vpInfo) => {
        const winWidth = window.innerWidth;
        const docScrollWidth = document.documentElement.scrollWidth;
        const bodyScrollWidth = document.body ? document.body.scrollWidth : 0;
        const maxScroll = Math.max(docScrollWidth, bodyScrollWidth);
        const hasOverflow = maxScroll > winWidth + 1.5;

        // Find elements spilling outside the viewport bounds
        const all = Array.from(document.querySelectorAll('*'));
        const overflowEls = [];
        const smallTouchTargets = [];

        for (const el of all) {
          if (['SCRIPT', 'STYLE', 'META', 'HEAD', 'TITLE', 'NOSCRIPT', 'TEMPLATE'].includes(el.tagName)) continue;
          const r = el.getBoundingClientRect();

          // Check if right bound exceeds viewport
          if (r.width > 0 && r.height > 0 && r.right > winWidth + 1.5) {
            const id = el.id ? `#${el.id}` : '';
            const cls = typeof el.className === 'string' && el.className.trim() ? `.${el.className.trim().split(/\s+/).slice(0, 3).join('.')}` : '';
            overflowEls.push({
              tag: el.tagName.toLowerCase(),
              selector: `${el.tagName.toLowerCase()}${id}${cls}`,
              right: Math.round(r.right),
              width: Math.round(r.width),
              overflow: Math.round(r.right - winWidth),
              textSnippet: (el.innerText || '').slice(0, 35).replace(/\s+/g, ' '),
            });
          }

          // Check interactive touch target sizes (< 44px on mobile viewports)
          if (vpInfo.isMobile && ['BUTTON', 'A', 'INPUT', 'SELECT'].includes(el.tagName)) {
            const style = window.getComputedStyle(el);
            if (style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0') {
              if (r.width > 0 && r.height > 0 && (r.height < 40 || r.width < 40)) {
                // Ignore small inline links inside long paragraphs
                const isInlineParagraphLink = el.tagName === 'A' && el.closest('p, .d, .form-note, .spec-v');
                if (!isInlineParagraphLink) {
                  smallTouchTargets.push({
                    tag: el.tagName.toLowerCase(),
                    selector: `${el.tagName.toLowerCase()}${el.id ? '#' + el.id : ''}${typeof el.className === 'string' && el.className ? '.' + el.className.trim().split(/\s+/)[0] : ''}`,
                    width: Math.round(r.width),
                    height: Math.round(r.height),
                    text: (el.innerText || el.getAttribute('aria-label') || '').slice(0, 25),
                  });
                }
              }
            }
          }
        }

        // Navigation state checks
        const navbar = document.querySelector('.navbar');
        const burger = document.querySelector('.burger');
        const navLinks = document.querySelector('.nav-links');

        let burgerVisible = false;
        let navLinksVisible = false;
        if (burger) {
          const bStyle = window.getComputedStyle(burger);
          burgerVisible = bStyle.display !== 'none' && bStyle.visibility !== 'hidden';
        }
        if (navLinks) {
          const nStyle = window.getComputedStyle(navLinks);
          navLinksVisible = nStyle.display !== 'none' && nStyle.visibility !== 'hidden';
        }

        // Navbar sanity: on mobile/tablet (<= 1100px), burger should be visible and desktop links hidden
        let navAnomaly = null;
        if (winWidth <= 1100) {
          if (!burgerVisible) navAnomaly = 'Burger button is NOT visible at <= 1100px';
          if (navLinksVisible) navAnomaly = 'Desktop nav-links are STILL visible at <= 1100px';
        } else {
          if (burgerVisible) navAnomaly = 'Burger button is visible at > 1100px';
          if (!navLinksVisible) navAnomaly = 'Desktop nav-links are NOT visible at > 1100px';
        }

        return {
          winWidth,
          maxScroll,
          hasOverflow,
          overflowAmount: Math.max(0, maxScroll - winWidth),
          overflowEls: overflowEls.slice(0, 8),
          smallTouchTargetsCount: smallTouchTargets.length,
          smallTouchTargetsSample: smallTouchTargets.slice(0, 5),
          navAnomaly,
        };
      }, vp);

      const passed = !evaluation.hasOverflow && !evaluation.navAnomaly;
      if (!passed) failCount++;

      const statusSymbol = passed ? '  [PASS]' : '>>[FAIL]';
      const overflowDetails = evaluation.hasOverflow
        ? ` | OVERFLOW +${evaluation.overflowAmount}px (${evaluation.overflowEls.map(e => e.selector).slice(0, 3).join(', ')})`
        : '';
      const navDetails = evaluation.navAnomaly ? ` | NAV: ${evaluation.navAnomaly}` : '';
      const touchDetails = evaluation.smallTouchTargetsCount > 0 ? ` | TouchTargets<40px: ${evaluation.smallTouchTargetsCount}` : '';

      console.log(`${statusSymbol} ${vp.name.padEnd(20)}: ${passed ? 'OK' : 'ISSUES'}${overflowDetails}${navDetails}${touchDetails}`);

      results.push({
        page: pageInfo.name,
        file: pageInfo.file,
        viewport: vp.name,
        width: vp.width,
        height: vp.height,
        passed,
        ...evaluation,
      });

      await page.close();
    }
    console.log('');
  }

  await browser.close();

  const reportPath = path.join(__dirname, '..', 'artifacts', 'full_responsive_audit_report.json');
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2), 'utf8');

  console.log(`========================================================================`);
  console.log(`AUDIT COMPLETE: Tested ${totalTests} viewport/page combinations.`);
  console.log(`Passed: ${totalTests - failCount} | Failed: ${failCount}`);
  console.log(`Report written to: ${reportPath}`);
  console.log(`========================================================================\n`);

  return { totalTests, failCount, results };
}

runAudit().catch(console.error);
