import { env } from "./env"

export const config = {
  ai: {
    openai: {
      apiKey: env.OPENAI_API_KEY,
    }
  }  
}
