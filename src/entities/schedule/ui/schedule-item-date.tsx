import type { Maybe } from 'yup';
import type { PopularityResponse } from '@/shared/api/graphql/__generated__/schema.graphql';
import { TodayOrTomorrow } from '@/shared/lib/helpers/is-today-or-tomorrow';

interface ScheduleItemDateProps {
  todayOrTomorrow: TodayOrTomorrow;
  isStreaming: Maybe<boolean>;
  fixedDate?: PopularityResponse['fixedDate'];
}

export const ScheduleItemDate = ({
  todayOrTomorrow,
  isStreaming,
  fixedDate,
}: ScheduleItemDateProps) => {
  if (todayOrTomorrow && !isStreaming)
    return (
      <div>
        {todayOrTomorrow.charAt(0).toUpperCase() + todayOrTomorrow.slice(1)}
      </div>
    );

  if (isStreaming && todayOrTomorrow === 'today')
    return <div className='flex w-full items-center gap-1.5'>Live</div>;
  if (fixedDate)
    return (
      <>
        <div>{fixedDate.day}</div>
        <div>|</div>
        <div>{fixedDate.week}</div>
      </>
    );
  return null;
};
