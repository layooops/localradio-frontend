import type { NextApiRequest, NextApiResponse } from 'next';
import { MixApi } from '@/entities/mix/api';
import { MixArchiveInnerApi } from '@/entities/mix-archive-inner/api';
import { client } from '@/shared/api/apollo/apollo-client';
import type {
  GenreEntityResponseCollection,
  MixEntityResponseCollection,
} from '@/shared/api/graphql/__generated__/schema.graphql';
import { HTTP_STATUS } from '@/shared/lib/constants/http-statuses';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const query = req.body;
  try {
    const data = await search(query);
    res.status(HTTP_STATUS.OK).send({ data });
  } catch (error) {
    res
      .status(HTTP_STATUS.SERVER_ERROR)
      .send({ error: 'failed to fetch data' });
  }
}

export const search = async (searchValue: string) => {
  const { mixes } = await MixApi.fetchMixes<MixEntityResponseCollection>({
    filters: {
      name: { contains: searchValue },
    },
    limit: 24,
  });

  const {
    data: { genres },
  } = await client.query({
    query: MixArchiveInnerApi.GenresDocument,
    variables: {
      filters: {
        name: { contains: searchValue },
      },
    },
  });

  return {
    mixes,
    genres: genres as GenreEntityResponseCollection,
  };
};
