import clsx from 'clsx';
import { forwardRef } from 'react';
import type { BaseInputProps } from '../types/input.interface';

export const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
  (props, ref) => {
    const { error, className, ...rest } = props;

    return (
      <input
        {...rest}
        ref={ref}
        className={clsx(
          'h-[32px] w-full rounded-lg border bg-white/70 font-normal text-black outline-primary backdrop-blur transition-all placeholder:font-normal placeholder:text-black/30 lg:h-[42px]',
          {
            'border-red-color': error,
          },
          { 'border-transparent': !error },
          className,
        )}
      />
    );
  },
);
