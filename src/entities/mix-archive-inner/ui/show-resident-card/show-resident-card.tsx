import type {
  GuestEntity,
  ShowEntity,
} from '@/shared/api/graphql/__generated__/schema.graphql';
import type { CardBaseNoIdProps } from '@/shared/ui/card/card.interface';

import { Card } from '@/shared/ui/card';

type ShowResidentProps = CardBaseNoIdProps & (ShowEntity | GuestEntity);

type ShowResidentCardVariant = 'resident' | 'residents' | 'show' | 'shows';

export const ShowResidentCard = (props: ShowResidentProps) => {
  const { attributes, __typename, className } = props;
  const latestMix = attributes?.mixes?.data[0]?.attributes;
  const latestEpisodeDate = latestMix?.date;
  const latestEpisodeSlug = latestMix?.slug;
  const imageUrl = attributes?.image?.data?.attributes?.url;

  const getPluralCardVariant = (isPlural: boolean): ShowResidentCardVariant => {
    if (isPlural) {
      return __typename === 'GuestEntity' ? 'residents' : 'shows';
    }
    return __typename === 'GuestEntity' ? 'resident' : 'show';
  };

  const imageAltTitle =
    'Local Radio ' +
    getPluralCardVariant(false) +
    ' ' +
    (__typename === 'GuestEntity' ? attributes?.name : `"${attributes?.name}"`);

  const href = `/archive/${getPluralCardVariant(true)}/${attributes?.slug}`;

  return (
    <Card
      sizeVariant='standard'
      variant='show'
      cardDate={{
        text: 'Last Episode:',
        link: latestEpisodeSlug ? '/archive/' + latestEpisodeSlug : null,
      }}
      date={latestEpisodeDate}
      headingText={attributes?.name}
      href={href}
      className={className}
      image={{
        alt: imageAltTitle,
        src:
          attributes?.image?.data?.attributes?.formats?.medium?.url || imageUrl,
      }}
    />
  );
};
