import type { NextApiRequest, NextApiResponse } from 'next';

import { API_DOMAIN, API_TOKEN } from '@/shared/config/environment';
import { HTTP_STATUS } from '@/shared/lib/constants/http-statuses';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const order = req.body;
    const data = await fetch(`${API_DOMAIN}/api/shop-orders`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: order,
    });
    res.status(HTTP_STATUS.OK).send({ data });
  } catch (error) {
    res
      .status(HTTP_STATUS.SERVER_ERROR)
      .send({ error: 'failed to fetch data' });
  }
}
