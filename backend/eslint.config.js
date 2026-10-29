const js = require("@eslint/js");
const globals = require("globals");
const prettier = require("eslint-config-prettier/flat");

module.exports = [
  { ignores: ["node_modules/", "generated/"] },
  js.configs.recommended,
  prettier,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: globals.node,
    },
  },
];
