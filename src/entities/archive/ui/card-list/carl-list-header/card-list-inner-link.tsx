import Link, { LinkProps } from 'next/link';

interface CardListInnerLink extends LinkProps, React.PropsWithChildren {}

export const CardListInnerLink = ({ href, children }: CardListInnerLink) => {
  return (
    <Link
      href={href}
      className='break-words text-gray-color hover:text-secondary-dark'
    >
      {children}
    </Link>
  );
};
