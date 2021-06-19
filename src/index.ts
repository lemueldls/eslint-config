import type { Linter } from "eslint";

const config: Linter.BaseConfig = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:unicorn/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "unicorn/prefer-node-protocol": "off",
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],

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

    "no-fallthrough": "off",

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
