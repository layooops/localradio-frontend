import Head from 'next/head';
import { useRouter } from 'next/router';
import { SITE_URL } from '@/shared/config/environment';

const defaultMeta = {
  title: 'Local Radio',
  siteName: 'Local Radio',
  description:
    'Local Radio is an online radio, label, and community of DJs, producers, and friends based in Voronezh. Founded in 2020.',
  url: SITE_URL,
  type: 'website',
  keywords:
    'радио онлайн, локал радио, online radio, internet radio, радио-онлайн, radiolocal.online, Local Radio, Radio Local, интернет-радио, radio, Music',
  robots: 'all',
  image: `${SITE_URL}/images/local-radio-socials-img.png`,
};

type SeoProps = {
  date?: string;
  templateTitle?: string;
  schema?: any;
} & Partial<typeof defaultMeta>;

export function Seo(props: SeoProps) {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };

  meta.title = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  return (
    <Head>
      <title>{meta.title}</title>
      <link rel='canonical' href={`${meta.url}${router.asPath}`} />
      <meta name='robots' content={meta.robots} />
      <meta name='yandex' content={meta.robots} />
      <meta content={meta.description} name='description' />
      <meta content={meta.keywords} name='keywords' />
      <meta property='og:url' content={`${meta.url}${router.asPath}`} />
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='og:image' content={meta.image} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='image' property='og:image' content={meta.image} />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
      <meta name='msapplication-TileColor' content='#DEE5C6' />
      <meta
        name='msapplication-TileImage'
        content='/favicon/ms-icon-144x144.png'
      />
      <meta name='theme-color' content='#DEE5C6' />
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      {props.schema && (
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(props.schema) }}
        />
      )}
    </Head>
  );
}

interface Favicons {
  rel: string;
  href: string;
  sizes?: string;
  type?: string;
}

const FAVICON_FOLDER_NAME = 'favicon';

const favicons: Array<Favicons> = [
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: `/${FAVICON_FOLDER_NAME}/favicon-32x32.png`,
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '96x96',
    href: `/${FAVICON_FOLDER_NAME}/favicon-96x96.png`,
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '48x48',
    href: `/${FAVICON_FOLDER_NAME}/favicon-48x48.png`,
  },
  {
    rel: 'manifest',
    href: `/${FAVICON_FOLDER_NAME}/site.webmanifest`,
  },
];
