const pluginsConfig = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        s3Options: {
          accessKeyId: env('YANDEX_CLOUD_ACCESS_KEY_ID'),
          secretAccessKey: env('YANDEX_CLOUD_ACCESS_SECRET'),
          endpoint: 'https://storage.yandexcloud.net',
          region: env('YANDEX_CLOUD_REGION'),
          params: {
            Bucket: env('YANDEX_CLOUD_BUCKET'),
          },
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 60,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
        introspection: true,
      },
    },
  },
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST'),
        port: env('SMTP_PORT'),
        secure: true,
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: 'info@radiolocal.online',
        defaultReplyTo: 'vitalastakhov@gmail.com',
      },
    },
  },
});

export default pluginsConfig;
