import { useEffect } from 'react';
import { useUnit } from 'effector-react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { clsxm } from '@/shared/lib/helpers/clsxm';
import { useScroll } from '@/shared/lib/hooks/use-scroll.hook';
import { Button } from '@/shared/ui/button/button';
import { clickArchiveNavType } from '@/widgets/navigation/archive/model/archive-nav.model';
import { HeaderStreamPlayerWithMemo } from '@/widgets/players/stream/ui/header-stream-player';
import LocalLogo from '~/icons/LocalLogo.svg';

import { headerNav } from '../lib/header-nav';
import { $isOpenedMobileMenu, openMobileMenu } from '../model/header.model';
import { MainHeaderDesktop } from './main-header-desktop';
import { MainHeaderMobile } from './main-header-mobile';

export const MainHeader = () => {
  const { isOpenedMenu, openMenu, clickArchNavType } = useUnit({
    isOpenedMenu: $isOpenedMobileMenu,
    openMenu: openMobileMenu,
    clickArchNavType: clickArchiveNavType,
  });

  const { visible } = useScroll();

  const router = useRouter();

  useEffect(() => {
    isOpenedMenu &&
      router.events.on('routeChangeComplete', () => {
        openMenu(false);
      });
  }, [router.events, isOpenedMenu, openMenu]);

  const mainHeaderClasses = clsxm(
    {
      '-top-[calc(var(--header-height)+2px)]  lg:-top-[var(--header-height)]':
        !visible,
    },
    { 'top-0': visible },
    'sticky isolate z-20   flex w-full items-center border-b-2 border-black',
    'bg-primary text-[0.95rem] font-semibold leading-none transition-all  duration-300  sm:text-[1.05rem]',
    'lg:h-[var(--header-height)] lg:bg-opacity-75 lg:px-2 lg:pt-0  lg:backdrop-blur-[177px] lg:backdrop-saturate-150 xl:px-3.5 2xl:text-[1.15rem]',
  );

  return (
    <div onClick={() => clickArchNavType(null)} className={mainHeaderClasses}>
      <header className='sticky z-[14] grid h-full w-full  items-center lg:flex '>
        <Link
          href='/'
          className=' relative hidden h-full w-24 min-w-[5.4rem] cursor-pointer lg:flex 2xl:w-28'
          aria-label='Home'
        >
          <Image src={LocalLogo} alt='Local Radio logo' />
        </Link>

        <nav className='relative flex  w-full   flex-col '>
          <MainHeaderDesktop />
          <div className='h-[30px] max-xxs:hidden lg:hidden '>
            <ul className='flex h-full  items-center justify-between border-t-2 border-black px-1.5 uppercase'>
              {headerNav.map((navItem) => (
                <li key={navItem.text}>
                  <Button
                    href={navItem.href}
                    variant='clear'
                    className='text-[0.875rem] font-semibold'
                  >
                    {navItem.text}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <div className='w-full bg-primary lg:hidden'>
            <HeaderStreamPlayerWithMemo />
          </div>
          <MainHeaderMobile isOpenedMenu={isOpenedMenu} />
        </nav>
      </header>
    </div>
  );
};
