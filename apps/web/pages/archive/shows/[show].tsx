import type {
  GetServerSideProps,
  GetServerSidePropsResult,
  NextPage,
} from 'next';
import { ArchivePage } from '@/pages/archive/ui/archive-page';
import { PageExtraContent } from '@/pages/ui/page-extra-content-wrapper';
import { MixArchiveInnerApi } from '@/entities/mix-archive-inner/api';
import { client } from '@/shared/api/apollo/apollo-client';
import type {
  MixEntityResponseCollection,
  Query,
  ShowEntityResponseCollection,
} from '@/shared/api/graphql/__generated__/schema.graphql';
import { getDescription } from '@/shared/lib/helpers/get-description';
import { getMarkdownToHtml } from '@/shared/lib/helpers/markdown-to-html';
import type { Description } from '@/shared/lib/types/description.interface';
import { Seo } from '@/shared/ui/seo/seo';

interface PageProps {
  shows?: ShowEntityResponseCollection;
  mixes?: MixEntityResponseCollection;
  show?: string;
  description?: Description;
}

const Page: NextPage<PageProps> = ({ shows, show, mixes, description }) => {
  const attributes = shows?.data[0].attributes;
  const name = attributes?.name;
  const descriptionSeo = getDescription(attributes);
  const totalCount = attributes?.mixes?.data.length;

  return (
    <>
      <Seo templateTitle={name} description={descriptionSeo} />
      <ArchivePage
        archiveItemSecondHeaderText={name}
        variant='show'
        totalCount={totalCount}
        data={mixes?.data}
        dataText='Episodes'
        mixesFilter={{ show: { slug: { eq: show } } }}
      >
        <PageExtraContent
          image={attributes?.image?.data?.attributes?.url}
          title={attributes?.name}
          description={description}
          socials={attributes?.socials}
        />
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
  const { show } = context.params as { show: string };

  try {
    const {
      data: { shows },
    } = await client.query({
      query: MixArchiveInnerApi.ShowsDocument,
      variables: { limit: -1, filters: { slug: { eq: show } } },
    });

    if (!shows?.data.length) {
      return {
        notFound: true,
      };
    }

    const description = await getMarkdownToHtml(shows.data[0]?.attributes);

    const {
      data: { mixes },
    } = await client.query<Query>({
      query: MixArchiveInnerApi.MixesDocument,
      variables: { filters: { show: { slug: { eq: show } } } },
    });

    return {
      props: {
        shows: shows as ShowEntityResponseCollection,
        show,
        mixes: mixes as MixEntityResponseCollection,
        description: description as Description,
      },
    };
  } catch (error) {
    return { redirect: { destination: '/archive', permanent: false } };
  }
};
