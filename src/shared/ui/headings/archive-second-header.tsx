import Link from 'next/link';
import type { EntityVariant } from '@/shared/lib/types/entity-variants.interface';
import type { SizeVariant } from '@/shared/lib/types/size-variant.interface';
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
        <Link
          className='hover:text-secondary-dark-color text-gray-color'
          href='/shop/checkout'
        >
          /{variant}/
        </Link>
      );
    case 'releases':
      return (
        <Link
          className='text-gray-color hover:text-secondary-dark'
          href={`/${variant.toLowerCase()}`}
        >
          /Releases/
        </Link>
      );
    case 'shop':
      return (
        <Link
          className='text-gray-color hover:text-secondary-dark'
          href={`/${variant.toLowerCase()}`}
        >
          /Shop/
        </Link>
      );
    default:
      return (
        <Link
          className='text-gray-color hover:text-secondary-dark'
          href='/archive'
        >
          /Archive/
        </Link>
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
