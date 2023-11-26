import type { Query } from './types/query.interface';

export const randomMixQuery = ({ strapi }: Query) => ({
  typeDefs: `
        type Query {
          randomMix: MixEntityResponse
        }
      `,
  resolvers: {
    Query: {
      randomMix: async () => {
        const { toEntityResponse } = strapi.service('plugin::graphql.format').returnTypes;

        const entries = await strapi.entityService.findMany('api::mix.mix', {
          filters: {
            $not: {
              linksToMixes: {
                soundcloudLink: undefined,
              },
            },
          },
        });

        const sanitizedRandomEntry = entries[Math.floor(Math.random() * entries.length)];

        return toEntityResponse(sanitizedRandomEntry);
      },
    },
  },
  resolversConfig: {
    'Query.randomMix': {
      auth: false,
    },
  },
});
