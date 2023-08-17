import type { CardProps } from '../card.interface';

import { memo } from 'react';

import { clsxm } from '@/shared/lib/helpers/clsxm';

import { GenreListWithMemo } from '../../genres/genre-list/genre-list';
import { CardBottomInfo } from '../card-bottom-info/card-bottom-info';
import { CardImageWithMemo } from '../card-image/card-image';
import { CardWrapperWithMemo } from '../card-wrapper/card-wrapper';

export const Card = (props: CardProps) => {
  const {
    bottomInfo,
    variant,
    href,
    image,
    mixButtons,
    className,
    sizeVariant = 'standard',
    cardDate,
    ...rest
  } = props;
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

  return (
    <CardWrapperWithMemo
      sizeVariant={sizeVariant}
      className={cardWrapperClasses}
      variant={variant}
    >
      <div className={cardSubWrapperClasses}>
        <div
          className={clsxm({
            'group relative overflow-hidden': sizeVariant === 'small',
          })}
        >
          {image && (
            <CardImageWithMemo
              href={href}
              alt={image.alt ?? ''}
              src={image.src}
            />
          )}
          {sizeVariant === 'small' && mixButtons}
        </div>
        <div
          className={clsxm(
            'flex w-full flex-col',
            {
              'absolute bottom-0 left-0':
                mixButtons && sizeVariant === 'standard',
            },
            {
              'h-full': variant !== 'mix',
            },
          )}
        >
          {sizeVariant === 'standard' && mixButtons}
          <CardBottomInfo
            href={href}
            sizeVariant={sizeVariant}
            variant={variant}
            cardDate={cardDate}
            genresNode={
              variant === 'mix' && (
                <GenreListWithMemo
                  variant='solid'
                  colorVariant='primary'
                  sizeVariant='small'
                  genres={rest.genres?.data}
                />
              )
            }
            {...rest}
          >
            {bottomInfo}
          </CardBottomInfo>
        </div>
      </div>
    </CardWrapperWithMemo>
  );
};

export const CardWithMemo = memo(Card);
