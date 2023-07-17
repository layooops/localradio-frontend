import type { Maybe } from 'yup';
import { Artist } from '@/shared/api/graphql/__generated__/schema.graphql';
import { ScheduleItemLink } from './schedule-item-link';
import { ScheduleItemWithDescription } from './schedule-item-with-description';

export interface ScheduleItemInternalProps {
  artist: Maybe<Artist>;
}

export const ScheduleItemInternal = ({ artist }: ScheduleItemInternalProps) => {
  if (artist?.description) {
    return <ScheduleItemWithDescription artist={artist} />;
  }
  if (
    !artist?.description &&
    (artist?.guest?.attributes?.slug || artist?.show?.attributes?.slug)
  ) {
    return <ScheduleItemLink variant='primary' artist={artist} />;
  }

  return (
    <div className='flex items-center overflow-hidden rounded-lg bg-primary px-2 py-1 font-medium leading-[1.05] text-black lg:px-3 lg:py-1.5'>
      {artist?.title}
    </div>
  );
};
