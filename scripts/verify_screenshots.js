const { chromium } = require('playwright-core');

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 25000 });
  const mapSec = page.locator('#location-map');
  await mapSec.scrollIntoViewIfNeeded();
  await page.waitForTimeout(4000);
  await mapSec.screenshot({ path: 'artifacts/responsive-audit/after/map_fixed_screenshot.png' });
  console.log('Map screenshot saved successfully!');

  await browser.close();
})();
