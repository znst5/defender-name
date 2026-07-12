import js from "@eslint/js";

export default [

  js.configs.recommended,

  {
    ignores: ["dist/**", "node_modules/", "coverage/**"]
  },

  {
    files: ["src/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        process: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn"
    }
  }
];
