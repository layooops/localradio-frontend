import { useUnit } from 'effector-react';
import Link from 'next/link';
import { $currentMixPlayer } from '@/features/toggle-mix-player/model/current-mix-player.model';
import type { TogglePlayerLinks } from '@/features/toggle-mix-player/types/toggle-player.interface';
import { PlayerToggle } from '@/features/toggle-mix-player/ui/player-toggle';
import { clsxm } from '@/shared/lib/helpers/clsxm';
import { CardDate } from '@/shared/ui/card';
import { GenreListWithMemo } from '@/shared/ui/genres/genre-list/genre-list';
import type { HomePageTopProps } from './home-page-top';

interface HomePageTopInfoProps {
  homePageRandomMix?: HomePageTopProps['homePageRandomMix'];

  links: TogglePlayerLinks;
  schedulesExist: boolean;
}

export const HomePageTopInfo = ({
  homePageRandomMix,

  links,
  schedulesExist,
}: HomePageTopInfoProps) => {
  const attributes = homePageRandomMix?.data?.attributes;
  const { currentMixPlayer } = useUnit({
    currentMixPlayer: $currentMixPlayer,
  });

  return (
    <div
      className={clsxm(
        'flex flex-col overflow-hidden bg-black pb-2 lg:gap-2  lg:p-1.5  2xl:p-2 ',
        {
          'lg:pr-0 2xl:pr-0': schedulesExist,
        },
      )}
    >
      <div className='flex flex-col  bg-black font-medium text-primary lg:rounded-lg lg:bg-primary lg:p-2 lg:pt-0  lg:text-black 2xl:pb-3'>
        <div className=' px-2 py-1 md:py-1.5 lg:px-0 2xl:py-2'>
          <PlayerToggle
            links={links}
            currentMixPlayer={links.youtube ? currentMixPlayer : 'audio'}
            page='home'
          />
        </div>
        <div className='flex justify-between  px-2 lg:px-1'>
          <div className='flex w-full flex-col gap-0'>
            <div className='flex flex-col gap-1'>
              <div className='flex flex-col 2xl:gap-1'>
                <div className='flex w-fit items-center text-[0.6rem] font-medium uppercase  lg:text-[0.65rem]'>
                  Archive
                </div>

                <Link
                  className='text-[clamp(1rem,5vw,1.25rem)] font-semibold uppercase leading-[0.8] sm:text-[1.6rem] md:leading-[0.85] lg:text-[1.85rem] lg:hover:text-secondary-dark 2xl:leading-[0.8]'
                  href={'archive/' + attributes?.slug}
                >
                  {attributes?.name}
                </Link>
              </div>
              <CardDate date={attributes?.date} variant='mix' />
            </div>
            {attributes?.genres?.data.length ? (
              <div className='border-black text-black'>
                <GenreListWithMemo
                  colorVariant='primary'
                  variant='solid'
                  sizeVariant='standard'
                  genres={attributes.genres.data}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
