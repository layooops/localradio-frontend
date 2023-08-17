import clsx from 'clsx';

import Link from 'next/link';

import { LocalSocialIcons } from '@/shared/ui/socials-list/socials-icons';

import { localSocialsNav } from '../lib/local-socials-nav';

interface LocalSocialsListProps {
  variant: 'header' | 'footer';
}

export const LocalSocialsList = ({ variant }: LocalSocialsListProps) => {
  return (
    <ul
      className={clsx(
        'flex flex-wrap items-center',
        {
          header: 'gap-10 px-1.5 py-3 sm:gap-12 md:gap-20',
          footer: 'gap-1.5',
        }[variant],
      )}
    >
      {localSocialsNav.map(({ ariaLabel, type, href }) => (
        <li key={variant + ' ' + type}>
          {href && (
            <Link
              className={clsx(
                {
                  header: '',
                  footer:
                    'flex h-[26px] w-[26px] items-center justify-center rounded-md bg-white fill-black transition-all duration-100 hover:bg-white lg:h-[32px] lg:w-[32px]   lg:bg-black lg:fill-white lg:hover:fill-black',
                }[variant],
              )}
              aria-label={ariaLabel}
              href={href}
            >
              <LocalSocialIcons type={type} />
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};
