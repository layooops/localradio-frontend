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
      d='M12 3h.393a7.5003 7.5003 0 0 0-1.2222 9.5207 7.4995 7.4995 0 0 0 9.1422 2.9252 8.9993 8.9993 0 0 1-7.4361 5.5034 8.9996 8.9996 0 0 1-9.864-8.5184A9 9 0 0 1 12 2.9919V3Z'
    />
  </svg>
);

const ForwardRef = React.forwardRef(SvgIcon);
ForwardRef.displayName = 'IconMoon';

export { ForwardRef as IconMoon };
