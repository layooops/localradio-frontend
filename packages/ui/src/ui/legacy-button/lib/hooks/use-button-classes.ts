import clsx from 'clsx';
import { BaseButtonProps } from '../types/button.interface';

import type { ClassValue } from 'clsx';

import { twMerge } from 'tailwind-merge';

export function clsxm(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}

export const useButtonClasses = (props: BaseButtonProps): string => {
  const { fullWidth, mod, shadowVariant, colorVariant, disabled, sizeVariant, className } = props;
  return clsxm(
    'uppercase flex gap-1 items-center justify-center w-fit font-medium transition-all duration-150',
    { 'rounded-sm-clamp': mod === 'rounded' },
    { 'w-full': fullWidth },
    {
      'shadow-t-sm': shadowVariant === 'shadow',
    },
    colorVariant &&
      !disabled &&
      {
        primary: 'lg:bg-primary hover:text-primary text-black hover:bg-black',
        secondary:
          'bg-black lg:hover:bg-primary fill-primary hover:text-black text-primary lg:hover:fill-black',
        clear: '',
      }[colorVariant],
    sizeVariant &&
      {
        small:
          'h-[clamp(1.5rem,10vw,1.875rem)] w-[clamp(1.5rem,10vw,1.875rem)] px-0 lg:h-7 lg:w-7 2xl:h-8 2xl:w-8',
        'extra-small':
          'h-[clamp(1.375rem,10vw,1.65rem)] w-[clamp(1.375rem,10vw,1.65rem)] aspect-square',
        medium:
          'text-[0.75rem] leading-[1.3] px-2 lg:text-[0.8rem] xl:text-[0.875rem] h-6 lg:h-7 2xl:gap-2 2xl:h-8 gap-1',
        large: '',
      }[sizeVariant],
    {
      'pointer-events-none bg-gray-300 stroke-gray-color text-gray-color': disabled,
    },
    className,
  );
};
