import { forwardRef } from 'react';
import { CardSectionWithMemo } from '@/entities/archive/ui/card-section';
import { clsxm } from '@/shared/lib/helpers/clsxm';
import { GenreListWithMemo } from '@/shared/ui/genres/genre-list/genre-list';
import { SearchedData } from '../model/search.model';

interface SearchedDataProps {
  searchedData: SearchedData;
  searchValue: string;
}

export const SearchData = forwardRef<HTMLDivElement, SearchedDataProps>(
  ({ searchedData, searchValue }, forwardRef) => {
    return (
      <div ref={forwardRef} className='flex flex-col'>
        <SearchedGenres genres={searchedData.genres} />
        {searchedData.mixes && (
          <div className='w-full'>
            <CardSectionWithMemo
              pageVariant='other'
              data={searchedData.mixes.data}
              variant='search'
              text='/Mixes/'
              search={searchValue}
            />
          </div>
        )}
      </div>
    );
  }
);

const SearchedGenres = ({ genres }: Pick<SearchedData, 'genres'>) => {
  if (genres && genres.data.length > 0)
    return (
      <div
        className={clsxm(
          'flex flex-col gap-1 px-1.5 pt-1.5 text-[0.8rem] font-medium uppercase md:px-3 md:text-[0.85rem] lg:px-3.5 lg:pt-2',
          {
            'pb-2.5': genres.data.length === 0,
          }
        )}
      >
        <h2 className='py-1.5  text-[1.85rem] font-semibold uppercase leading-none   sm:flex-row sm:text-[2.3rem] lg:py-2 lg:text-[3rem]  2xl:gap-y-4 2xl:py-[1rem]'>
          /Genres/
        </h2>

        <GenreListWithMemo
          colorVariant='primary'
          variant='solid'
          genres={genres.data}
          sizeVariant='standard'
        />
      </div>
    );
  return null;
};
