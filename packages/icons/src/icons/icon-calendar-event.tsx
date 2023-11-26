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
      d='M16 3v4M8 3v4m-4 4h16M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a1.9999 1.9999 0 0 1-2-2V7Zm4 8h2v2H8v-2Z'
    />
  </svg>
);

const ForwardRef = React.forwardRef(SvgIcon);
ForwardRef.displayName = 'IconCalendarEvent';

export { ForwardRef as IconCalendarEvent };
