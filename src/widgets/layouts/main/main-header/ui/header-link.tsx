import type { HTMLAttributes } from 'react';

import { memo } from 'react';

import Link from 'next/link';

import { HeaderLinkWrapperWithMemo } from './header-link-wrapper';

export interface HeaderLinkProps {
  href?: string;
  type?: 'link' | 'button' | 'icon';
  text: string;
  strict?: boolean;
}

export interface HeaderLinkWrapperProps extends HTMLAttributes<HTMLDivElement> {
  href?: string;
  type?: 'link' | 'button' | 'icon';
  strict?: boolean;
}

export const HeaderLink = ({
  href,
  text,
  strict,
  type = 'link',
  ...props
}: HeaderLinkProps) => {
  return (
    <HeaderLinkWrapperWithMemo
      strict={strict}
      href={href}
      className='flex h-full w-full '
    >
      {type === 'link' && href ? (
        <Link
          className='flex h-full items-center lg:px-2 2xl:px-3'
          href={href}
          {...props}
        >
          {text}
        </Link>
      ) : (
        <div className='flex h-full items-center uppercase lg:px-2 2xl:px-3'>
          {text}
        </div>
      )}
    </HeaderLinkWrapperWithMemo>
  );
};

export const HeaderLinkWithMemo = memo(HeaderLink);
