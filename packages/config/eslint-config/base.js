const { configure, presets } = require('eslint-kit');
const { isDev } = require('./helpers');
const MAX_DEPTH = 4;
const MAX_NESTED_CALLBACKS = 3;
const MAX_PARAMS = 3;

module.exports = configure({
  mode: isDev ? 'default' : 'disable-warns',
  presets: [presets.imports(), presets.node(), presets.prettier()],
  extend: {
    plugins: ['unused-imports', 'check-file'],
    extends: ['turbo'],
    rules: {
      'func-style': [
        'error',
        'declaration',
        {
          allowArrowFunctions: true,
        },
      ],
      'id-denylist': ['error', 'data', 'err', 'e', 'cb', 'callback'],
      'id-length': 'error',
      'max-depth': ['error', MAX_DEPTH],
      'max-nested-callbacks': ['error', MAX_NESTED_CALLBACKS],
      'max-params': ['error', MAX_PARAMS],
      'no-confusing-arrow': 'error',
      'no-div-regex': 'error',
      'no-else-return': 'error',
      'no-empty': 'error',
      'no-empty-function': 'error',
      'no-magic-numbers': [
        'warn',
        { ignoreArrayIndexes: true, ignoreDefaultValues: true, ignore: [1] },
      ],
      'no-useless-catch': 'error',
      'no-useless-rename': 'error',
      'prefer-destructuring': 'error',

      'import/order': 'off',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^.*\\u0000$'],
            ['^react', '^@?\\w'],
            ['^next', '^@?\\w'],
            ['^\\u0000'],
            ['^node:'],
            ['^@?\\w'],
            ['^'],
            ['^\\.'],
          ],
        },
      ],
      'unused-imports/no-unused-imports': 'error',
    },
  },
});
