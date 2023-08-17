import type { Product } from '../lib/types/product.interface';
import type { Maybe } from 'yup';

import { sample } from 'effector';

import { DEFAULT_QUANTITY } from '@/shared/lib/constants/contants';

import { shopItems } from './shop-items.domain';

export const selectSizeEv = shopItems.createEvent<string>();
export const $selectedSize = shopItems
  .createStore<string>('')
  .on(selectSizeEv, (_, next) => next);

export const $totalQuantity = shopItems.createStore<Maybe<number>>(null);
export const $products = shopItems.createStore<Product[]>([]);

export const $totalPrice = shopItems.createStore<Maybe<number>>(null);

sample({
  source: $products,
  fn: (products) => {
    return (
      products
        .map(
          ({ quantity, attributes }) =>
            quantity && attributes?.price && attributes.price * quantity,
        )
        .reduce<Maybe<number>>(
          (acc, curr) => curr && curr + acc!,
          DEFAULT_QUANTITY,
        ) ?? null
    );
  },
  target: $totalPrice,
});

sample({
  source: $products,
  fn: (products) => {
    const p = products.map(({ quantity }) => quantity);
    if (p.length > DEFAULT_QUANTITY)
      return (
        p.reduce<Maybe<number>>(
          (acc, curr) => curr && curr + acc!,
          DEFAULT_QUANTITY,
        ) ?? null
      );
    return null;
  },
  target: $totalQuantity,
});
