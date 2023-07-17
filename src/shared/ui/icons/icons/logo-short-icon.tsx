import { SvgIconConstituentValues } from '@/shared/lib/types/svg-icon-constituent-values.interface';

export const LogoShortIcon = ({ className }: SvgIconConstituentValues) => {
  return (
    <svg
      className={className}
      width='100%'
      height='100%'
      viewBox='0 0 49 46'
      fill='inherit'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M48.2955 45.2219H32.8668V28.1245C28.4221 34.0625 24.293 39.5144 19.9936 45.2169H0.295532C11.0641 30.184 22.4841 15.7574 33.1574 0.975098H48.2504C48.2955 15.6121 48.2955 30.1489 48.2955 45.2219Z'
        fill='inherit'
      />
    </svg>
  );
};
