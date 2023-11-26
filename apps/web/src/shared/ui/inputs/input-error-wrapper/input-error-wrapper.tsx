import { forwardRef } from 'react';
import { BaseInput } from '../base-input';
import type { BaseInputProps } from '../types/input.interface';

export const InputErrorWrapper = forwardRef<HTMLInputElement, BaseInputProps>(
  (props, ref) => {
    const { error, children, ...rest } = props;
    return (
      <div className='flex flex-col'>
        {children ? children : <BaseInput {...rest} ref={ref} error={error} />}
        {error && (
          <span className='pt-1 text-[13px] font-light leading-none text-red-color sm:text-[15px]'>
            {error}
          </span>
        )}
      </div>
    );
  },
);
