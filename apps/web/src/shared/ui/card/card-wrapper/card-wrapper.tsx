import { SizeVariant } from '@local-radio/ui';
import clsx from 'clsx';
import { memo } from 'react';
import type { EntityVariant } from '@/shared/lib/types/entity-variants.interface';

interface CardWrapperProps extends Omit<React.HTMLProps<HTMLElement>, 'size'> {
  children: React.ReactNode;
  variant?: EntityVariant;
  sizeVariant?: SizeVariant;
}

export const CardWrapper = ({
  children,
  sizeVariant = 'standard',
  variant,
  className,
  ...rest
}: CardWrapperProps) => {
  return (
    <article
      className={clsx('relative flex flex-col gap-y-1', className)}
      {...rest}
    >
      {(variant === 'mix' ||
        variant === 'event' ||
        variant === 'release' ||
        variant === 'show' ||
        variant === 'guest') &&
      sizeVariant === 'standard' ? (
        <div className='flex h-full flex-col border-2 border-black'>
          {children}
        </div>
      ) : (
        children
      )}
    </article>
  );
};

export const CardWrapperWithMemo = memo(CardWrapper);
