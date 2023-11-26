import type { Product } from '@/entities/shop/lib/types/product.interface';
import { PRODUCT_QUANTITY_RESTRICTION } from '@/shared/lib/constants/contants';

export const calculateQuantity = ({
  currentProduct,
  newProduct,
}: {
  currentProduct: Product;
  newProduct: Product;
}) => {
  if (
    currentProduct.quantity &&
    currentProduct.quantity >= PRODUCT_QUANTITY_RESTRICTION.max
  ) {
    return currentProduct.quantity;
  }
  if (
    currentProduct.quantity &&
    newProduct.quantity &&
    currentProduct.quantity + newProduct.quantity >=
      PRODUCT_QUANTITY_RESTRICTION.max
  ) {
    return PRODUCT_QUANTITY_RESTRICTION.max;
  }
  return currentProduct.selectedSize === newProduct.selectedSize &&
    currentProduct.quantity &&
    currentProduct.quantity !== PRODUCT_QUANTITY_RESTRICTION.max &&
    newProduct.quantity
    ? currentProduct.quantity + newProduct.quantity
    : currentProduct.quantity;
};
