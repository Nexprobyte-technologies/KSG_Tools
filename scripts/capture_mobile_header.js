const { chromium } = require('playwright-core');

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage({ viewport: { width: 375, height: 667 } });
  
  // 1. Mobile Home Page
  await page.goto('http://localhost:3001/', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'C:/Users/JEEVAA M M/.gemini/antigravity/brain/3dddbfb5-5df3-411b-aa6c-2f15569fc1c6/mobile_home_header.png' });
  
  // 2. Mobile About Page
  await page.goto('http://localhost:3001/about', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'C:/Users/JEEVAA M M/.gemini/antigravity/brain/3dddbfb5-5df3-411b-aa6c-2f15569fc1c6/mobile_about_header.png' });

  await browser.close();
  console.log('Mobile screenshots captured successfully');
})();

