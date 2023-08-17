import type { LinkProps } from 'next/link';

import Link from 'next/link';

interface CardListInnerLinkProps extends LinkProps, React.PropsWithChildren {}

export const CardListInnerLink = ({
  href,
  children,
}: CardListInnerLinkProps) => {
  return (
    <Link
      href={href}
      className='break-words text-gray-color hover:text-secondary-dark'
    >
      {children}
    </Link>
  );
};
