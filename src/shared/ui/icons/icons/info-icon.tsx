import { SvgIconConstituentValues } from '@/shared/lib/types/svg-icon-constituent-values.interface';

export const InfoIcon = ({ className }: SvgIconConstituentValues) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='44'
      height='44'
      viewBox='0 0 24 24'
      strokeWidth='2'
      stroke='#000'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M12 9h.01' />
      <path d='M11 12h1v4h1' />
    </svg>
  );
};
