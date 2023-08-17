import type { EntityVariant } from '@/shared/lib/types/entity-variants.interface';

import clsx from 'clsx';

import { EventCard } from '@/entities/event/ui/event-card/event-card';
import { ShowResidentCard } from '@/entities/mix-archive-inner/ui/show-resident-card/show-resident-card';
import { ReleaseCard } from '@/entities/release/ui/release-card/release-card';
import { ShopCard } from '@/entities/shop/ui/shop-card';
import { MixCardWithMemo } from '@/widgets/mix-card/ui/mix-card';

export interface CardsProps {
  data?: any[];
  variant: EntityVariant;
  indexPageText?: string;
  pageVariant: 'home' | 'other';
}

// TODO: Протестировать после рефакторинга

export const Cards = ({
  variant,
  data,
  pageVariant,
}: Omit<CardsProps, 'indexPageText'>) => {
  const hiddenClasses = (index: number) => {
    const MIN_VISIBLE_DATA = 10;
    const MAX_HIDDEN_INDEX_OFFSET = 3;

    if (pageVariant === 'home' && data) {
      return clsx({
        '4xl:hidden':
          data.length >= MIN_VISIBLE_DATA &&
          data.length < index + MAX_HIDDEN_INDEX_OFFSET,
      });
    }
    return undefined;
  };

  const renderCard = (
    key: string,
    className: string | undefined,
    props: any,
  ) => {
    if (!data) return null;

    switch (variant) {
      case 'mixes':
      case 'show':
      case 'search':
        return (
          <MixCardWithMemo
            key={key}
            className={className}
            sizeVariant='standard'
            {...props}
          />
        );

      case 'releases':
        return <ReleaseCard key={key} className={className} {...props} />;

      case 'events':
        return (
          <EventCard
            key={key}
            className={className}
            attributes={props.attributes}
          />
        );

      case 'shop':
        return <ShopCard key={key} className={className} {...props} />;

      case 'guests':
      case 'shows':
        return <ShowResidentCard key={key} className={className} {...props} />;

      default:
        return null;
    }
  };

  return (
    <>
      {data &&
        data.map((entity: any, index) => {
          const key = entity.attributes?.slug || index;
          const className = hiddenClasses(index);
          return renderCard(key, className, entity);
        })}
    </>
  );
};
