import type { Params } from '@strapi/strapi/lib/services/entity-service';
import { chan } from '../helpers/chan';
import { ARRAY_DIVISOR } from '../helpers/consts';
import type { Query } from './types/query.interface';

export const genresArrayQuery = ({ strapi }: Query) => ({
  typeDefs: `
        type Query {
          genresArray: [[Genre]]
        }
      `,
  resolvers: {
    Query: {
      genresArray: async () => {
        const entries = await strapi.entityService.findMany<
          'api::genre.genre',
          Params.PublicationState.For<'api::genre.genre'>
        >('api::genre.genre', {
          sort: {
            name: 'ASC',
          },
          publicationState: 'live',
        });

        const array = entries && chan(entries, Math.round(entries.length / ARRAY_DIVISOR));
        return array;
      },
    },
  },
  resolversConfig: {
    'Query.genresArray': {
      auth: false,
    },
  },
});

export const genreQuery = ({ strapi }: Query) => ({
  typeDefs: `
        type Query {
          genreOne(slug: String!): GenreEntityResponse
        }
      `,
  resolvers: {
    Query: {
      genreOne: async (parent, args) => {
        const { toEntityResponse } = strapi.service('plugin::graphql.format').returnTypes;

        const genre = await strapi.entityService.findMany('api::genre.genre', {
          filters: { slug: args.slug },
          publicationState: 'live',
        });

        const response = toEntityResponse(genre[0]);
        return response;
      },
    },
  },
  resolversConfig: {
    'Query.genreOne': {
      auth: false,
    },
  },
});
