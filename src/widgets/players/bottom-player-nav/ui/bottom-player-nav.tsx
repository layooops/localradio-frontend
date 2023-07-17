import { useList, useUnit } from 'effector-react';
import Link from 'next/link';
import { useState } from 'react';
import { MixCardWithMemo } from '@/entities/archive/ui/cards/mix-card/mix-card';
import { setCurrentGlobalPlayerEv } from '@/features/choose-global-player/model/current-global-player.model';
import { clsxm } from '@/shared/lib/helpers/clsxm';
import { Icon } from '@/shared/ui/icons';
import { ListIcon } from '@/shared/ui/icons/icons/list-icon';
import { $randomMixes } from '../../soundcloud/model/sc-random-mixes.model';
import {
  $isClickedPlaySc,
  $isOpenedWidget,
  $linkToMix,
  openWidgetEv,
} from '../../soundcloud/model/soundcloud.model';

interface BottomPlayerNavProps {
  loaded: boolean;
  variant: 'soundcloud' | 'youtube';
}

export const BottomPlayerNav = ({ loaded, variant }: BottomPlayerNavProps) => {
  const [openedMoreMixes, setOpenedMoreMixes] = useState(false);

  const {
    isClickedPlaySc,
    linkToMix,
    isOpenedScWidget,
    setCurrentGlobalPlayer,
    openScWidget,
  } = useUnit({
    isClickedPlaySc: $isClickedPlaySc,
    linkToMix: $linkToMix,
    setCurrentGlobalPlayer: setCurrentGlobalPlayerEv,
    openScWidget: openWidgetEv,
    isOpenedScWidget: $isOpenedWidget,
  });

  const mixes = useList($randomMixes, {
    keys: [isClickedPlaySc, linkToMix],
    fn: (mix) => (
      <MixCardWithMemo
        key={mix.attributes?.name}
        sizeVariant='small'
        {...mix}
      />
    ),
  });

  return (
    <div className='absolute bottom-full right-0'>
      <div className='relative  flex w-fit self-end'>
        {variant === 'soundcloud' && (
          <div
            className={clsxm(
              'border-t-2 border-black bg-primary !transition-transform !duration-200 !ease-in-out',
              ' absolute left-0 top-0 flex w-full  translate-y-0 flex-col  rounded-tl-lg  !border-b-0 !border-l-2 !px-0',
              { '-translate-y-full': openedMoreMixes }
            )}
          >
            {mixes}
          </div>
        )}
        <div
          className={clsxm(
            'relative isolate  ml-auto flex h-7 items-end justify-center text-xs font-medium uppercase leading-none  sm:h-8 md:h-9  lg:text-sm',
            '[&>*]:border-t-2 [&>*]:border-black [&>*]:bg-primary  [&>*]:transition-colors    md:hover:[&>*]:fill-secondary-dark',
            'md:hover:[&>*]:stroke-secondary-dark md:hover:[&>*]:text-secondary-dark',

            { hidden: !loaded }
          )}
        >
          <div
            className={clsxm(
              'flex h-full items-center justify-center border-l-2 border-r-2  md:pt-0',
              { 'rounded-tl-lg': !openedMoreMixes }
            )}
          >
            <Link
              className='flex h-full items-center px-2.5 text-center sm:px-3 md:px-4 2xl:px-6'
              href={'/archive/' + linkToMix}
            >
              To mix
            </Link>
          </div>

          <button
            type='button'
            onClick={() => {
              openScWidget(!isOpenedScWidget);
            }}
            aria-label='Collaps Soundcloud Player Button'
            className='group/item relative flex  h-full w-10 items-center justify-center  gap-2 border-r-2  border-t-2 border-black bg-primary stroke-black !p-0 uppercase  transition duration-150  ease-out sm:w-14'
          >
            <div
              className={clsxm(
                'h-[2.5px]  w-3 bg-black transition-all duration-150 lg:w-3.5 2xl:h-[3px] ',
                {
                  'group-hover/item:bg-secondary-dark': isOpenedScWidget,
                },
                {
                  'bg-gray-color opacity-60 blur-[1px]': !isOpenedScWidget,
                }
              )}
            />
            <div
              className={clsxm(
                'absolute inset-0 flex items-center justify-center opacity-100 transition-all   duration-100',
                { 'opacity-0': isOpenedScWidget }
              )}
            >
              <div className='w-4 rotate-180 lg:w-5'>
                <Icon.ArrowIcon />
              </div>
            </div>
          </button>

          {variant === 'soundcloud' && (
            <button
              type='button'
              onClick={() => setOpenedMoreMixes(!openedMoreMixes)}
              aria-label='Play next'
              className='group/item relative flex h-full  w-10 items-center justify-center gap-2  border-r-2 stroke-black !p-0  uppercase sm:w-14 '
            >
              <div
                className={clsxm(
                  'h-4 -translate-x-[1px] transition-all duration-150 sm:h-[1.2rem] lg:-translate-x-0.5 xl:h-5',
                  { 'stroke-gray-color opacity-60 blur-[1px]': openedMoreMixes }
                )}
              >
                <ListIcon />
              </div>

              <div
                className={clsxm(
                  'absolute inset-0 flex items-center justify-center opacity-0 transition-all  duration-100',
                  { 'opacity-100 ': openedMoreMixes }
                )}
              >
                <div className='w-4 lg:w-5'>
                  <Icon.ArrowIcon />
                </div>
              </div>
            </button>
          )}

          <button
            type='button'
            onClick={() => {
              setCurrentGlobalPlayer(null);
            }}
            aria-label='Close Soundcloud Player Button'
            className='flex h-full w-10 items-center  justify-center stroke-black   !p-0 uppercase hover:stroke-secondary-dark   sm:w-14 '
          >
            <div className='h-4 stroke-[2.4px] md:h-[24px]'>
              <Icon.CloseIcon weight='light' />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
