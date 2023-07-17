import { SvgIconConstituentValues } from '@/shared/lib/types/svg-icon-constituent-values.interface';

export const BandcampIcon = ({ className }: SvgIconConstituentValues) => {
  return (
    <svg
      className={className}
      width='100%'
      height='100%'
      viewBox='0 0 14 15'
      fill='inherit'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M7.06445 0.59375C3.31836 0.59375 0.283203 3.62891 0.283203 7.375C0.283203 11.1211 3.31836 14.1562 7.06445 14.1562C10.8105 14.1562 13.8457 11.1211 13.8457 7.375C13.8457 3.62891 10.8105 0.59375 7.06445 0.59375ZM8.38242 9.51055H3.4332L5.74922 5.24219H10.6984L8.38242 9.51055Z'
        fill='inherit'
      />
    </svg>
  );
};
