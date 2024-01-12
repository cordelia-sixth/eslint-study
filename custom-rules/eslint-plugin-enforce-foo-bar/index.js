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
