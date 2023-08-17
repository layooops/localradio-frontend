import type {
  GenreEntity,
  MixEntityResponseCollection,
} from '@/shared/api/graphql/__generated__/schema.graphql';
import type {
  GetServerSideProps,
  GetServerSidePropsResult,
  NextPage,
} from 'next';
import type { ParsedUrlQuery } from 'querystring';

import { MixApi } from '@/entities/mix/api';
import { MixArchiveInnerApi } from '@/entities/mix-archive-inner/api';
import { ArchivePage } from '@/pages/archive/ui/archive-page';
import { client } from '@/shared/api/apollo/apollo-client';
import { Seo } from '@/shared/ui/seo/seo';

interface PageProps {
  genre?: GenreEntity;
  mixes?: MixEntityResponseCollection;
  slug?: string;
}

const Page: NextPage<PageProps> = ({ genre, mixes, slug }) => {
  const genreName = genre?.attributes?.name;

  const totalCount = genre?.attributes?.mixes?.data.length;
  return (
    <>
      <Seo templateTitle={genreName} />
      <ArchivePage
        totalCount={totalCount}
        variant='mixes'
        data={mixes?.data}
        mixesFilter={{ genres: { slug: { eq: slug } } }}
        archiveItemSecondHeaderText={genreName}
      />
    </>
  );
};

export default Page;

interface SlugParams extends ParsedUrlQuery {
  genre: string;
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
  res,
}): Promise<GetServerSidePropsResult<PageProps>> => {
  const { genre: slug } = params as SlugParams;
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59',
  );

  const {
    data: { genreOne: genre },
  } = await client.query({
    query: MixArchiveInnerApi.GenreDocument,
    variables: { slug },
  });

  if (!genre?.data) {
    return {
      notFound: true,
    };
  }

  const { mixes } = await MixApi.fetchMixes({
    filters: { genres: { slug: { eq: slug } } },
  });

  return {
    props: {
      genre: genre.data,
      mixes,
      slug,
    },
  };
};
