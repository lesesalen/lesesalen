module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
    },
  ],
  plugins: ["react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier/@typescript-eslint",
    "plugin:react/recommended",
    "prettier/react",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  rules: {
    // Not needed, see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md#when-not-to-use-it
    "@typescript-eslint/typedef": "off",
    "import/no-unresolved": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    // Might want to reconsider this, see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-default-export.md
    "import/no-default-export": "off",
  },
  settings: {
    node: {
      tryExtensions: [".js", ".jsx", ".json", ".ts", ".tsx", ".node", ".mjs"],
    },
    react: {
      version: "detect",
    },
  },
};
