import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

export interface GenresFragment {
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
}

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

export interface AttributesFragment {
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
export const GenresFragmentDoc = {
  kind: 'Document',
  definitions: [
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
  ],
} as unknown as DocumentNode<GenresFragment, unknown>;
export const AttributesFragmentDoc = {
  kind: 'Document',
  definitions: [
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
  ],
} as unknown as DocumentNode<AttributesFragment, unknown>;
