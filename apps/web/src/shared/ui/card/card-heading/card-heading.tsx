import { SizeVariant } from '@local-radio/ui';
import NextLink from 'next/link';
import { memo } from 'react';
import type { Maybe } from 'yup';

interface CardHeadingProps {
  href: string;
  text?: string | Maybe<string>[];
  sizeVariant?: SizeVariant;
}

export const CardHeading = ({ href, text, sizeVariant }: CardHeadingProps) => {
  if (Array.isArray(text)) {
    return (
      <NextLink
        href={href}
        className='w-fit text-[clamp(0.85rem,6vw,1rem)] uppercase leading-none hover:text-secondary-dark'
      >
        <div className=''>
          {text.map((word) => (
            <h3 className='line-clamp-2 break-all' key={word}>
              {word}
            </h3>
          ))}
        </div>
      </NextLink>
    );
  }

  if (sizeVariant === 'small')
    return (
      <NextLink
        href={href}
        className='w-fit text-[clamp(0.625rem,6vw,0.75rem)]  font-semibold uppercase leading-none hover:text-secondary-dark'
      >
        {text}
      </NextLink>
    );

  return (
    <NextLink
      href={href}
      className='w-fit text-[clamp(0.85rem,6vw,1rem)] uppercase leading-none hover:text-secondary-dark'
    >
      <h3>{text}</h3>
    </NextLink>
  );
};
export const CardHeadingWithMemo = memo(CardHeading);
