import type { Maybe } from 'yup';

import clsx from 'clsx';

import { Button } from '@/shared/ui/button/button';
import { Icon } from '@/shared/ui/icons';

interface MixSlideButtonProps {
  slug?: Maybe<string>;
  direction: 'left' | 'right';
}

export const MixSlideButton = ({ slug, direction }: MixSlideButtonProps) => {
  return (
    <Button
      sizeVariant='standard'
      aria-label={`Go to ${
        direction === 'left' ? 'previous' : 'next'
      } next mix`}
      href={slug ?? ''}
      disabled={!slug}
      colorVariant='primary'
      className={clsx(
        'stroke-primary max-lg:bg-black max-lg:text-primary lg:stroke-black lg:hover:stroke-primary',
        { 'lg:stroke-gray-color': !slug },
      )}
    >
      {direction === 'left' && (
        <div className='w-4  rotate-90 md:w-5'>
          <Icon.ArrowIcon />
        </div>
      )}
      <span className='hidden h-full items-center sm:inline-flex'>
        {direction === 'left' ? 'prev' : 'next'}
      </span>

      {direction === 'right' && (
        <div className='w-4 -rotate-90 md:w-5'>
          <Icon.ArrowIcon />
        </div>
      )}
    </Button>
  );
};
