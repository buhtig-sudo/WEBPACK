module.exports = {
  env: {
    browser: true,
    es6: true,
    "jest/globals": true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "jest"],
  rules: {
    indent: [1, 2],
    "linebreak-style": [1, "unix"],
    quotes: [1, "single"],
    semi: [1, "never"],
    eqeqeq: 1,
    "no-trailing-spaces": 1,
    "object-curly-spacing": [1, "always"],
    "arrow-spacing": [1, { before: true, after: true }],
    "no-console": 1,
    "react/prop-types": 0,
  },
};
