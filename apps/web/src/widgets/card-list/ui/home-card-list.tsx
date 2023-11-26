import Link from 'next/link';
import type { CardListProps } from '@/widgets/card-list/lib/types/card-list.interface';
import type { UseGetMoreOnScrollResponse } from '@/features/infinite-scroll/lib/hooks/use-get-more-on-scroll.hook';
import { clsxm } from '@/shared/lib/helpers/clsxm';
import { Cards } from '@/widgets/cards/ui/cards';

interface HomeCardListProps
  extends Pick<CardListProps, 'variant'>,
    Pick<UseGetMoreOnScrollResponse, 'cardListItems'> {}

export const HomeCardList = ({ variant, cardListItems }: HomeCardListProps) => {
  if (cardListItems)
    return (
      <div
        className={clsxm(
          'grid auto-cols-[var(--col-size)] grid-flow-col grid-cols-1 gap-2.5 !overflow-y-hidden overflow-x-scroll',
          'scroll-smooth px-1.5 leading-none scrollbar-hide sm:auto-cols-auto sm:grid-flow-row sm:grid-cols-2 lg:grid-cols-3 lg:px-2 xl:grid-cols-4 xl:px-3.5 4xl:grid-cols-5',
          { 'grid-cols-[var(--col-size)]': cardListItems.length > 1 },
        )}
      >
        <Cards pageVariant='home' data={cardListItems} variant={variant} />
        {cardListItems.length > 1 && (
          <Link
            href={`/${variant === 'mixes' ? 'archive' : variant}`}
            className='flex h-full w-full items-center justify-center border-2 border-black uppercase sm:hidden'
          >
            More {variant === 'mixes' && 'mixes'}
            {variant === 'releases' && 'releases'}
          </Link>
        )}
      </div>
    );

  return null;
};
