/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@local-radio/eslint-config/base-ts'],
  rules: {
    'import/no-default-export': 'off',
  },
};
