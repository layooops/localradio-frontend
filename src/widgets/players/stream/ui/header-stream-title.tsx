import type { ScheduleQuery } from '@/entities/schedule/api/schedule.graphql.interface';
import { ScheduleItemLink } from '@/entities/schedule/ui/schedule-item-link';
import { Artist } from '@/shared/api/graphql/__generated__/schema.graphql';
import { STREAM_DISABLED_TITLE } from '@/shared/lib/constants/common';

interface HeaderStreamTitleProps {
  eventSchedulesFixed: ScheduleQuery['eventSchedulesFixed'];
}

export const HeaderStreamTitle = ({
  eventSchedulesFixed,
}: HeaderStreamTitleProps) => {
  return (
    <div className='flex pr-2'>
      <span>{STREAM_DISABLED_TITLE}</span>
      {eventSchedulesFixed && eventSchedulesFixed.length > 0 && (
        <div className='flex gap-1'>
          <div>
            .&nbsp; Next broadcast{' '}
            <span>{eventSchedulesFixed[0]?.fixedDate?.day} /</span>
          </div>
          <ul className='flex gap-1 lg:gap-1.5'>
            {eventSchedulesFixed &&
              eventSchedulesFixed[0] &&
              eventSchedulesFixed[0]?.schedule?.map((item) => (
                <li key={item?.artist?.title} className='flex gap-1'>
                  {item?.time && <span>{item.time}&nbsp;:</span>}
                  {item?.artist?.guest?.attributes?.slug ||
                  item?.artist?.show?.attributes?.slug ? (
                    <ScheduleItemLink
                      variant='empty'
                      artist={item.artist as Artist}
                    />
                  ) : (
                    item?.artist?.title
                  )}
                  <span>/</span>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};
