// カスタムルールをESLintプラグインとして定義するファイル

// カスタムルールを読み込む
const fooBarRule = require("./enforce-foo-bar");

// pluginとして定義する
// ルール名: ルール
// const plugin = { rules: { "enforce-foo-bar": fooBarRule } };

// 外部で使えるようにする
// module.exports = plugin;

module.exports = {
  rules: { "enforce-foo-bar": fooBarRule },
};

// pnpm add -D ./src/lib/eslint-custom-rules/eslint-plugin-no-css-class/
// pnpm remove eslint-plugin-no-css-class

// const plugin = {
//   rules: { "no-css-class": noCssClass },
// };
// module.exports = plugin;

// module.exports = {
//   meta: {
//     type: "problem",
//     docs: {
//       description:
//         "TailwindCssのtext-black または text-whiteが使われたら警告を出す。",
//     },
//     // fixable: "code",
//     schema: [],
//   },

//   create(context) {
//     return {
//       Literal(node) {
//         if (
//           node.value.includes("text-black") ||
//           node.value.includes("text-white")
//         ) {
//           context.report({
//             node,
//             message:
//               "text-black または text-whiteが使用されています。text-body, text-light-bg-bk, text-dark-bg-wh のいずれかに変更してください。",
//           });
//         }
//       },
//     };
//   },
// };

// const noCssClass = require("./no-css-class/");

// module.exports = {
//   rules: { "no-css-class": noCssClass },
// };

// {
//   "name": "eslint-plugin-custom-rules",
//   "version": "1.0.0",
//   "private": true,
//   "main": "index.js"
// }
