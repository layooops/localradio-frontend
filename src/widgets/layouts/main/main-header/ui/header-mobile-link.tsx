import Link from 'next/link';
import { memo } from 'react';
import { Icon } from '@/shared/ui/icons';
import { HeaderLinkProps } from './header-link';

export const HeaderMobileLink = memo(({ href, text }: HeaderLinkProps) => {
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
});
