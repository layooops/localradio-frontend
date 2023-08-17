import type * as Types from '../../../shared/api/graphql/__generated__/schema.graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

export type AboutQueryVariables = Types.Exact<{ [key: string]: never }>;

export interface AboutQuery {
  __typename?: 'Query';
  about?: {
    __typename?: 'AboutEntityResponse';
    data?: {
      __typename?: 'AboutEntity';
      id?: string | null;
      attributes?: {
        __typename?: 'About';
        textRu?: string | null;
        textEn?: string | null;
      } | null;
    } | null;
  } | null;
}

export const AboutDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'About' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'about' },
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
                              name: { kind: 'Name', value: 'textRu' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'textEn' },
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
} as unknown as DocumentNode<AboutQuery, AboutQueryVariables>;
