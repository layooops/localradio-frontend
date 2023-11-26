import type { Media } from './Media';
import type { ShopCategory } from './ShopCategory';

export interface ShopItem {
  id: number;
  attributes: {
    title: string;
    slug?: string;
    shop_category?: { data: ShopCategory };
    images: { data: Media[] };
    soldout?: boolean;
    quantity?: number;
    price: number;
    description?: string;
    attributes?: any;
    oldPrice?: number;
  };
}
