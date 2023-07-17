import Link from 'next/link';
import { memo } from 'react';
import { clsxm } from '@/shared/lib/helpers/clsxm';

interface ArchiveNavItemProps {
  className?: string;
  text: string;
  link: string;
}

export const ArchiveNavItem = ({
  text,
  link,
  className,
}: ArchiveNavItemProps) => {
  return (
    <li
      className={clsxm('tracking-[0.01em] text-primary duration-75', className)}
    >
      <Link
        className='flex h-full w-full items-center justify-center'
        href={link}
      >
        {text}
      </Link>
    </li>
  );
};
export const ArchiveNavItemWithMemo = memo(ArchiveNavItem);
