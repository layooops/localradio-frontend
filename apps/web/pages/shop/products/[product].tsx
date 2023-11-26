import type { ParsedUrlQuery } from 'querystring';
import type { GetServerSideProps, NextPage } from 'next/types';
import { ShopApi } from '@/entities/shop/api';
import { ShopPage } from '@/pages/shop/ui/shop-page';
import { client } from '@/shared/api/apollo/apollo-client';
import type { ShopItemEntityResponseCollection } from '@/shared/api/graphql/__generated__/schema.graphql';
import { getDescription } from '@/shared/lib/helpers/get-description';
import { getMarkdownToHtml } from '@/shared/lib/helpers/markdown-to-html';
import { Seo } from '@/shared/ui/seo/seo';

interface PageProps {
  productName: string;
  items: ShopItemEntityResponseCollection;
  description: string;
}

const Page: NextPage<PageProps> = ({ items, productName, description }) => {
  const imageSeo = items.data[0].attributes?.images.data[0].attributes?.url;
  const descriptionSeo = getDescription(items.data[0].attributes);

  return (
    <>
      <Seo
        templateTitle={productName}
        image={imageSeo}
        description={descriptionSeo}
      />

      <ShopPage description={description} item={items.data[0]} />
    </>
  );
};

export default Page;

interface ReleasePageParams extends ParsedUrlQuery {
  product: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { product } = context.params as ReleasePageParams;

  const {
    data: { shopItems },
  } = await client.query({
    query: ShopApi.ShopItemsDocument,
    variables: {
      filters: { slug: { eq: product as string } },
    },
  });

  if (!Array.isArray(shopItems?.data)) {
    return {
      notFound: true,
    };
  }

  const productName = shopItems?.data[0].attributes?.title;

  const description = await getMarkdownToHtml(
    shopItems?.data[0].attributes?.description,
  );

  return {
    props: { items: shopItems, productName, description },
  };
};
