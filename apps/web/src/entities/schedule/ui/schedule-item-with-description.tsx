import clsx from 'clsx';
import { useState } from 'react';
import { ScheduleItemIcon } from './schedule-item-icon';
import type { ScheduleItemInternalProps } from './schedule-item-internal';
import { ScheduleItemLink } from './schedule-item-link';

export const ScheduleItemWithDescription = ({
  artist,
}: ScheduleItemInternalProps) => {
  const [openDescription, setOpenDescription] = useState(false);
  return (
    <button
      type='button'
      onClick={() => setOpenDescription((prev) => !prev)}
      className={clsx(
        'flex flex-col items-center overflow-hidden rounded-lg bg-primary text-left font-medium uppercase leading-[1.05] text-black transition duration-100 ease-out',
        'hover:bg-secondary-dark hover:fill-black',
        { 'bg-secondary-dark fill-black': openDescription },
      )}
    >
      <div className='flex items-center border-black'>
        <div className='flex flex-col px-2 py-1 lg:px-3 lg:py-1.5'>
          <div className='flex'>{artist?.title}</div>
          <div
            className={clsx(
              'flex flex-col gap-1.5 pt-0.5 text-[12px] font-medium normal-case lg:pt-1.5 lg:text-[13px] 2xl:text-[15px]',
              {
                hidden: !openDescription,
              },
            )}
          >
            <div>{artist?.description}</div>
            {(artist?.guest?.attributes?.slug ||
              artist?.show?.attributes?.slug) && (
              <ScheduleItemLink
                className='uppercase'
                artist={artist}
                variant='black'
              />
            )}
          </div>
        </div>
        <ScheduleItemIcon variant='info' />
      </div>
    </button>
  );
};
