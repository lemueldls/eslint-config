import type { Linter } from "eslint";

const config: Linter.BaseConfig = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    project: "tsconfig.json",
  },
  rules: {
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/array-type": "warn",
    "@typescript-eslint/consistent-indexed-object-style": [
      "warn",
      "index-signature",
    ],
    "@typescript-eslint/consistent-type-assertions": "warn",
    "@typescript-eslint/consistent-type-definitions": "warn",
    "@typescript-eslint/consistent-type-exports": "warn",
    "@typescript-eslint/consistent-type-imports": "warn",
    "@typescript-eslint/explicit-member-accessibility": "warn",
    "@typescript-eslint/method-signature-style": ["warn", "method"],
    "@typescript-eslint/prefer-literal-enum-member": "warn",
    "@typescript-eslint/prefer-regexp-exec": "warn",
    "@typescript-eslint/no-confusing-non-null-assertion": "error",
    "@typescript-eslint/no-duplicate-imports": "warn",
    "@typescript-eslint/no-invalid-this": "warn",
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "warn",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "warn",
    "@typescript-eslint/no-redundant-type-constituents": "warn",
    "@typescript-eslint/no-unnecessary-condition": "warn",
    "@typescript-eslint/no-unnecessary-qualifier": "warn",
    "@typescript-eslint/no-unnecessary-type-arguments": "warn",
    "@typescript-eslint/no-unnecessary-type-assertion": "warn",
    "@typescript-eslint/no-unnecessary-type-constraint": "warn",

    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        "newlines-between": "always-and-inside-groups",
      },
    ],

    "unicorn/custom-error-definition": "error",
    "unicorn/import-index": "error",
    "unicorn/no-unsafe-regex": "error",
    // NOTE: Enable on ES2022
    "unicorn/prefer-at": "off",
    "unicorn/prefer-string-replace-all": "error",
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
    "unicorn/no-keyword-prefix": ["error", { disallowedPrefixes: ["new"] }],
    "unicorn/no-unused-properties": "warn",
    "unicorn/prefer-node-protocol": "error",
    "unicorn/prefer-module": "error",
    "unicorn/prefer-top-level-await": "error",

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

    // NOTE: Enable on ES2022
    "prefer-object-has-own": "off",
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
