import type { Product } from '@/entities/shop/lib/types/product.interface';

import { productQuantityRestriction } from '@/shared/lib/constants/contants';

export const calculateQuantity = ({
  currentProduct,
  newProduct,
}: {
  currentProduct: Product;
  newProduct: Product;
}) => {
  if (
    currentProduct.quantity &&
    currentProduct.quantity >= productQuantityRestriction.max
  ) {
    return currentProduct.quantity;
  }
  if (
    currentProduct.quantity &&
    newProduct.quantity &&
    currentProduct.quantity + newProduct.quantity >=
      productQuantityRestriction.max
  ) {
    return productQuantityRestriction.max;
  }
  return currentProduct.selectedSize === newProduct.selectedSize &&
    currentProduct.quantity &&
    currentProduct.quantity !== productQuantityRestriction.max &&
    newProduct.quantity
    ? currentProduct.quantity + newProduct.quantity
    : currentProduct.quantity;
};
