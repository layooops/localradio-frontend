import type { NextApiRequest, NextApiResponse } from 'next';

import { client } from '@/shared/api/apollo/apollo-client';
import { HTTP_STATUS } from '@/shared/lib/constants/http-statuses';
import { RandomMixesDocument } from '@/widgets/players/soundcloud/api/random-mix.graphql.interface';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const id = req.body;
    const {
      data: { randomMixes },
    } = await client.query({
      query: RandomMixesDocument,
      variables: { id: Number(id) },
    });
    res.status(HTTP_STATUS.OK).send({ randomMixes });
  } catch (error) {
    res
      .status(HTTP_STATUS.SERVER_ERROR)
      .send({ error: 'failed to fetch data' });
  }
}
