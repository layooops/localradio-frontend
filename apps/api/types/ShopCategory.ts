export interface ShopCategory {
  id: number;
  attributes: {
    name?: string;
    slug?: string;
    parent: { data: ShopCategory[] };
  };
}
