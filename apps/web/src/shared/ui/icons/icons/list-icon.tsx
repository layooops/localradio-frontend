import { memo } from 'react';

export const ListIcon = memo(() => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='100%'
      height='100%'
      viewBox='0 0 24 24'
      strokeWidth='2.3'
      stroke='inherit'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <line x1='9' y1='6' x2='20' y2='6' />
      <line x1='9' y1='12' x2='20' y2='12' />
      <line x1='9' y1='18' x2='20' y2='18' />
      <line x1='5' y1='6' x2='5' y2='6.01' />
      <line x1='5' y1='12' x2='5' y2='12.01' />
      <line x1='5' y1='18' x2='5' y2='18.01' />
    </svg>
  );
});
