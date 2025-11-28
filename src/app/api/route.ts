import "puppeteer-core";
import "@sparticuz/chromium-min";

import chromium from "@sparticuz/chromium-min";
import puppeteer from "puppeteer-core";
import { getPuppeteerExecutablePath } from "@/src/lib/functions";

export async function GET(request: Request) {
  const viewport = {
    deviceScaleFactor: 1,
    hasTouch: false,
    height: 1080,
    isLandscape: true,
    isMobile: false,
    width: 1920,
  };

  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: viewport,
    executablePath: await getPuppeteerExecutablePath()
  });

  const page = await browser.newPage();
  await page.goto("https://example.com");

  const screenshotBuffer = await page.screenshot();

  await browser.close();

  return new Response(Buffer.from(screenshotBuffer), {
    status: 200,
    headers: {
      "Content-Type": "image/png",
    },
  });
}
