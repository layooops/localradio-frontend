import type {
  CurrentMixPlayer,
  TogglePlayerLinks,
} from '../types/toggle-player.interface';

import { useUnit } from 'effector-react';

import { $currentGlobalPlayer } from '@/features/choose-global-player/model/current-global-player.model';
import { clsxm } from '@/shared/lib/helpers/clsxm';
import {
  $currentSCLink,
  $isSCPlaying,
} from '@/widgets/players/soundcloud/model/soundcloud.model';
import {
  $currentYoutubeLink,
  $isYoutubePlaying,
} from '@/widgets/players/youtube/model/youtube.model';

import {
  $currentMixPlayerError,
  toggleMixPlayerEv,
} from '../model/current-mix-player.model';
import { PlayerToggleButton } from './player-toggle-button';

interface PlayerToggleProps {
  currentMixPlayer: CurrentMixPlayer;
  page?: 'mix' | 'home';
  links: TogglePlayerLinks;
}

export const PlayerToggle = ({
  page,
  currentMixPlayer,
  links,
}: PlayerToggleProps) => {
  const {
    currentGlobalPlayer,
    isYoutubePlaying,
    isSCPlaying,
    currentSCLink,
    currentYoutubeLink,
    toggleMixPlayer,
    currentMixPlayerError,
  } = useUnit({
    currentGlobalPlayer: $currentGlobalPlayer,
    isYoutubePlaying: $isYoutubePlaying,
    isSCPlaying: $isSCPlaying,
    currentSCLink: $currentSCLink,
    currentYoutubeLink: $currentYoutubeLink,
    toggleMixPlayer: toggleMixPlayerEv,
    currentMixPlayerError: $currentMixPlayerError,
  });

  return (
    <div
      className={clsxm(
        'col-span-1 grid w-full grid-cols-2 gap-0.5 rounded-[12px]   bg-black p-[2px] text-[0.8rem] font-medium uppercase xl:gap-1 xl:text-[0.875rem] 2xl:text-[0.95rem]',
        {
          'gap-1 md:gap-1.5 lg:gap-1 lg:p-[2px]': page === 'home',
        },
      )}
    >
      <PlayerToggleButton
        aria-label='Toggle video (youtube) player'
        disabled={!links.youtube || currentMixPlayerError === 'video'}
        playerType='video'
        onClick={() => links.youtube && toggleMixPlayer('video')}
        currentMixPlayer={currentMixPlayer}
        text='Video'
        active={
          currentYoutubeLink === links.youtube &&
          isYoutubePlaying &&
          currentGlobalPlayer === 'youtube'
        }
      />
      <PlayerToggleButton
        aria-label='Toggle audio(soundcloud) player'
        disabled={!links.soundcloud}
        playerType='audio'
        onClick={() => links.soundcloud && toggleMixPlayer('audio')}
        currentMixPlayer={currentMixPlayer}
        text='Audio'
        active={
          currentSCLink === links.soundcloud &&
          isSCPlaying &&
          currentGlobalPlayer === 'soundcloud'
        }
      />
    </div>
  );
};
