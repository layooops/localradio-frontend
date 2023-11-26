import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import type * as Types from '@/shared/api/graphql/__generated__/schema.graphql';

export type MixesQueryVariables = Types.Exact<{
  filters?: Types.InputMaybe<Types.MixFiltersInput>;
  limit?: Types.Scalars['Int']['input'];
  start?: Types.Scalars['Int']['input'];
  sort?: Types.InputMaybe<
    | Array<Types.InputMaybe<Types.Scalars['String']['input']>>
    | Types.InputMaybe<Types.Scalars['String']['input']>
  >;
  sibling?: Types.Scalars['Boolean']['input'];
}>;

export interface MixesQuery {
  __typename?: 'Query';
  mixes?: {
    __typename?: 'MixEntityResponseCollection';
    data: Array<{
      __typename?: 'MixEntity';
      id?: string | null;
      attributes?: {
        __typename?: 'Mix';
        slug?: string | null;
        name: string;
        date: any;
        updatedAt?: any | null;
        createdAt?: any | null;
        tracklist?: string | null;
        locationName?: string | null;
        descriptionEn?: string | null;
        descriptionRu?: string | null;
        locationLink?: string | null;
        linksToMixes?: {
          __typename?: 'ComponentLinksToMixesLink';
          id: string;
          soundcloudLink?: string | null;
          youtubeLink?: string | null;
        } | null;
        image: {
          __typename?: 'UploadFileEntityResponse';
          data?: {
            __typename?: 'UploadFileEntity';
            id?: string | null;
            attributes?: {
              __typename?: 'UploadFile';
              url: string;
              width?: number | null;
              height?: number | null;
              formats?: any | null;
            } | null;
          } | null;
        };
        genres?: {
          __typename?: 'GenreRelationResponseCollection';
          data: Array<{
            __typename?: 'GenreEntity';
            id?: string | null;
            attributes?: {
              __typename?: 'Genre';
              name: string;
              slug: string;
              mixes?: {
                __typename?: 'MixRelationResponseCollection';
                data: Array<{ __typename?: 'MixEntity'; id?: string | null }>;
              } | null;
            } | null;
          }>;
        } | null;
        moods?: {
          __typename?: 'MoodRelationResponseCollection';
          data: Array<{
            __typename?: 'MoodEntity';
            id?: string | null;
            attributes?: { __typename?: 'Mood'; name?: string | null } | null;
          }>;
        } | null;
        guests?: {
          __typename?: 'GuestRelationResponseCollection';
          data: Array<{
            __typename?: 'GuestEntity';
            id?: string | null;
            attributes?: {
              __typename?: 'Guest';
              name: string;
              slug?: string | null;
              descriptionRu?: string | null;
              descriptionEn?: string | null;
              socials?: {
                __typename?: 'ComponentLinksToSocialsLinksToSocials';
                id: string;
                SCLink?: string | null;
                VKLink?: string | null;
                TGLink?: string | null;
                IGLink?: string | null;
                BCLink?: string | null;
              } | null;
              mixes?: {
                __typename?: 'MixRelationResponseCollection';
                data: Array<{
                  __typename?: 'MixEntity';
                  id?: string | null;
                  attributes?: { __typename?: 'Mix'; name: string } | null;
                }>;
              } | null;
              image?: {
                __typename?: 'UploadFileEntityResponse';
                data?: {
                  __typename?: 'UploadFileEntity';
                  id?: string | null;
                  attributes?: {
                    __typename?: 'UploadFile';
                    url: string;
                    width?: number | null;
                    height?: number | null;
                    formats?: any | null;
                  } | null;
                } | null;
              } | null;
            } | null;
          }>;
        } | null;
        show?: {
          __typename?: 'ShowEntityResponse';
          data?: {
            __typename?: 'ShowEntity';
            id?: string | null;
            attributes?: {
              __typename?: 'Show';
              name: string;
              slug?: string | null;
              descriptionEn?: string | null;
              descriptionRu?: string | null;
              socials?: {
                __typename?: 'ComponentLinksToSocialsLinksToSocials';
                id: string;
                SCLink?: string | null;
                VKLink?: string | null;
                TGLink?: string | null;
                IGLink?: string | null;
                BCLink?: string | null;
              } | null;
              mixes?: {
                __typename?: 'MixRelationResponseCollection';
                data: Array<{
                  __typename?: 'MixEntity';
                  id?: string | null;
                  attributes?: { __typename?: 'Mix'; name: string } | null;
                }>;
              } | null;
            } | null;
          } | null;
        } | null;
      } | null;
    }>;
    meta: {
      __typename?: 'ResponseCollectionMeta';
      pagination: { __typename?: 'Pagination'; total: number };
    };
  } | null;
}

