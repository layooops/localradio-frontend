import type {
  EventEntity,
  Maybe,
} from '@/shared/api/graphql/__generated__/schema.graphql';
import type { EventSchedulePage } from 'pages/events/[event]';

import { PageWrapper } from '@/pages/ui/page-wrapper';

import { EventPageBottom } from './event-page-bottom';
import { EventPageCenter } from './event-page-center';
import { EventPageLeft } from './event-page-left';

export interface EventPageProps {
  descriptionRu: string;
  attributes: EventEntity['attributes'];
  eventSchedule?: Maybe<EventSchedulePage[]>;
}

export const EventPage = ({
  attributes,
  descriptionRu,
  eventSchedule,
}: EventPageProps) => {
  const mixes = attributes?.mixes;

  const title = attributes?.name;

  return (
    <PageWrapper
      variant='event'
      name={title}
      left={
        <EventPageLeft
          title={title}
          eventSchedule={eventSchedule}
          descriptionRu={descriptionRu}
        />
      }
      center={<EventPageCenter attributes={attributes} />}
      bottom={
        mixes?.data.length ? (
          <EventPageBottom mixes={mixes.data} title={title} />
        ) : null
      }
    />
  );
};
