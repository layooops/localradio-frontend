const { configure, presets } = require('eslint-kit');
const { isDev } = require('./helpers');

module.exports = configure({
  mode: isDev ? 'default' : 'disable-warns',
  presets: [presets.imports(), presets.node(), presets.prettier(), presets.typescript()],
  extend: {
    extends: ['./base.js'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/consistent-type-imports': 'error',
    },
  },
});
