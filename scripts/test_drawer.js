const { chromium } = require('playwright-core');

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage({ viewport: { width: 375, height: 667 } });
  
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));

  await page.goto('http://localhost:3001/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);

  const resBefore = await page.evaluate(() => {
    return {
      burger: !!document.querySelector('.burger'),
      drawerBefore: !!document.querySelector('#mobile-nav-drawer')
    };
  });
  console.log('Before click:', resBefore);

  await page.click('.burger');
  await page.waitForTimeout(500);

  const resAfter = await page.evaluate(() => {
    return {
      drawerAfter: !!document.querySelector('#mobile-nav-drawer'),
      drawerDisplay: document.querySelector('#mobile-nav-drawer') ? window.getComputedStyle(document.querySelector('#mobile-nav-drawer')).display : null,
      drawerZIndex: document.querySelector('#mobile-nav-drawer') ? window.getComputedStyle(document.querySelector('#mobile-nav-drawer')).zIndex : null,
      drawerRight: document.querySelector('#mobile-nav-drawer') ? window.getComputedStyle(document.querySelector('#mobile-nav-drawer')).right : null
    };
  });
  console.log('After click:', resAfter);

  await page.screenshot({ path: 'C:/Users/JEEVAA M M/.gemini/antigravity/brain/3dddbfb5-5df3-411b-aa6c-2f15569fc1c6/drawer_test.png' });
  await browser.close();
})();

