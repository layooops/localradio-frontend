import { clsxm } from '@/shared/lib/helpers/clsxm';
import {
  DynamicComponentProps,
  Heading,
  HeadingProps,
  ValidHeadingTags,
} from './heading';

export const SecondHeader = <T extends ValidHeadingTags>({
  text,
  className,
  children,
  as = 'h2' as T,
}: DynamicComponentProps<T> & HeadingProps) => {
  return (
    <Heading as={as} className={clsxm(className, 'py-2  2xl:py-[1rem]')}>
      {text}
      {children}
    </Heading>
  );
};
