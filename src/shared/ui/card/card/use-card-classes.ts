import { clsxm } from '@/shared/lib/helpers/clsxm';
import { SizeVariant } from '@/shared/lib/types/size-variant.interface';

export const useCardClasses = ({
  sizeVariant,
  className,
}: {
  sizeVariant: SizeVariant;
  className?: string;
}) => {
  const cardWrapperClasses = clsxm(
    { 'group  h-full overflow-hidden': sizeVariant === 'standard' },
    {
      'border-b-2 border-black p-1.5 last-of-type:border-none  md:p-2 xl:p-2.5':
        sizeVariant === 'small',
    },
    className,
  );

  const cardSubWrapperClasses = clsxm(
    {
      'group relative flex  flex-1 flex-col overflow-hidden':
        sizeVariant === 'standard',
    },
    {
      'grid grid-cols-[0.7fr,1fr]  gap-1.5 lg:gap-2 2xl:gap-3':
        sizeVariant === 'small',
    },
  );

  return { cardWrapperClasses, cardSubWrapperClasses };
};
