import { useUnit } from 'effector-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { Maybe } from 'yup';
import {
  $selectedSize,
  selectSizeEv,
  submitShopEv,
} from '@/entities/store/items/model/shop.model';
import { ShopSubmitElement } from '@/entities/store/items/ui/big-shop-button';
import { ShopItemEntity } from '@/shared/api/graphql/__generated__/schema.graphql';
import { clsxm } from '@/shared/lib/helpers/clsxm';
import { GenreItem } from '@/shared/ui/genres/genre-button/genre-item';
import { NextImage } from '@/shared/ui/next-image/next-image';

interface ShopPageCenterProps {
  item: ShopItemEntity;
}

export const ShopPageCenter = ({ item }: ShopPageCenterProps) => {
  const { attributes } = item;

  const [currentImage, setCurrentImage] = useState<Maybe<string>>('');
  const { submit, selectSize, selectedSize } = useUnit({
    submit: submitShopEv,
    selectSize: selectSizeEv,
    selectedSize: $selectedSize,
  });

  const images = attributes?.images.data;
  const sizes = attributes?.attributes;

  useEffect(() => {
    setCurrentImage(attributes?.images.data[0].attributes?.url ?? '');
  }, [images, attributes?.images.data]);

  useEffect(() => {
    submit(false);
  }, [submit]);

  return (
    <div className='h-full border-black px-1.5 sm:px-3 lg:border-x-2 lg:pt-3'>
      <div className='flex aspect-square  border-l-2 border-black  2xl:max-h-full'>
        <div className='relative w-full min-w-max  border-y-2 border-r-2  border-black'>
          <NextImage
            alt=''
            src={currentImage ?? ''}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      <div className='flex flex-wrap items-end gap-1 py-1 lg:py-1.5 xl:gap-1.5   2xl:gap-2 2xl:py-2'>
        {images?.map(({ attributes }, i) => (
          <button
            key={attributes?.url}
            title={'Image ' + (i + 1)}
            onClick={() => setCurrentImage(attributes?.url)}
            type='button'
            className={`relative aspect-square w-16   `}
          >
            <NextImage
              alt=''
              src={attributes?.url ?? ''}
              fill
              style={{ objectFit: 'cover' }}
            />
            <div
              className={clsxm(
                'absolute  inset-0  border-2 border-black bg-transparent transition-all duration-100 ease-in-out',
                {
                  'border-white backdrop-blur-[2px] lg:-m-0.5':
                    attributes?.url === currentImage,
                }
              )}
            />
          </button>
        ))}
      </div>
      <div className='flex justify-between gap-2  pb-2'>
        <div
          className={`flex  flex-col gap-1  text-[0.85rem] font-medium uppercase md:text-[0.875rem] `}
        >
          {attributes?.shop_category?.data?.attributes?.slug && (
            <Link
              className='w-fit underline underline-offset-2'
              href={`/shop/category/${attributes.shop_category.data.attributes.slug}`}
            >
              {attributes.shop_category.data.attributes.name}
            </Link>
          )}
          <h2 className='whitespace-nowrap font-semibold lg:text-[1.6rem] 2xl:text-[2rem]'>
            {attributes?.title}
          </h2>
          <span className='lg:text-[1.15rem] 2xl:text-[1.6rem]'>
            {attributes?.price} ₽
          </span>
        </div>
      </div>
      <div className='bottom-0 flex flex-col text-[0.96rem] uppercase sm:sticky sm:pb-0 md:text-[1.12rem]'>
        {sizes && (
          <div className='flex h-full items-center gap-2 border-x-2 border-t-2  border-black bg-primary px-2 py-2 pr-3 text-[0.85rem] font-semibold md:text-[0.875rem] 2xl:text-[1.2rem]'>
            Size
            <ul className='flex h-full items-center gap-1 xl:gap-3'>
              {sizes?.map((size: string) => (
                <li key={size} className={`w-full transition-opacity `}>
                  <button
                    type='button'
                    onClick={() => {
                      selectSize(size);
                    }}
                    className=''
                  >
                    <GenreItem
                      colorVariant='transparent'
                      isActive={selectedSize === size}
                      sizeVariant='standard'
                      title={size}
                      type='shopItemSize'
                      variant='solid'
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        <ShopSubmitElement
          selectedSize={selectedSize}
          disabled={(sizes?.length && !selectedSize) ?? attributes?.soldout}
          type='page'
          product={item}
          price={attributes?.price}
        />
      </div>
    </div>
  );
};
