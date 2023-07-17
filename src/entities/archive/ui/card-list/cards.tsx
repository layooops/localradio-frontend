import { ShopCard } from '@/entities/store/items/ui/shop-card';
import {
  EventEntity,
  GuestEntity,
  MixEntity,
  ReleaseEntity,
  ShopItemEntity,
  ShowEntity,
} from '@/shared/api/graphql/__generated__/schema.graphql';
import { clsxm } from '@/shared/lib/helpers/clsxm';
import type { EntityVariant } from '@/shared/lib/types/entity-variants.interface';
import { EventCard } from '../cards/event-card/event-card';
import { MixCardWithMemo } from '../cards/mix-card/mix-card';
import { ReleaseCard } from '../../../release/ui/release-card/release-card';
import { ShowResidentCard } from '../cards/show-resident-card/show-resident-card';

export interface Cards {
  data?: any[];
  variant: EntityVariant;
  indexPageText?: string;
  pageVariant: 'home' | 'other';
}

export const Cards = ({
  variant,
  data,
  pageVariant,
}: Omit<Cards, 'indexPageText'>) => {
  const hiddenClasses = (index: number) =>
    pageVariant === 'home' && data
      ? clsxm({
          '4xl:hidden': data.length >= 10 && data.length < index + 3,
        })
      : undefined;

  if (data)
    return (
      <>
        {(variant === 'mixes' || variant === 'show' || variant === 'search') &&
          data.map((mix: MixEntity, index) => {
            return (
              <MixCardWithMemo
                key={mix.attributes?.slug}
                className={hiddenClasses(index)}
                sizeVariant='standard'
                {...mix}
              />
            );
          })}
        {variant === 'releases' &&
          data.map((release: ReleaseEntity, index) => {
            return (
              <ReleaseCard
                key={release.attributes?.slug}
                className={hiddenClasses(index)}
                {...release}
              />
            );
          })}
        {variant === 'events' &&
          data.map((event: EventEntity, index) => {
            return (
              <EventCard
                key={event.attributes?.slug}
                className={hiddenClasses(index)}
                attributes={event.attributes}
              />
            );
          })}
        {variant === 'shop' &&
          data.map((product: ShopItemEntity, index) => {
            return (
              <ShopCard
                key={product.attributes?.slug}
                className={hiddenClasses(index)}
                {...product}
              />
            );
          })}
        {variant === 'guests' &&
          data.map((resident: GuestEntity, index) => {
            return (
              <ShowResidentCard
                key={resident.attributes?.slug}
                className={hiddenClasses(index)}
                {...resident}
              />
            );
          })}
        {variant === 'shows' &&
          data.map((show: ShowEntity, index) => {
            return (
              <ShowResidentCard
                key={show.attributes?.slug}
                className={hiddenClasses(index)}
                {...show}
              />
            );
          })}
      </>
    );

  return null;
};
