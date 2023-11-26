import { generateGraphqlCodegenConfig } from '@local-radio/codegen-config';

const schema = process.env.NEXT_PUBLIC_STRAPI_API_URL_GRAPHQL;

const config = generateGraphqlCodegenConfig({ schema });

export default config;
