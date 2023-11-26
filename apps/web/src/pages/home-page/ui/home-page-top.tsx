import dynamic from 'next/dynamic';
import useSWR, { useSWRConfig } from 'swr';
import type { StreamIsLiveQuery } from '@/widgets/players/stream/api/stream-is-live.graphql.interface';
import type { TogglePlayerLinks } from '@/features/toggle-mix-player/types/toggle-player.interface';
import { clsxm } from '@/shared/lib/helpers/clsxm';
import { SWRFetcher } from '@/shared/lib/helpers/swr-fetcher';
import type { HomePageProps } from '../lib/types/home-page.interface';
import { HomePageRandMix } from './home-page-toggle';
import { HomePageTopInfo } from './home-page-top-info';

export type HomePageTopProps = Pick<
  HomePageProps,
  'homePageRandomMix' | 'schedules' | 'streamIsLive'
>;

const ScheduleList = dynamic(() =>
  import('@/entities/schedule/ui/schedule-list').then(
    (module) => module.ScheduleList,
  ),
);

interface StreamData extends StreamIsLiveQuery {
  error?: string;
}

export const HomePageTop = (props: HomePageTopProps) => {
  const { homePageRandomMix, schedules, streamIsLive } = props;
  const { mutate: refetchStream } = useSWRConfig();
  const { data: streamData } = useSWR<StreamData>(
    '/api/stream-is-live',
    SWRFetcher,
  );

  const attributes = homePageRandomMix?.data?.attributes;

  const links: TogglePlayerLinks = {
    soundcloud: attributes?.linksToMixes?.soundcloudLink,
    youtube: attributes?.linksToMixes?.youtubeLink,
  };

  const hasSchedules = Boolean(schedules?.length);

  return (
    <section
      className={clsxm(
        'flex flex-col overflow-hidden border-b-2 border-black lg:grid lg:h-[calc(100vh-var(--header-height))]',
        {
          'lg:grid-cols-[1fr,0]': !hasSchedules,
        },
        {
          'lg:grid-cols-[1fr,minmax(25%,min-content)] 4xl:grid-cols-[1fr,minmax(20%,min-content)]':
            hasSchedules,
        },
      )}
    >
      <div className='h-full lg:grid  lg:grid-rows-[1fr,min-content]'>
        <div className='flex h-full max-w-[100vw] flex-col overflow-hidden'>
          <HomePageRandMix
            schedulesExist={!hasSchedules}
            streamData={streamData}
            refetchStream={refetchStream('/api/streamIsLive')}
            streamIsLive={streamIsLive}
            homePageRandomMix={homePageRandomMix}
          />

          {attributes && (!streamData?.streamIsLive || !streamIsLive) && (
            <HomePageTopInfo
              schedulesExist={schedules ? hasSchedules : false}
              links={links}
              homePageRandomMix={homePageRandomMix}
            />
          )}
        </div>
      </div>

      {hasSchedules && (
        <div className='flex h-full flex-col  overflow-hidden bg-black lg:gap-2 lg:p-1.5 2xl:p-2'>
          <ScheduleList
            schedules={schedules}
            isStreaming={streamData?.streamIsLive}
          />
        </div>
      )}
    </section>
  );
};
