import type { ShopItemEntity } from '@/shared/api/graphql/__generated__/schema.graphql';

import { useCallback } from 'react';

import { ShopCalcButton } from '@/entities/shop/ui/shop-calc-button';
import { useSubmit } from '@/features/cart/add-to-cart/lib/hooks/use-submit.hook';
import { PRODUCT_QUANTITY_RESTRICTION } from '@/shared/lib/constants/contants';
import { clsxm } from '@/shared/lib/helpers/clsxm';

export interface ShopSubmitElementProps {
  product: ShopItemEntity;
  disabled?: boolean;
  price?: number;
  selectedSize: string;
  type: 'page' | 'card';
}

const CHANGE_AMOUNT = 1;

export const ShopSubmitElement = ({
  product,
  type,
  disabled,
  selectedSize,
}: ShopSubmitElementProps) => {
  const { attributes } = product;
  const sizes = attributes?.attributes?.size;
  const hasSizes = Array.isArray(sizes);

  const { quantity, isSubmitted, onSubmit, setQuantity } = useSubmit({
    product,
    disabled,
    selectedSize,
  });

  const shopSubmitClasses = clsxm(
    'flex w-full items-center justify-between overflow-hidden text-[0.95rem] uppercase sm:text-[1rem]',
    'bg-black fill-white text-white hover:fill-black',
    {
      'pointer-events-none bg-black text-white':
        !attributes?.soldout && disabled,
    },
    {
      'pointer-events-none border-x-2 border-b-2 border-t-2 border-black bg-gray-color text-white   lg:border-b-0':
        attributes?.soldout,
    },
    {
      'h-10 lg:h-12 2xl:h-14': type === 'page',
    },
  );

  const removeItem = useCallback(() => {
    !disabled &&
      setQuantity((prev) =>
        prev !== PRODUCT_QUANTITY_RESTRICTION.min
          ? prev - CHANGE_AMOUNT
          : PRODUCT_QUANTITY_RESTRICTION.min,
      );
  }, [disabled, setQuantity]);
  const addItem = useCallback(() => {
    !disabled &&
      setQuantity((prev) =>
        prev !== PRODUCT_QUANTITY_RESTRICTION.max
          ? prev + CHANGE_AMOUNT
          : PRODUCT_QUANTITY_RESTRICTION.max,
      );
  }, [disabled, setQuantity]);

  return (
    <div className={shopSubmitClasses}>
      <ShopCalcButton
        aria-label='Remove item'
        type='button'
        onClick={removeItem}
        disabled={disabled}
        sizeVariant='large'
        operation='minus'
      />
      <button
        type='button'
        onClick={onSubmit}
        className='flex h-full w-full items-center justify-center font-medium uppercase transition-colors hover:bg-white hover:text-black'
      >
        {!attributes?.soldout ? (
          <div>
            {!isSubmitted && !selectedSize && hasSizes && !attributes?.soldout
              ? 'Please select a size'
              : `Add ${quantity} to cart`}
          </div>
        ) : (
          <div>Soldout</div>
        )}
      </button>

      <ShopCalcButton
        aria-label='Add Item'
        type='button'
        disabled={disabled}
        onClick={addItem}
        sizeVariant='large'
        operation='plus'
      />
    </div>
  );
};
