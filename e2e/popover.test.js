import puppeteer from "puppeteer";

describe("Show popover", () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });
    page = await browser.newPage();
  });

  test("Show popover test", async () => {
    await page.goto("http://localhost:9000");
    await page.waitForSelector(".button");
    const button = await page.$(".button");
    await button.click();
    await page.waitForSelector(".popover");
  });

  afterAll(async () => {
    await browser.close();
  });
});
