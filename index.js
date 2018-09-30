const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
        headless: true,
        timeout: 1000
    });
  const page = await browser.newPage();
  await page.goto('http://morganlewis.com');
  await page.screenshot({path: 'example_full.png',
	fullPage:true
    });
  await page.screenshot({path: 'example_1024x800.png',
	clip: {x: 0, y:0, width: 1024, height: 800}
    });

  await browser.close();
})();
