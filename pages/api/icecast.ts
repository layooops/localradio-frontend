import { NextApiRequest, NextApiResponse } from 'next';
import {
  ICECAST_SERVER_NAME,
  ICECAST_STATUS_URL,
} from '@/shared/config/environment';

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
  res: NextApiResponse
) {
  try {
    const title = await fetchTitle().catch((error) => {
      throw new Error(error.message);
    });
    res.status(200).send({ title });
  } catch (error) {
    res.status(404).send({ error: error instanceof Error && error.message });
  }
}

const fetchTitle = async () => {
  const response = await fetch(ICECAST_STATUS_URL);

  if (response.ok) {
    const data = (await response.json()) as IcecastResponse;
    if (!data.icestats.source) {
      throw new Error(STREAM_ERROR_TITLE);
    }

    if (Array.isArray(data.icestats.source)) {
      const mainSource = data.icestats.source.find(
        (e: { title: string; server_name: string }) =>
          e.server_name === ICECAST_SERVER_NAME
      );

      return mainSource?.title;
    }
    if (data.icestats.source.title) {
      return data.icestats.source.title;
    }
  }

  if (response.status === 500 || response.status === 404) {
    throw new Error(STREAM_ERROR_TITLE);
  }
};
