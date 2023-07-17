import { Maybe } from 'yup';
import { Mix } from '@/shared/api/graphql/__generated__/schema.graphql';
import { SITE_URL } from '@/shared/config/environment';
import { getDescription } from '@/shared/lib/get-gescription';
import { setSeoAltText } from '@/shared/lib/set-seo-alt-text';

const BaseUrl = SITE_URL && new URL(SITE_URL);

export const getMixPageSeo = (attributes: Maybe<Mix>) => {
  const imageSeo = attributes?.image.data?.attributes?.url;

  const seoMixDescription = getDescription(attributes);
  const seoGuestDescription = getDescription(
    attributes?.guests?.data[0]?.attributes
  );
  const seoShowDescription = getDescription(attributes?.show?.data?.attributes);

  const genresNames =
    attributes?.genres?.data && attributes.genres.data.length > 0
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
      name: attributes?.guests?.data[0]?.attributes?.name ?? 'Local Radio',
      // The full URL must be provided, including the website's domain.
      url: new URL(
        attributes?.guests?.data[0]?.attributes?.slug
          ? `archive/residents/${attributes.guests.data[0]?.attributes?.slug}`
          : '',
        BaseUrl
      ),
    },
    image: imageSeo,
    datePublished: attributes?.createdAt,
    dateModified: attributes?.updatedAt,
  };

  return { schema, fullSeoDescription, fullSeoTitle, imageSeo };
};
