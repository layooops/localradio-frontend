import type { GetServerSideProps, NextPage } from 'next';
import type { Maybe } from 'yup';
import { EventPage } from '@/pages/event-page/ui/event-page';
import { EventApi } from '@/entities/event/api';
import { client } from '@/shared/api/apollo/apollo-client';
import type { SlugParams } from '@/shared/api/apollo/slug-params';
import type { EventEntity } from '@/shared/api/graphql/__generated__/schema.graphql';
import { getDescription } from '@/shared/lib/helpers/get-description';
import { getMarkdownToHtml } from '@/shared/lib/helpers/markdown-to-html';
import { Seo } from '@/shared/ui/seo/seo';

export interface EventSchedulePage {
  info: Maybe<string>;
  name?: Maybe<string>;
}

interface PageProps {
  eventName: string;
  events: EventEntity;
  descriptionRu: string;
  eventSchedule?: EventSchedulePage[] | null;
}

const Page: NextPage<PageProps> = ({
  eventName,
  events,
  eventSchedule,
  descriptionRu,
}: PageProps) => {
  const descriptionSeo = getDescription(events.attributes?.eventInfo.info);

  return (
    <>
      <Seo templateTitle={eventName} description={descriptionSeo} />
      <EventPage
        attributes={events.attributes}
        descriptionRu={descriptionRu}
        eventSchedule={eventSchedule}
      />
    </>
  );
};

export default Page;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { event } = context.params as SlugParams;

  const {
    data: { events },
  } = await client.query({
    query: EventApi.EventsDocument,
    variables: { filters: { slug: { eq: event as string } } },
  });

  if (!events?.data.length) {
    return {
      notFound: true,
    };
  }

  const [firstEvent] = events.data;

  const descriptionRu = await getMarkdownToHtml(
    firstEvent.attributes?.eventInfo.info,
  );

  const eventName = firstEvent.attributes?.name;

  const eventSchedule =
    firstEvent.attributes?.eventInfo.schedule &&
    (await Promise.all(
      firstEvent.attributes.eventInfo.schedule.map(async (schedule) => ({
        ...schedule,
        info: await getMarkdownToHtml(schedule?.info),
      })),
    ));

  return {
    props: { events: firstEvent, eventName, descriptionRu, eventSchedule },
  };
};
