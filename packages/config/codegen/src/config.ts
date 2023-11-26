import type { CodegenConfig as GraphqlCodegenConfig } from '@graphql-codegen/cli';

export const generateGraphqlCodegenConfig = ({
  schema,
}: {
  schema: string | undefined;
}): GraphqlCodegenConfig => ({
  schema: schema,
  documents: ['./src/**/*.graphql'],
  generates: {
    './src/shared/api/graphql/__generated__/schema.graphql.ts': {
      plugins: ['typescript'],
    },
    './src/shared/api/graphql/': {
      plugins: ['typescript-operations', 'typed-document-node'],
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.graphql.interface.ts',
        baseTypesPath: '/__generated__/schema.graphql.ts',
      },
    },
  },
});
