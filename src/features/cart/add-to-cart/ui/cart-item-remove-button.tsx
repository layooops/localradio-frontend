import type { Maybe } from 'yup';

import { memo } from 'react';
import { useUnit } from 'effector-react';

import { Button } from '@/shared/ui/button/button';

import { removeProductEv } from '../model/add-to-cart.model';

interface CartItemRemoveButtonProps {
  attributes?: any;
  productId?: Maybe<string>;
  selectedSize?: Maybe<string>;
}

export const CartItemRemoveButton = memo(
  ({ attributes, selectedSize, productId }: CartItemRemoveButtonProps) => {
    const { removeProduct } = useUnit({
      removeProduct: removeProductEv,
    });

    const onRemove = () =>
      attributes?.attributes?.size && selectedSize
        ? removeProduct({
            id: productId,
            selectedSize,
          })
        : removeProduct({ id: productId });

    return (
      <Button
        variant='shadow'
        colorVariant='primary'
        sizeVariant='standard'
        type='button'
        onClick={onRemove}
        className='text-[0.8rem]'
      >
        Remove
      </Button>
    );
  },
);
