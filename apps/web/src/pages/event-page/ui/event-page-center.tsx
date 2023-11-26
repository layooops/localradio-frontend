import type { Maybe } from 'yup';
import type { Event } from '@/shared/api/graphql/__generated__/schema.graphql';
import { CardDate } from '@/shared/ui/card';
import { NextImage } from '@/shared/ui/next-image/next-image';

interface EventPageCenterProps {
  attributes: Maybe<Event>;
}

export const EventPageCenter = ({ attributes }: EventPageCenterProps) => {
  return (
    <div className=' order-1 h-full border-black px-1.5 sm:px-3 lg:border-x-2'>
      <div className='sticky top-0'>
        <div className='flex  flex-col sm:pt-3'>
          <div className='flex aspect-square  max-h-[80vh] border-l-2 border-black  2xl:max-h-full'>
            <div className='relative w-full min-w-max  border-y-2 border-r-2  border-black transition-all duration-300 hover:w-[1200%]'>
              <NextImage
                alt={attributes?.name ?? ''}
                src={attributes?.image.data?.attributes?.url ?? ''}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-1 py-2 text-[0.8rem] font-medium uppercase md:text-[0.85rem]'>
          <CardDate
            date={attributes?.eventInfo.date?.eventDate}
            link={attributes?.eventInfo.location?.locationLink}
            text={attributes?.eventInfo.location?.locationName}
            variant='page'
          />
        </div>
      </div>
    </div>
  );
};
