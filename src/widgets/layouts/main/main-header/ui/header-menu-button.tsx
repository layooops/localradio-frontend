import { useUnit } from 'effector-react';

import { clsxm } from '@/shared/lib/helpers/clsxm';

import { $isOpenedMobileMenu, openMobileMenu } from '../model/header.model';

export const HeaderMenuButton = () => {
  const { isOpenedMenu, openMenu } = useUnit({
    isOpenedMenu: $isOpenedMobileMenu,
    openMenu: openMobileMenu,
  });
  const handleOpenMenu = () => openMenu(!isOpenedMenu);
  return (
    <button
      onClick={handleOpenMenu}
      type='button'
      aria-label='Toggle navigation menu'
      className='flex h-[35px] w-[35px]  flex-col items-center  justify-center px-1.5   '
    >
      <div
        className={clsxm(
          'h-[2px] w-4  translate-y-[7px] rotate-0 bg-black transition-all duration-100',
          { 'translate-y-full -rotate-45': isOpenedMenu },
        )}
      />
      <div
        className={clsxm(
          'h-[2px] w-4  bg-black opacity-100 transition-all duration-100',
          { 'opacity-0': isOpenedMenu },
        )}
      />
      <div
        className={clsxm(
          'h-[2px] w-4  -translate-y-[7px] rotate-0 bg-black transition-all duration-100',
          { '-translate-y-full rotate-45': isOpenedMenu },
        )}
      />
    </button>
  );
};
