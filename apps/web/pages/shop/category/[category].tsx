import type { GetStaticProps, NextPage } from 'next';
import { ArchivePage } from '@/pages/archive/ui/archive-page';
import { ShopApi } from '@/entities/shop/api';
import { client } from '@/shared/api/apollo/apollo-client';
import type { SlugParams } from '@/shared/api/apollo/slug-params';
import type {
  ShopCategoryEntity,
  ShopItemEntityResponseCollection,
} from '@/shared/api/graphql/__generated__/schema.graphql';
import { capitalize } from '@/shared/lib/helpers/capitalize';
import { Seo } from '@/shared/ui/seo/seo';

interface Page {
  categoryName: string;
  shopItems: ShopItemEntityResponseCollection;
  shopSubCategories: ShopCategoryEntity[];
}

const Page: NextPage<Page> = ({
  shopItems,
  categoryName,
  shopSubCategories,
}) => {
  return (
    <>
      <Seo templateTitle={categoryName} />

      <ArchivePage
        shopSubCategories={shopSubCategories}
        archiveItemSecondHeaderText={categoryName}
        data={shopItems.data}
        totalCount={shopItems.meta.pagination.total}
        variant='shop'
      />
    </>
  );
};

export default Page;

export const getStaticProps: GetStaticProps = async (context) => {
  const { category } = context.params as SlugParams;
  const categoryName = category && capitalize(category);

  const {
    data: { shopCategories },
  } = await client.query({
    query: ShopApi.ShopCategoriesDocument,
    variables: { filters: { parent: { slug: { eq: category as string } } } },
  });

  const {
    data: { shopItems },
  } = await client.query({
    query: ShopApi.ShopItemsDocument,
    variables: {
      filters:
        category && Array.isArray(shopCategories?.data)
          ? { shop_category: { parent: { slug: { eq: category as string } } } }
          : { slug: { eq: category as string } },
    },
  });

  return {
    props: {
      shopItems,
      categoryName,
      shopSubCategories: shopCategories?.data,
    },
  };
};

export async function getStaticPaths() {
  const {
    data: { shopCategories },
  } = await client.query({
    query: ShopApi.ShopCategoriesDocument,
  });

  const paths = shopCategories?.data.map(({ attributes }) => ({
    params: {
      category: attributes?.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
