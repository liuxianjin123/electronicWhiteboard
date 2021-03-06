module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 6
  },
  env: {
    node: true,
    browser: true,
    es6: true
  },
  extends: ["plugin:vue/essential", "prettier"],
  plugins: ["vue"],
  rules: {
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off", //
    "no-var": "error", //禁止使用var
    "no-multiple-empty-lines": [1, {"max": 1}],//空行最多不能超过2行
    quotes: ["error", "double"], //双引号
    indent: [
      "error",
      2,
      {
        ignoredNodes: ["ConditionalExpression *"],
        SwitchCase: 1,
        MemberExpression: "off"
        // flatTernaryExpressions: true
      }
    ], //缩进2个空格
    "function-paren-newline": "off",
    semi: ["error", "always"] //语句强制分号结尾
  },
};