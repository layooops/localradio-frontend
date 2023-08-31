import type { Product } from '@/entities/shop/lib/types/product.interface';
import type { Maybe } from 'yup';

import { sample } from 'effector';

import { $products } from '@/entities/shop/model/shop.model';
import { shopItems } from '@/entities/shop/model/shop-items.domain';
import { PRODUCT_QUANTITY_RESTRICTION } from '@/shared/lib/constants/contants';

import { calculateQuantity } from '../lib/helpers/calculate-quantity';
import { dropItem } from '../lib/helpers/drop';

export const incrementProductQuantityEv = shopItems.createEvent<{
  id?: Maybe<string>;
  selectedSize?: Maybe<string>;
}>();
export const decrementProductQuantityEv = shopItems.createEvent<{
  id?: Maybe<string>;
  selectedSize?: Maybe<string>;
}>();

export const addProductEv = shopItems.createEvent<Product>();
export const removeProductEv = shopItems.createEvent<{
  id?: Maybe<string>;
  selectedSize?: string;
}>();

export const productRemovedEvent = shopItems.createEvent<number>();

export const submitShopEv = shopItems.createEvent<boolean>();

export const $isSubmittedShop = shopItems
  .createStore<boolean>(false)
  .on(submitShopEv, (_, next) => next);

sample({
  clock: addProductEv,
  source: { products: $products },
  fn: ({ products }, newProduct) => {
    let modified = false;
    const duplicate: Product[] = products.map((currentProduct) => {
      if (
        currentProduct.id === newProduct.id &&
        currentProduct.selectedSize === newProduct.selectedSize
      ) {
        modified = true;
        return {
          ...currentProduct,
          quantity: calculateQuantity({
            currentProduct,
            newProduct,
          }),
        };
      }

      return currentProduct;
    });
    if (!modified) {
      duplicate.push(newProduct);
    }
    return duplicate;
  },
  target: $products,
});

const MIN_QUANTITY = 1;

sample({
  clock: incrementProductQuantityEv,
  source: { products: $products },
  fn: ({ products }, { id, selectedSize }) => {
    return products.map((product) => {
      return product.quantity !== PRODUCT_QUANTITY_RESTRICTION.max &&
        product.id === id &&
        product.selectedSize === selectedSize
        ? {
            ...product,
            quantity: product.quantity && product.quantity + MIN_QUANTITY,
          }
        : product;
    });
  },
  target: $products,
});

sample({
  clock: decrementProductQuantityEv,
  source: { products: $products },
  fn: ({ products }, { id, selectedSize }) => {
    const index = products.findIndex((product) => product.id === id);
    return products[index].quantity === MIN_QUANTITY
      ? dropItem(products, index)
      : products.map((product) =>
          product.id === id && product.selectedSize === selectedSize
            ? {
                ...product,
                quantity: product.quantity && product.quantity - MIN_QUANTITY,
              }
            : product,
        );
  },
  target: $products,
});

sample({
  clock: productRemovedEvent,
  source: { products: $products },
  fn: ({ products }, remove) => dropItem(products, remove),
  target: $products,
});

sample({
  clock: removeProductEv,
  source: { products: $products },
  fn: ({ products }, { id: index, selectedSize: newSelectedSize }) => {
    return newSelectedSize
      ? products.filter(({ id, selectedSize }) => {
          if (selectedSize !== newSelectedSize)
            return selectedSize !== newSelectedSize;
          return id !== index;
        })
      : products.filter(({ id }) => {
          return id !== index;
        });
  },
  target: $products,
});
