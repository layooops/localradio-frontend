import type { CardListProps } from '@/widgets/card-list/lib/types/card-list.interface';

import InfiniteScroll from 'react-infinite-scroll-component';
import clsx from 'clsx';

import { useGetMoreOnScroll } from '@/features/infinite-scroll/lib/hooks/use-get-more-on-scroll.hook';
import { Cards } from '@/widgets/cards/ui/cards';

export const OtherCardList = ({
  variant,
  data,
  releasesFilter,
  residentsFilter,
  mixesFilter,
  totalCount,
}: CardListProps) => {
  const { cardListItems, getMore } = useGetMoreOnScroll({
    data,
    variant,
    releasesFilter,
    residentsFilter,
    mixesFilter,
  });

  const hasListItems = Array.isArray(cardListItems);

  if (hasListItems)
    return (
      <InfiniteScroll
        next={getMore}
        hasMore={Boolean(totalCount && totalCount > cardListItems.length)}
        hasChildren={true}
        dataLength={hasListItems ? cardListItems.length : 0}
        loader={
          <div className='flex aspect-square w-full items-center justify-center text-black'>
            Loading...
          </div>
        }
        className={clsx(
          'relative grid grid-cols-1 gap-1.5 px-1.5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-2.5 lg:px-2 xl:grid-cols-4 xl:px-3.5 4xl:grid-cols-5',
        )}
      >
        <Cards pageVariant='other' data={cardListItems} variant={variant} />
      </InfiniteScroll>
    );

  return null;
};
