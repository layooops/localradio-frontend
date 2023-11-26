import type { GetStaticProps, GetStaticPropsResult, NextPage } from 'next';
import { MixArchiveInnerApi } from '@/entities/mix-archive-inner/api';
import { ArchivePage } from '@/pages/archive/ui/archive-page';
import { client } from '@/shared/api/apollo/apollo-client';
import type { ShowEntityResponseCollection } from '@/shared/api/graphql/__generated__/schema.graphql';
import { Seo } from '@/shared/ui/seo/seo';

interface PageProps {
  shows?: ShowEntityResponseCollection;
}

const Page: NextPage<PageProps> = ({ shows }) => {
  return (
    <>
      <Seo templateTitle='Shows' />
      <ArchivePage
        variant='shows'
        totalCount={shows?.meta.pagination.total}
        data={shows?.data}
        archiveItemSecondHeaderText='Shows'
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<PageProps>
> => {
  try {
    const {
      data: { shows },
    } = await client.query({
      query: MixArchiveInnerApi.ShowsDocument,
      variables: { limit: 1 },
    });
    return {
      props: { shows: shows as ShowEntityResponseCollection },
      revalidate: 60,
    };
  } catch (error) {
    return { redirect: { destination: '/archive', permanent: false } };
  }
};

export default Page;
