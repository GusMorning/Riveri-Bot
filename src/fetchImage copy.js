const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  let counter = 0;
  page.on('response', async (response) => {
    const matches = /.*\.(jpg|png|svg|gif)$/.exec(response.url());
    console.log(matches);
    if (matches && (matches.length === 2)) {
      const extension = matches[1];
      const buffer = await response.buffer();
      fs.writeFileSync(`./image-${counter}.${extension}`, buffer, 'base64');
      counter += 1;
    }
  });

  await page.goto('https://textpro.me/images/user_image/2022/10/635ea72e65305.jpg');

  await browser.close();
})();