import type { HeaderLinkProps } from './header-link';

import { memo } from 'react';

import Link from 'next/link';

import { Icon } from '@/shared/ui/icons';

export const HeaderMobileLink = ({ href, text }: HeaderLinkProps) => {
  return (
    <div className='w-full'>
      {href && (
        <Link
          className='flex w-full items-center justify-between py-3'
          href={href}
        >
          {text}
          <span>
            <Icon.ArrowIcon className='w-5 -rotate-90 stroke-black' />
          </span>
        </Link>
      )}
    </div>
  );
};

export const HeaderMobileLinkWithMemo = memo(HeaderMobileLink);
