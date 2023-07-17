import type {
  GetServerSideProps,
  GetServerSidePropsResult,
  NextPage,
} from 'next';
import { defaultReleases } from '@/defaults/defaults';
import { ArchiveApi } from '@/entities/archive/api';
import { ReleasePage, ReleasePageProps } from '@/pages/release/ui/release-page';
import { client } from '@/shared/api/apollo/apollo-client';
import { ReleaseEntityResponseCollection } from '@/shared/api/graphql/__generated__/schema.graphql';
import { getDescription } from '@/shared/lib/get-gescription';
import { getMarkdownToHtml } from '@/shared/lib/markdown-to-html';
import { Description } from '@/shared/lib/types/description.interface';
import { Seo } from '@/shared/ui/seo/seo';

const Page: NextPage<ReleasePageProps> = (props) => {
  const attributes = props.releases?.data[0].attributes;

  const title = `${attributes?.artistName} - ${attributes?.releaseName}`;
  const descriptionSeo = getDescription(attributes);

  const imageSeo = attributes?.cover.data?.attributes?.url;

  return (
    <>
      <Seo
        templateTitle={title}
        image={imageSeo}
        description={descriptionSeo}
      />

      <ReleasePage {...props} />
    </>
  );
};

export default Page;

export const getServerSideProps: GetServerSideProps = async (
  context
): Promise<GetServerSidePropsResult<ReleasePageProps>> => {
  const { release } = context.params as { release: string };

  try {
    const {
      data: { releases },
    } = await client.query({
      query: ArchiveApi.ReleasesDocument,
      variables: {
        filters: { slug: { eq: release } },
      },
    });

    if (releases?.data.length === 0) {
      return {
        notFound: true,
      };
    }

    const description = (await getMarkdownToHtml(
      releases?.data[0].attributes
    )) as Description;

    return {
      props: {
        releases: releases as ReleaseEntityResponseCollection,
        description,
      },
    };
  } catch (error) {
    const releases = defaultReleases.data.find(
      (data) => data.attributes?.slug === release
    );
    if (releases)
      return {
        props: { releases: { data: releases ? [releases] : [] } },
      };

    return { props: {} };
  }
};
