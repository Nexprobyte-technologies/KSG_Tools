const { chromium } = require('playwright-core');

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage({ viewport: { width: 375, height: 667 } });
  await page.goto('http://localhost:3001/', { waitUntil: 'networkidle' });

  // Click burger
  await page.click('.burger');
  await page.waitForTimeout(400);
  await page.screenshot({ path: 'C:/Users/JEEVAA M M/.gemini/antigravity/brain/3dddbfb5-5df3-411b-aa6c-2f15569fc1c6/mobile_drawer_open.png' });

  await browser.close();
  console.log('Mobile drawer screenshot captured');
})();

