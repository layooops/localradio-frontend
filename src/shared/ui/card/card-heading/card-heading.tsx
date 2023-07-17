import Link from 'next/link';
import { FC, memo } from 'react';
import type { Maybe } from 'yup';
import type { SizeVariant } from '@/shared/lib/types/size-variant.interface';

interface Props {
  href: string;
  text?: string | Maybe<string>[];
  sizeVariant?: SizeVariant;
}

export const CardHeading: FC<Props> = ({ href, text, sizeVariant }) => {
  if (Array.isArray(text)) {
    return (
      <Link
        href={href}
        className='w-fit text-[clamp(0.85rem,6vw,1rem)] uppercase leading-none hover:text-secondary-dark'
      >
        <div className='break-words'>
          {text.map((word) => (
            <h3 key={word}>{word}</h3>
          ))}
        </div>
      </Link>
    );
  }

  if (sizeVariant === 'small')
    return (
      <Link
        href={href}
        className='w-fit text-[clamp(0.625rem,6vw,0.75rem)] font-semibold uppercase leading-none hover:text-secondary-dark'
      >
        {text}
      </Link>
    );

  return (
    <Link
      href={href}
      className='w-fit text-[clamp(0.85rem,6vw,1rem)] uppercase leading-none hover:text-secondary-dark'
    >
      <h3>{text}</h3>
    </Link>
  );
};
export const CardHeadingWithMemo = memo(CardHeading);
