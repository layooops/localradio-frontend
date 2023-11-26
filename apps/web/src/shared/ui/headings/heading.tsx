import type { ComponentType, ReactNode } from 'react';
import React from 'react';
import { clsxm } from '@/shared/lib/helpers/clsxm';
import type { SecondHeaderProps } from './archive-second-header';

type ValidTags = keyof JSX.IntrinsicElements;
export type ValidHeadingTags = keyof Pick<
  JSX.IntrinsicElements,
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
>;

export interface DynamicComponentProps<T extends ValidTags> {
  as: T | ComponentType;
  children?: ReactNode;
}

export interface HeadingProps extends SecondHeaderProps {
  children?: React.ReactNode | string;
}

export const Heading = <T extends ValidHeadingTags>({
  className,
  variant,
  sizeVariant = 'standard',
  as: Component = 'h1' as T,
  ...elementProps
}: DynamicComponentProps<T> & HeadingProps) => {
  return (
    <Component
      className={clsxm(
        className,
        'flex flex-wrap text-[clamp(1.2rem,10vw,1.9rem)] font-semibold uppercase xxs:text-[clamp(1.2rem,10vw,2.1rem)] sm:text-[3rem]',
        {
          'px-1.5 lg:px-2 xl:px-3.5':
            variant !== 'checkout' && variant !== 'page',
        },
        {
          'leading-none  lg:text-[clamp(3rem,5vw,3.75rem)]   lg:leading-[0.95] xl:text-[4rem] 2xl:text-[4.5rem] 5xl:text-[5.4rem]':
            sizeVariant === 'standard',
        },
      )}
      {...elementProps}
    />
  );
};
