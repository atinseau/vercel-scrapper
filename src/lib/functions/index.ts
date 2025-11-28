import Chromium from "@sparticuz/chromium"
import { join } from "path"

export async function getPuppeteerExecutablePath() {
  if (process.env.ENVIRONMENT === "local") {
    return join(process.env.PWD || '', process.env.CHROMIUM_EXECUTABLE_PATH || '')
  }
  return Chromium.executablePath()
}
