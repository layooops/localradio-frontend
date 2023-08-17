import type { ShopItemEntity } from '@/shared/api/graphql/__generated__/schema.graphql';
import type { Maybe } from 'yup';

export interface Product extends ShopItemEntity {
  quantity?: Maybe<number>;
  selectedSize?: Maybe<string>;
}
