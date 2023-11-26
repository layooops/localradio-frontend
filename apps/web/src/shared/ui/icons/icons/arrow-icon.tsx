import { memo } from 'react';
import type { SvgIconConstituentValues } from '@/shared/lib/types/svg-icon-constituent-values.interface';

export const ArrowIcon = memo(({ className }: SvgIconConstituentValues) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='100%'
      height='100%'
      viewBox='0 0 24 24'
      strokeWidth='2.3'
      stroke='inherit'
      fill='none'
      className={className}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <line x1='12' y1='5' x2='12' y2='19' />
      <line x1='18' y1='13' x2='12' y2='19' />
      <line x1='6' y1='13' x2='12' y2='19' />
    </svg>
  );
});
