import { SvgIconConstituentValues } from '@/shared/lib/types/svg-icon-constituent-values.interface';

export const MinusIcon = ({ className }: SvgIconConstituentValues) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='100%'
      height='100%'
      className={className}
      viewBox='0 0 24 24'
      strokeWidth='2'
      stroke='inherit'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <line x1='5' y1='12' x2='19' y2='12' />
    </svg>
  );
};
