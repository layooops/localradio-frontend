import {
  GenreEntity,
  MoodEntity,
} from '@/shared/api/graphql/__generated__/schema.graphql';
import { EntityVariant } from '@/shared/lib/types/entity-variants.interface';
import { GenreItem } from '@/shared/ui/genres/genre-button/genre-item';
import { CardSectionWithMemo } from '@/widgets/card-section/ui';
import type { HomePageProps } from '../lib/types/home-page.interface';

const CardSection = ({
  pageVariant,
  data,
  variant,
  text,
}: {
  pageVariant: 'home' | 'other';
  data?: any[];
  variant: EntityVariant;
  text: string;
}) => {
  if (data?.length) {
    return (
      <CardSectionWithMemo
        pageVariant={pageVariant}
        data={data}
        variant={variant}
        text={text}
      />
    );
  }
  return null;
};

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
        <CardSection
          pageVariant='home'
          data={mixes?.data}
          variant='mixes'
          text='Latest'
        />
        <HomepageGenresAndMoods moods={moods} genres={genres} />
      </div>

      <CardSection
        pageVariant='home'
        data={releases?.data}
        variant='releases'
        text='Releases'
      />
      <CardSection
        pageVariant='home'
        data={shopItems?.data}
        variant='shop'
        text='Shop'
      />
      <CardSection
        pageVariant='home'
        data={events?.data}
        variant='events'
        text='Events'
      />
    </div>
  );
};

const GenreItemWrapper = ({ data }: { data: MoodEntity[] | GenreEntity[] }) => {
  return (
    <>
      {data.map(
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
          ),
      )}
    </>
  );
};

const HomepageGenresAndMoods = ({
  moods,
  genres,
}: Pick<HomePageProps, 'genres' | 'moods'>) => {
  if (moods?.data && genres?.data) {
    return (
      <div className='hidden px-1.5 py-2 lg:block lg:px-2 xl:px-3.5'>
        <div className='flex flex-wrap gap-[5px] border-black bg-black p-[5px] text-[0.875rem] font-semibold uppercase text-primary lg:text-[0.8rem] xl:text-[0.875rem] 2xl:text-[0.95rem]'>
          <div className='px-1.5 lg:px-3'>genres</div>
          <GenreItemWrapper data={genres.data} />
          <div className='px-1.5 lg:px-3'>moods</div>
          <GenreItemWrapper data={moods.data} />
        </div>
      </div>
    );
  }

  return null;
};
