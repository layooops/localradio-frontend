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
      d='M9 11V6a3 3 0 1 1 6 0v5M6.3308 8h11.339a2.0004 2.0004 0 0 1 1.5181.6976 2.0009 2.0009 0 0 1 .4589 1.6064l-1.255 8.152A2.9998 2.9998 0 0 1 15.4258 21h-6.852a3 3 0 0 1-2.965-2.544l-1.255-8.152A1.9998 1.9998 0 0 1 6.3308 8Z'
    />
  </svg>
);

const ForwardRef = React.forwardRef(SvgIcon);
ForwardRef.displayName = 'IconShoppingBag';

export { ForwardRef as IconShoppingBag };
