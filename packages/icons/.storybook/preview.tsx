import type { Preview } from '@storybook/react';
import React from 'react';
import { Docs } from './components/docs/docs';
import { themeDark, themeLight } from './themes';
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      stylePreview: true,
      light: themeLight,
      dark: themeDark,
    },
    layout: 'centered',
    docs: {
      page: () => <Docs />,
    },
  },
};

export default preview;
