const { chromium } = require('playwright-core');

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage({ viewport: { width: 1000, height: 600 } });
  
  const testEmbeds = [
    {
      name: 'q_coords_label',
      url: 'https://maps.google.com/maps?q=11.0533943,76.9950409&t=&z=16&ie=UTF8&iwloc=&output=embed'
    },
    {
      name: 'q_ksg_tools',
      url: 'https://maps.google.com/maps?q=Ksg%20Tools%2C%20Prozone%20Mall%2C%204th%20St%2C%20Sivanandhapuram%2C%20Saravanampatti%2C%20Coimbatore%20641035&t=&z=16&ie=UTF8&iwloc=&output=embed'
    },
    {
      name: 'embed_v1_place',
      url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.68812674062!2d76.9928522!3d11.0533943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f7df3bc4425b%3A0x743dfa266b215ac8!2sKsg%20Tools!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin'
    }
  ];

  for (const t of testEmbeds) {
    const html = `
      <!DOCTYPE html>
      <html>
        <body style="margin:0">
          <iframe width="1000" height="600" style="border:0" src="${t.url}" allowfullscreen loading="lazy"></iframe>
        </body>
      </html>
    `;
    await page.setContent(html);
    await page.waitForTimeout(5000);
    await page.screenshot({ path: `artifacts/responsive-audit/after/test_map_${t.name}.png` });
    console.log(`Captured test_map_${t.name}.png`);
  }

  await browser.close();
})();

