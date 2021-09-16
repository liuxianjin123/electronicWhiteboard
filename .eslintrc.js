module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off", //
    "no-var": "error", //禁止使用var
    quotes: ["error", "double", { avoidEscape: true }], //双引号
    "no-unused-vars": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-useless-escape": "off",
    indent: [
      "error",
      2,
      {
        SwitchCase: 1,
        MemberExpression: 1,
        flatTernaryExpressions: true,
        ignoredNodes: [
          "ConditionalExpression  *",
          "TemplateLiteral *",
          "CallExpression > FunctionExpression.callee > BlockStatement.body"
        ]
      }
    ], //缩进2个空格
    "function-paren-newline": "off",
    semi: ["error", "always"] //语句强制分号结尾
  }
};
