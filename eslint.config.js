import { includeIgnoreFile } from "@eslint/compat";
import lexis from "@julianelda/lexis";
import svelte from "eslint-plugin-svelte";
import { globalIgnores } from "eslint/config";
import { fileURLToPath } from "node:url";
import ts from "typescript-eslint";

import svelteConfig from "./svelte.config.js";

const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url));

export default [
  globalIgnores(["icons"]),
  ...lexis,
  includeIgnoreFile(gitignorePath),
  ...svelte.configs.recommended,
  ...svelte.configs.prettier,
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
