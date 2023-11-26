import type { Strapi } from '@strapi/strapi';

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const homePageRandomMixQuery = ({ strapi }: { strapi: Strapi }) => ({
  typeDefs: `
        type Query {
          homePageRandomMix: MixEntityResponse
        }
      `,
  resolvers: {
    Query: {
      homePageRandomMix: async () => {
        const { toEntityResponse } = strapi.service('plugin::graphql.format').returnTypes;

        const youtubeLink: any = await strapi.entityService.findMany(
          'api::youtube-link.youtube-link',
          {
            populate: {
              mixes: {
                fields: ['slug', 'date', 'name'],
                filters: {},
                populate: {
                  linksToMixes: {
                    fields: ['youtubeLink'],
                  },
                  genres: {
                    fields: ['slug', 'name'],
                  },
                },
              },
            },
          },
        );

        const mixesCount = youtubeLink?.mixes?.length;
        const rndMixInt = mixesCount && randomIntFromInterval(0, mixesCount - 1);
        const randomMix = (youtubeLink?.mixes && youtubeLink?.mixes[rndMixInt]) || '';

        return toEntityResponse(randomMix);
      },
    },
  },
  resolversConfig: {
    'Query.homePageRandomMix': {
      auth: false,
    },
  },
});
