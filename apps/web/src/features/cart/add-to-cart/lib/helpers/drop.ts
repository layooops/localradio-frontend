import type { Product } from '@/entities/shop/lib/types/product.interface';

const initialIndex = 0;
const oneItem = 1;

export const dropItem = (products: Product[], index: number) =>
  products.slice(initialIndex, index).concat(products.slice(index + oneItem));
