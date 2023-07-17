import { ButtonHTMLAttributes } from 'react';
import { clsxm } from '@/shared/lib/clsxm';

interface HeaderMenuButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isOpened: boolean;
}

export const HeaderMenuButton = ({
  onClick,
  isOpened,
}: HeaderMenuButtonProps) => {
  return (
    <button
      onClick={onClick}
      type='button'
      aria-label='Toggle navigation menu'
      className='flex h-[35px] w-[35px]  flex-col items-center  justify-center px-1.5   '
    >
      <div
        className={clsxm(
          'h-[2px] w-4  translate-y-[7px] rotate-0 bg-black transition-all duration-100',
          { 'translate-y-full -rotate-45': isOpened }
        )}
      />
      <div
        className={clsxm(
          'h-[2px] w-4  bg-black opacity-100 transition-all duration-100',
          { 'opacity-0': isOpened }
        )}
      />
      <div
        className={clsxm(
          'h-[2px] w-4  -translate-y-[7px] rotate-0 bg-black transition-all duration-100',
          { '-translate-y-full rotate-45': isOpened }
        )}
      />
    </button>
  );
};
