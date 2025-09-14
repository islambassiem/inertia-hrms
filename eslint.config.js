import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-plugin-prettier";

export default tseslint.config(
  {
    ignores: [
      "node_modules",
      "vendor",
      "public",
      "storage",
      "bootstrap",
      "**/*.php",
      "**/*.blade.php",
      "dist",
      "global.d.ts"
    ],
  },
  {
    files: ["resources/js/**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
        project: "./tsconfig.json",
      },
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      prettier,
    },
    rules: {
      // Disable ESLint rules that conflict with Prettier
      "@typescript-eslint/indent": "off",
      "react/jsx-one-expression-per-line": "off",
      "react/jsx-wrap-multilines": "off",

      // Enable Prettier as the source of truth
      "prettier/prettier": ["error", { tabWidth: 2 }],

      // Other recommended rules
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,

      // React 17+ JSX transform
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: { version: "detect" },
    },
  }
);
