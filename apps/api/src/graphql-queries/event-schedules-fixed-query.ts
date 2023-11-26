import type { Strapi } from '@strapi/strapi';
import type { Params } from '@strapi/strapi/lib/services/entity-service';

const fixTimeFormat = (timeString: string): string => {
  const TIME_SEPARATOR = ':';
  return timeString.split(TIME_SEPARATOR).slice(0, -1).join(TIME_SEPARATOR);
};

export const eventSchedulesFixedQuery = ({ strapi }: { strapi: Strapi }) => ({
  typeDefs: `
        type Artist {
            link: String,
            title: String
            guest: GuestEntity
            show: ShowEntity
            description: String
        }

        type Schedule {
          artist: Artist
          time: String
        }

        type CustomDate {
          week: String!
          day: String!
        }

        type Cover {
          url: String!
        }

        type PopularityResponse {id: ID!, date: DateTime!, fixedDate: CustomDate, schedule: [ Schedule ], location: ComponentLocationLocation, cover: Cover }

        type Query {
          eventSchedulesFixed: [PopularityResponse]
        }
      `,
  resolvers: {
    Query: {
      eventSchedulesFixed: {
        async resolve() {
          const entries = await strapi.entityService.findMany<
            'api::event-schedule.event-schedule',
            Params.Pick<
              'api::event-schedule.event-schedule',
              'populate:object' | 'sort' | 'publicationState'
            >
          >('api::event-schedule.event-schedule', {
            populate: {
              schedule: {
                populate: {
                  artist: {
                    filters: {},
                    populate: ['show', 'guest'],
                  },
                },
              },
              location: true,
              // TODO: Потестировать это
              cover: {
                populate: '*',
              },
            },
            sort: {
              date: 'asc',
            },
            publicationState: 'live',
          });

          const formatDate = (date: string) => {
            const day = new Date(date).toLocaleDateString('ru-RU', {
              day: '2-digit',
              month: '2-digit',
            });
            const week = new Date(date).toLocaleDateString('ru-RU', {
              weekday: 'short',
            });
            return {
              day,
              week,
            };
          };

          const fixedEntries = entries.map((entry: any) => {
            return {
              ...entry,
              fixedDate: formatDate(entry.date.toString()),

              schedule: entry.schedule?.map((schedule) => ({
                ...schedule,
                time: fixTimeFormat(schedule.time),
              })),
            };
          });

          return fixedEntries;
        },
      },
    },
  },
  resolversConfig: {
    'Query.eventSchedulesFixed': {
      auth: false,
    },
  },
});
