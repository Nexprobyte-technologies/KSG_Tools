const { chromium } = require('playwright-core');

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

const VIEWPORTS = [
  { name: 'Mobile 320px', width: 320, height: 600 },
  { name: 'Mobile 375px', width: 375, height: 667 },
  { name: 'Mobile 430px (iPhone Pro Max)', width: 430, height: 932 },
  { name: 'Tablet 768px (iPad)', width: 768, height: 1024 },
  { name: 'Tablet 1024px', width: 1024, height: 768 },
  { name: 'Laptop 1280px', width: 1280, height: 800 },
  { name: 'Desktop 1440px', width: 1440, height: 900 },
  { name: 'Large Desktop 1920px', width: 1920, height: 1080 }
];

const ROUTES = [
  '/',
  '/products',
  '/products/4-inch-stainless-steel-chipper-knife',
  '/about',
  '/videos',
  '/photos',
  '/contact'
];

async function runVerification() {
  console.log('--- STARTING PREMIUM MANUFACTURING WEBSITE VERIFICATION ---');
  console.log(`Target: ${BASE_URL}\n`);

  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  let totalTests = 0;
  let totalErrors = 0;
  const overflowIssues = [];
  const consoleErrors = [];

  // 1. Test each route for console errors, response status, and overflow across viewports
  for (const route of ROUTES) {
    console.log(`Testing Route: ${route}`);
    for (const vp of VIEWPORTS) {
      totalTests++;
      const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });

      page.on('console', msg => {
        if (msg.type() === 'error') {
          consoleErrors.push({ route, viewport: vp.name, text: msg.text() });
        }
      });

      try {
        const resp = await page.goto(`${BASE_URL}${route}`, { waitUntil: 'domcontentloaded', timeout: 15000 });
        if (!resp || resp.status() >= 400) {
          console.error(`❌ HTTP Error ${resp ? resp.status() : 'No response'} on ${route} (${vp.name})`);
          totalErrors++;
        }

        // Check horizontal overflow
        const overflow = await page.evaluate((w) => {
          const docScroll = document.documentElement.scrollWidth;
          const bodyScroll = document.body ? document.body.scrollWidth : 0;
          const maxScroll = Math.max(docScroll, bodyScroll);
          const hasOverflow = maxScroll > w + 1;
          let offender = null;
          if (hasOverflow) {
            const els = Array.from(document.querySelectorAll('*'));
            for (const el of els) {
              if (['SCRIPT', 'STYLE', 'META', 'HEAD', 'TITLE'].includes(el.tagName)) continue;
              const r = el.getBoundingClientRect();
              if (r.right > w + 1) {
                offender = `${el.tagName}.${(el.className || '').toString().slice(0, 30)} (right: ${Math.round(r.right)})`;
                break;
              }
            }
          }
          return { maxScroll, hasOverflow, offender };
        }, vp.width);

        if (overflow.hasOverflow) {
          overflowIssues.push({ route, viewport: vp.name, width: vp.width, ...overflow });
          console.error(`  ⚠️ Overflow on ${vp.name}: +${overflow.maxScroll - vp.width}px. Offender: ${overflow.offender}`);
          totalErrors++;
        }
      } catch (err) {
        console.error(`❌ Exception on ${route} (${vp.name}):`, err.message);
        totalErrors++;
      } finally {
        await page.close();
      }
    }
  }

  // 2. Interactive Navigation Test on Mobile (Mobile Drawer)
  console.log('\nTesting Interactive Mobile Drawer Navigation...');
  const mobilePage = await browser.newPage({ viewport: { width: 375, height: 667 } });
  try {
    await mobilePage.goto(`${BASE_URL}/`, { waitUntil: 'domcontentloaded' });
    const burger = await mobilePage.$('.burger');
    if (!burger) {
      console.error('❌ Burger button not found on mobile viewport');
      totalErrors++;
    } else {
      await burger.click();
      await mobilePage.waitForTimeout(300);
      const drawer = await mobilePage.$('#mobile-nav-drawer');
      const isVisible = drawer ? await drawer.isVisible() : false;
      if (isVisible) {
        console.log('  ✓ Mobile drawer opens successfully');
      } else {
        console.error('❌ Mobile drawer did not appear after clicking burger');
        totalErrors++;
      }

      // Close drawer
      const closeBtn = await mobilePage.$('.mobile-drawer-close');
      if (closeBtn) {
        await closeBtn.click();
        await mobilePage.waitForTimeout(300);
        const isClosed = await mobilePage.$('#mobile-nav-drawer') === null || !(await drawer.isVisible());
        console.log(`  ✓ Mobile drawer closes properly: ${isClosed}`);
      }
    }
  } catch (err) {
    console.error('❌ Error during mobile drawer test:', err.message);
    totalErrors++;
  } finally {
    await mobilePage.close();
  }

  // 3. Interactive Contact Form Validation Test
  console.log('\nTesting Contact Form Validation on /contact...');
  const contactPage = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  try {
    await contactPage.goto(`${BASE_URL}/contact`, { waitUntil: 'domcontentloaded' });
    const submitBtn = await contactPage.$('button[type="submit"]');
    if (submitBtn) {
      // Click without filling to test validation
      await submitBtn.click();
      await contactPage.waitForTimeout(200);
      const errorBanner = await contactPage.$('.form-error-banner');
      if (errorBanner) {
        console.log('  ✓ Form validation blocked empty submit and displayed error message');
      }

      // Now fill valid details
      await contactPage.fill('input#name', 'Test Engineer');
      await contactPage.fill('input#phone', '+91 99447 44509');
      await contactPage.fill('textarea#msg', 'Need quotation for Chipper Knives 4-inch.');
      await submitBtn.click();
      await contactPage.waitForTimeout(400);

      const successEl = await contactPage.$('.success');
      if (successEl) {
        console.log('  ✓ Form successfully submitted and rendered confirmation state');
        const waLink = await contactPage.$('.success-wa-btn');
        if (waLink) {
          const href = await waLink.getAttribute('href');
          console.log(`  ✓ WhatsApp continuation link verified: ${href?.slice(0, 45)}...`);
        }
      } else {
        console.error('❌ Success state did not appear after valid submission');
        totalErrors++;
      }
    }
  } catch (err) {
    console.error('❌ Error during contact form test:', err.message);
    totalErrors++;
  } finally {
    await contactPage.close();
  }

  // 4. Test Floating Dock on scroll
  console.log('\nTesting Floating Quick Actions Dock...');
  const scrollPage = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  try {
    await scrollPage.goto(`${BASE_URL}/`, { waitUntil: 'domcontentloaded' });
    let dock = await scrollPage.$('.floating-quick-dock');
    console.log(`  Initial dock before scroll: ${dock ? 'visible' : 'hidden (expected)'}`);
    await scrollPage.evaluate(() => window.scrollTo(0, 500));
    await scrollPage.waitForTimeout(200);
    dock = await scrollPage.$('.floating-quick-dock');
    if (dock) {
      console.log('  ✓ Floating quick actions dock appeared on scroll');
    }
  } catch (err) {
    console.error('❌ Error testing floating dock:', err.message);
  } finally {
    await scrollPage.close();
  }

  await browser.close();

  console.log('\n========================================');
  console.log(`VERIFICATION SUMMARY:`);
  console.log(`Total checks: ${totalTests}`);
  console.log(`Overflow issues: ${overflowIssues.length}`);
  console.log(`Console errors: ${consoleErrors.length}`);
  console.log(`Total errors: ${totalErrors}`);
  console.log('========================================\n');

  if (totalErrors > 0) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}

runVerification().catch(err => {
  console.error('Verification script failed:', err);
  process.exit(1);
});
