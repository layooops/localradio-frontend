import { memo } from 'react';
import { MixCardButtons } from '@/features/toggle-mix-player/ui/mix-card-buttons';
import { setSeoAltText } from '@/shared/lib/helpers/set-seo-alt-text';
import { Card } from '@/shared/ui/card';
import type { MixCardProps } from '../lib/types/mix-card.interface';

export const MixCard = (props: MixCardProps) => {
  const { attributes, sizeVariant, className } = props;

  const linksToMixes = attributes?.linksToMixes;
  const locationName = attributes?.locationName;
  const locationLink = attributes?.locationLink;

  const altText = setSeoAltText({
    title: attributes?.name,
    date: attributes?.date,
  });

  return (
    <Card
      date={attributes?.date}
      image={{
        src:
          attributes?.image.data?.attributes?.formats?.medium?.url ||
          attributes?.image.data?.attributes?.url,
        alt: altText,
      }}
      sizeVariant={sizeVariant}
      variant='mix'
      href={`/archive/${attributes?.slug}`}
      headingText={attributes?.name}
      cardDate={{ link: locationLink, text: locationName }}
      genres={attributes?.genres}
      className={className}
      mixButtons={
        <MixCardButtons
          linksToMixes={linksToMixes}
          slug={attributes?.slug}
          sizeVariant={sizeVariant}
          id={props.id}
        />
      }
    />
  );
};

export const MixCardWithMemo = memo(MixCard);
