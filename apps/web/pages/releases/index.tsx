import type { ApolloError } from '@apollo/client';
import type { GetStaticProps, GetStaticPropsResult, NextPage } from 'next';
import { defaultReleases, ReleaseApi } from '@/entities/release/api';
import { ArchivePage } from '@/pages/archive/ui/archive-page';
import { client } from '@/shared/api/apollo/apollo-client';
import type { ReleaseEntityResponseCollection } from '@/shared/api/graphql/__generated__/schema.graphql';
import { Seo } from '@/shared/ui/seo/seo';

interface PageProps {
  releases: ReleaseEntityResponseCollection;
  error?: string;
}

const Page: NextPage<PageProps> = ({ releases, error }) => {
  return (
    <div>
      <Seo templateTitle='Releases' />
      <ArchivePage
        variant='releases'
        totalCount={
          !error ? releases.meta.pagination.total : releases.data.length
        }
        data={releases.data}
        secondHeaderText='/Releases/'
      />
    </div>
  );
};

export default Page;

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<PageProps>
> => {
  try {
    const {
      data: { releases },
    } = await client.query({
      query: ReleaseApi.ReleasesDocument,
      variables: { limit: 12 },
    });
    return {
      props: { releases: releases as ReleaseEntityResponseCollection },
      revalidate: 60,
    };
  } catch (error) {
    return {
      props: {
        releases: defaultReleases,
        error: (error as ApolloError).networkError?.message,
      },
    };
  }
};
