import type { ShopSubmitElementProps } from '@/entities/shop/ui/shop-submit-element';

import { useCallback, useEffect, useState } from 'react';
import { useUnit } from 'effector-react';

import { openCartModalEv } from '@/entities/cart/model/cart.model';

import { addProductEv } from '../../model/add-to-cart.model';

type UseSubmitProps = Pick<
  ShopSubmitElementProps,
  'disabled' | 'product' | 'selectedSize'
>;

const initialQuantity = 1;

export const useSubmit = ({
  disabled,
  product,
  selectedSize,
}: UseSubmitProps) => {
  const [quantity, setQuantity] = useState<number>(initialQuantity);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { openCartModal, addProduct } = useUnit({
    openCartModal: openCartModalEv,
    addProduct: addProductEv,
  });
  const onSubmit = useCallback(() => {
    if (!disabled) {
      addProduct({
        ...product,
        quantity,
        selectedSize,
      });
      openCartModal(true);
      setIsSubmitted(true);
    }
  }, [
    quantity,
    disabled,
    selectedSize,
    product,
    openCartModal,
    setIsSubmitted,
    addProduct,
  ]);

  useEffect(() => {
    isSubmitted && setQuantity(initialQuantity);
    setIsSubmitted(false);
  }, [isSubmitted]);

  return {
    onSubmit,
    setQuantity,
    isSubmitted,
    quantity,
  };
};
