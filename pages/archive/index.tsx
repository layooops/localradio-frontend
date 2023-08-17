import type { MixEntityResponseCollection } from '@/shared/api/graphql/__generated__/schema.graphql';
import type { ApolloError } from '@apollo/client';
import type {
  GetServerSideProps,
  GetServerSidePropsResult,
  NextPage,
} from 'next';

import { MixApi } from '@/entities/mix/api';
import { defaultMixes } from '@/entities/mix/api/default-mixes';
import { ArchivePage } from '@/pages/archive/ui/archive-page';
import { Seo } from '@/shared/ui/seo/seo';

interface PageProps {
  mixes?: MixEntityResponseCollection;
  error?: string;
}

const Page: NextPage<PageProps> = ({ mixes, error }) => {
  return (
    <>
      <Seo templateTitle='Archive' />
      <ArchivePage
        variant='mixes'
        totalCount={!error ? mixes?.meta.pagination.total : mixes?.data.length}
        data={mixes?.data}
        secondHeaderText='/Archive/'
        mixesFilter={{}}
      />
    </>
  );
};

export default Page;

export const getServerSideProps: GetServerSideProps = async (): Promise<
  GetServerSidePropsResult<PageProps>
> => {
  try {
    const { mixes } = await MixApi.fetchMixes({ limit: 12 });
    return {
      props: { mixes: mixes as MixEntityResponseCollection },
    };
  } catch (error) {
    return {
      props: {
        mixes: defaultMixes as MixEntityResponseCollection,
        error: (error as ApolloError).networkError?.message,
      },
    };
  }
};
