import { useUnit } from 'effector-react';
import { useEffect, useMemo, useState } from 'react';
import { $currentGlobalPlayer } from '@/features/choose-global-player/model/current-global-player.model';
import {
  $isOpenedWidget,
  $isSCPlaying,
} from '../../soundcloud/model/soundcloud.model';

const baseClasses = 'fixed bottom-0 transition duration-200 ease-out';

export const useBottomPlayerStyleHook = () => {
  const [bottomPlayerClasses, setBottomPlayerClasses] = useState(baseClasses);

  const { isOpenedScWidget, currentGlobalPlayer, isSCPlaying } = useUnit({
    currentGlobalPlayer: $currentGlobalPlayer,
    isOpenedScWidget: $isOpenedWidget,
    isSCPlaying: $isSCPlaying,
  });

  const playerTranslateStyles = useMemo(() => {
    if (
      (currentGlobalPlayer === 'soundcloud' ||
        isSCPlaying ||
        currentGlobalPlayer === 'youtubeBottom') &&
      isOpenedScWidget
    )
      return 'translate-y-0';
    if (
      currentGlobalPlayer !== 'soundcloud' &&
      currentGlobalPlayer !== 'youtubeBottom'
    )
      return 'translate-y-[400%]';
    return 'translate-y-full';
  }, [currentGlobalPlayer, isSCPlaying, isOpenedScWidget]);

  const playerPositionStyles = useMemo(() => {
    if (currentGlobalPlayer === 'soundcloud') return ' left-0 right-0 w-full';
    return 'right-0 w-fit';
  }, [currentGlobalPlayer]);

  useEffect(() => {
    setBottomPlayerClasses(
      [baseClasses, playerPositionStyles, playerTranslateStyles].join(' '),
    );
  }, [playerPositionStyles, playerTranslateStyles]);

  return { bottomPlayerClasses };
};
