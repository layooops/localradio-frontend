import Link from 'next/link';
import { memo } from 'react';
import { clsxm } from '@/shared/lib/helpers/clsxm';
import { Icon } from '../../icons';
import { NextImage } from '../../next-image/next-image';
import { CardProps } from '../card.interface';

interface CardImageProps
  extends Pick<CardProps, 'variant' | 'className' | 'href'> {
  src?: string;
  alt?: string;
}

export const CardImage = ({
  href,
  src,
  alt,
  variant,
  className,
}: CardImageProps) => {
  return (
    <Link href={href}>
      {src ? (
        <NextImage
          loading='lazy'
          className={clsxm(
            { 'relative aspect-square w-full': variant !== 'shop' },
            className
          )}
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
          alt={alt ?? ''}
          src={src}
          fill
          style={{ objectFit: 'cover' }}
        />
      ) : (
        <div className='relative flex aspect-square w-full items-center justify-center bg-black uppercase text-white'>
          <Icon.LogoShortIcon className='w-[40%] fill-primary' />
        </div>
      )}
    </Link>
  );
};

export const CardImageWithMemo = memo(CardImage);
