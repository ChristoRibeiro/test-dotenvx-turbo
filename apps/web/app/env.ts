import { vercel } from "@t3-oss/env-core/presets-zod"
import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  extends: [vercel()],
  // ================================
  // Client & Server
  // ================================

  shared: {
    // Node
    PORT: z.coerce.number().default(3000),
    NODE_ENV: z.enum(["development", "test", "production"]),
  },

  // ================================
  // Client
  // ================================

  client: {},

  // ================================
  // Server
  // ================================

  server: {
    API_NAME: z.string(),
    API_KEY: z.string(),
  },

  // ================================
  // Runtime
  // ================================

  runtimeEnv: {
    API_NAME: process.env.API_NAME,
    API_KEY: process.env.API_KEY,

    // Not in dotenv file
    // ================================

    // Node
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
  },

  // ================================
  // Misc
  // ================================

  skipValidation: !!process.env.CI || !!process.env.SKIP_ENV_VALIDATION,
})
