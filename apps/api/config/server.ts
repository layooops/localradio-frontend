import { DEFAULT_PORT } from '../src/helpers/consts';

const serverConfig = ({ env }) => {
  const isDev = env('NODE_ENV') === 'development';

  return {
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', DEFAULT_PORT),
    app: {
      keys: env.array('APP_KEYS'),
    },
    webhooks: {
      populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
    },
    url: !isDev ? env('API_URL') : undefined,
  };
};

export default serverConfig;
