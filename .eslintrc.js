module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  parser: 'babel-eslint',
  extends: ['plugin:prettier/recommended'],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {}
}
