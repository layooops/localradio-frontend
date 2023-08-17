import type { CurrentGlobalPlayer } from '@/features/choose-global-player/model/current-global-player.model';
import type { Maybe } from 'yup';

import { useEffect, useState } from 'react';
import { useUnit } from 'effector-react';

import { $currentGlobalPlayer } from '@/features/choose-global-player/model/current-global-player.model';
import { $linkToMix } from '@/widgets/players/soundcloud/model/soundcloud.model';

interface UsePlayerIsActive {
  slug: Maybe<string>;
  isPlaying: boolean;
  playerVariant: CurrentGlobalPlayer;
}

export const usePlayerIsActive = (props: UsePlayerIsActive) => {
  const { slug, isPlaying, playerVariant } = props;
  const [isActive, setIsActive] = useState(false);
  const { linkToMix, currentGlobalPlayer } = useUnit({
    linkToMix: $linkToMix,
    currentGlobalPlayer: $currentGlobalPlayer,
  });

  useEffect(() => {
    setIsActive(
      currentGlobalPlayer === playerVariant && linkToMix === slug && isPlaying,
    );
  }, [currentGlobalPlayer, linkToMix, slug, isPlaying, playerVariant]);

  return {
    isActive,
    linkToMix,
  };
};
