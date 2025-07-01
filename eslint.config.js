import { includeIgnoreFile } from "@eslint/compat";
import lexis from "@julianelda/lexis";
import svelte from "eslint-plugin-svelte";
import globals from "globals";
import { fileURLToPath } from "node:url";
import ts from "typescript-eslint";

import svelteConfig from "./svelte.config.js";

const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url));

const config = [
  includeIgnoreFile(gitignorePath),
  ...lexis,
  ...svelte.configs.recommended,
  ...svelte.configs.prettier,
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    rules: { "no-undef": "off" },
  },
  {
    files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],
    languageOptions: {
      parserOptions: {
        extraFileExtensions: [".svelte"],
        parser: ts.parser,
        projectService: true,
        svelteConfig,
      },
    },
  },
];

export default config;
