const { configure, presets } = require('eslint-kit');
module.exports = configure({
  presets: [
    presets.imports(),
    presets.node(),
    presets.prettier(),
    presets.typescript(),
    presets.react({
      version: '18.2',
    }),
    presets.nextJs(),
    presets.effector(),
  ],
  extend: {
    plugins: ['storybook', 'perfectionist', 'unused-imports', 'check-file'],
    rules: {
      'check-file/filename-naming-convention': [
        'error',
        {
          'src/**/*.{js,ts,jsx,tsx}': 'KEBAB_CASE',
        },
        {
          ignoreMiddleExtensions: true,
        },
      ],
      '@typescript-eslint/ban-types': [
        'error',
        {
          types: {
            'React.FC':
              'Useless and has some drawbacks, see https://github.com/facebook/create-react-app/pull/8177',
            FC: 'Useless and has some drawbacks, see https://github.com/facebook/create-react-app/pull/8177',
            'React.FunctionComponent':
              'Useless and has some drawbacks, see https://github.com/facebook/create-react-app/pull/8177',
          },
        },
      ],
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
      'no-magic-numbers': ['error', { "ignoreArrayIndexes": true, "ignoreDefaultValues": true  }],
      'no-useless-catch': 'error',
      'unused-imports/no-unused-imports': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      'react/jsx-key': 'error',
      '@typescript-eslint/no-unused-expressions': 'off',
      'react/no-unknown-property': 'warn',
      'jsx-a11y/media-has-caption': 'warn',
      'prefer-destructuring': 'error'
    },
  },
});
