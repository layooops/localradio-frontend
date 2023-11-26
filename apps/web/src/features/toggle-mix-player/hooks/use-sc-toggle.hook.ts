import { useUnit } from 'effector-react';
import { useCallback } from 'react';
import { fetchRandomMixesFx } from '@/widgets/players/soundcloud/model/sc-random-mixes.model';
import {
  $currentSCLink,
  $isSCPlaying,
  isClickedPlayScEv,
  setCurrentScLinkEv,
  setIsSCPlayingEv,
  setLinkToMixEv,
} from '@/widgets/players/soundcloud/model/soundcloud.model';
import { setCurrentGlobalPlayerEv } from '@/features/choose-global-player/model/current-global-player.model';
import type { UsePlayerProps } from './use-player.interface';
import { usePlayerIsActive } from './use-player-is-active.hook';

export const useSCPlayer = (props: UsePlayerProps) => {
  const { mixId, mixLink, slug } = props;

  const {
    SCIsPlaying,
    setCurrentScLink,
    setIsClickedPlaySc,
    fetchRandomMixes,
    currentSCLink,
    setSCIsPlaying,
  } = useUnit({
    currentSCLink: $currentSCLink,
    SCIsPlaying: $isSCPlaying,
    setCurrentScLink: setCurrentScLinkEv,
    setIsClickedPlaySc: isClickedPlayScEv,
    fetchRandomMixes: fetchRandomMixesFx,
    setSCIsPlaying: setIsSCPlayingEv,
  });

  const { setLinkToMix, setCurrentGlobalPlayer } = useUnit({
    setLinkToMix: setLinkToMixEv,
    setCurrentGlobalPlayer: setCurrentGlobalPlayerEv,
  });

  const { isActive, linkToMix } = usePlayerIsActive({
    slug,
    isPlaying: SCIsPlaying,
    playerVariant: 'soundcloud',
  });

  const handlePlay = useCallback(() => {
    setCurrentGlobalPlayer('soundcloud');
    slug && setLinkToMix(slug);
    if (mixLink === currentSCLink && SCIsPlaying) {
      setSCIsPlaying(false);
      setIsClickedPlaySc(false);
    } else if (mixLink === currentSCLink && !SCIsPlaying) {
      setIsClickedPlaySc(true);
    } else {
      setIsClickedPlaySc(true);
    }
    setCurrentScLink(mixLink);
    mixId && fetchRandomMixes(mixId);
  }, [
    mixLink,
    mixId,
    slug,
    currentSCLink,
    SCIsPlaying,
    fetchRandomMixes,
    setIsClickedPlaySc,
    setCurrentGlobalPlayer,
    setLinkToMix,
    setCurrentScLink,
    setSCIsPlaying,
  ]);

  return { handlePlay, isActive, linkToMix };
};
