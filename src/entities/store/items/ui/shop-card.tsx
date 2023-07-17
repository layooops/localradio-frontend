import { FC } from 'react';
import { CardBaseProps } from '@/entities/archive/lib/card-list.interface';
import { ShopItemEntity } from '@/shared/api/graphql/__generated__/schema.graphql';
import { clsxm } from '@/shared/lib/helpers/clsxm';
import { setSeoAltText } from '@/shared/lib/set-seo-alt-text';
import { CardImageWithMemo } from '@/shared/ui/card/card-image/card-image';
import { CardWrapperWithMemo } from '@/shared/ui/card/card-wrapper/card-wrapper';
import { ShopCardBottom } from './shop-card-bottom';

type ShopCardProps = CardBaseProps & ShopItemEntity;

export const ShopCard: FC<ShopCardProps> = (props) => {
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
            {imagesList?.map(
              ({ attributes: imgA }, id) =>
                id < 2 && (
                  <CardImageWithMemo
                    key={imgA?.url}
                    className={clsxm(
                      'opacity-100 transition-opacity  duration-[250ms]',
                      { 'opacity-0 hover:opacity-100': id === 1 }
                    )}
                    variant='shop'
                    href={`/shop/products/${attributes?.slug}`}
                    alt={altText + ' ' + id}
                    src={imgA?.url}
                  />
                )
            )}
          </div>
        </div>
        <ShopCardBottom {...props} />
      </div>
    </CardWrapperWithMemo>
  );
};
