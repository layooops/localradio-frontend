import type { ShopItemEntityResponseCollection } from '@/shared/api/graphql/__generated__/schema.graphql';
import type { GetServerSideProps, NextPage } from 'next';

import { ShopApi } from '@/entities/shop/api';
import { ArchivePage } from '@/pages/archive/ui/archive-page';
import { client } from '@/shared/api/apollo/apollo-client';
import { Seo } from '@/shared/ui/seo/seo';

interface PageProps {
  shopItems: ShopItemEntityResponseCollection;
}

const Page: NextPage<PageProps> = ({ shopItems }) => {
  return (
    <>
      <Seo templateTitle='Shop' />
      <ArchivePage
        secondHeaderText='/shop/'
        totalCount={shopItems.meta.pagination.total}
        data={shopItems.data}
        variant='shop'
      />
    </>
  );
};

export default Page;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const {
      data: { shopItems },
    } = await client.query({
      query: ShopApi.ShopItemsDocument,
      variables: { limit: 12 },
    });

    return {
      props: { shopItems },
    };
  } catch (error) {
    return {
      redirect: { destination: '/500', permanent: false },
    };
  }
};
