import { usePathname } from 'next/navigation';
import { memo, useCallback } from 'react';
import { clsxm } from '@/shared/lib/helpers/clsxm';
import type { HeaderLinkWrapperProps } from './header-link';

const HeaderLinkWrapper = ({
  children,
  href,
  strict = false,
  className,
}: HeaderLinkWrapperProps) => {
  const path = usePathname();

  const backgroundColor = useCallback(() => {
    if ((href && !strict && path?.includes(href)) || (strict && path === href))
      return 'black';
  }, [href, strict, path]);
  const color = useCallback(() => {
    if (
      (href && !strict && path?.includes(href)) ||
      (strict && path === href)
    ) {
      return 'var(--olive-color)';
    }
  }, [href, strict, path]);

  return (
    <div
      style={{
        backgroundColor: backgroundColor(),
        color: color(),
      }}
      className={clsxm(
        className,
        'leading-none  2xl:text-[1rem]',
        'flex h-[26px] items-center justify-center rounded-lg bg-primary stroke-black transition-colors duration-200 md:hover:stroke-primary lg:w-auto lg:text-[0.875rem] lg:hover:bg-black lg:hover:text-primary xl:text-[0.95rem] 2xl:h-[32px]',
      )}
    >
      {children}
    </div>
  );
};

export const HeaderLinkWrapperWithMemo = memo(HeaderLinkWrapper);
