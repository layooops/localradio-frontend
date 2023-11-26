import Link from 'next/link';
import type { Maybe } from 'yup';
import { Icon } from '@/shared/ui/icons';
import { ScheduleIconWrapperWithMemo } from './schedule-icon-wrapper';

interface ScheduleLocationProps {
  locationLink?: Maybe<string>;
  locationName?: Maybe<string>;
}

export const ScheduleLocation = ({
  locationLink,
  locationName,
}: ScheduleLocationProps) => {
  if (locationLink && locationName)
    return (
      <Link
        href={locationLink}
        className='group flex overflow-hidden rounded-lg border-primary fill-primary text-primary hover:border-black hover:fill-black hover:text-black'
      >
        <div className='flex items-center bg-black px-2 py-[6px] leading-[1.05] transition duration-100 ease-out group-hover:bg-secondary-dark lg:pl-3 lg:pr-2'>
          {locationName}
        </div>
        <ScheduleIconWrapperWithMemo className='bg-black fill-primary transition duration-100 ease-out group-hover:bg-secondary-dark group-hover:fill-black'>
          {locationName === 'Студия' ? (
            <Icon.HomeIcon className='h-2.5 lg:h-[15px]' />
          ) : (
            <Icon.ArrowIcon className='h-3.5 -rotate-90 stroke-primary group-hover:stroke-black lg:h-[20px]' />
          )}
        </ScheduleIconWrapperWithMemo>
      </Link>
    );

  if (locationName) return <div>{locationName}</div>;
  return null;
};
