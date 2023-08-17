import type { HTMLAttributes } from 'react';

import { memo } from 'react';

import { clsxm } from '@/shared/lib/helpers/clsxm';

type ScheduleIconWrapper = HTMLAttributes<HTMLDivElement>;

const ScheduleIconWrapper = ({ children, className }: ScheduleIconWrapper) => {
  return (
    <div
      className={clsxm(
        'flex min-w-[30px] max-w-[30px] items-center justify-center border-l border-inherit py-[6px] lg:min-w-[40px] lg:max-w-[40px]',
        className,
      )}
    >
      {children}
    </div>
  );
};

export const ScheduleIconWrapperWithMemo = memo(ScheduleIconWrapper);
