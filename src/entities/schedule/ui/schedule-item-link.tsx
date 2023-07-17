import clsx from 'clsx';
import Link, { type LinkProps } from 'next/link';
import type { HTMLAttributes } from 'react';
import type { Maybe } from 'yup';
import type { Artist } from '@/shared/api/graphql/__generated__/schema.graphql';
import { ScheduleItemIcon } from './schedule-item-icon';

interface ScheduleItemLink extends HTMLAttributes<LinkProps> {
  artist?: Maybe<Artist>;
  variant: 'black' | 'primary' | 'empty';
}

export const ScheduleItemLink = ({
  artist,
  className,
  variant = 'primary',
}: ScheduleItemLink) => {
  let href = '';
  if (artist?.guest?.attributes?.slug)
    href = '/archive/residents/' + artist.guest.attributes.slug;
  if (artist?.show?.attributes?.slug)
    href = '/archive/shows/' + artist.show.attributes.slug;
  if (artist?.link) href = artist.link;
  return (
    <Link
      href={href}
      className={clsx(
        'group flex items-center justify-between  font-medium  transition duration-100 ease-out',
        { 'overflow-hidden rounded-lg': variant !== 'empty' },
        {
          'border-black bg-primary  text-black hover:bg-secondary-dark hover:fill-black':
            variant === 'primary',
        },
        {
          'border-primary bg-black fill-primary text-primary hover:border-black hover:bg-primary hover:fill-black hover:text-black':
            variant === 'black',
        },
        { 'text-gray-color hover:text-secondary-dark': variant === 'empty' },
        className
      )}
    >
      <div
        className={clsx(
          {
            'px-2 py-[6px] leading-[1.05] lg:pl-3 lg:pr-2': variant !== 'empty',
          },
          { 'font-semibold': variant === 'empty' }
        )}
      >
        {artist?.title}
      </div>

      {variant !== 'empty' && (
        <ScheduleItemIcon
          className='fill-inherit'
          variant={
            artist?.guest?.attributes?.slug || artist?.show?.attributes?.slug
              ? 'local'
              : null
          }
        />
      )}
    </Link>
  );
};
