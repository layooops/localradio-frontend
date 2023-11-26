import { SizeVariant } from '@local-radio/ui';
import NextLink from 'next/link';
import type { EntityVariant } from '@/shared/lib/types/entity-variants.interface';
import { SecondHeader } from './second-header';

export interface SecondHeaderProps extends React.PropsWithChildren {
  variant?: EntityVariant;
  sizeVariant?: SizeVariant;
  className?: string;
  text?: string;
}

export const TopPartSecondHeader = ({ variant }: SecondHeaderProps) => {
  switch (variant) {
    case 'checkout':
      return (
        <NextLink
          className='hover:text-secondary-dark-color text-gray-color'
          href='/shop/checkout'
        >
          /{variant}/
        </NextLink>
      );
    case 'releases':
      return (
        <NextLink
          className='text-gray-color hover:text-secondary-dark'
          href={`/${variant.toLowerCase()}`}
        >
          /Releases/
        </NextLink>
      );
    case 'shop':
      return (
        <NextLink
          className='text-gray-color hover:text-secondary-dark'
          href={`/${variant.toLowerCase()}`}
        >
          /Shop/
        </NextLink>
      );
    default:
      return (
        <NextLink
          className='text-gray-color hover:text-secondary-dark'
          href='/archive'
        >
          /Archive/
        </NextLink>
      );
  }
};

export const ArchiveSecondHeader = ({ text, variant }: SecondHeaderProps) => {
  return (
    <SecondHeader as='h1'>
      {variant && <TopPartSecondHeader variant={variant} />}

      <div className='gap-x-1 overflow-hidden xl:gap-x-3 2xl:gap-x-4'>
        <span className='lg:w-fit'>{text}</span>
      </div>
    </SecondHeader>
  );
};
