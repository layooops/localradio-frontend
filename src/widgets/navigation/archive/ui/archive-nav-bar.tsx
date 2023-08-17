import type { ArchiveNavigationQuery } from '../api/navigation.graphql.interface';

import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { useUnit } from 'effector-react';
import useSWR from 'swr';

import { SWRFetcher } from '@/shared/lib/helpers/swr-fetcher';
import { useScroll } from '@/shared/lib/hooks/use-scroll.hook';

import {
  $clickedArchiveNavType,
  $navHeight,
  clickArchiveNavType,
  setNavHeightEv,
} from '../model/archive-nav.model';
import styles from './archive-nav.module.css';
import { ArchiveNavHoverList } from './archive-nav-hover-list';
import { ArchiveNavItemWithMemo } from './archive-nav-item';

export const ArchiveNavBar = () => {
  const { data: archiveNav } = useSWR<{ data?: ArchiveNavigationQuery }>(
    '/api/archive-nav',
    SWRFetcher,
  );

  const hasMoods = Array.isArray(archiveNav?.data?.moodsArray);
  const hasGenres = Array.isArray(archiveNav?.data?.genresArray);

  const [hoveredEl, setHoveredEl] = useState<'mood' | 'genres' | null>(null);
  const elementRef = useRef<HTMLElement>(null);
  const { navHeight, clickedArchiveNavType, setNavHeight, clickArchiveNav } =
    useUnit({
      navHeight: $navHeight,
      clickedArchiveNavType: $clickedArchiveNavType,
      setNavHeight: setNavHeightEv,
      clickArchiveNav: clickArchiveNavType,
    });

  const toggleHover = (el: 'mood' | 'genres' | null) => {
    setHoveredEl(el);
    clickArchiveNav(null);
  };

  const { visible } = useScroll();

  useEffect(() => {
    elementRef.current && setNavHeight(elementRef.current.clientHeight);
  });

  useEffect(() => {
    clickArchiveNav(null);
  }, [clickArchiveNav]);

  const handleClickNav = (el: 'mood' | 'genres' | null) => {
    clickArchiveNav(el);
  };
  const topOffset = 2;
  const topPosition = navHeight - topOffset;

  return (
    <nav
      ref={elementRef}
      className={`sticky z-10 w-full text-[0.8rem] font-semibold uppercase transition-all duration-300 xl:text-[0.95rem]  2xl:text-[1rem]  ${
        !visible
          ? 'top-[calc(30px+2px)] xxs:top-[calc(60px+2px)] lg:top-0 '
          : 'top-[calc(var(--header-height)+30px+3px)] xxs:top-[calc(var(--header-height)+60px+3px)] lg:top-[var(--header-height)]'
      }`}
    >
      <ul className={styles['nav-list']}>
        <ArchiveNavItemWithMemo text='All' link='/archive' />
        <ArchiveNavItemWithMemo text='Residents' link='/archive/residents' />

        <li className={styles['mood-item']}>
          <button
            type='button'
            className='uppercase'
            onClick={() => handleClickNav('mood')}
          >
            <div className='relative items-center justify-center tracking-[0.01em]  md:flex md:h-full md:w-full'>
              Moods
            </div>
          </button>
        </li>

        {hasMoods && (
          <div
            onMouseEnter={() => toggleHover('mood')}
            onMouseLeave={() => toggleHover(null)}
            style={{ top: topPosition }}
            className={clsx(styles['mood-list'], {
              [styles.active]:
                hoveredEl === 'mood' || clickedArchiveNavType === 'mood',
            })}
          >
            {archiveNav?.data?.moodsArray?.map((list, index) => (
              <ArchiveNavHoverList
                key={'moodsArray ' + index} // eslint-disable-line react/no-array-index-key
                list={list}
                index={index}
                variant='mood'
              />
            ))}
          </div>
        )}
        <li className={styles['genres-item']}>
          <button
            type='button'
            className='uppercase'
            onClick={() => handleClickNav('genres')}
          >
            <div className='relative items-center justify-center tracking-[0.01em]  md:flex md:h-full md:w-full'>
              Genres
            </div>
          </button>
        </li>
        {hasGenres && (
          <div
            style={{ top: topPosition }}
            onMouseEnter={() => toggleHover('genres')}
            onMouseLeave={() => toggleHover(null)}
            className={clsx(styles['genres-list'], {
              [styles.active]:
                hoveredEl === 'genres' || clickedArchiveNavType === 'genres',
            })}
          >
            {archiveNav?.data?.genresArray?.map((list, index) => (
              <ArchiveNavHoverList
                key={'genresArray ' + index} // eslint-disable-line react/no-array-index-key
                list={list}
                index={index}
                variant='genres'
              />
            ))}
          </div>
        )}
        <ArchiveNavItemWithMemo
          text='Shows'
          link='/archive/shows'
          className='order-3 md:order-5'
        />
      </ul>
    </nav>
  );
};
