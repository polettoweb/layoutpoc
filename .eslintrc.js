module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "prettier/prettier"],
  rules: {
    "prettier/prettier": "warning"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
