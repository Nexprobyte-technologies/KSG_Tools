const { chromium } = require('playwright-core');

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage({ viewport: { width: 375, height: 667 } });
  
  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('pageerror', err => errors.push(err.message));

  // 1. Visit Home
  await page.goto('http://localhost:3001/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  // Check if Manufacturing Area & Facilities exists on home page
  const hasFacilitiesOnHome = await page.evaluate(() => {
    const text = document.body.innerText;
    return text.includes('Manufacturing Area & Facilities');
  });
  console.log('Has Manufacturing Area & Facilities on Home:', hasFacilitiesOnHome);

  // Screenshot Mobile Navbar Closed
  await page.screenshot({ path: 'C:/Users/JEEVAA M M/.gemini/antigravity/brain/3dddbfb5-5df3-411b-aa6c-2f15569fc1c6/mobile_navbar_new.png' });

  // 2. Click Burger to open mobile drawer
  await page.click('.burger');
  await page.waitForTimeout(500);

  const isDrawerOpen = await page.evaluate(() => {
    const drawer = document.querySelector('#mobile-nav-drawer');
    return !!drawer;
  });
  console.log('Mobile Drawer open after click:', isDrawerOpen);

  // Screenshot Mobile Drawer Open
  await page.screenshot({ path: 'C:/Users/JEEVAA M M/.gemini/antigravity/brain/3dddbfb5-5df3-411b-aa6c-2f15569fc1c6/mobile_drawer_open_new.png' });

  // 3. Close the drawer by clicking close button
  await page.click('.mobile-drawer-close');
  await page.waitForTimeout(300);

  const isDrawerClosed = await page.evaluate(() => {
    return !document.querySelector('#mobile-nav-drawer');
  });
  console.log('Mobile Drawer closed successfully:', isDrawerClosed);

  console.log('Console Errors count:', errors.length);
  if (errors.length > 0) {
    console.log('Errors:', errors);
  }

  await browser.close();
})();

