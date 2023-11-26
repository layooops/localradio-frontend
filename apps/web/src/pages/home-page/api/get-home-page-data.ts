import { fetchEventSchedulesFixed } from 'pages/api/schedule';
import { StreamIsLiveDocument } from '@/widgets/players/stream/api/stream-is-live.graphql.interface';
import { client } from '@/shared/api/apollo/apollo-client';
import { HomepageDocument } from './home-page.graphql.interface';
import { HomePageRandomMixDocument } from './home-page-random-mix.graphql.interface';

export const getHomePageData = async () => {
  const {
    data: { mixes, releases, shopItems, events, genres, moods },
  } = await client.query({
    query: HomepageDocument,
  });

  const {
    data: { homePageRandomMix },
  } = await client.query({
    query: HomePageRandomMixDocument,
    fetchPolicy: 'no-cache',
  });

  const eventSchedulesFixed = await fetchEventSchedulesFixed();

  const {
    data: { streamIsLive },
  } = await client.query({
    query: StreamIsLiveDocument,
    fetchPolicy: 'no-cache',
  });

  return {
    mixes,
    releases,
    shopItems,
    events,
    genres,
    moods,
    homePageRandomMix,
    schedules: eventSchedulesFixed,
    streamIsLive,
  };
};
