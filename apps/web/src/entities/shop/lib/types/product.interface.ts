import type { Maybe } from 'yup';
import type { ShopItemEntity } from '@/shared/api/graphql/__generated__/schema.graphql';

export interface Product extends ShopItemEntity {
  quantity?: Maybe<number>;
  selectedSize?: Maybe<string>;
}
