const { chromium } = require('playwright-core');

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });

  // Screenshot header
  const header = await page.$('.navbar');
  if (header) {
    await header.screenshot({ path: 'C:/Users/JEEVAA M M/.gemini/antigravity/brain/3dddbfb5-5df3-411b-aa6c-2f15569fc1c6/header_updated.png' });
    console.log('Header screenshot captured');
  }

  // Screenshot Show More button
  const btn = await page.$('.catalog-show-more-btn');
  if (btn) {
    await btn.screenshot({ path: 'C:/Users/JEEVAA M M/.gemini/antigravity/brain/3dddbfb5-5df3-411b-aa6c-2f15569fc1c6/button_updated.png' });
    console.log('Button screenshot captured');
  }

  // Also mobile 375px header
  await page.setViewportSize({ width: 375, height: 667 });
  await page.waitForTimeout(400);
  if (header) {
    await header.screenshot({ path: 'C:/Users/JEEVAA M M/.gemini/antigravity/brain/3dddbfb5-5df3-411b-aa6c-2f15569fc1c6/header_mobile.png' });
    console.log('Mobile header screenshot captured');
  }

  await browser.close();
})();

