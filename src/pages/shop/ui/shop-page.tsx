import type { ShopItemEntity } from '@/shared/api/graphql/__generated__/schema.graphql';

import { PageWrapper } from '@/pages/ui/page-wrapper';

import { ShopPageCenter } from './shop-page-center';
import { ShopPageLeft } from './shop-page-left';

interface ShopPageFullProps {
  item: ShopItemEntity;
  description: string;
}

export const ShopPage = ({ item, description }: ShopPageFullProps) => {
  const itemTitle =
    item.attributes?.shop_category?.data?.attributes?.name === 'records'
      ? item.attributes.title.split('-')
      : item.attributes?.title;

  return (
    <PageWrapper
      variant='shop'
      name={itemTitle}
      left={<ShopPageLeft description={description} />}
      center={<ShopPageCenter item={item} />}
    />
  );
};
