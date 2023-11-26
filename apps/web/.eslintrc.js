module.exports = {
  extends: ['@local-radio/eslint-config/react'],
  overrides: [
    {
      files: ['pages/**/*', 'pages/api/*'],
      rules: {
        'import/no-default-export': 'off',
        '@conarti/feature-sliced/layers-slices': 'off',
        '@conarti/feature-sliced/absolute-relative': 'off',
        '@conarti/feature-sliced/public-api': 'off',
      },
    },
  ],
};
