const puppeteer = require('puppeteer');
const interface = require('readline-sync')
async function runTest() {
const browser = await puppeteer.launch({
    headless: true,
    timeout: 100000
});
const page = await browser.newPage();
await page.setViewport({
    width: 1000,
    height: 1200
});
const url = 'https://www.symbolab.com/solver/step-by-step/?or=input';

await page.goto(url, {
    waitUntil: 'networkidle2'
});
const input = interface.question('Ingrese su operacion: ')
await page.keyboard.type(input)
await page.keyboard.press('Enter');
await page.waitForTimeout(2000);

await page.screenshot({ path: 'fullpage.png', fullPage: false });
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