export const MixesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Mixes' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'filters' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'MixFiltersInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
          defaultValue: { kind: 'IntValue', value: '12' },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'start' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
          defaultValue: { kind: 'IntValue', value: '0' },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
          defaultValue: {
            kind: 'ListValue',
            values: [{ kind: 'StringValue', value: 'date:desc', block: false }],
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'sibling' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean' },
            },
          },
          defaultValue: { kind: 'BooleanValue', value: false },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'mixes' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'sort' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pagination' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'limit' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'limit' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'start' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'start' },
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filters' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'filters' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'data' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'attributes' },
                        directives: [
                          {
                            kind: 'Directive',
                            name: { kind: 'Name', value: 'skip' },
                            arguments: [
                              {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'if' },
                                value: {
                                  kind: 'Variable',
                                  name: { kind: 'Name', value: 'sibling' },
                                },
                              },
                            ],
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'Attributes' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'attributes' },
                        directives: [
                          {
                            kind: 'Directive',
                            name: { kind: 'Name', value: 'include' },
                            arguments: [
                              {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'if' },
                                value: {
                                  kind: 'Variable',
                                  name: { kind: 'Name', value: 'sibling' },
                                },
                              },
                            ],
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'InlineFragment',
                              typeCondition: {
                                kind: 'NamedType',
                                name: { kind: 'Name', value: 'Mix' },
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
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
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'meta' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pagination' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'total' },
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
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Image' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadFileEntity' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'attributes' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                { kind: 'Field', name: { kind: 'Name', value: 'width' } },
                { kind: 'Field', name: { kind: 'Name', value: 'height' } },
                { kind: 'Field', name: { kind: 'Name', value: 'formats' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Genres' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'GenreEntity' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'attributes' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'mixes' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'pagination' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'limit' },
                            value: { kind: 'IntValue', value: '-1' },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'data' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
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
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Attributes' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Mix' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'date' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tracklist' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'linksToMixes' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'soundcloudLink' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'youtubeLink' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'locationName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'descriptionEn' } },
          { kind: 'Field', name: { kind: 'Name', value: 'descriptionRu' } },
          { kind: 'Field', name: { kind: 'Name', value: 'locationLink' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'data' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'Image' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'data' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'Genres' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'moods' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'data' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
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
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'guests' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'data' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
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
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'descriptionRu' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'descriptionEn' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'socials' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'SCLink' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'VKLink' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'TGLink' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'IGLink' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'BCLink' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'mixes' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'data' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'attributes',
                                          },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'name',
                                                },
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
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'image' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'data' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'FragmentSpread',
                                          name: {
                                            kind: 'Name',
                                            value: 'Image',
                                          },
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
                  name: { kind: 'Name', value: 'data' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
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
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'socials' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'SCLink' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'VKLink' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'TGLink' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'IGLink' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'BCLink' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'descriptionEn' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'descriptionRu' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'mixes' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'data' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'attributes',
                                          },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'name',
                                                },
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
      },
    },
  ],
} as unknown as DocumentNode<MixesQuery, MixesQueryVariables>;
