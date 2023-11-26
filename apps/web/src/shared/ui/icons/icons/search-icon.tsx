import type { SvgIconConstituentValues } from '@/shared/lib/types/svg-icon-constituent-values.interface';

export const SearchIconX = ({ ...rest }: SvgIconConstituentValues) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='100%'
      height='100%'
      viewBox='0 0 24 24'
      strokeWidth='3'
      stroke='inherit'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...rest}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <circle cx='10' cy='10' r='7' />
      <line x1='21' y1='21' x2='15' y2='15' />
    </svg>
  );
};
