import { env } from "./env";

export default function Home() {
  return (
    <div>
      <h1>Test dotenvx</h1>
      <p>
        API_NAME: {process.env.API_NAME}
      </p>
      <p>
        API_KEY: {process.env.API_KEY}
      </p>   

      <h1>via t3-oss/env-nextjs</h1>
      <p>
        API_NAME: {env.API_NAME}
      </p>
      <p>
        API_KEY: {env.API_KEY}
      </p>
    </div>
  );
}
