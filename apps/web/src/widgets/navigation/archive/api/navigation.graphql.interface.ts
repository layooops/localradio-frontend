import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import type * as Types from '@/shared/api/graphql/__generated__/schema.graphql';

export type ArchiveNavigationQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export interface ArchiveNavigationQuery {
  __typename?: 'Query';
  moodsArray?: Array<Array<{
    __typename?: 'Mood';
    name?: string | null;
    slug?: string | null;
  } | null> | null> | null;
  genresArray?: Array<Array<{
    __typename?: 'Genre';
    name: string;
    slug: string;
  } | null> | null> | null;
}

export const ArchiveNavigationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ArchiveNavigation' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'moodsArray' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genresArray' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ArchiveNavigationQuery,
  ArchiveNavigationQueryVariables
>;
