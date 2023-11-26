import { useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import type { Maybe } from 'yup';
import type { ScheduleQuery } from '../api';
import { ScheduleGroup } from './schedule-group';

interface Props {
  schedules?: ScheduleQuery['eventSchedulesFixed'];
  isStreaming: Maybe<boolean>;
}

export const ScheduleList = ({ schedules, isStreaming }: Props) => {
  const scheduleRef =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;

  const { events: scheduleEvents } = useDraggable(scheduleRef, {
    decayRate: 0.96,
    safeDisplacement: 11,
  });

  return (
    <div
      ref={scheduleRef}
      {...scheduleEvents}
      className=' flex h-full max-h-[30vh] flex-col overflow-x-hidden overflow-y-scroll uppercase scrollbar-hide lg:max-h-none lg:rounded-lg   lg:border-t-0 '
    >
      <div className='lg:rounded-x-lg flex flex-1 cursor-grab flex-col gap-2 bg-secondary-dark p-1 py-2 lg:gap-4  lg:p-1.5 2xl:p-2'>
        {schedules?.map((schedule, index) => {
          return (
            <ScheduleGroup
              key={schedule?.id}
              index={index}
              isStreaming={isStreaming}
              schedule={schedule}
            />
          );
        })}
      </div>
    </div>
  );
};
