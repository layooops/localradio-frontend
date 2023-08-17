import type { EventEntity } from '@/shared/api/graphql/__generated__/schema.graphql';
import type { CardBaseNoIdProps } from '@/shared/ui/card/card.interface';

import { setSeoAltText } from '@/shared/lib/helpers/set-seo-alt-text';
import { Card } from '@/shared/ui/card';

type EventCardProps = CardBaseNoIdProps & EventEntity;

export const EventCard = (props: EventCardProps) => {
  const { attributes, className } = props;

  const altText = setSeoAltText({
    title: attributes?.name,
    date: attributes?.eventInfo.date?.eventDate,
  });
  return (
    <Card
      sizeVariant='standard'
      cardDate={{
        text: attributes?.eventInfo.location?.locationName,
        link: attributes?.eventInfo.location?.locationLink,
      }}
      href={`/events/${attributes?.slug}`}
      variant='event'
      date={attributes?.eventInfo.date?.eventDate}
      image={{
        src: attributes?.image.data?.attributes?.url ?? '',
        alt: altText,
      }}
      headingText={attributes?.name}
      className={className}
    />
  );
};
