import type {
  GetServerSideProps,
  GetServerSidePropsResult,
  NextPage,
} from 'next';
import { EventApi } from '@/entities/event/api';
import { ArchivePage } from '@/pages/archive/ui/archive-page';
import { client } from '@/shared/api/apollo/apollo-client';
import type { EventEntityResponseCollection } from '@/shared/api/graphql/__generated__/schema.graphql';
import { Seo } from '@/shared/ui/seo/seo';

interface PageProps {
  events: EventEntityResponseCollection;
}

const Page: NextPage<PageProps> = ({ events }) => {
  return (
    <>
      <Seo templateTitle='Events' />
      <ArchivePage
        secondHeaderText='/Events/'
        data={events.data}
        totalCount={events.meta.pagination.total}
        variant='events'
      />
    </>
  );
};

export default Page;

export const getServerSideProps: GetServerSideProps = async (): Promise<
  GetServerSidePropsResult<PageProps>
> => {
  try {
    const {
      data: { events },
    } = await client.query({
      query: EventApi.EventsDocument,
      variables: { limit: 12 },
    });

    return {
      props: { events: events as EventEntityResponseCollection },
    };
  } catch (error) {
    return {
      redirect: { destination: '/500', permanent: false },
    };
  }
};
