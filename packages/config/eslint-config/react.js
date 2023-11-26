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
    extends: ['./base.js', 'plugin:@conarti/feature-sliced/recommended'],
    rules: {
      'jsx-a11y/media-has-caption': 'warn',
      'react/jsx-key': 'error',
      'react/no-unknown-property': 'warn',
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
    },
  },
});
