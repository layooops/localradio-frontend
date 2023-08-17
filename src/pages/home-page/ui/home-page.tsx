import type { HomePageProps } from '../lib/types/home-page.interface';

import { HomePageContent } from './home-page-content';
import { HomePageTop } from './home-page-top';

export const HomePage = (props: HomePageProps) => {
  const { streamIsLive, schedules, homePageRandomMix, ...rest } = props;

  return (
    <main className='flex w-full flex-col pb-1.5 md:pb-3 lg:pb-3.5 2xl:pb-5'>
      <h1 className='sr-only'>Local Radio</h1>
      <HomePageTop
        streamIsLive={streamIsLive}
        schedules={schedules}
        homePageRandomMix={homePageRandomMix}
      />
      <HomePageContent {...rest} />
    </main>
  );
};
