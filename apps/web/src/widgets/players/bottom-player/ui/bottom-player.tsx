import { useUnit } from 'effector-react';
import { $currentGlobalPlayer } from '@/features/choose-global-player/model/current-global-player.model';
import { $currentSCLink } from '../../soundcloud/model/soundcloud.model';
import { SCPlayer } from '../../soundcloud/ui/sc-player';
import { StreamPlayer } from '../../stream/ui/stream-audio';
import { $currentYoutubeLink } from '../../youtube/model/youtube.model';
import { YoutubeBottomPlayer } from '../../youtube/ui/youtube-bottom-player';
import { useBottomPlayerStyleHook } from '../hooks/use-bottom-player-style.hook';

export const BottomPlayer = () => {
  const { currentSCLink, currentYoutubeLink, currentGlobalPlayer } = useUnit({
    currentSCLink: $currentSCLink,
    currentYoutubeLink: $currentYoutubeLink,
    currentGlobalPlayer: $currentGlobalPlayer,
  });
  const { bottomPlayerClasses } = useBottomPlayerStyleHook();

  return (
    <div className={bottomPlayerClasses}>
      <StreamPlayer />
      {currentGlobalPlayer === 'soundcloud' && currentSCLink && <SCPlayer />}
      {currentGlobalPlayer === 'youtubeBottom' && currentYoutubeLink && (
        <YoutubeBottomPlayer />
      )}
    </div>
  );
};
