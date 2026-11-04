const { chromium } = require('playwright-core');
const fs = require('fs');

async function testFile() {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage({ viewport: { width: 360, height: 800 } });
  await page.setContent('<html><head><style>body{margin:0;font-size:16px;} .box{width:400px;height:50px;background:red;}</style></head><body><div class="box">Hello</div></body></html>');
  const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  console.log('TEST RESULT: scrollWidth =', scrollWidth);
  await browser.close();
}
testFile().catch(console.error);
