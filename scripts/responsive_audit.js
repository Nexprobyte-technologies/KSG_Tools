const { chromium } = require('playwright-core');
const fs = require('fs');
const path = require('path');

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
const PHASE = process.argv[2] || 'before'; // 'before' or 'after'
const OUTPUT_DIR = path.join(__dirname, '..', 'artifacts', 'responsive-audit', PHASE);

const VIEWPORTS = [
  // Mobile
  { category: 'Mobile', name: 'Mobile-320x568', width: 320, height: 568, isMobile: true },
  { category: 'Mobile', name: 'Mobile-360x800', width: 360, height: 800, isMobile: true },
  { category: 'Mobile', name: 'Mobile-375x812', width: 375, height: 812, isMobile: true },
  { category: 'Mobile', name: 'Mobile-390x844', width: 390, height: 844, isMobile: true },
  { category: 'Mobile', name: 'Mobile-430x932', width: 430, height: 932, isMobile: true },
  // Tablet
  { category: 'Tablet', name: 'Tablet-600x960', width: 600, height: 960, isMobile: true },
  { category: 'Tablet', name: 'Tablet-768x1024', width: 768, height: 1024, isMobile: false },
  { category: 'Tablet', name: 'Tablet-820x1180', width: 820, height: 1180, isMobile: false },
  { category: 'Tablet', name: 'Tablet-1024x768', width: 1024, height: 768, isMobile: false },
  // Laptop & Desktop
  { category: 'Laptop/Desktop', name: 'Laptop-1280x720', width: 1280, height: 720, isMobile: false },
  { category: 'Laptop/Desktop', name: 'Laptop-1366x768', width: 1366, height: 768, isMobile: false },
  { category: 'Laptop/Desktop', name: 'Desktop-1440x900', width: 1440, height: 900, isMobile: false },
  { category: 'Laptop/Desktop', name: 'Desktop-1920x1080', width: 1920, height: 1080, isMobile: false },
];

const ROUTES = [
  { path: '/', name: 'home' },
  { path: '/products', name: 'products' },
  { path: '/products/4-inch-stainless-steel-chipper-knife', name: 'product-detail' },
  { path: '/about', name: 'about' },
  { path: '/videos', name: 'videos' },
  { path: '/photos', name: 'photos' },
  { path: '/contact', name: 'contact' },
  { path: '/non-existent-page-test', name: 'not-found' },
];

