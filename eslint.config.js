import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
    },
    globals: {
      ...globals.browser,
      ...globals.node,
      ...globals.mocha
    },
    extends: [
      "eslint:recommended",
      "plugin:prettier/recommended",
      "plugin:wdio/recommended",
      "google"
    ],
    plugins: ["wdio", "mocha", "prettier"],
    rules: {
      "prettier/prettier": "error",
      "no-var": "error",
      "quotes": ["error", "double"],
      "require-jsdoc": "off",
      "indent": ["error", 2],
      "object-curly-spacing": ["error", "always"],
      "no-undef": "error",
      "prefer-const": "error",
      "no-unused-vars": ["warn", { varsIgnorePattern: "^(capabilities|specs)$" }],
      "no-multiple-empty-lines": "warn"
    }
  }
];
