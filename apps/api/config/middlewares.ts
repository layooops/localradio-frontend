const BUCKET = process.env.YANDEX_CLOUD_BUCKET;
const BUCKET_URL = `https://${BUCKET}.storage.yandexcloud.net`;

const isDev = process.env.NODE_ENV === 'development';

const middlewaresConfig = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: isDev
        ? ['https://radiolocal.online', 'http://localhost:1337', 'http://localhost:3000']
        : ['https://radiolocal.online'],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', BUCKET_URL],
          'media-src': ["'self'", 'data:', 'blob:', BUCKET_URL],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];

export default middlewaresConfig;
