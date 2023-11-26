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
      fill='color(display-p3 .0314 .0392 .0118)'
      d='M6.9791 3.074a6.0001 6.0001 0 0 1 4.988 1.425l.037.033.034-.03a6 6 0 0 1 4.733-1.44l.246.036a6.0002 6.0002 0 0 1 4.8429 7.184 6.0002 6.0002 0 0 1-1.4789 2.8241l-.18.185-.048.041-7.45 7.379a.9998.9998 0 0 1-1.313.082l-.094-.082-7.493-7.422a5.9997 5.9997 0 0 1 .232-8.8147A6 6 0 0 1 6.979 3.074Z'
    />
  </svg>
);

const ForwardRef = React.forwardRef(SvgIcon);
ForwardRef.displayName = 'IconHeartFilled';

export { ForwardRef as IconHeartFilled };
