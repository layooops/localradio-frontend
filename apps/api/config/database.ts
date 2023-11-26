import path from 'path';

const DEFAULT_CONNECTION_TIMEOUT = 60000;

const databaseConfig = ({ env }) => {
  const client = env('DATABASE_CLIENT', 'sqlite');

  const connections = {
    sqlite: {
      connection: {
        filename: path.join(__dirname, '..', '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      },
      useNullAsDefault: true,
      timezone: 'Europe/Moscow',
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', DEFAULT_CONNECTION_TIMEOUT),
    },
  };
};

export default databaseConfig;
