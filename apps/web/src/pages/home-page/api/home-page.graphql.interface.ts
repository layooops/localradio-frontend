import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import type * as Types from '../../../shared/api/graphql/__generated__/schema.graphql';

export type HomepageQueryVariables = Types.Exact<{ [key: string]: never }>;

export interface HomepageQuery {
  __typename?: 'Query';
  mixes?: {
    __typename?: 'MixEntityResponseCollection';
    data: Array<{
      __typename?: 'MixEntity';
      id?: string | null;
      attributes?: {
        __typename?: 'Mix';
        name: string;
        slug?: string | null;
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
  releases?: {
    __typename?: 'ReleaseEntityResponseCollection';
    data: Array<{
      __typename?: 'ReleaseEntity';
      id?: string | null;
      attributes?: {
        __typename?: 'Release';
        date: any;
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
  } | null;
  shopItems?: {
    __typename?: 'ShopItemEntityResponseCollection';
    data: Array<{
      __typename?: 'ShopItemEntity';
      id?: string | null;
      attributes?: {
        __typename?: 'ShopItem';
        title: string;
        slug?: string | null;
        soldout?: boolean | null;
        quantity?: number | null;
        price: number;
        description?: string | null;
        createdAt?: any | null;
        attributes?: any | null;
        images: {
          __typename?: 'UploadFileRelationResponseCollection';
          data: Array<{
            __typename?: 'UploadFileEntity';
            id?: string | null;
            attributes?: { __typename?: 'UploadFile'; url: string } | null;
          }>;
        };
        shop_category?: {
          __typename?: 'ShopCategoryEntityResponse';
          data?: {
            __typename?: 'ShopCategoryEntity';
            attributes?: {
              __typename?: 'ShopCategory';
              name?: string | null;
              slug?: string | null;
            } | null;
          } | null;
        } | null;
      } | null;
    }>;
  } | null;
  events?: {
    __typename?: 'EventEntityResponseCollection';
    data: Array<{
      __typename?: 'EventEntity';
      id?: string | null;
      attributes?: {
        __typename?: 'Event';
        name: string;
        slug?: string | null;
        eventInfo: {
          __typename?: 'ComponentEventEvent';
          id: string;
          info?: string | null;
          date?: {
            __typename?: 'ComponentDateEventDate';
            id: string;
            eventDate?: any | null;
            eventTimeStart?: any | null;
            eventTimeEnd?: any | null;
          } | null;
          location?: {
            __typename?: 'ComponentLocationLocation';
            id: string;
            locationName?: string | null;
            locationLink?: string | null;
          } | null;
          schedule?: Array<{
            __typename?: 'ComponentEventSchedule';
            id: string;
            name?: string | null;
            info?: string | null;
          } | null> | null;
        };
        mixes?: {
          __typename?: 'MixRelationResponseCollection';
          data: Array<{
            __typename?: 'MixEntity';
            id?: string | null;
            attributes?: {
              __typename?: 'Mix';
              name: string;
              slug?: string | null;
              date: any;
              locationName?: string | null;
              locationLink?: string | null;
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
                      data: Array<{
                        __typename?: 'MixEntity';
                        id?: string | null;
                      }>;
                    } | null;
                  } | null;
                }>;
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
            } | null;
          }>;
        } | null;
        image: {
          __typename?: 'UploadFileEntityResponse';
          data?: {
            __typename?: 'UploadFileEntity';
            id?: string | null;
            attributes?: { __typename?: 'UploadFile'; url: string } | null;
          } | null;
        };
      } | null;
    }>;
    meta: {
      __typename?: 'ResponseCollectionMeta';
      pagination: { __typename?: 'Pagination'; total: number };
    };
  } | null;
  genres?: {
    __typename?: 'GenreEntityResponseCollection';
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
    __typename?: 'MoodEntityResponseCollection';
    data: Array<{
      __typename?: 'MoodEntity';
      id?: string | null;
      attributes?: {
        __typename?: 'Mood';
        name?: string | null;
        slug?: string | null;
      } | null;
    }>;
  } | null;
}

export const HomepageDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Homepage' },
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
                  kind: 'StringValue',
                  value: 'date:desc',
                  block: false,
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
                      value: { kind: 'IntValue', value: '12' },
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
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'attributes' },
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
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'releases' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: {
                  kind: 'StringValue',
                  value: 'date:desc',
                  block: false,
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
                      value: { kind: 'IntValue', value: '4' },
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
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'shopItems' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: {
                  kind: 'StringValue',
                  value: 'createdAt:desc',
                  block: false,
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
                      value: { kind: 'IntValue', value: '4' },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filters' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'soldout' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'ne' },
                            value: { kind: 'BooleanValue', value: true },
                          },
                        ],
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
                              name: { kind: 'Name', value: 'title' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'slug' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'soldout' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'quantity' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'price' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'images' },
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
                                                  value: 'url',
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
                              name: { kind: 'Name', value: 'description' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'shop_category' },
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
                              name: { kind: 'Name', value: 'attributes' },
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
            name: { kind: 'Name', value: 'events' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: {
                  kind: 'StringValue',
                  value: 'createdAt:desc',
                  block: false,
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
                      value: { kind: 'IntValue', value: '4' },
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
                              name: { kind: 'Name', value: 'eventInfo' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'date' },
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
                                            value: 'eventDate',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'eventTimeStart',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'eventTimeEnd',
                                          },
                                        },
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
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'locationName',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'locationLink',
                                          },
                                        },
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
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'name' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'info' },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'info' },
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
                                                  value: 'date',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'locationName',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'locationLink',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'genres',
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
                                                              value: 'Genres',
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
                                                  value: 'url',
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
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
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
                      value: { kind: 'IntValue', value: '50' },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: { kind: 'StringValue', value: 'name:asc', block: false },
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
                      value: { kind: 'IntValue', value: '20' },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: { kind: 'StringValue', value: 'name:asc', block: false },
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
} as unknown as DocumentNode<HomepageQuery, HomepageQueryVariables>;
