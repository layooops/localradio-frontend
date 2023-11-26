import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import type * as Types from '@/shared/api/graphql/__generated__/schema.graphql';

export interface ImageFragment {
  __typename?: 'UploadFileEntity';
  id?: string | null;
  attributes?: {
    __typename?: 'UploadFile';
    url: string;
    width?: number | null;
    height?: number | null;
    formats?: any | null;
  } | null;
}

export type ReleasesQueryVariables = Types.Exact<{
  filters?: Types.InputMaybe<Types.ReleaseFiltersInput>;
  limit?: Types.Scalars['Int']['input'];
  start?: Types.Scalars['Int']['input'];
  sort?: Types.InputMaybe<
    | Array<Types.InputMaybe<Types.Scalars['String']['input']>>
    | Types.InputMaybe<Types.Scalars['String']['input']>
  >;
}>;

export interface ReleasesQuery {
  __typename?: 'Query';
  releases?: {
    __typename?: 'ReleaseEntityResponseCollection';
    data: Array<{
      __typename?: 'ReleaseEntity';
      id?: string | null;
      attributes?: {
        __typename?: 'Release';
        date: any;
        updatedAt?: any | null;
        createdAt?: any | null;
        descriptionEn?: string | null;
        descriptionRu?: string | null;
        artistName: string;
        releaseName?: string | null;
        slug?: string | null;
        type: Types.Enum_Release_Type;
        links?: {
          __typename?: 'ComponentReleaseLinksLinks';
          id: string;
          spotify?: string | null;
          soundcloud?: string | null;
          vkMusic?: string | null;
          yandexMusic?: string | null;
          youtubeMusic?: string | null;
          bandcamp?: string | null;
          appleMusic?: string | null;
        } | null;
        guest?: {
          __typename?: 'GuestEntityResponse';
          data?: {
            __typename?: 'GuestEntity';
            id?: string | null;
            attributes?: {
              __typename?: 'Guest';
              name: string;
              slug?: string | null;
              mixes?: {
                __typename?: 'MixRelationResponseCollection';
                data: Array<{
                  __typename?: 'MixEntity';
                  id?: string | null;
                  attributes?: {
                    __typename?: 'Mix';
                    date: any;
                    name: string;
                    locationLink?: string | null;
                    locationName?: string | null;
                    slug?: string | null;
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
                    linksToMixes?: {
                      __typename?: 'ComponentLinksToMixesLink';
                      soundcloudLink?: string | null;
                      youtubeLink?: string | null;
                    } | null;
                    genres?: {
                      __typename?: 'GenreRelationResponseCollection';
                      data: Array<{
                        __typename?: 'GenreEntity';
                        attributes?: {
                          __typename?: 'Genre';
                          name: string;
                          slug: string;
                        } | null;
                      }>;
                    } | null;
                  } | null;
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
          } | null;
        } | null;
        cover: {
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
      } | null;
    }>;
    meta: {
      __typename?: 'ResponseCollectionMeta';
      pagination: { __typename?: 'Pagination'; total: number };
    };
  } | null;
}

export const ImageFragmentDoc = {
  kind: 'Document',
  definitions: [
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
  ],
} as unknown as DocumentNode<ImageFragment, unknown>;
export const ReleasesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Releases' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'filters' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'ReleaseFiltersInput' },
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
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'releases' },
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
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'date' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'updatedAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
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
                              name: { kind: 'Name', value: 'artistName' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'releaseName' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'slug' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'type' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'links' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'spotify' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'soundcloud' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'vkMusic' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'yandexMusic',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'youtubeMusic',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'bandcamp' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'appleMusic' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'guest' },
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
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'slug',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'mixes',
                                                },
                                                arguments: [
                                                  {
                                                    kind: 'Argument',
                                                    name: {
                                                      kind: 'Name',
                                                      value: 'sort',
                                                    },
                                                    value: {
                                                      kind: 'StringValue',
                                                      value: 'date:desc',
                                                      block: false,
                                                    },
                                                  },
                                                  {
                                                    kind: 'Argument',
                                                    name: {
                                                      kind: 'Name',
                                                      value: 'pagination',
                                                    },
                                                    value: {
                                                      kind: 'ObjectValue',
                                                      fields: [
                                                        {
                                                          kind: 'ObjectField',
                                                          name: {
                                                            kind: 'Name',
                                                            value: 'limit',
                                                          },
                                                          value: {
                                                            kind: 'IntValue',
                                                            value: '5',
                                                          },
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
                                                      name: {
                                                        kind: 'Name',
                                                        value: 'data',
                                                      },
                                                      selectionSet: {
                                                        kind: 'SelectionSet',
                                                        selections: [
                                                          {
                                                            kind: 'Field',
                                                            name: {
                                                              kind: 'Name',
                                                              value: 'id',
                                                            },
                                                          },
                                                          {
                                                            kind: 'Field',
                                                            name: {
                                                              kind: 'Name',
                                                              value:
                                                                'attributes',
                                                            },
                                                            selectionSet: {
                                                              kind: 'SelectionSet',
                                                              selections: [
                                                                {
                                                                  kind: 'Field',
                                                                  name: {
                                                                    kind: 'Name',
                                                                    value:
                                                                      'date',
                                                                  },
                                                                },
                                                                {
                                                                  kind: 'Field',
                                                                  name: {
                                                                    kind: 'Name',
                                                                    value:
                                                                      'image',
                                                                  },
                                                                  selectionSet:
                                                                    {
                                                                      kind: 'SelectionSet',
                                                                      selections:
                                                                        [
                                                                          {
                                                                            kind: 'Field',
                                                                            name: {
                                                                              kind: 'Name',
                                                                              value:
                                                                                'data',
                                                                            },
                                                                            selectionSet:
                                                                              {
                                                                                kind: 'SelectionSet',
                                                                                selections:
                                                                                  [
                                                                                    {
                                                                                      kind: 'FragmentSpread',
                                                                                      name: {
                                                                                        kind: 'Name',
                                                                                        value:
                                                                                          'Image',
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
                                                                  name: {
                                                                    kind: 'Name',
                                                                    value:
                                                                      'name',
                                                                  },
                                                                },
                                                                {
                                                                  kind: 'Field',
                                                                  name: {
                                                                    kind: 'Name',
                                                                    value:
                                                                      'date',
                                                                  },
                                                                },
                                                                {
                                                                  kind: 'Field',
                                                                  name: {
                                                                    kind: 'Name',
                                                                    value:
                                                                      'locationLink',
                                                                  },
                                                                },
                                                                {
                                                                  kind: 'Field',
                                                                  name: {
                                                                    kind: 'Name',
                                                                    value:
                                                                      'locationName',
                                                                  },
                                                                },
                                                                {
                                                                  kind: 'Field',
                                                                  name: {
                                                                    kind: 'Name',
                                                                    value:
                                                                      'slug',
                                                                  },
                                                                },
                                                                {
                                                                  kind: 'Field',
                                                                  name: {
                                                                    kind: 'Name',
                                                                    value:
                                                                      'linksToMixes',
                                                                  },
                                                                  selectionSet:
                                                                    {
                                                                      kind: 'SelectionSet',
                                                                      selections:
                                                                        [
                                                                          {
                                                                            kind: 'Field',
                                                                            name: {
                                                                              kind: 'Name',
                                                                              value:
                                                                                'soundcloudLink',
                                                                            },
                                                                          },
                                                                          {
                                                                            kind: 'Field',
                                                                            name: {
                                                                              kind: 'Name',
                                                                              value:
                                                                                'youtubeLink',
                                                                            },
                                                                          },
                                                                        ],
                                                                    },
                                                                },
                                                                {
                                                                  kind: 'Field',
                                                                  name: {
                                                                    kind: 'Name',
                                                                    value:
                                                                      'genres',
                                                                  },
                                                                  selectionSet:
                                                                    {
                                                                      kind: 'SelectionSet',
                                                                      selections:
                                                                        [
                                                                          {
                                                                            kind: 'Field',
                                                                            name: {
                                                                              kind: 'Name',
                                                                              value:
                                                                                'data',
                                                                            },
                                                                            selectionSet:
                                                                              {
                                                                                kind: 'SelectionSet',
                                                                                selections:
                                                                                  [
                                                                                    {
                                                                                      kind: 'Field',
                                                                                      name: {
                                                                                        kind: 'Name',
                                                                                        value:
                                                                                          'attributes',
                                                                                      },
                                                                                      selectionSet:
                                                                                        {
                                                                                          kind: 'SelectionSet',
                                                                                          selections:
                                                                                            [
                                                                                              {
                                                                                                kind: 'Field',
                                                                                                name: {
                                                                                                  kind: 'Name',
                                                                                                  value:
                                                                                                    'name',
                                                                                                },
                                                                                              },
                                                                                              {
                                                                                                kind: 'Field',
                                                                                                name: {
                                                                                                  kind: 'Name',
                                                                                                  value:
                                                                                                    'slug',
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
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'image',
                                                },
                                                selectionSet: {
                                                  kind: 'SelectionSet',
                                                  selections: [
                                                    {
                                                      kind: 'Field',
                                                      name: {
                                                        kind: 'Name',
                                                        value: 'data',
                                                      },
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
                              name: { kind: 'Name', value: 'cover' },
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
  ],
} as unknown as DocumentNode<ReleasesQuery, ReleasesQueryVariables>;
