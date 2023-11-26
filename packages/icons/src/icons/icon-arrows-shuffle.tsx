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
      d='m18 4 3 3m0 0-3 3m3-3h-5a4.9997 4.9997 0 0 0-5 5m7 8 3-3m0 0-3-3m3 3h-5a4.9997 4.9997 0 0 1-5-5M3 7h3a5 5 0 0 1 5 5m0 0a4.9998 4.9998 0 0 1-5 5H3'
    />
  </svg>
);

const ForwardRef = React.forwardRef(SvgIcon);
ForwardRef.displayName = 'IconArrowsShuffle';

export { ForwardRef as IconArrowsShuffle };
