import { memo } from 'react';
import { clsxm } from '@/shared/lib/helpers/clsxm';
import { GenreItem } from '../genre-button/genre-item';
import type { GenreListProps } from '../types/genre.interface';

export const GenreList = (props: GenreListProps) => {
  const { genres, sizeVariant, variant, colorVariant } = props;

  if (genres?.length)
    return (
      <ul
        className={clsxm(
          'flex flex-wrap items-center gap-[clamp(0.1rem,1.5vw,0.25rem)] border-inherit pt-2 uppercase',
          { 'pr-2.5 pt-0': sizeVariant === 'large' },
        )}
      >
        {genres.map(({ attributes }) => {
          return (
            <GenreItem
              key={attributes?.name}
              colorVariant={colorVariant}
              variant={variant}
              type='genre'
              sizeVariant={sizeVariant}
              slug={attributes?.slug}
              title={attributes?.name}
            />
          );
        })}
      </ul>
    );
  return null;
};

export const GenreListWithMemo = memo(GenreList);
