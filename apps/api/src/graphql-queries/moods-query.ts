import { chan } from '../helpers/chan';
import { ARRAY_DIVISOR } from '../helpers/consts';
import type { Query } from './types/query.interface';

export const moodsArrayQuery = ({ strapi }: Query) => ({
  typeDefs: `
        type Query {
          moodsArray: [[Mood]]
        }
      `,
  resolvers: {
    Query: {
      moodsArray: async () => {
        const entries = await strapi.entityService.findMany('api::mood.mood', {
          publicationState: 'live',
          filters: {},
        });

        const updated = chan(entries, Math.round(entries.length / ARRAY_DIVISOR));
        return updated;
      },
    },
  },
  resolversConfig: {
    'Query.moodsArray': {
      auth: false,
    },
  },
});

export const moodQuery = ({ strapi }: Query) => ({
  typeDefs: `
        type Query {
          mood(slug: String!): MoodEntityResponse
        }
      `,
  resolvers: {
    Query: {
      mood: async (parent, args) => {
        const { toEntityResponse } = strapi.service('plugin::graphql.format').returnTypes;

        const mood = await strapi.entityService.findMany('api::mood.mood', {
          filters: { slug: args.slug },
          publicationState: 'live',
        });

        const response = toEntityResponse(mood[0]);

        return response;
      },
    },
  },
  resolversConfig: {
    'Query.mood': {
      auth: false,
    },
  },
});
