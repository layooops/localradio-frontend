import type { SvgIconConstituentValues } from '@/shared/lib/types/svg-icon-constituent-values.interface';

export const PlayIcon = ({ className }: SvgIconConstituentValues) => {
  return (
    <svg
      className={className}
      width='100%'
      height='100%'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 600 600'
    >
      <title>Play</title>
      <g
        id='_x33_--Hidden-_x28_closing-up_x29_-'
        transform='translate(-772 -385)'
      >
        <g id='Drawer' transform='translate(0 43)'>
          <g id='_x32_' transform='translate(18)'>
            <path
              id='play'
              d='M1260.4 651.3L882.8 861.2c-4.4 2.4-8.2 2.7-11.2 1-3.1-1.7-4.6-5.1-4.6-10.2V433.2c0-4.8 1.5-8.2 4.6-10.2 3.1-2 6.8-1.7 11.2 1l377.6 210c4.4 2.4 6.6 5.3 6.6 8.7 0 3.3-2.2 6.2-6.6 8.6z'
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
