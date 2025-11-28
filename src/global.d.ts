declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ENVIRONMENT: "production" | "local";
      CHROMIUM_EXECUTABLE_PATH: string
    }
  }
}
export { }
