import type { NextApiRequest, NextApiResponse } from 'next';

import { ShopApi } from '@/entities/shop/api';
import { client } from '@/shared/api/apollo/apollo-client';
import { HTTP_STATUS } from '@/shared/lib/constants/http-statuses';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const {
      data: { shopCategories },
    } = await client.query({
      query: ShopApi.ShopCategoriesDocument,
    });
    res.status(HTTP_STATUS.OK).send({ shopCategories });
  } catch (error) {
    res
      .status(HTTP_STATUS.SERVER_ERROR)
      .send({ error: 'failed to fetch data' });
  }
}
