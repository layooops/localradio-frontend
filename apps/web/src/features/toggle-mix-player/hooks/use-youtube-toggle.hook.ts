import { useUnit } from 'effector-react';
import { useCallback } from 'react';
import { setLinkToMixEv } from '@/widgets/players/soundcloud/model/soundcloud.model';
import {
  $currentYoutubeLink,
  $isYoutubePlaying,
  isClickedPlayYoutubeEv,
  setCurrentYoutubeLinkEv,
  setIsYoutubePlayingEv,
} from '@/widgets/players/youtube/model/youtube.model';
import { setCurrentGlobalPlayerEv } from '@/features/choose-global-player/model/current-global-player.model';
import type { UsePlayerProps } from './use-player.interface';
import { usePlayerIsActive } from './use-player-is-active.hook';

export const useYoutubeBottomPlayer = (props: UsePlayerProps) => {
  const { mixLink, slug } = props;

  const {
    setCurrentYoutubeLink,
    setIsYoutubePlaying,
    setIsClickedPlayYoutube,
    currentYoutubeLink,
    youtubeIsPlaying,
  } = useUnit({
    setCurrentYoutubeLink: setCurrentYoutubeLinkEv,
    setIsYoutubePlaying: setIsYoutubePlayingEv,
    setIsClickedPlayYoutube: isClickedPlayYoutubeEv,
    currentYoutubeLink: $currentYoutubeLink,
    youtubeIsPlaying: $isYoutubePlaying,
  });
  const { setLinkToMix, setCurrentGlobalPlayer } = useUnit({
    setLinkToMix: setLinkToMixEv,
    setCurrentGlobalPlayer: setCurrentGlobalPlayerEv,
  });

  const { isActive } = usePlayerIsActive({
    slug,
    isPlaying: youtubeIsPlaying,
    playerVariant: 'youtubeBottom',
  });

  const handlePlay = useCallback(() => {
    setCurrentGlobalPlayer('youtubeBottom');
    slug && setLinkToMix(slug);
    if (mixLink === currentYoutubeLink && youtubeIsPlaying) {
      setIsYoutubePlaying(false);
      setIsClickedPlayYoutube(false);
    } else if (mixLink === currentYoutubeLink && !youtubeIsPlaying) {
      setIsClickedPlayYoutube(true);
    } else {
      setIsClickedPlayYoutube(true);
    }
    setCurrentYoutubeLink(mixLink);
  }, [
    mixLink,
    slug,
    setIsYoutubePlaying,
    setCurrentGlobalPlayer,
    setLinkToMix,
    setIsClickedPlayYoutube,
    currentYoutubeLink,
    setCurrentYoutubeLink,
    youtubeIsPlaying,
  ]);

  return { handlePlay, isActive };
};
