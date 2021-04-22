module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  parser: "babel-eslint",
  extends: ["airbnb-base"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    curly: ["error", "multi-line"],
    "comma-dangle": ["error", "never"],
    "no-param-reassign": ["error", { props: false }],
    "no-underscore-dangle": ["error", { allowAfterThis: true }],
    "no-console": ["error", { allow: ["warn", "error", "log"] }],
    "class-methods-use-this": ["error", { exceptMethods: ["dbConnect"] }],
  },
};
