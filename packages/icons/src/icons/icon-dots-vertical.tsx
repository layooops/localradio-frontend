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
      d='M11 12a1.0001 1.0001 0 1 0 2.0002-.0001A1.0001 1.0001 0 0 0 11 12Zm0 7a1.0001 1.0001 0 1 0 2.0002-.0001A1.0001 1.0001 0 0 0 11 19Zm0-14a1.0002 1.0002 0 0 0 1.7071.7071A1.0002 1.0002 0 0 0 12 4a1 1 0 0 0-1 1Z'
    />
  </svg>
);

const ForwardRef = React.forwardRef(SvgIcon);
ForwardRef.displayName = 'IconDotsVertical';

export { ForwardRef as IconDotsVertical };
