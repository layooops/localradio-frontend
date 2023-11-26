import { useUnit } from 'effector-react';
import { useCallback, useEffect, useRef } from 'react';
import { $currentGlobalPlayer } from '@/features/choose-global-player/model/current-global-player.model';
import {
  $isClickedStreamPlay,
  $isStreamLoaded,
  isClickedStreamPlayEv,
} from '../model/stream';

export const useStreamAudioHook = () => {
  const {
    isStreamLoaded,
    isStreamPlayed,
    currentGlobalPlayer,
    isClickedStreamPlay,
  } = useUnit({
    isStreamLoaded: $isStreamLoaded,
    isStreamPlayed: $isClickedStreamPlay,
    currentGlobalPlayer: $currentGlobalPlayer,
    isClickedStreamPlay: isClickedStreamPlayEv,
  });

  const audioPlayer = useRef<HTMLAudioElement>(null);

  const play = () => {
    audioPlayer.current!.volume = 1;
    audioPlayer.current?.play();
  };

  const pause = useCallback(() => {
    audioPlayer.current!.pause();
    isClickedStreamPlay(false);
  }, [isClickedStreamPlay]);

  useEffect(() => {
    currentGlobalPlayer !== 'stream' && pause();
  }, [currentGlobalPlayer, pause]);

  useEffect(() => {
    isStreamLoaded && isStreamPlayed ? play() : pause();
  }, [isStreamLoaded, isStreamPlayed, pause]);

  return {
    audioPlayer,
  };
};
