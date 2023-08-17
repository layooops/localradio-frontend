import type { NextApiRequest, NextApiResponse } from 'next';

import { client } from '@/shared/api/apollo/apollo-client';
import { HTTP_STATUS } from '@/shared/lib/constants/http-statuses';
import { StreamIsLiveDocument } from '@/widgets/players/stream/api/stream-is-live.graphql.interface';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const {
      data: { streamIsLive },
    } = await client.query({
      query: StreamIsLiveDocument,
      fetchPolicy: 'no-cache',
    });
    res.status(HTTP_STATUS.OK).send({ streamIsLive });
  } catch (error) {
    res
      .status(HTTP_STATUS.SERVER_ERROR)
      .send({ error: 'failed to fetch data' });
  }
}
