import { memo } from 'react';
import type { SvgIconConstituentValues } from '@/shared/lib/types/svg-icon-constituent-values.interface';

interface CloseIcon extends SvgIconConstituentValues {
  weight: 'light' | 'bold';
}

export const CloseIcon = memo(({ weight = 'light', className }: CloseIcon) => {
  if (weight === 'bold') {
    return (
      <svg
        className={className}
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        width='100%'
        height='100%'
        viewBox='0 0 357 357'
      >
        <g>
          <g id='close'>
            <polygon
              points='357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3
			214.2,178.5 		'
            />
          </g>
        </g>
      </svg>
    );
  }

  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='100%'
      height='100%'
      viewBox='0 0 24 24'
      strokeWidth='inherit'
      stroke='inherit'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <line x1='18' y1='6' x2='6' y2='18' />
      <line x1='6' y1='6' x2='18' y2='18' />
    </svg>
  );
});
