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
      d='M19.5001 7a9 9 0 0 0-7.5-4 8.991 8.991 0 0 0-7.484 4m6.984-4a16.9882 16.9882 0 0 0-1.826 4M12.5 3a16.9897 16.9897 0 0 1 1.828 4m5.1721 10a8.9998 8.9998 0 0 1-7.5 4 8.991 8.991 0 0 1-7.484-4m6.984 4a16.9882 16.9882 0 0 1-1.826-4M12.5 21a16.9897 16.9897 0 0 0 1.828-4M2 10l1 4 1.5-4L6 14l1-4m10 0 1 4 1.5-4 1.5 4 1-4M9.5 10l1 4 1.5-4 1.5 4 1-4'
    />
  </svg>
);

const ForwardRef = React.forwardRef(SvgIcon);
ForwardRef.displayName = 'IconWorldWww';

export { ForwardRef as IconWorldWww };
