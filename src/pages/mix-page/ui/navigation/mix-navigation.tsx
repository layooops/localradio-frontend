import type { TogglePlayerLinks } from '@/features/toggle-mix-player/types/toggle-player.interface';
import type {
  Maybe,
  MixEntity,
} from '@/shared/api/graphql/__generated__/schema.graphql';

import { useEffect } from 'react';
import { useUnit } from 'effector-react';

import {
  $currentMixPlayer,
  toggleMixPlayerEv,
} from '@/features/toggle-mix-player/model/current-mix-player.model';
import {
  SCToggleElement,
  YoutubeToggleElement,
} from '@/features/toggle-mix-player/ui';
import { PlayerToggle } from '@/features/toggle-mix-player/ui/player-toggle';

import { MixSlideButton } from './mix-slide-button';

interface MixNavigationProps {
  siblingsSlug?: { prev?: Maybe<string>; next?: Maybe<string> };
  links: TogglePlayerLinks;
  mix?: MixEntity;
}

export const MixNavigation = ({
  siblingsSlug,
  links,
  mix,
}: MixNavigationProps) => {
  const { currentMixPlayer, toggleMixPlayer } = useUnit({
    currentMixPlayer: $currentMixPlayer,
    toggleMixPlayer: toggleMixPlayerEv,
  });

  useEffect(() => {
    if (!links.soundcloud && links.youtube) toggleMixPlayer('video');
    if (!links.youtube && links.soundcloud) toggleMixPlayer('audio');
  }, [links, toggleMixPlayer]);

  return (
    <>
      <div className='py-0.5 2xl:py-2'>
        <div className='flex h-fit flex-1 items-end gap-1 text-[0.8rem] font-medium   uppercase xl:text-[0.875rem]  2xl:text-[0.95rem]'>
          <MixSlideButton slug={siblingsSlug?.prev} direction='left' />
          <PlayerToggle links={links} currentMixPlayer={currentMixPlayer} />
          <MixSlideButton slug={siblingsSlug?.next} direction='right' />
        </div>
      </div>

      <div className='flex flex-col'>
        {links.youtube && (
          <YoutubeToggleElement
            className='aspect-video'
            youtubeVideoLink={links.youtube}
            page='mix'
          />
        )}
        <SCToggleElement page='mix' mix={mix} mixLink={links.soundcloud} />
      </div>
    </>
  );
};
