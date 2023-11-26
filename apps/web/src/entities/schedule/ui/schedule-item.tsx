import type { Maybe } from 'yup';
import type { Schedule } from '@/shared/api/graphql/__generated__/schema.graphql';
import { ScheduleItemInternal } from './schedule-item-internal';

interface ScheduleItemProps {
  schedule: Maybe<Schedule>;
}

export const ScheduleItem = ({ schedule }: ScheduleItemProps) => {
  return (
    <div className='flex w-full flex-wrap justify-between gap-x-3 xxxs:flex-nowrap'>
      <div className='py-[6px] pl-1.5 text-primary lg:pl-2 2xl:pl-3'>
        {schedule?.time}
      </div>

      <ScheduleItemInternal artist={schedule?.artist} />
    </div>
  );
};
