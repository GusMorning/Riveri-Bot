const puppeteer = require('puppeteer');
const interface = require('readline-sync')
const PuppeteerBlocker = require('@cliqz/adblocker-puppeteer')
const fetch = require('cross-fetch')
PuppeteerBlocker.fromPrebuiltAdsAndTracking(fetch).then((blocker) => {
    blocker.enableBlockingInPage(page);
  });
async function runTest() {



const browser = await puppeteer.launch({
    headless: false,
    timeout: 100000
});
const page = await browser.newPage();
await page.setViewport({
    width: 1000,
    height: 1000
});
let input = interface.question('Ingrese su operacion: '); input = encodeURIComponent(input)
const url = 'https://www.cymath.com/sp/answer?q='+input;

await page.goto(url, {
    waitUntil: 'networkidle2'
});
await page.waitForTimeout(3000);
await page.screenshot({ path: 'fullpage.png', fullPage: true });
browser.close();
}

runTest();

async function autoScroll(page){
    await page.evaluate(async () => {
        await new Promise((resolve) => {
            var totalHeight = 0;
            var distance = 100;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if(totalHeight >= scrollHeight - window.innerHeight){
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
}