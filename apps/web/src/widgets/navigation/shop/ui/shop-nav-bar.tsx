import { useUnit } from 'effector-react';
import { useEffect, useRef } from 'react';
import useSWR from 'swr';
import { ArchiveNavItemWithMemo } from '@/widgets/navigation/archive/ui/archive-nav-item';
import type { ShopCategoryEntityResponseCollection } from '@/shared/api/graphql/__generated__/schema.graphql';
import { clsxm } from '@/shared/lib/helpers/clsxm';
import { SWRFetcher } from '@/shared/lib/helpers/swr-fetcher';
import { useScroll } from '@/shared/lib/hooks/use-scroll.hook';
import { setNavHeightEv } from '../model/shop-nav.model';
import styles from './shop-nav-bar.module.css';

export const ShopNavBar = () => {
  const { setNavHeight } = useUnit({
    setNavHeight: setNavHeightEv,
  });

  const { data } = useSWR<{
    shopCategories: ShopCategoryEntityResponseCollection;
  }>('/api/shop-nav', SWRFetcher);

  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    elementRef.current && setNavHeight(elementRef.current.clientHeight);
  });

  const { visible } = useScroll();

  if (data?.shopCategories && data.shopCategories.data.length > 2)
    return (
      <nav
        className={clsxm(
          'fixed  top-[var(--header-height)]  z-10 w-full text-[11px]  font-semibold uppercase  transition-all duration-300  sm:text-[0.7rem]  lg:sticky lg:top-[var(--header-height)] xl:text-[0.8rem] 2xl:text-[0.95rem]',
          { 'lg:top-0': !visible },
        )}
      >
        <ul className={styles['nav-list']}>
          {data.shopCategories.data.map(
            ({ attributes }) =>
              attributes?.parent?.data.length === 0 && (
                <ArchiveNavItemWithMemo
                  key={attributes.name}
                  text={attributes.name ?? ''}
                  link={'/shop/category/' + attributes.slug}
                />
              ),
          )}
        </ul>
      </nav>
    );

  return null;
};
