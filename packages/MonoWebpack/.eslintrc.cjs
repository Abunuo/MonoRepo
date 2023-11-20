/*
 * @Date: 2023-10-17 18:01:49
 * @Description: 
 */
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    '../../eslintrc'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  // views: https://eslint.vuejs.org/rules/
  rules: {
    // indent: ['warn', 2],
    // quotes: ['error', 'single'],
    'vue/comment-directive': 'off',
    'vue/html-quotes': ['single'],
    'vue/html-indent': ['error', 2, {
      'attribute': 1,
      'baseIndent': 1,
      'closeBracket': 0,
      'alignAttributesVertically': true,
      // 'ignores': []
    }],
    'vue/script-indent': ['error', 2, {
      'baseIndent': 1,
      'switchCase': 1,
      // 'ignores': []
    }],
  }
}
