import { clsxm } from '@/shared/lib/helpers/clsxm';
import { memo } from 'react';

import { GenreListWithMemo } from '../../genres/genre-list/genre-list';
import { CardBottomInfo } from '../card-bottom-info/card-bottom-info';
import { CardImageWithMemo } from '../card-image/card-image';
import { CardWrapperWithMemo } from '../card-wrapper/card-wrapper';
import type { CardProps } from '../card.interface';
import { useCardClasses } from './use-card-classes';

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
    genres,
    ...rest
  } = props;

  const { cardSubWrapperClasses, cardWrapperClasses } = useCardClasses({
    sizeVariant,
    className,
  });

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
                  genres={genres?.data}
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
