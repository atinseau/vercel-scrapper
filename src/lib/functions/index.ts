import chromium from "@sparticuz/chromium-min";
import { join } from "path"

export async function getPuppeteerExecutablePath() {
  if (process.env.ENVIRONMENT === "local") {
    return join(process.env.PWD || '', process.env.CHROMIUM_EXECUTABLE_PATH || '')
  }
  return chromium.executablePath(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/chromium-pack.tar`)
}
