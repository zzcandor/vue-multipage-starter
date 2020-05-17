module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'off',      // 禁止出现未使用过的变量
    'no-useless-escape':'off',    // 禁用不必要的转义字符
    'no-control-regex':'off'      // 禁止在正则表达式中使用控制字符
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
