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
  plugins: ["enforce-foo-bar"],
  rules: {
    "enforce-foo-bar/enforce-foo-bar": "warn",
  },
};
