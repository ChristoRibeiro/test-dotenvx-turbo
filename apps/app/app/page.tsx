import { config } from "./config";
import { env } from "./env";

export default function Home() {
  return (
    <div>
      <h1>Test dotenvx</h1>
      <p>
        OPENAI_API_KEY: {process.env.OPENAI_API_KEY}
      </p>   

      <h1>via t3-oss/env-nextjs</h1>
      <p>
        OPENAI_API_KEY: {env.OPENAI_API_KEY}
      </p>

      <h1>via config</h1>
      <p>
        OPENAI_API_KEY: {config.ai.openai.apiKey}
      </p>     
    </div>
  );
}
