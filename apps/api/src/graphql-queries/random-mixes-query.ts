import type { Query } from './types/query.interface';

const MAX_RANDOM_MIXES = 3;
const RANDOM_FACTOR = 0.5;

const MINIMUM_ENTRIES = 0;
const MAXIMUM_ENTRIES = 1;

const getRandomMixes = (mixes?: any[]): any[] => {
  if (mixes?.length) {
    return [...mixes]
      .sort(() => RANDOM_FACTOR - Math.random())
      .slice(MINIMUM_ENTRIES, MAXIMUM_ENTRIES);
  }
  return [];
};

export const randomMixesQuery = ({ strapi }: Query) => ({
  typeDefs: `
        type Query {
          randomMixes(id: Int!): MixEntityResponseCollection
        }
      `,
  resolvers: {
    Query: {
      randomMixes: async (parent, args) => {
        const { toEntityResponseCollection } = strapi.service('plugin::graphql.format').returnTypes;

        const mix = await strapi.entityService.findOne('api::mix.mix', args.id, {
          populate: {
            guests: {
              populate: {
                mixes: {
                  populate: {
                    linksToMixes: true,
                  },
                },
              },
            },
            show: {
              populate: {
                mixes: {
                  populate: {
                    linksToMixes: true,
                  },
                },
              },
            },
            genres: {
              populate: {
                mixes: {
                  populate: {
                    linksToMixes: true,
                  },
                },
              },
            },
            moodsArray: {
              populate: {
                mixes: {
                  populate: {
                    linksToMixes: true,
                  },
                },
              },
            },
          },
        });

        const randomGuestMix = getRandomMixes(mix?.guests?.[0]?.mixes);
        const randomShowMix = getRandomMixes(mix?.show?.mixes);
        const randomFirstGenreMix = getRandomMixes(mix?.genres?.[0]?.mixes);
        const randomSecondGenreMix = getRandomMixes(mix?.genres?.[1]?.mixes);

        const mixesFromMix = [
          ...randomShowMix,
          ...randomGuestMix,
          ...randomFirstGenreMix,
          ...randomSecondGenreMix,
        ].filter((mix) => mix.linksToMixes.soundcloudLink !== null);

        const entries: any =
          mixesFromMix.length < MAX_RANDOM_MIXES
            ? await strapi.entityService.findMany('api::mix.mix', {
                filters: {
                  $not: {
                    linksToMixes: {
                      soundcloudLink: undefined,
                    },
                  },
                },
              })
            : [];

        const sanitizedRandomEntry = [...entries]
          .sort(() => RANDOM_FACTOR - Math.random())
          .slice(0, MAX_RANDOM_MIXES - mixesFromMix.length);
        const total = [...mixesFromMix, ...sanitizedRandomEntry];

        return toEntityResponseCollection(total);
      },
    },
  },
  resolversConfig: {
    'Query.randomMixes': {
      auth: false,
    },
  },
});
