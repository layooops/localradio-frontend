import clsx from 'clsx';
import type { HTMLAttributes } from 'react';
import { Icon } from '@/shared/ui/icons';
import { ScheduleIconWrapperWithMemo } from './schedule-icon-wrapper';

interface ScheduleItemIconProps extends HTMLAttributes<HTMLDivElement> {
  variant: 'info' | 'local' | null;
}

export const ScheduleItemIcon = ({
  variant,
  className,
}: ScheduleItemIconProps) => {
  if (variant === 'local')
    return (
      <ScheduleIconWrapperWithMemo
        className={clsx(
          'h-full fill-black [&>*]:-translate-x-[1px]',
          className,
        )}
      >
        <Icon.LogoShortIcon className='h-3 lg:h-[18px]' />
      </ScheduleIconWrapperWithMemo>
    );

  if (variant === 'info')
    return (
      <ScheduleIconWrapperWithMemo
        className={clsx(
          'h-full font-semibold [&>*]:-translate-x-[1px]',
          className,
        )}
      >
        <span>!</span>
      </ScheduleIconWrapperWithMemo>
    );
  return null;
};
