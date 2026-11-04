const { chromium } = require('playwright-core');

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage({ viewport: { width: 375, height: 667 } });
  await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'C:/Users/JEEVAA M M/.gemini/antigravity/brain/3dddbfb5-5df3-411b-aa6c-2f15569fc1c6/mobile_full_page.png' });
  
  // Also check navbar bounding box
  const navBox = await page.evaluate(() => {
    const nav = document.querySelector('.navbar');
    const brand = document.querySelector('.brand');
    const burger = document.querySelector('.burger');
    return {
      nav: nav ? nav.getBoundingClientRect() : null,
      brand: brand ? brand.getBoundingClientRect() : null,
      burger: burger ? burger.getBoundingClientRect() : null,
      navbarStyle: nav ? window.getComputedStyle(nav).position : null,
      navbarBg: nav ? window.getComputedStyle(nav).backgroundColor : null
    };
  });
  console.log('Nav metrics:', JSON.stringify(navBox, null, 2));

  await browser.close();
})();

