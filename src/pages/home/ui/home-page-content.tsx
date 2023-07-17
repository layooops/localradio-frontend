import { CardSectionWithMemo } from '@/entities/archive/ui/card-section';
import { GenreItem } from '@/shared/ui/genres/genre-button/genre-item';
import { HomePageProps } from './home-page.interface';

export const HomePageContent = ({
  mixes,
  releases,
  shopItems,
  events,
  genres,
  moods,
}: Omit<HomePageProps, 'homePageRandomMix' | 'schedules' | 'streamIsLive'>) => {
  return (
    <div className='flex flex-col gap-5 pt-5 lg:pt-10'>
      <div>
        <CardSectionWithMemo
          pageVariant='home'
          data={mixes?.data}
          variant='mixes'
          text='Latest'
        />
        <HomepageGenresAndMoods moods={moods} genres={genres} />
      </div>

      {releases?.data && releases.data.length > 0 && (
        <CardSectionWithMemo
          pageVariant='home'
          data={releases.data}
          variant='releases'
          text='Releases'
        />
      )}
      {shopItems?.data && shopItems.data.length > 0 && (
        <CardSectionWithMemo
          pageVariant='home'
          data={shopItems.data}
          variant='shop'
          text='Shop'
        />
      )}
      {events?.data && events.data.length > 0 && (
        <CardSectionWithMemo
          pageVariant='home'
          data={events.data}
          text='Events'
          variant='events'
        />
      )}
    </div>
  );
};

const HomepageGenresAndMoods = ({
  moods,
  genres,
}: Pick<HomePageProps, 'genres' | 'moods'>) => {
  if (moods?.data && genres?.data)
    return (
      <div className='hidden px-1.5 py-2 lg:block lg:px-2 xl:px-3.5'>
        <div className='flex flex-wrap gap-[5px] border-black bg-black p-[5px] text-[0.875rem] font-semibold uppercase text-primary lg:text-[0.8rem] xl:text-[0.875rem] 2xl:text-[0.95rem]'>
          <div className='px-1.5 lg:px-3'>genres</div>
          {genres.data.map(
            ({ attributes: a }) =>
              a?.slug && (
                <GenreItem
                  key={a.name}
                  title={a.name}
                  slug={a.slug}
                  sizeVariant='large'
                  type='genre'
                  variant='borderless'
                  colorVariant='primary'
                />
              )
          )}
          <div className='px-1.5 lg:px-3'>moods</div>
          {moods.data.map(
            ({ attributes: a }) =>
              a?.slug && (
                <GenreItem
                  key={a.name}
                  title={a.name}
                  slug={a.slug}
                  sizeVariant='large'
                  type='genre'
                  variant='borderless'
                  colorVariant='primary'
                />
              )
          )}
        </div>
      </div>
    );
  return null;
};
