import type { ShopItem } from '../ShopItem';

export interface OrderItems {
  id: number;
  product?: { data: ShopItem };
  quantity: number;
}
