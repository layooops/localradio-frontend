import { Maybe } from 'yup';
import { ArchiveApi } from '@/entities/archive/api';
import { client } from '@/shared/api/apollo/apollo-client';
import {
  InputMaybe,
  MixEntity,
  MixEntityResponseCollection,
  MixFiltersInput,
} from '@/shared/api/graphql/__generated__/schema.graphql';
import { getMarkdownToHtml } from '@/shared/lib/markdown-to-html';
import { Description } from '@/shared/lib/types/description.interface';
import { MixDescription } from '../ui/types/mix-page.interface';

interface GetMixPageData {
  slug: string;
}

export const getMixPageData = async ({ slug }: GetMixPageData) => {
  const { mixes } = await ArchiveApi.fetchMixes<MixEntityResponseCollection>({
    filters: { slug: { eq: slug } },
  });

  if (mixes.data.length === 0) {
    return {
      notFound: true,
    };
  }

  const mixDate = mixes.data[0].attributes?.date;
  const mixesShowSlug = mixes.data[0].attributes?.show?.data?.attributes?.slug;
  const guestsSlug =
    mixes.data[0].attributes?.guests?.data[0]?.attributes?.slug;

  const guestsMixesLength =
    mixes.data[0].attributes?.guests?.data[0]?.attributes?.mixes?.data;

  const descriptionMix = await getMarkdownToHtml(mixes.data[0].attributes);
  const descriptionGuest = await getMarkdownToHtml(
    mixes.data[0].attributes?.guests?.data[0]?.attributes
  );
  const descriptionShow = await getMarkdownToHtml(
    mixes.data[0].attributes?.show?.data?.attributes
  );

  const tracklist = (await getMarkdownToHtml(
    mixes.data[0].attributes?.tracklist
  )) as Description;

  const description = {
    mix: descriptionMix,
    guest: descriptionGuest,
    show: descriptionShow,
  } as MixDescription;

  const {
    data: { siblingRight, siblingLeft },
  } = await client.query({
    query: ArchiveApi.MixSiblingsDocument,
    variables: {
      date: mixDate,
    },
  });

  const currentGenres = mixes.data[0].attributes?.genres?.data.map(
    ({ attributes }) => attributes?.slug
  );

  const id = mixes.data[0]?.id;

  const getMoreEpisodes = async (filters?: InputMaybe<MixFiltersInput>) => {
    const { mixes } = await ArchiveApi.fetchMixes<MixEntityResponseCollection>({
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
