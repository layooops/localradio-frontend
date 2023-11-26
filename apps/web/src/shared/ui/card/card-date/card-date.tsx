import Link from 'next/link';
import { memo } from 'react';
import { clsxm } from '@/shared/lib/helpers/clsxm';
import { formatDate } from '@/shared/lib/helpers/format-date';
import type { CardDateProps } from './card-date.interface';

export const CardDate = ({
  date,
  link,
  text,
  variant,
  sizeVariant,
}: CardDateProps) => {
  const formattedDate = formatDate(date);
  return (
    <div
      className={clsxm(
        'flex w-full flex-wrap justify-between text-[clamp(0.55rem,5vw,0.75rem)] font-medium uppercase',
        {
          'pt-4':
            variant === 'release' ||
            variant === 'guest' ||
            variant === 'event' ||
            variant === 'show',
        },
        {
          'text-[clamp(0.6rem,1.5vw,0.75rem)] xl:text-[0.875rem]':
            variant === 'page',
        },
      )}
    >
      {(variant === 'guest' || variant === 'show') && (
        <div className='leading-none'> {text}</div>
      )}

      {variant !== 'show' && variant !== 'guest' && formattedDate && (
        <div
          className={clsxm('leading-none', {
            'text-[0.65rem]': sizeVariant === 'small',
          })}
        >
          {formattedDate}
        </div>
      )}

      {(variant === 'page' || variant === 'release') && !link && (
        <div className='leading-none'>{text}</div>
      )}

      {link && (
        <Link
          href={link}
          className={clsxm(
            'font-semibold leading-none hover:text-secondary-dark',
            { 'font-medium underline underline-offset-2': variant === 'page' },
          )}
        >
          {variant === 'show' || variant === 'guest' ? formattedDate : text}
        </Link>
      )}
    </div>
  );
};

export const CardDateWithMemo = memo(CardDate);
