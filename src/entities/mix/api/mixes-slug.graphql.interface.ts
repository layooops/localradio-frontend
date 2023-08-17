import type * as Types from '@/shared/api/graphql/__generated__/schema.graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

export type MixesSlugQueryVariables = Types.Exact<{ [key: string]: never }>;

export interface MixesSlugQuery {
  __typename?: 'Query';
  mixes?: {
    __typename?: 'MixEntityResponseCollection';
    data: Array<{
      __typename?: 'MixEntity';
      id?: string | null;
      attributes?: { __typename?: 'Mix'; slug?: string | null } | null;
    }>;
  } | null;
}

export const MixesSlugDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'MixesSlug' },
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
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'attributes' },
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
        ],
      },
    },
  ],
} as unknown as DocumentNode<MixesSlugQuery, MixesSlugQueryVariables>;
