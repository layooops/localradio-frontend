import { useUnit } from 'effector-react';
import { $currentGlobalPlayer } from '@/features/choose-global-player/model/current-global-player.model';
import { YoutubeToggleElement } from '@/features/toggle-mix-player/ui';
import { clsxm } from '@/shared/lib/helpers/clsxm';
import { BottomPlayerNav } from '../../bottom-player-nav/ui/bottom-player-nav';
import { $currentYoutubeLink } from '../model/youtube.model';

export const YoutubeBottomPlayer = () => {
  const { currentYoutubeLink, currentGlobalPlayer } = useUnit({
    currentYoutubeLink: $currentYoutubeLink,
    currentGlobalPlayer: $currentGlobalPlayer,
  });
  return (
    <div
      className={clsxm(
        'flex w-[225px] flex-col items-center justify-center sm:w-[250px] md:w-[350px] lg:w-[500px] 2xl:w-[600px] ',
        { flex: currentGlobalPlayer === 'youtubeBottom' },
        { 'flex md:hidden': currentGlobalPlayer !== 'youtubeBottom' },
      )}
    >
      <div className='relative w-full'>
        <BottomPlayerNav variant='youtube' loaded={true} />
        <div className='isolate w-full'>
          {currentYoutubeLink && (
            <YoutubeToggleElement
              className='aspect-video'
              page='bottom'
              youtubeVideoLink={currentYoutubeLink}
            />
          )}
        </div>
      </div>
    </div>
  );
};
