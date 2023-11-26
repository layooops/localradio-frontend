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
      strokeWidth={2.5}
      d='m21 21-6-6M3 10a7 7 0 1 0 14 0 7 7 0 0 0-14 0Z'
    />
  </svg>
);

const ForwardRef = React.forwardRef(SvgIcon);
ForwardRef.displayName = 'IconSearch';

export { ForwardRef as IconSearch };
