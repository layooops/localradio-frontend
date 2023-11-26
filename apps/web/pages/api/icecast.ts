import type { NextApiRequest, NextApiResponse } from 'next';
import {
  AUDIO_SERVER_NAME,
  AUDIO_STATUS_URL,
} from '@/shared/config/environment';
import { HTTP_STATUS } from '@/shared/lib/constants/http-statuses';

export const STREAM_ERROR_TITLE = 'Stream under maintenance';

interface IcecestSource {
  audio_info: string;
  channels: number;
  genre: 'various';
  listener_peak: number;
  listeners: number;
  listenurl: string;
  samplerate: number;
  server_description: string;
  server_name: string;
  server_type: string;
  server_url: string;
  stream_start: string;
  stream_start_iso8601: string;
  title: string;
  dummy: null | any;
}

interface IcecastResponse {
  icestats: {
    source: IcecestSource | IcecestSource[];
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const title = await fetchTitle().catch((error) => {
      throw new Error(error.message);
    });
    res.status(HTTP_STATUS.OK).send({ title });
  } catch (error) {
    res
      .status(HTTP_STATUS.NOT_FOUND)
      .send({ error: error instanceof Error && error.message });
  }
}

const fetchTitle = async () => {
  const response = await fetch(AUDIO_STATUS_URL);

  if (response.ok) {
    const data = (await response.json()) as IcecastResponse;
    if (!data.icestats.source) {
      throw new Error(STREAM_ERROR_TITLE);
    }

    if (Array.isArray(data.icestats.source)) {
      const mainSource = data.icestats.source.find(
        (e: { title: string; server_name: string }) =>
          e.server_name === AUDIO_SERVER_NAME,
      );

      return mainSource?.title;
    }
    if (data.icestats.source.title) {
      return data.icestats.source.title;
    }
  }

  if (
    response.status === HTTP_STATUS.SERVER_ERROR ||
    response.status === HTTP_STATUS.NOT_FOUND
  ) {
    throw new Error(STREAM_ERROR_TITLE);
  }
};
