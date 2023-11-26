import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import type * as Types from '@/shared/api/graphql/__generated__/schema.graphql';

export type StreamIsLiveQueryVariables = Types.Exact<{ [key: string]: never }>;

export interface StreamIsLiveQuery {
  __typename?: 'Query';
  streamIsLive?: boolean | null;
}

export const StreamIsLiveDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'StreamIsLive' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'streamIsLive' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<StreamIsLiveQuery, StreamIsLiveQueryVariables>;
