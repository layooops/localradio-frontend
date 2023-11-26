import type { Strapi } from '@strapi/strapi';
import {
  eventSchedulesFixedQuery,
  genreQuery,
  genresArrayQuery,
  homePageRandomMixQuery,
  moodQuery,
  moodsArrayQuery,
  randomMixesQuery,
  randomMixQuery,
  streamIsLiveQuery,
} from './graphql-queries';

const config = {
  register({ strapi }: { strapi: Strapi }) {
    const extensionService = strapi.service('plugin::graphql.extension');
    extensionService.shadowCRUD('api::genre.genre');
    extensionService.shadowCRUD('api::mood.mood');
    extensionService.shadowCRUD('api::event-schedule.event-schedule');

    extensionService.use(genresArrayQuery);
    extensionService.use(streamIsLiveQuery);
    extensionService.use(genreQuery);
    extensionService.use(moodsArrayQuery);
    extensionService.use(moodQuery);
    extensionService.use(randomMixesQuery);
    extensionService.use(randomMixQuery);
    extensionService.use(homePageRandomMixQuery);
    extensionService.use(eventSchedulesFixedQuery);
  },
};

export default config;
