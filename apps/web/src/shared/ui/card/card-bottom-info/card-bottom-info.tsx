import { clsxm } from '@/shared/lib/helpers/clsxm';
import { CardDate } from '../card-date';
import { CardHeadingWithMemo } from '../card-heading/card-heading';
import type { CardBottomInfoProps } from './card-bottom-info.interface';

export const CardBottomInfo = ({
  sizeVariant,
  variant,
  date,
  genresNode,
  headingText,
  href,
  cardDate,
  children,
  hasBorder,
}: CardBottomInfoProps) => {
  return (
    <div
      className={clsxm(
        'relative flex h-full flex-col justify-between [&>*]:border-black  group-hover:[&>*]:border-black  group-hover:[&>*]:text-black',
        {
          '[&>*]:p-[clamp(0.15rem,1.5vw,0.375rem)]': sizeVariant === 'standard',
        },
        {
          '[&>*]:bg-primary/75  [&>*]:backdrop-blur-[20px] [&>*]:backdrop-saturate-150  [&>*]:transition-colors   group-hover:[&>*]:bg-opacity-[0.75]':
            variant === 'mix' && sizeVariant === 'standard',
        },
      )}
    >
      <div
        className={clsxm(
          'flex flex-1 flex-col',
          { 'border-b border-black': hasBorder },
          {
            'gap-0.5': variant === 'mix' && sizeVariant === 'standard',
          },
          { 'justify-between': sizeVariant === 'standard' },
        )}
      >
        <CardHeadingWithMemo
          sizeVariant={sizeVariant}
          text={headingText}
          href={href}
        />
        <CardDate
          sizeVariant={sizeVariant}
          variant={variant}
          date={date}
          link={cardDate?.link}
          text={cardDate?.text}
        />
      </div>
      {genresNode}
      {variant === 'release' && children}
    </div>
  );
};
