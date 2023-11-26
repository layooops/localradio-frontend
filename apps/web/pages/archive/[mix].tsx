import type { ParsedUrlQuery } from 'querystring';
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextPage,
} from 'next';
import { defaultMixes } from '@/entities/mix/api';
import type { MixPageProps } from '@/pages/mix-page';
import { MixPage } from '@/pages/mix-page';
import { getMixPageData } from '@/pages/mix-page/api/get-mix-page-data';
import { SITE_URL } from '@/shared/config/environment';
import { getDescription } from '@/shared/lib/helpers/get-description';
import { setSeoAltText } from '@/shared/lib/helpers/set-seo-alt-text';
import { Seo } from '@/shared/ui/seo/seo';

const BaseUrl = SITE_URL && new URL(SITE_URL);

const Page: NextPage<MixPageProps> = (props) => {
  const attributes = props.mixes?.data[0].attributes;

  const imageSeo = attributes?.image.data?.attributes?.url;

  const guestAttributes = attributes?.guests?.data[0]?.attributes;

  const seoMixDescription = getDescription(attributes);
  const seoGuestDescription = getDescription(guestAttributes);
  const seoShowDescription = getDescription(attributes?.show?.data?.attributes);

  const hasGenres = Array.isArray(attributes?.genres?.data);

  const genresNames =
    attributes?.genres?.data && hasGenres
      ? 'Playing ' +
        attributes.genres.data.map((mix) => mix.attributes?.name) +
        '. '
      : '';

  const seoDescription =
    seoMixDescription ??
    seoGuestDescription ??
    seoShowDescription ??
    attributes?.name + ' has prepared a mix for Local Radio';

  const fullSeoDescription = genresNames + seoDescription;
  const fullSeoTitle = setSeoAltText({
    title: attributes?.name,
    date: attributes?.date,
  });

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: fullSeoTitle,
    author: {
      '@type': 'Person',
      name: guestAttributes?.name ?? 'Local Radio',
      // The full URL must be provided, including the website's domain.
      url: new URL(
        guestAttributes?.slug
          ? `archive/residents/${guestAttributes.slug}`
          : '',
        BaseUrl,
      ),
    },
    image: imageSeo,
    datePublished: attributes?.createdAt,
    dateModified: attributes?.updatedAt,
  };

  return (
    <>
      <Seo
        templateTitle={fullSeoTitle}
        description={fullSeoDescription}
        image={imageSeo}
        schema={schema}
      />
      <MixPage {...props} />
    </>
  );
};

interface MixPageParams extends ParsedUrlQuery {
  mix: string;
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<MixPageProps>> => {
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59',
  );
  const { mix } = context.params as MixPageParams;
  try {
    const data = getMixPageData({ slug: mix });

    return {
      props: data,
    };
  } catch (error) {
    const mixes = defaultMixes.data.find(
      (data) => data.attributes?.slug === mix,
    );
    if (mixes)
      return {
        props: { mixes: { data: mixes ? [mixes] : [] } },
      };

    return { props: {} };
  }
};

export default Page;
