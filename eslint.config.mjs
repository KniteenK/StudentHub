import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { files: ["**/*.js, **/*.ts"], languageOptions: { sourceType: "module" } },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    ignores: ["./client/**/*.js"],
  },
  {
    settings: {
      react: {
        version: "18.0.0",
      },
    },
  },
  {
    rules: {
      "no-warning-comments": "off",
      "no-unused-vars": "off",
      "no-undef": "off",
      "no-constant-condition": "off",
      "no-prototype-builtins": "off",
      "no-async-promise-executor": "off",
      "no-useless-escape": "off",
      "no-unsafe-optional-chaining": "off",
      "react/prop-types": "off",
      "react/display-name": "off",
      "react/no-unescaped-entities": "off",
      "react/no-children-prop": "off",
      "react/no-unknown-property": "off",
      "react/no-unused-prop-types": "off",
      "react/no-unused-state": "off",
      "react/no-deprecated": "off",
      "react/no-direct-mutation-state": "off",
      "react/no-typos": "off",
      "react/no-this-in-sfc": "off",
      "react/no-unsafe": "off",
      "react/no-unsafe-will-mount": "off",
      "react/no-unsafe-set-state": "off",
      "react/no-unsafe-update": "off",
      "react/no-unstable-nested-components": "off",
      "react/no-string-refs": "off",
      "react/no-render-return-value": "off",
      "react/no-redundant-should-component-update": "off",
      "react/jsx-no-useless-fragment": "off",
      "react/jsx-no-script-url": "off",
      "react/jsx-no-target-blank": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
];
