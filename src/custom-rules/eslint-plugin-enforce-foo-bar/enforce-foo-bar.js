// カスタムルール

module.exports = {
  // ルールに必要なmetadata
  meta: {
    type: "problem",
    docs: {
      description:
        "Enforce that a variable named `foo` can only be assigned a value of 'bar'.",
    },
    fixable: "code",
    schema: [],
  },

  // ルールを作成する関数。
  // contextはルールが適用されるプログラム本体(AST)のことで
  // ここから変数、リテラル、コメントあらゆる文にアクセスできる
  // ルール本体のロジックはコールバック関数として定義する
  // ルールのロジックは基本的にASTのtypeに対して定義することになる
  create(context) {
    console.log("🍎");
    return {
      // VariableDeclarator typeの情報を取得
      // node: 自身が持っているAST情報（オブジェクト）
      VariableDeclarator(node) {
        // constが定義されているかチェック
        // この場合はVariableDEclaratorの親であるVariableDeclarationのこと
        // それのkindプロパティがconstかチェックしている
        if (node.parent.kind === "const") {
          // 変数のチェック
          // 識別子（変数）が存在することと、変数名がfooであること
          if (node.id.type === "Identifier" && node.id.name === "foo") {
            // Check if value of variable is "bar"
            if (
              // 初期値が存在していること
              node.init &&
              // 初期値がリテラルであること
              node.init.type === "Literal" &&
              // barという文字列は代入されていないこと
              node.init.value !== "bar"
            ) {
              // 上の条件が1つでもfalseならreport()が実行される
              // これはESlintにエラーであることと、その内容を伝えるもの
              context.report({
                // 自分自身のAST情報
                node,

                // ターミナルに表示するメッセージ
                // プレースホルダーで、該当箇所の値などの情報を含ませることができるこの場合は {{ notBar }}
                // プレースホルダー名は自由に決められる
                message:
                  'Value other than "bar" assigned to `const foo`. Unexpected value: {{ notBar }}.',

                // ESLintに渡す付随情報
                data: {
                  // プレースホルダー名と、それに渡すデータ
                  notBar: node.init.value,
                },

                // --fixオプションをつけて実行した時の挙動
                // 今回はbar以外の文字列をbarに置き換えている
                fix(fixer) {
                  return fixer.replaceText(node.init, '"bar"');
                },
              });
            }
          }
        }
      },
    };
  },
};
