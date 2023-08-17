import type { SvgIconConstituentValues } from '@/shared/lib/types/svg-icon-constituent-values.interface';

export const PauseIcon = ({ className }: SvgIconConstituentValues) => {
  return (
    <svg
      className={className}
      width='100%'
      height='100%'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 600 600'
    >
      <path d='M143.2 118.36h101.19a10 10 0 0 1 10 10v343.32a10 10 0 0 1-10 10H143.2a10 10 0 0 1-9.95-10V128.32a10 10 0 0 1 9.95-9.96zm211.91 0H456.3a10 10 0 0 1 9.95 10v343.32a10 10 0 0 1-9.95 10H355.11a10 10 0 0 1-9.95-10V128.32a10 10 0 0 1 9.95-9.96z' />
    </svg>
  );
};
