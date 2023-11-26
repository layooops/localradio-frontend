import { useUnit } from 'effector-react';
import type { Mix } from '@/shared/api/graphql/__generated__/schema.graphql';
import { clsxm } from '@/shared/lib/helpers/clsxm';
import { NextImage } from '@/shared/ui/next-image/next-image';
import { $currentMixPlayer } from '../model/current-mix-player.model';
import type { PlayerElementProps } from '../types/sc-toggle.interface';
import { SCToggleButton } from './sc-toggle-button';

export const SCToggleElement = ({
  mix,
  mixLink: SCLink,
  page = 'mix',
}: PlayerElementProps) => {
  const attributes = mix?.attributes;
  const mixId = mix?.id;

  const { currentMixPlayer } = useUnit({
    currentMixPlayer: $currentMixPlayer,
  });

  return (
    <div
      className={clsxm(
        'hidden  h-full text-[0.8rem] font-medium uppercase  xl:text-[0.875rem] 2xl:text-[0.95rem]',
        { 'flex justify-center': currentMixPlayer === 'audio' },
        { 'aspect-square lg:aspect-video': page === 'mix' },
      )}
    >
      <div className='relative flex aspect-square flex-col items-center justify-center md:w-auto'>
        <div className='relative h-full w-full'>
          <NextImage
            src={attributes?.image.data?.attributes?.url ?? ''}
            alt={attributes?.name ?? ''}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        {SCLink && (
          <SCToggleButton
            attributes={attributes as Mix}
            mixLink={SCLink}
            mixId={mixId}
          />
        )}
      </div>
    </div>
  );
};
