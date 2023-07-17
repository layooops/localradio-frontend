import { useUnit } from 'effector-react';
import { useState } from 'react';
import YoutubePlayer from 'react-player/youtube';
import {
  $currentGlobalPlayer,
  setCurrentGlobalPlayerEv,
} from '@/features/choose-global-player/model/current-global-player.model';
import { clsxm } from '@/shared/lib/helpers/clsxm';
import { openWidgetEv } from '@/widgets/players/soundcloud/model/soundcloud.model';
import {
  setCurrentYoutubeLinkEv,
  setIsYoutubePlayingEv,
} from '@/widgets/players/youtube/model/youtube.model';
import {
  $currentMixPlayer,
  setMixPlayerErrorEv,
  toggleMixPlayerEv,
} from '../model/current-mix-player.model';

interface SCToggleElementProps {
  youtubeVideoLink: string;
  page: 'mix' | 'home' | 'bottom';
  className?: string;
}

export const YoutubeToggleElement = ({
  youtubeVideoLink,
  page = 'mix',
  className,
}: SCToggleElementProps) => {
  const [loaded, setLoaded] = useState(false);
  const {
    currentMixPlayer,
    setCurrentGlobalPlayer,
    toggleMixPlayer,
    currentGlobalPlayer,
    setMixPlayerError,
    setIsYoutubePlaying,
    setYoutubeLink,
    openWidget,
  } = useUnit({
    currentMixPlayer: $currentMixPlayer,
    setCurrentGlobalPlayer: setCurrentGlobalPlayerEv,
    toggleMixPlayer: toggleMixPlayerEv,
    setMixPlayerError: setMixPlayerErrorEv,
    currentGlobalPlayer: $currentGlobalPlayer,
    setIsYoutubePlaying: setIsYoutubePlayingEv,
    setYoutubeLink: setCurrentYoutubeLinkEv,
    openWidget: openWidgetEv,
  });

  return (
    <div
      className={clsxm(
        className,
        clsxm(page !== 'bottom' && currentMixPlayer !== 'video' && 'hidden')
      )}
    >
      <YoutubePlayer
        url={youtubeVideoLink}
        config={{
          playerVars: { showinfo: 0 },
        }}
        onReady={() => {
          page === 'bottom' && setLoaded(true);
          page === 'bottom' && openWidget(true);
          setMixPlayerError(null);
        }}
        onError={() => {
          toggleMixPlayer('audio');
          setMixPlayerError('video');
        }}
        controls={true}
        width='100%'
        height='100%'
        onPlay={() => {
          setYoutubeLink(youtubeVideoLink);
          setIsYoutubePlaying(true);
          page === 'bottom'
            ? setCurrentGlobalPlayer('youtubeBottom')
            : setCurrentGlobalPlayer('youtube');
        }}
        onPause={() => {
          setIsYoutubePlaying(false);
        }}
        playing={loaded || currentGlobalPlayer === 'youtube'}
      />
    </div>
  );
};
