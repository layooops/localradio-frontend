import { memo } from 'react';
import { useUnit } from 'effector-react';

import { clsxm } from '@/shared/lib/helpers/clsxm';
import { Icon } from '@/shared/ui/icons';

import { $isStreamLoaded, $streamIsAvailable } from '../model/stream';
import { HeaderStreamMarqueeButton } from './header-stream-marquee-button';

export const HeaderStreamPlayer = () => {
  const { streamIsLoaded, streamIsAvailable } = useUnit({
    streamIsLoaded: $isStreamLoaded,
    streamIsAvailable: $streamIsAvailable,
  });

  return (
    <div className='f grid grid-cols-1 border-t-2 border-black lg:mx-0  lg:rounded-lg lg:border-t-0 lg:bg-primary lg:p-0.5'>
      <div className='group flex h-[30px] w-full max-w-[100vw] flex-1 items-center overflow-hidden text-[0.875rem] leading-none lg:h-6 lg:rounded-lg lg:bg-white/70 lg:text-[0.8rem] lg:backdrop-blur xl:text-[0.875rem] 2xl:h-7 2xl:text-[0.95rem]'>
        {streamIsAvailable && !streamIsLoaded && (
          <div className='mx-2'>
            <Icon.Loader className='h-[15px] w-[15px] fill-black text-gray-200  dark:text-gray-600 2xl:h-[1.25rem] 2xl:w-[1.25rem]' />
          </div>
        )}
        <HeaderStreamMarqueeButton
          streamIsLoaded={streamIsLoaded}
          streamIsAvailable={streamIsAvailable}
          disabled={!streamIsAvailable || !streamIsLoaded}
        />

        <div
          className={clsxm(
            'order-1 flex aspect-square h-full w-[35px] cursor-default items-center justify-center whitespace-nowrap bg-black px-1.5 uppercase text-primary lg:order-2  lg:aspect-auto lg:w-auto  lg:justify-start lg:px-2',
            {
              'text-[red]': streamIsAvailable,
            },
          )}
        >
          <span
            className={clsxm(' hidden text-gray-color lg:inline-block', {
              'animate-pulse-slow': streamIsAvailable,
            })}
          >
            On Air
          </span>

          <span
            className={clsxm(
              'h-[6px] w-[6px] rounded-full  bg-gray-color lg:hidden',
              {
                'animate-pulse-slow bg-[red]': streamIsAvailable,
              },
            )}
          />
        </div>
      </div>
    </div>
  );
};

export const HeaderStreamPlayerWithMemo = memo(HeaderStreamPlayer);
