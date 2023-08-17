import type { NextApiRequest, NextApiResponse } from 'next';

import { client } from '@/shared/api/apollo/apollo-client';
import { HTTP_STATUS } from '@/shared/lib/constants/http-statuses';
import { ArchiveNavigationDocument } from '@/widgets/navigation/archive/api/navigation.graphql.interface';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { data } = await client.query({
      query: ArchiveNavigationDocument,
      fetchPolicy: 'no-cache',
    });
    res.status(HTTP_STATUS.OK).send({ data });
  } catch (error) {
    res
      .status(HTTP_STATUS.SERVER_ERROR)
      .send({ error: 'failed to fetch data' });
  }
}
