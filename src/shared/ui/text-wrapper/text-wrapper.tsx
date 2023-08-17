import type { SizeVariant } from '@/shared/lib/types/size-variant.interface';

import { clsxm } from '@/shared/lib/helpers/clsxm';

type TextWrapperProps = React.PropsWithChildren & {
  sizeVariant?: SizeVariant;
};

export const TextWrapper = ({
  children,
  sizeVariant = 'large',
}: TextWrapperProps) => {
  return (
    <div
      className={clsxm(
        'font-normal leading-[1.02]',
        {
          'text-[0.92rem]  leading-[1.13]   xl:text-[0.98rem] xl:tracking-[-0.01em] 2xl:text-[1.15rem]':
            sizeVariant === 'large',
        },
        {
          'text-[0.85rem]  leading-[1.13] lg:leading-[1.02] xl:text-[0.92rem] 2xl:text-[0.98rem] 4xl:text-[1.05rem]':
            sizeVariant === 'small',
        },
      )}
    >
      {children}
    </div>
  );
};
