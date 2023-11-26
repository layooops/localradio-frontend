import { clsxm } from '@/shared/lib/helpers/clsxm';
import type {
  DynamicComponentProps,
  HeadingProps,
  ValidHeadingTags,
} from '@/shared/ui/headings/heading';
import { Heading } from '@/shared/ui/headings/heading';

export const CardListHeaderWrapper = <T extends ValidHeadingTags>({
  children,
  sizeVariant,
  className,
  as = 'h1' as T,
}: DynamicComponentProps<T> & HeadingProps) => {
  return (
    <Heading
      as={as}
      sizeVariant={sizeVariant}
      className={clsxm(
        'py-2 sm:flex-row xl:py-2 2xl:gap-y-4 2xl:py-[1rem]',
        className,
      )}
    >
      {children}
    </Heading>
  );
};
