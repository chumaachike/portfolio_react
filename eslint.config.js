import babelParser from "@babel/eslint-parser";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import airbnbConfig from "eslint-config-airbnb";

export default [
  {
    // Define the environments
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
      parser: babelParser,
    },
    linterOptions: {
      ignorePatterns: ["dist/", "build/"], // Ignored directories
    },
    // Extend configurations
    extends: [airbnbConfig, reactPlugin.configs.recommended, reactHooksPlugin.configs.recommended],
    // Define plugins
    plugins: {
      react: reactPlugin,
      reactHooks: reactHooksPlugin,
    },
    // Define rules
    rules: {
      "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx"] }],
      "react/react-in-jsx-scope": "off",
      "import/no-unresolved": "off",
      "no-shadow": "off",
    },
  },
  {
    // Override specific rules for certain file patterns
    files: ["src/**/*Slice.js"],
    rules: {
      "no-param-reassign": ["error", { props: false }], // Custom rule for redux slice files
    },
  },
];
