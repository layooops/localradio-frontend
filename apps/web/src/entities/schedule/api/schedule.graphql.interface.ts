import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import type * as Types from '../../../shared/api/graphql/__generated__/schema.graphql';

export type ScheduleQueryVariables = Types.Exact<{ [key: string]: never }>;

export interface ScheduleQuery {
  __typename?: 'Query';
  eventSchedulesFixed?: Array<{
    __typename?: 'PopularityResponse';
    id: string;
    date: any;
    fixedDate?: { __typename?: 'CustomDate'; day: string; week: string } | null;
    location?: {
      __typename?: 'ComponentLocationLocation';
      locationName?: string | null;
      locationLink?: string | null;
    } | null;
    cover?: { __typename?: 'Cover'; url: string } | null;
    schedule?: Array<{
      __typename?: 'Schedule';
      time?: string | null;
      artist?: {
        __typename?: 'Artist';
        link?: string | null;
        title?: string | null;
        description?: string | null;
        guest?: {
          __typename?: 'GuestEntity';
          id?: string | null;
          attributes?: {
            __typename?: 'Guest';
            name: string;
            slug?: string | null;
          } | null;
        } | null;
        show?: {
          __typename?: 'ShowEntity';
          id?: string | null;
          attributes?: {
            __typename?: 'Show';
            name: string;
            slug?: string | null;
          } | null;
        } | null;
      } | null;
    } | null> | null;
  } | null> | null;
}

export const ScheduleDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Schedule' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'eventSchedulesFixed' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'date' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'fixedDate' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'day' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'week' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'location' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'locationName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'locationLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'cover' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'schedule' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'artist' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'link' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'title' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'description' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'guest' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'attributes' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'name' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'slug' },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'show' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'attributes' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'name' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'slug' },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'time' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ScheduleQuery, ScheduleQueryVariables>;
