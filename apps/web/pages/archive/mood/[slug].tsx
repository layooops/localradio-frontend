import type {
  GetServerSideProps,
  GetServerSidePropsResult,
  NextPage,
} from 'next';
import { ArchivePage } from '@/pages/archive/ui/archive-page';
import { MixApi } from '@/entities/mix/api';
import { MixArchiveInnerApi } from '@/entities/mix-archive-inner/api';
import { client } from '@/shared/api/apollo/apollo-client';
import type { SlugParams } from '@/shared/api/apollo/slug-params';
import type {
  MixEntityResponseCollection,
  MoodEntity,
} from '@/shared/api/graphql/__generated__/schema.graphql';
import { Seo } from '@/shared/ui/seo/seo';
import { TextWrapper } from '@/shared/ui/text-wrapper/text-wrapper';

interface PageProps {
  mood?: MoodEntity;
  mixes?: MixEntityResponseCollection;
  slug?: string;
}

const Page: NextPage<PageProps> = ({ mood, mixes, slug }: PageProps) => {
  const attributes = mood?.attributes;
  return (
    <>
      <Seo templateTitle={attributes?.name ?? ''} />
      <ArchivePage
        archiveItemSecondHeaderText={attributes?.name ?? ''}
        variant='mixes'
        totalCount={mixes?.meta.pagination.total}
        data={mixes?.data}
        mixesFilter={{ moods: { slug: { eq: slug } } }}
      >
        {attributes?.description ? (
          <div className='px-1.5 py-2 font-medium uppercase md:px-3 lg:px-3.5  2xl:py-[1rem]'>
            <TextWrapper sizeVariant='large'>
              {attributes.description}
            </TextWrapper>
          </div>
        ) : null}
      </ArchivePage>
    </>
  );
};

export default Page;

export const getServerSideProps: GetServerSideProps = async (
  context,
): Promise<GetServerSidePropsResult<PageProps>> => {
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59',
  );
  const { slug } = context.params as SlugParams;

  const {
    data: { mood },
  } = await client.query({
    query: MixArchiveInnerApi.MoodDocument,
    variables: { slug },
  });
  if (!mood?.data) {
    return {
      notFound: true,
    };
  }

  const { mixes } = await MixApi.fetchMixes({
    filters: { moods: { slug: { eq: slug } } },
  });

  return {
    props: {
      mood: mood.data,
      mixes,
      slug,
    },
  };
};
