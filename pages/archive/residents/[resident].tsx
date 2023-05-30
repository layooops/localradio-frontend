import type {
  GetServerSideProps,
  GetServerSidePropsResult,
  NextPage,
} from 'next';
import { ArchiveApi } from '@/entities/archive/api';
import { ArchivePage } from '@/pages/archive/ui/archive-page';
import { PageExtraContent } from '@/pages/ui/page-extra-content-wrapper';
import { client } from '@/shared/api/apollo/apollo-client';
import type {
  GuestEntityResponseCollection,
  MixEntityResponseCollection,
} from '@/shared/api/graphql/__generated__/schema.graphql';
import { getDescription } from '@/shared/lib/get-gescription';
import { getMarkdownToHtml } from '@/shared/lib/markdown-to-html';
import type { Description } from '@/shared/types/description.interface';
import { Seo } from '@/shared/ui/seo/seo';

interface PageProps {
  guest?: GuestEntityResponseCollection;
  guestName?: string;
  mixes?: MixEntityResponseCollection;
  resident?: string;
  description?: Description;
}

const Page: NextPage<PageProps> = ({
  resident,
  mixes,
  guest,
  description,
  guestName,
}) => {
  const descriptionSeo = getDescription(guest?.data[0].attributes);
  return (
    <>
      <Seo templateTitle={guestName} description={descriptionSeo} />
      <ArchivePage
        archiveItemSecondHeaderText={guestName}
        variant='mixes'
        totalCount={mixes?.meta.pagination.total}
        data={mixes?.data}
        dataText='Episodes'
        mixesFilter={{ guests: { slug: { eq: resident } } }}
      >
        <PageExtraContent
          image={guest?.data[0].attributes?.image?.data?.attributes?.url}
          title={guestName}
          description={description}
          socials={guest?.data[0].attributes?.socials}
        />
      </ArchivePage>
    </>
  );
};

export default Page;

export const getServerSideProps: GetServerSideProps = async ({
  params,
  res,
}): Promise<GetServerSidePropsResult<PageProps>> => {
  const { resident } = params as { resident: string };

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );

  const {
    data: { guests },
  } = await client.query({
    query: ArchiveApi.GuestsDocument,
    variables: { limit: 12, filters: { slug: { eq: resident } } },
  });

  if (!guests?.data.length) {
    return {
      notFound: true,
    };
  }

  const mixes = await ArchiveApi.fetchMixes({
    filters: { guests: { slug: { eq: resident } } },
  });

  const descriptionGuest = await getMarkdownToHtml(guests.data[0].attributes);
  const guestName = guests.data[0].attributes?.name;
  return {
    props: {
      description: descriptionGuest as Description,
      mixes: mixes as MixEntityResponseCollection,
      resident,
      guestName,
      guest: guests as GuestEntityResponseCollection,
    },
  };
};
