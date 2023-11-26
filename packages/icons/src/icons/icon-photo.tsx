import * as React from 'react';
import { IconProps } from '../types/icon';

const SvgIcon = (
  { color = 'currentColor', size = 14, ...props }: IconProps,
  forwardedRef: React.Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    fill='none'
    viewBox='0 0 24 24'
    ref={forwardedRef}
    {...props}
  >
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M15 8h.01M3 16l5-5c.928-.893 2.072-.893 3 0l5 5m-2-2 1-1c.928-.893 2.072-.893 3 0l3 3M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Z'
    />
  </svg>
);

const ForwardRef = React.forwardRef(SvgIcon);
ForwardRef.displayName = 'IconPhoto';

export { ForwardRef as IconPhoto };
