import { parse } from 'node-html-parser';

async function fetchLastVideoUrl(channelId?: string): Promise<string | undefined> {
  try {
    const response = await fetch(`https://www.youtube.com/embed/live_stream?channel=${channelId}`);
    const text = await response.text();
    return text;
  } catch (error) {
    console.error(error);
  }
}

export const streamIsLiveQuery = () => ({
  typeDefs: `
        type Query {
          streamIsLive: Boolean
        }
      `,
  resolvers: {
    Query: {
      streamIsLive: async (): Promise<boolean> => {
        const streamData = await fetchLastVideoUrl(process.env.YOUTUBE_CHANNEL_ID);

        if (streamData) {
          const html = parse(streamData);
          const isLive = html.querySelector('link[rel=canonical]')?.getAttribute('href');

          const isStreaming = isLive?.includes('/watch?v=');
          if (isStreaming) return isStreaming;
        }

        return false;
      },
    },
  },
  resolversConfig: {
    'Query.streamIsLive': {
      auth: false,
    },
  },
});
