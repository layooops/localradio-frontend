import type { Maybe } from 'yup';

import { useUnit } from 'effector-react';

import { ShopCalcButton } from '@/entities/shop/ui/shop-calc-button';
import { PRODUCT_QUANTITY_RESTRICTION } from '@/shared/lib/constants/contants';
import { clsxm } from '@/shared/lib/helpers/clsxm';

import {
  decrementProductQuantityEv,
  incrementProductQuantityEv,
} from '../model/add-to-cart.model';

interface CartCalculationProps {
  productId?: Maybe<string>;
  selectedSize?: Maybe<string>;
  soldout?: Maybe<boolean>;
  productQuantity?: Maybe<number>;
}

export const CartCalculation = ({
  productId,
  selectedSize,
  soldout,
  productQuantity,
}: CartCalculationProps) => {
  const { incrementProductQuantity, decrementProductQuantity } = useUnit({
    incrementProductQuantity: incrementProductQuantityEv,
    decrementProductQuantity: decrementProductQuantityEv,
  });

  return (
    <div className='flex flex-1 items-center text-center'>
      <div
        className={clsxm('flex w-full items-center leading-none [&>*]:flex', {
          '[&>*]:cursor-default': soldout,
        })}
      >
        <div className='flex items-center bg-black leading-[0.9] text-white'>
          <ShopCalcButton
            title='Remove item'
            aria-label='Remove item'
            type='button'
            onClick={() => {
              decrementProductQuantity({
                id: productId,
                selectedSize,
              });
            }}
            quantity={productQuantity}
            sizeVariant='small'
            operation='minus'
          />

          <div
            className={clsxm(
              'pointer-events-none h-full w-8 appearance-none bg-transparent text-center outline-none',
              { 'pointer-events-none': soldout },
            )}
          >
            {productQuantity}
          </div>

          <ShopCalcButton
            title={`Add item. Maximum is ${PRODUCT_QUANTITY_RESTRICTION.max} items.`}
            aria-label='Add item'
            type='button'
            disabled={productQuantity === PRODUCT_QUANTITY_RESTRICTION.max}
            onClick={() => {
              productQuantity !== PRODUCT_QUANTITY_RESTRICTION.max &&
                incrementProductQuantity({
                  id: productId,
                  selectedSize,
                });
            }}
            sizeVariant='small'
            operation='plus'
          />
        </div>
      </div>
    </div>
  );
};
