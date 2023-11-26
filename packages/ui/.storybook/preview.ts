import type { Preview } from '@storybook/react';

import '../public/index.css';

export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i, // display a color picker for the args matching this regex
        date: /Date$/, // display a date picker for the args matching this regex
      },
    },
  },
};
