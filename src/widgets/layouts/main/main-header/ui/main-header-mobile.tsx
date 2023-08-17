import Image from 'next/image';
import Link from 'next/link';

import { clsxm } from '@/shared/lib/helpers/clsxm';
import { LocalSocialsList } from '@/widgets/layouts/main/local-socials-List/ui/local-socials-list';
import Heart from '~/icons/heart.png';

import { headerNav } from '../lib/header-nav';
import { HeaderMobileLink } from './header-mobile-link';

interface MainHeaderMobileProps {
  isOpenedMenu: boolean;
}

export const MainHeaderMobile = ({ isOpenedMenu }: MainHeaderMobileProps) => {
  return (
    <div
      className={clsxm(
        'absolute -top-[200vh] -z-10 flex w-full flex-col border-black  text-[0.95rem] uppercase transition-all duration-300 lg:hidden',
        {
          'top-[calc(var(--header-height)+30px+4px)] xxs:top-[calc(var(--header-height)+60px+4px)]':
            isOpenedMenu,
        },
      )}
    >
      <div className='flex min-h-[100vh] flex-col items-center overflow-scroll bg-primary scrollbar-hide'>
        <ul className=' flex w-full flex-col'>
          {headerNav.map(({ text, href }) => (
            <li
              key={text}
              className='flex  w-full items-center border-b-2 border-black px-1.5  xl:pt-[1px] 2xl:pt-0.5'
            >
              <HeaderMobileLink href={href} text={text} />
            </li>
          ))}

          <li className=' flex w-full items-center border-b-2 border-black  xl:pt-[1px] 2xl:pt-0.5'>
            <Link
              href='https://bit.ly/lrsite'
              className='h-full w-full  items-center uppercase  '
            >
              <div className='flex items-center justify-center py-3'>
                Donate
                <span className='relative mb-0.5 w-[1.1rem] pl-1 text-red-color'>
                  <Image
                    src={Heart}
                    alt=''
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                  />
                </span>
              </div>
            </Link>
          </li>
        </ul>
        <LocalSocialsList variant='header' />
      </div>
    </div>
  );
};
