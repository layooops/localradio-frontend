import type { NextApiRequest, NextApiResponse } from 'next';
import { RandomMixDocument } from '@/widgets/players/soundcloud/api/random-mix.graphql.interface';
import { client } from '@/shared/api/apollo/apollo-client';
import { HTTP_STATUS } from '@/shared/lib/constants/http-statuses';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const {
      data: { randomMix },
    } = await client.query({
      query: RandomMixDocument,
      fetchPolicy: 'network-only',
    });
    res.status(HTTP_STATUS.OK).send({ randomMix });
  } catch (error) {
    res
      .status(HTTP_STATUS.SERVER_ERROR)
      .send({ error: 'failed to fetch data' });
  }
}