async function runAudit() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  console.log(`Starting Responsive Audit [Phase: ${PHASE}] against ${BASE_URL}...`);
  const browser = await chromium.launch({
    channel: 'chrome',
    headless: true,
  });

  const results = [];
  let totalIssues = 0;

  for (const route of ROUTES) {
    console.log(`\n==========================================`);
    console.log(`Auditing Route: ${route.path} (${route.name})`);
    console.log(`==========================================`);

    for (const vp of VIEWPORTS) {
      const context = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
        isMobile: vp.isMobile,
        hasTouch: vp.isMobile,
      });

      const page = await context.newPage();
      const consoleErrors = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error') consoleErrors.push(msg.text());
      });

      let status = 0;
      let loadError = null;

      try {
        const response = await page.goto(`${BASE_URL}${route.path}`, {
          waitUntil: 'domcontentloaded',
          timeout: 15000,
        });
        await page.waitForTimeout(400);
        status = response ? response.status() : 0;
      } catch (err) {
        loadError = err.message;
      }

      // Check overflow and layout details
      let metrics = null;
      if (!loadError) {
        metrics = await page.evaluate(() => {
          const winWidth = window.innerWidth;
          const scrollWidth = document.documentElement.scrollWidth;
          const bodyScrollWidth = document.body ? document.body.scrollWidth : 0;
          const maxScrollWidth = Math.max(scrollWidth, bodyScrollWidth);
          const hasHorizontalOverflow = maxScrollWidth > winWidth + 1;

          // Find specific elements causing horizontal overflow
          const allEls = Array.from(document.querySelectorAll('*'));
          const overflowEls = [];

          for (const el of allEls) {
            // ignore script, style, meta, head
            if (['SCRIPT', 'STYLE', 'META', 'HEAD', 'TITLE', 'NOSCRIPT'].includes(el.tagName)) continue;
            const r = el.getBoundingClientRect();
            if (r.width > 0 && r.height > 0) {
              if (r.right > winWidth + 2) {
                const id = el.id ? `#${el.id}` : '';
                const classes = typeof el.className === 'string' && el.className.trim() ? `.${el.className.trim().split(/\s+/).slice(0, 3).join('.')}` : '';
                const snippet = (el.innerText || '').slice(0, 30).replace(/\n/g, ' ');
                overflowEls.push({
                  selector: `${el.tagName.toLowerCase()}${id}${classes}`,
                  right: Math.round(r.right),
                  width: Math.round(r.width),
                  winWidth,
                  overflowBy: Math.round(r.right - winWidth),
                  snippet,
                });
              }
            }
          }

          // Check for small touch targets (buttons, links < 36px)
          const interactives = Array.from(document.querySelectorAll('button, a, input, select'));
          const smallTargets = [];
          for (const el of interactives) {
            const r = el.getBoundingClientRect();
            if (r.width > 0 && r.height > 0 && (r.width < 32 || r.height < 32)) {
              // check if visible
              const style = window.getComputedStyle(el);
              if (style.display !== 'none' && style.visibility !== 'hidden') {
                smallTargets.push({
                  tag: el.tagName,
                  text: (el.innerText || el.getAttribute('aria-label') || '').slice(0, 20),
                  width: Math.round(r.width),
                  height: Math.round(r.height),
                });
              }
            }
          }

          return {
            winWidth,
            scrollWidth: maxScrollWidth,
            hasHorizontalOverflow,
            overflowAmount: Math.max(0, maxScrollWidth - winWidth),
            overflowElements: overflowEls.slice(0, 5),
            smallTargetsCount: smallTargets.length,
            smallTargetsSample: smallTargets.slice(0, 3),
          };
        });
      }

      // Check mobile hamburger menu functionality if mobile
      let navMenuTest = null;
      if (vp.width <= 1100 && route.path === '/') {
        try {
          const hamburger = await page.$('.burger');
          if (hamburger) {
            const isVisible = await hamburger.isVisible();
            if (isVisible) {
              await hamburger.click();
              await page.waitForTimeout(300);
              const navLinksOpen = await page.$('.nav-links.open');
              const isOpen = !!navLinksOpen;
              navMenuTest = { tested: true, hamburgerVisible: true, drawerOpens: isOpen };
              // Close it again
              await hamburger.click();
              await page.waitForTimeout(200);
            } else {
              navMenuTest = { tested: true, hamburgerVisible: false };
            }
          }
        } catch (e) {
          navMenuTest = { tested: true, error: e.message };
        }
      }

      const hasIssues = !metrics || metrics.hasHorizontalOverflow || (consoleErrors.length > 0 && status !== 404);
      if (hasIssues) totalIssues++;

      // Take screenshot for representative viewports (360x800, 768x1024, 1440x900) or if overflow detected
      const shouldScreenshot =
        ['Mobile-360x800', 'Mobile-320x568', 'Tablet-768x1024', 'Desktop-1440x900'].includes(vp.name) ||
        (metrics && metrics.hasHorizontalOverflow);

      let screenshotPath = null;
      if (shouldScreenshot) {
        const fileName = `${route.name}_${vp.name}.png`;
        const fullPath = path.join(OUTPUT_DIR, fileName);
        await page.screenshot({ path: fullPath, fullPage: false });
        screenshotPath = `artifacts/responsive-audit/${PHASE}/${fileName}`;
      }

      const result = {
        route: route.path,
        routeName: route.name,
        viewport: vp.name,
        category: vp.category,
        dimensions: `${vp.width}x${vp.height}`,
        status,
        loadError,
        metrics,
        consoleErrors,
        navMenuTest,
        screenshot: screenshotPath,
        passed: metrics ? !metrics.hasHorizontalOverflow : false,
      };

      results.push(result);

      const statusIcon = result.passed ? '✓' : '✗';
      const overflowMsg = metrics && metrics.hasHorizontalOverflow ? ` [OVERFLOW: +${metrics.overflowAmount}px by ${metrics.overflowElements.map(e => e.selector).join(', ')}]` : '';
      console.log(`  ${statusIcon} ${vp.name.padEnd(18)} : ${result.passed ? 'PASS' : 'FAIL'}${overflowMsg}`);

      await context.close();
    }
  }

  await browser.close();

  // Save audit results to JSON
  const reportPath = path.join(OUTPUT_DIR, `audit_summary_${PHASE}.json`);
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2), 'utf-8');
  console.log(`\n==========================================`);
  console.log(`Audit Complete [${PHASE}]. Total tests: ${results.length}. Issues detected: ${totalIssues}`);
  console.log(`Summary saved to: ${reportPath}`);
  console.log(`==========================================`);

  return { results, totalIssues };
}

runAudit().catch(console.error);
