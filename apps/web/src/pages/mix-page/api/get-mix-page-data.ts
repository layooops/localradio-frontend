import type { Maybe } from 'yup';
import { MixApi } from '@/entities/mix/api';
import { client } from '@/shared/api/apollo/apollo-client';
import type {
  InputMaybe,
  MixEntity,
  MixEntityResponseCollection,
  MixFiltersInput,
} from '@/shared/api/graphql/__generated__/schema.graphql';
import { getMarkdownToHtml } from '@/shared/lib/helpers/markdown-to-html';
import type { Description } from '@/shared/lib/types/description.interface';
import type { MixDescription } from '../lib/types/mix-page.interface';

interface GetMixPageData {
  slug: string;
}

export const getMixPageData = async ({ slug }: GetMixPageData) => {
  const { mixes } = await MixApi.fetchMixes<MixEntityResponseCollection>({
    filters: { slug: { eq: slug } },
  });

  if (mixes.data.length === 0) {
    return {
      notFound: true,
    };
  }

  const [firstMix] = mixes.data;
  const firstGuest = firstMix.attributes?.guests?.data[0];

  const mixDate = firstMix.attributes?.date;
  const mixesShowSlug = firstMix.attributes?.show?.data?.attributes?.slug;
  const guestsSlug = firstGuest?.attributes?.slug;

  const guestsMixesLength = firstGuest?.attributes?.mixes?.data;

  const descriptionMix = await getMarkdownToHtml(firstMix.attributes);
  const descriptionGuest = await getMarkdownToHtml(firstGuest?.attributes);
  const descriptionShow = await getMarkdownToHtml(
    firstMix.attributes?.show?.data?.attributes,
  );

  const tracklist = (await getMarkdownToHtml(
    firstMix.attributes?.tracklist,
  )) as Description;

  const description = {
    mix: descriptionMix,
    guest: descriptionGuest,
    show: descriptionShow,
  } as MixDescription;

  const {
    data: { siblingRight, siblingLeft },
  } = await client.query({
    query: MixApi.MixSiblingsDocument,
    variables: {
      date: mixDate,
    },
  });

  const currentGenres = firstMix.attributes?.genres?.data.map(
    ({ attributes }) => attributes?.slug,
  );

  const { id } = firstMix;

  const getMoreEpisodes = async (filters?: InputMaybe<MixFiltersInput>) => {
    const { mixes } = await MixApi.fetchMixes<MixEntityResponseCollection>({
      filters,
    });

    return mixes;
  };

  let moreEpisodes: MixEntity[] = [];
  let totalCount: Maybe<number> = 0;

  if (mixesShowSlug) {
    const data = await getMoreEpisodes({
      show: { slug: { eq: mixesShowSlug } },
      id: { ne: id },
    });
    moreEpisodes = data.data;
    totalCount = data.meta.pagination.total;
  }

  if (
    guestsMixesLength &&
    guestsMixesLength.length > 1 &&
    guestsSlug &&
    !mixesShowSlug
  ) {
    const data = await getMoreEpisodes({
      guests: { slug: { eq: guestsSlug } },
      id: { ne: id },
    });

    moreEpisodes = data.data;
    totalCount = data.meta.pagination.total;
  }

  if (moreEpisodes.length === 0) {
    const data = await getMoreEpisodes({
      genres: {
        slug: { in: [currentGenres?.find((x) => x !== undefined) ?? ''] },
      },
      id: { ne: id },
    });
    moreEpisodes = data.data;
    totalCount = data.meta.pagination.total;
  }

  return {
    mixPrev: siblingLeft?.data,
    mixNext: siblingRight?.data,
    mixes,
    totalCount,
    moreEpisodes,
    description,
    tracklist,
  };
};
