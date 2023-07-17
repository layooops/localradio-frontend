import { SvgIconConstituentValues } from '@/shared/lib/types/svg-icon-constituent-values.interface';

export const HomeIcon = ({ className }: SvgIconConstituentValues) => {
  return (
    <svg
      width='100%'
      height='100%'
      className={className}
      viewBox='0 0 404 386'
      fill='fill-inherit'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        className='fill-inherit'
        d='M395.947 161.653L217.067 5.75979C208.27 -1.90167 195.176 -1.88607 186.411 5.79104L8.29069 161.698C-7.89731 175.87 2.12921 202.531 23.64 202.531C36.5045 202.531 46.9374 212.963 46.9374 225.834V361.954C46.9374 374.829 57.3748 385.251 70.24 385.251H151.885L151.891 265.954C151.891 258.672 157.781 252.782 165.052 252.782H239.219C246.489 252.782 252.391 258.672 252.391 265.954V385.256H329.932C342.807 385.256 353.235 374.835 353.235 361.959V225.839C353.235 212.964 363.667 202.536 376.532 202.536H380.636C402.177 202.526 412.188 175.807 395.948 161.662'
      />
    </svg>
  );
};
