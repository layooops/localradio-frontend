import type { EventPageProps } from './event-page';

import { DescriptionGroup } from '@/shared/ui/description/description-group';
import { DescriptionItem } from '@/shared/ui/description/description-item';

interface EventPageLeftProps extends Omit<EventPageProps, 'attributes'> {
  title?: string;
}

export const EventPageLeft = ({
  descriptionRu,
  title,
  eventSchedule,
}: EventPageLeftProps) => {
  return (
    <div className='order-2 px-1.5 lg:px-0'>
      {descriptionRu ? (
        <DescriptionGroup
          html={{
            descriptionRu,
            descriptionEn: null,
          }}
          top={
            <div className='sticky top-0 flex w-full flex-col justify-between border-black bg-primary   pb-[0.45rem]  text-sm uppercase  leading-none md:text-[0.98rem] lg:border-b-2  lg:border-t-0 2xl:pb-2'>
              <h4 className='text-[1rem] font-semibold leading-none'>
                {title}
              </h4>
            </div>
          }
          bottom={
            <div className='border-t-2 border-black'>
              {eventSchedule?.map(({ name, info }) => (
                <div
                  key={name}
                  className='flex flex-col uppercase [&>*]:w-full '
                >
                  <div className='py-1.5 pb-2 normal-case 2xl:py-3'>
                    <DescriptionItem sizeVariant='small' html={info} />
                  </div>
                </div>
              ))}
            </div>
          }
        />
      ) : null}
    </div>
  );
};
