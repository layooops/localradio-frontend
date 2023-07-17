import { useUnit } from 'effector-react';
import type { Maybe } from 'yup';
import { ShopButton } from '@/entities/store/items/ui/shop-button';
import { clsxm } from '@/shared/lib/helpers/clsxm';
import { productQuantityRestriction } from '@/shared/lib/constants/common';
import {
  decrementProductQuantityEv,
  incrementProductQuantityEv,
} from '../../items/model/shop.model';

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
          <ShopButton
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
              { 'pointer-events-none': soldout }
            )}
          >
            {productQuantity}
          </div>

          <ShopButton
            title={`Add item. Maximum is ${productQuantityRestriction.max} items.`}
            aria-label='Add item'
            type='button'
            disabled={productQuantity === productQuantityRestriction.max}
            onClick={() => {
              productQuantity !== productQuantityRestriction.max &&
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
