import type { ArchivePageProps } from '../lib/types/archive-page.interface';

import { Suspense } from 'react';
import { useUnit } from 'effector-react';

import Link from 'next/link';

import { ArchiveSecondHeader } from '@/shared/ui/headings/archive-second-header';
import { SecondHeader } from '@/shared/ui/headings/second-header';
import { CardSectionWithMemo } from '@/widgets/card-section/ui';
import { clickArchiveNavType } from '@/widgets/navigation/archive/model/archive-nav.model';
import { ArchiveNavBar } from '@/widgets/navigation/archive/ui/archive-nav-bar';
import { ShopNavBar } from '@/widgets/navigation/shop/ui/shop-nav-bar';

export const ArchivePage = ({
  secondHeaderText,
  archiveItemSecondHeaderText,
  data,
  dataText,
  mixesFilter,
  releasesFilter,
  children,
  variant,
  residentsFilter,
  shopSubCategories,
  totalCount,
}: ArchivePageProps) => {
  const { clickArchNavType } = useUnit({
    clickArchNavType: clickArchiveNavType,
  });

  return (
    <main className='isolate flex w-full flex-col lg:pt-0'>
      {(variant === 'mixes' ||
        variant === 'show' ||
        variant === 'guests' ||
        variant === 'shows') && <ArchiveNavBar />}
      {variant === 'shop' && <ShopNavBar />}
      <div
        onClick={() => clickArchNavType(null)}
        className='flex w-full flex-col pb-1.5 md:pb-3 lg:pb-3.5 2xl:pb-5'
      >
        {archiveItemSecondHeaderText && (
          <ArchiveSecondHeader
            variant={variant}
            text={archiveItemSecondHeaderText}
          />
        )}
        {secondHeaderText && <SecondHeader as='h1' text={secondHeaderText} />}

        {shopSubCategories?.map(
          ({ attributes }) =>
            attributes?.slug && (
              <Link
                key={attributes.name}
                className='px-1.5 pb-5 text-[1.85rem] font-semibold uppercase leading-none sm:text-[2.3rem] lg:px-2 lg:text-[3rem] xl:px-3.5 '
                href={attributes.slug}
              >
                {attributes.name}
              </Link>
            ),
        )}
        {children}

        {data ? (
          <Suspense fallback={<div>Loading...</div>}>
            <CardSectionWithMemo
              pageVariant='other'
              totalCount={totalCount}
              data={data}
              variant={variant}
              text={dataText}
              mixesFilter={mixesFilter}
              residentsFilter={residentsFilter}
              releasesFilter={releasesFilter}
            />
          </Suspense>
        ) : (
          <div>Is empty now</div>
        )}
      </div>
    </main>
  );
};
