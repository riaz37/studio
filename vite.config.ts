import { defineConfig } from "vite";
import { loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  
  return {
    define: {
      "process.env.SANITY_STUDIO_PROJECT_ID": JSON.stringify(
        env.SANITY_STUDIO_PROJECT_ID
      ),
      "process.env.SANITY_STUDIO_DATASET": JSON.stringify(
        env.SANITY_STUDIO_DATASET || "production"
      ),
    },
  };
});
