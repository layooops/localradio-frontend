import type { ShopItemEntity } from '@/shared/api/graphql/__generated__/schema.graphql';
import type { CardBaseNoIdProps } from '@/shared/ui/card/card.interface';

import { clsxm } from '@/shared/lib/helpers/clsxm';
import { setSeoAltText } from '@/shared/lib/helpers/set-seo-alt-text';
import { CardImageWithMemo } from '@/shared/ui/card/card-image/card-image';
import { CardWrapperWithMemo } from '@/shared/ui/card/card-wrapper/card-wrapper';

import { ShopCardBottom } from './shop-card-bottom';

type ShopCardProps = CardBaseNoIdProps & ShopItemEntity;

const MAX_DISPLAY_IMAGES = 2;
const HOVER_IMAGE_INDEX = 1;

export const ShopCard = (props: ShopCardProps) => {
  const { attributes, className } = props;
  const imagesList = attributes?.images.data;
  const altText = setSeoAltText({
    title: attributes?.title,
    date: attributes?.createdAt,
  });

  return (
    <CardWrapperWithMemo type='shop' className={className}>
      <div className='relative  flex h-full flex-col justify-items-stretch border-2 border-black text-[0.7rem] font-medium uppercase'>
        <div>
          <div className='relative flex  aspect-square w-full justify-center'>
            {imagesList?.map(({ attributes: imgA }, id) => {
              const shouldDisplayImage = id < MAX_DISPLAY_IMAGES;
              const isHoverImage = id === HOVER_IMAGE_INDEX;

              return (
                shouldDisplayImage && (
                  <CardImageWithMemo
                    key={imgA?.url}
                    className={clsxm(
                      'opacity-100 transition-opacity  duration-[250ms]',
                      { 'opacity-0 hover:opacity-100': isHoverImage },
                    )}
                    variant='shop'
                    href={`/shop/products/${attributes?.slug}`}
                    alt={`${altText} ${id}`}
                    src={imgA?.url}
                  />
                )
              );
            })}
          </div>
        </div>
        <ShopCardBottom {...props} />
      </div>
    </CardWrapperWithMemo>
  );
};
