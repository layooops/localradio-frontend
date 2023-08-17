import { useUnit } from 'effector-react';

import Link from 'next/link';

import { $currentGlobalPlayer } from '@/features/choose-global-player/model/current-global-player.model';
import { clsxm } from '@/shared/lib/helpers/clsxm';
import { LocalSocialsList } from '@/widgets/layouts/main/local-socials-List/ui/local-socials-list';
import { $isOpenedWidget } from '@/widgets/players/soundcloud/model/soundcloud.model';

export const MainFooter = () => {
  const { currentGlobalPlayer, isOpenedScWidget } = useUnit({
    currentGlobalPlayer: $currentGlobalPlayer,
    isOpenedScWidget: $isOpenedWidget,
  });

  return (
    <footer>
      <div
        className={clsxm(
          'flex  flex-col  justify-between   gap-1.5 bg-black pt-2.5 lg:flex-row lg:items-end lg:pt-4 2xl:pt-5',
          {
            'pb-[var(--player-height)]':
              currentGlobalPlayer === 'soundcloud' && isOpenedScWidget,
          },
        )}
      >
        <div className='flex  h-full  flex-col gap-1.5 px-1.5 text-[0.95rem] font-medium uppercase leading-[1] text-white sm:gap-2  sm:px-2.5  md:text-[1rem]  lg:w-fit lg:px-2 lg:pb-1.5   xl:px-3.5 xl:text-[1.12rem] 2xl:pb-2.5'>
          <ul className='flex flex-col gap-0.5 lg:gap-1'>
            <li>Online radio from Voronezh, Russia</li>
            <li>We present our local scene</li>
            <li>We create a community of local artists and more</li>
          </ul>
          <LocalSocialsList variant='footer' />
        </div>

        <Link
          href='https://layooops.com/'
          className='h-full w-fit  px-1.5 pb-1.5  text-[0.75rem]  font-medium uppercase text-white sm:gap-3.5  sm:px-2.5 md:px-3   lg:mx-2 lg:my-1.5 lg:w-fit  lg:rounded-md lg:bg-transparent  lg:px-3.5 lg:pb-0 lg:pt-0.5   lg:hover:bg-white   lg:hover:text-black xl:mx-3.5   xl:text-[0.95rem] 2xl:my-2.5'
        >
          website by layooops
        </Link>
      </div>
    </footer>
  );
};
