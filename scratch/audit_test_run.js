const { chromium } = require('playwright-core');
const fs = require('fs');
const path = require('path');

async function testAudit() {
  const cssPath = path.join(__dirname, '..', '.next', 'static', 'chunks', '0_h3v670p_6b5.css');
  const compiledCss = fs.existsSync(cssPath) ? fs.readFileSync(cssPath, 'utf8') : '';
  const globalsCss = fs.readFileSync(path.join(__dirname, '..', 'app', 'globals.css'), 'utf8');
  const fullCss = `${compiledCss}\n${globalsCss}`;

  const htmlPath = path.join(__dirname, '..', '.next', 'server', 'app', 'index.html');
  let html = fs.readFileSync(htmlPath, 'utf8');

  // Inject style tag into head
  html = html.replace('</head>', `<style>${fullCss}</style></head>`);

  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage({ viewport: { width: 360, height: 800 } });

  await page.setContent(html, { waitUntil: 'load' });

  const metrics = await page.evaluate(() => {
    const winWidth = window.innerWidth;
    const docScrollWidth = document.documentElement.scrollWidth;
    const bodyScrollWidth = document.body ? document.body.scrollWidth : 0;
    const maxScroll = Math.max(docScrollWidth, bodyScrollWidth);
    const hasOverflow = maxScroll > winWidth + 1;

    // Find offending elements
    const els = Array.from(document.querySelectorAll('*'));
    const offenders = [];
    for (const el of els) {
      if (['SCRIPT', 'STYLE', 'META', 'HEAD', 'TITLE', 'NOSCRIPT'].includes(el.tagName)) continue;
      const r = el.getBoundingClientRect();
      if (r.width > 0 && r.height > 0 && r.right > winWidth + 1) {
        offenders.push({
          tag: el.tagName,
          className: typeof el.className === 'string' ? el.className.slice(0, 50) : '',
          right: Math.round(r.right),
          width: Math.round(r.width),
          overflow: Math.round(r.right - winWidth)
        });
      }
    }
    return { winWidth, maxScroll, hasOverflow, offenders: offenders.slice(0, 5) };
  });

  console.log('Homepage at 360px width:', metrics);
  await browser.close();
}

testAudit().catch(console.error);
