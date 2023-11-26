import { Template } from '@svgr/babel-plugin-transform-svg-component';

export const componentSVGRTemplate: Template = ({ jsx, componentName }, { tpl }) => {
  return tpl`
    import * as React from 'react';
    import { IconProps } from  '../types/icon';
    ${'\n'}
    const SvgIcon = ({color = 'currentColor', size = 14, ...props}: IconProps, forwardedRef: React.Ref<SVGSVGElement>) => (
    ${jsx}
    );
    ${'\n'}
    const ForwardRef = React.forwardRef(SvgIcon);
    ForwardRef.displayName = '${componentName}';
    ${'\n'}
    export { ForwardRef as ${componentName} };
  `;
};
