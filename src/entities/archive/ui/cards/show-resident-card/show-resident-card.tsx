import { CardBaseProps } from '@/entities/archive/lib/card-list.interface';
import {
  GuestEntity,
  ShowEntity,
} from '@/shared/api/graphql/__generated__/schema.graphql';
import { Card } from '@/shared/ui/card';

type ShowResidentProps = CardBaseProps & (ShowEntity | GuestEntity);

type Variant = 'resident' | 'residents' | 'show' | 'shows';

export const ShowResidentCard = (props: ShowResidentProps): JSX.Element => {
  const { attributes, __typename, className } = props;
  const latestMix = attributes?.mixes?.data[0]?.attributes;
  const latestEpisodeDate = latestMix?.date;
  const latestEpisodeSlug = latestMix?.slug;
  const imageUrl = attributes?.image?.data?.attributes?.url;

  const getPluralCardVariant = (isPlural: boolean): Variant => {
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
