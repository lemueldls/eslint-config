import type { Linter } from "eslint";

const config: Linter.BaseConfig = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:unicorn/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  rules: {
    "@typescript-eslint/no-non-null-assertion": "off",

    "unicorn/custom-error-definition": "error",
    "unicorn/import-index": "error",
    "unicorn/no-unsafe-regex": "error",
    "unicorn/prefer-at": "error",
    "unicorn/prefer-object-has-own": "error",
    "unicorn/prefer-string-replace-all": "error",
    "unicorn/prefer-top-level-await": "error",
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
    "unicorn/no-keyword-prefix": [
      "error",
      { disallowedPrefixes: ["new", "for"] },
    ],
    "unicorn/no-unused-properties": "warn",
    "unicorn/string-content": "warn",
    "unicorn/require-post-message-target-origin": "off",
    "unicorn/prefer-node-protocol": "off",
    "unicorn/prefer-module": "off",

    "prettier/prettier": "warn",

    curly: ["warn", "multi"],
    "one-var": ["warn", "never"],
    yoda: "warn",
    "array-callback-return": "error",
    "default-case-last": "error",
    "dot-notation": "error",
    eqeqeq: "error",
    "guard-for-in": "error",
    "max-classes-per-file": "error",

    "no-useless-backreference": "error",
    "no-unsafe-optional-chaining": "error",
    "no-unreachable-loop": "error",
    "no-template-curly-in-string": "error",
    "no-promise-executor-return": "error",
    "no-prototype-builtins": "error",
    "no-case-declarations": "error",
    "no-div-regex": "error",
    "no-regex-spaces": "error",
    "no-control-regex": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-implied-eval": "error",
    "no-iterator": "error",
    "no-labels": "error",
    "no-else-return": "warn",
    "object-shorthand": "warn",
    "operator-assignment": "warn",

    "no-undef": "off",
    "no-fallthrough": "off",

    "prefer-template": "warn",
    "prefer-destructuring": [
      "warn",
      {
        object: true,
        array: true,
      },
    ],
  },
};

export = config;
