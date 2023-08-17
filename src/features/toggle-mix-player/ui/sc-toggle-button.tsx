import type { PlayerElementProps } from '../types/sc-toggle.interface';
import type { Mix } from '@/shared/api/graphql/__generated__/schema.graphql';
import type { HTMLAttributes } from 'react';
import type { Maybe } from 'yup';

import clsx from 'clsx';

import { clsxm } from '@/shared/lib/helpers/clsxm';
import { Button } from '@/shared/ui/button/button';
import { Icon } from '@/shared/ui/icons';

import { useSCPlayer } from '../hooks/use-sc-toggle.hook';

interface SCToggleButtonProps
  extends Pick<PlayerElementProps, 'mixLink'>,
    HTMLAttributes<HTMLButtonElement> {
  attributes: Maybe<Mix>;
  mixId: Maybe<string>;
}

export const SCToggleButton = ({
  attributes,
  mixId,
  mixLink,
  className,
}: SCToggleButtonProps) => {
  const { isActive, linkToMix, handlePlay } = useSCPlayer({
    mixId,
    slug: attributes?.slug,
    mixLink,
  });

  return (
    <Button
      type='button'
      aria-label='Play and pause soundcloud player'
      onClick={handlePlay}
      className={clsx(
        'group absolute flex aspect-square h-[clamp(2rem,8vw,2.5rem)] w-[clamp(2rem,8vw,2.5rem)] items-center justify-center overflow-hidden md:h-12 md:w-12 2xl:h-16 2xl:w-16',
        className,
      )}
    >
      <div
        className={clsxm(
          'absolute inset-0 overflow-hidden rounded-lg bg-white backdrop-invert transition duration-150 hover:bg-white md:bg-opacity-75 md:backdrop-blur-[20px] md:backdrop-saturate-200',
          {
            'bg-opacity-100': isActive,
          },
        )}
      />
      <div className='w-[0.9rem] 2xl:w-[1.2rem]'>
        {(!isActive || linkToMix !== attributes?.slug) && (
          <div className='translate-x-[1px]'>
            <Icon.PlayIcon />
          </div>
        )}
        {isActive && (
          <div className='translate-x-[1px]'>
            <Icon.PauseIcon />
          </div>
        )}
      </div>
    </Button>
  );
};
