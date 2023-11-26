import type { NextApiRequest, NextApiResponse } from 'next';
import { ScheduleApi } from '@/entities/schedule/api';
import { client } from '@/shared/api/apollo/apollo-client';
import { HTTP_STATUS } from '@/shared/lib/constants/http-statuses';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const eventSchedulesFixed = await fetchEventSchedulesFixed();
    res.status(HTTP_STATUS.OK).send({ eventSchedulesFixed });
  } catch (error) {
    res
      .status(HTTP_STATUS.SERVER_ERROR)
      .send({ error: 'failed to fetch data' });
  }
}

export const fetchEventSchedulesFixed = async () => {
  const {
    data: { eventSchedulesFixed },
  } = await client.query({
    query: ScheduleApi.ScheduleDocument,
    fetchPolicy: 'no-cache',
  });

  return eventSchedulesFixed;
};
