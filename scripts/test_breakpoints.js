const { chromium } = require('playwright-core');

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

const BREAKPOINTS = [
  320, 340, 360, 375, 390, 430, 479, 481, 600, 639, 641, 767, 769, 820, 959, 961, 1023, 1025, 1099, 1101, 1260, 1280, 1366, 1440, 1920
];

const ROUTES = [
  '/',
  '/products',
  '/products/4-inch-stainless-steel-chipper-knife',
  '/about',
  '/videos',
  '/photos',
  '/contact'
];

async function testBreakpoints() {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const failures = [];

  for (const route of ROUTES) {
    for (const width of BREAKPOINTS) {
      const page = await browser.newPage({
        viewport: { width, height: 800 }
      });

      try {
        await page.goto(`${BASE_URL}${route}`, { waitUntil: 'load', timeout: 12000 });
        const res = await page.evaluate((w) => {
          const docScroll = document.documentElement.scrollWidth;
          const bodyScroll = document.body ? document.body.scrollWidth : 0;
          const maxScroll = Math.max(docScroll, bodyScroll);
          const hasOverflow = maxScroll > w + 1;

          let offender = null;
          if (hasOverflow) {
            const els = Array.from(document.querySelectorAll('*'));
            for (const el of els) {
              if (['SCRIPT', 'STYLE', 'META', 'HEAD', 'TITLE'].includes(el.tagName)) continue;
              const r = el.getBoundingClientRect();
              if (r.right > w + 1) {
                offender = {
                  tag: el.tagName,
                  className: typeof el.className === 'string' ? el.className.slice(0, 30) : '',
                  right: Math.round(r.right),
                  width: Math.round(r.width),
                  overflow: Math.round(r.right - w)
                };
                break;
              }
            }
          }

          return { maxScroll, hasOverflow, offender };
        }, width);

        if (res.hasOverflow) {
          failures.push({ route, width, ...res });
          console.log(`❌ OVERFLOW on ${route} at width ${width}px: +${res.maxScroll - width}px`, res.offender);
        }
      } catch (err) {
        console.error(`Error on ${route} at ${width}px:`, err.message);
      } finally {
        await page.close();
      }
    }
  }

  await browser.close();
  console.log(`\nBreakpoint testing completed. Total width checks: ${ROUTES.length * BREAKPOINTS.length}. Failures: ${failures.length}`);
  return failures;
}

testBreakpoints().catch(console.error);

