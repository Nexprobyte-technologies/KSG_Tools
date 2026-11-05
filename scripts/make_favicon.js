const fs = require('fs');
const sharp = require('sharp');

async function createFavicon() {
  const svgBuffer = fs.readFileSync('public/favicon.svg');
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile('public/favicon.ico');
  console.log('favicon.ico successfully generated');
}

createFavicon().catch(console.error);
