module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  // "extends": "eslint:recommended",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["local-rules"],
  rules: {
    "local-rules/enforce-foo-bar": "warn",
    "local-rules/enforce-foo-bar2": "warn",
  },
};
