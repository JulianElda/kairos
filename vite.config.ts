import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
  test: {
    expect: { requireAssertions: true },
    projects: [
      {
        extends: "./vite.config.ts",
        test: {
          browser: {
            enabled: true,
            instances: [{ browser: "chromium", headless: true }],
            provider: playwright(),
          },
          exclude: ["src/routes/**/*.server.test.ts"],
          include: ["src/**/*.svelte.test.ts"],
          setupFiles: ["./src/test/test.setup.ts"],
        },
      },
      {
        extends: true,
        test: {
          exclude: ["src/**/*.svelte.test.ts"],
          include: ["src/lib/**/*.test.ts", "src/routes/**/*.test.ts"],
          name: "test",
        },
      },
    ],
  },
});
