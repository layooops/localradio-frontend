import type { MixCardButtonProps } from '../../lib/types/mix-button.interface';

import { memo } from 'react';

import { clsxm } from '@/shared/lib/helpers/clsxm';
import { Button } from '@/shared/ui/button/button';
import { Icon } from '@/shared/ui/icons';

import { MixCardButtonIcon } from './mix-card-button-icon';

export const MixCardButton = ({
  ariaLabel,
  variant,
  sizeVariant = 'standard',
  active,
  onClick,
}: MixCardButtonProps) => {
  if (sizeVariant === 'standard') {
    return (
      <Button
        sizeVariant='small'
        type='button'
        colorVariant='secondary'
        aria-label={ariaLabel}
        onClick={onClick}
        className={clsxm(
          'group/icon relative aspect-square  transition-all duration-200 ease-out',
          {
            'bg-primary fill-black opacity-100': active,
          },
          {
            'fill-primary': !active,
          },
        )}
      >
        <div
          className={clsxm(
            'absolute inset-0 flex items-center  justify-center opacity-0 transition-all duration-0 ',
            { 'group-hover/icon:opacity-100': !active },
          )}
        >
          <Icon.PlayIcon className='w-[1rem] lg:w-[1.12rem] 2xl:w-[1.2rem]' />
        </div>
        <div
          className={clsxm(
            'absolute inset-0 flex h-full w-full items-center justify-center  fill-black opacity-0 transition-all duration-0',
            {
              'opacity-100': active,
            },
          )}
        >
          <Icon.PauseIcon className='w-[1rem] lg:w-[1.12rem] 2xl:w-[1.2rem]' />
        </div>
        <MixCardButtonIcon isActive={active} variant={variant} />
      </Button>
    );
  }
  return (
    <button
      type='button'
      aria-label={ariaLabel}
      onClick={onClick}
      className='flex h-full w-full items-center justify-center bg-white bg-opacity-30 transition-all group-hover:bg-opacity-10 group-hover:backdrop-blur-0 md:backdrop-blur-[2px]'
    >
      <div className='w-[0.95rem] 2xl:w-[1.25rem]'>
        {!active && <Icon.PlayIcon />}
        {active && <Icon.PauseIcon />}
      </div>
    </button>
  );
};

export const MixCardButtonWithMemo = memo(MixCardButton);
