import { vercel } from "@t3-oss/env-core/presets-zod"
import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  extends: [vercel()],
  // ================================
  // Client & Server
  // ================================

  shared: {},

  // ================================
  // Client
  // ================================

  client: {},

  // ================================
  // Server
  // ================================

  server: {
    OPENAI_API_KEY: z.string(),
  },

  // ================================
  // Runtime
  // ================================

  runtimeEnv: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },

  // ================================
  // Misc
  // ================================

  skipValidation: !!process.env.CI || !!process.env.SKIP_ENV_VALIDATION,
})
