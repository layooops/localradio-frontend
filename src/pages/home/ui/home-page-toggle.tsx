import { useUnit } from 'effector-react';
import type { ScopedMutator } from 'swr/_internal';
import { $currentMixPlayer } from '@/features/toggle-mix-player/model/current-mix-player.model';
import {
  SCToggleElement,
  YoutubeToggleElement,
} from '@/features/toggle-mix-player/ui';
import { MixEntity } from '@/shared/api/graphql/__generated__/schema.graphql';
import { clsxm } from '@/shared/lib/helpers/clsxm';
import { YOUTUBE_LIVE_LINK } from '@/shared/lib/constants/common';
import { Icon } from '@/shared/ui/icons';
import type { StreamIsLiveQuery } from '@/widgets/players/stream/api/stream-is-live.graphql.interface';
import { useHomePageToggleHook } from '../hooks/use-home-page-toggle.hook';
import type { HomePageTopProps } from './home-page-top';

export interface HomePageRandMixProps
  extends Omit<HomePageTopProps, 'schedules'> {
  refetchStream: Promise<ScopedMutator<any> | undefined>;
  streamData?: StreamIsLiveQuery;
  schedulesExist: boolean;
}

export const HomePageRandMix = ({
  homePageRandomMix,
  streamData,
  streamIsLive,
  schedulesExist,
  refetchStream,
}: HomePageRandMixProps) => {
  const { isLoading, youtubeLink, SCLink } = useHomePageToggleHook({
    homePageRandomMix,
    refetchStream,
    streamData,
  });

  const { currentMixPlayer } = useUnit({
    currentMixPlayer: $currentMixPlayer,
  });

  return (
    <div
      className={clsxm(
        'aspect-video flex-1 bg-black lg:aspect-auto lg:pl-1.5 lg:pt-1.5 2xl:pl-2 2xl:pt-2 ',
        { 'lg:pr-1.5 2xl:pr-2': schedulesExist }
      )}
    >
      <div className='relative grid h-full overflow-hidden lg:rounded-lg'>
        {(isLoading || !youtubeLink) && !streamData?.streamIsLive && (
          <div className='absolute inset-0 top-0 flex items-center justify-center px-1.5 py-9 text-white md:px-3 lg:px-3.5 '>
            <Icon.Loader />
          </div>
        )}

        {(streamIsLive || streamData?.streamIsLive) && (
          <iframe
            title='youtube live'
            id='ytplayer'
            itemType='text/html'
            width='100%'
            height='100%'
            src={YOUTUBE_LIVE_LINK}
          />
        )}
        {(!streamIsLive || !streamData?.streamIsLive) && youtubeLink && (
          <YoutubeToggleElement
            page='home'
            youtubeVideoLink={youtubeLink}
            className={`absolute inset-0 ${
              currentMixPlayer === 'audio'
                ? 'pointer-events-none bg-black/60 backdrop-blur-md backdrop-opacity-80'
                : ''
            } `}
          />
        )}
        {homePageRandomMix && !streamData?.streamIsLive && SCLink && (
          <SCToggleElement
            page='home'
            mix={homePageRandomMix.data as MixEntity}
            mixLink={SCLink}
          />
        )}
      </div>
    </div>
  );
};
