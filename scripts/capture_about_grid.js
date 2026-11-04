const { chromium } = require('playwright-core');

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage({ viewport: { width: 1400, height: 1100 } });
  await page.goto('http://localhost:3001/about', { waitUntil: 'networkidle' });

  // Scroll to Industries Powered by Our Tooling section
  const section = await page.$('.industries-grid');
  if (section) {
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    // Take screenshot of the whole section with title
    const parentSection = await page.evaluateHandle(() => {
      const el = document.querySelector('.industries-grid');
      return el ? el.parentElement : null;
    });
    if (parentSection && parentSection.asElement()) {
      await parentSection.asElement().screenshot({
        path: 'C:/Users/JEEVAA M M/.gemini/antigravity/brain/3dddbfb5-5df3-411b-aa6c-2f15569fc1c6/industries_3x3_grid.png'
      });
      console.log('Industries 3x3 screenshot captured!');
    }
  } else {
    console.log('Could not find .industries-grid');
  }

  await browser.close();
})();
