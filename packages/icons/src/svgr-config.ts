import { Config } from '@svgr/core';
import jsxPlugin from '@svgr/plugin-jsx';
import prettierPlugin from '@svgr/plugin-prettier';
import { componentSVGRTemplate } from './templates/component-template';

export const svgrConfig: Config = {
  plugins: [jsxPlugin, prettierPlugin],
  typescript: true,
  svgProps: {
    width: '{size}',
    height: '{size}',
    ref: '{forwardedRef}',
  },
  expandProps: 'end',
  replaceAttrValues: {
    '#000': '{color}',
    currentColor: '{color}',
  },
  template: componentSVGRTemplate,
};
