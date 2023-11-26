import type {
  GetServerSideProps,
  GetServerSidePropsResult,
  NextPage,
} from 'next';
import { MixArchiveInnerApi } from '@/entities/mix-archive-inner/api';
import { ArchivePage } from '@/pages/archive/ui/archive-page';
import { client } from '@/shared/api/apollo/apollo-client';
import type { GuestEntityResponseCollection } from '@/shared/api/graphql/__generated__/schema.graphql';
import { Seo } from '@/shared/ui/seo/seo';

interface PageProps {
  guests?: GuestEntityResponseCollection;
}

const Page: NextPage<PageProps> = ({ guests }) => {
  return (
    <>
      <Seo templateTitle='Residents' />
      <ArchivePage
        variant='guests'
        totalCount={guests?.meta.pagination.total}
        data={guests?.data}
        residentsFilter={{}}
        archiveItemSecondHeaderText='Residents'
      />
    </>
  );
};

export default Page;

export const getServerSideProps: GetServerSideProps = async ({
  res,
}): Promise<GetServerSidePropsResult<PageProps>> => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59',
  );

  try {
    const {
      data: { guests },
    } = await client.query({
      query: MixArchiveInnerApi.GuestsDocument,
      variables: { limit: 12 },
    });

    return {
      props: { guests: guests as GuestEntityResponseCollection },
    };
  } catch (error) {
    return { redirect: { destination: '/archive', permanent: false } };
  }
};
