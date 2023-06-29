import { useEffect, useState } from 'react';
import { ScopedMutator } from 'swr/_internal';
import {
  REFETCH_STREAM_IN_MS,
  YOUTUBE_LIVE_LINK,
} from '@/shared/lib/constants/common';
import { HomePageToggleProps } from '../ui/home-page-toggle';

interface UseHomePageToggleHookProps
  extends Pick<
    HomePageToggleProps,
    'homePageRandomMix' | 'refetchStream' | 'streamData'
  > {
  refetchStream: Promise<ScopedMutator<any> | undefined>;
}

export const useHomePageToggleHook = ({
  homePageRandomMix,
  refetchStream,
  streamData,
}: UseHomePageToggleHookProps) => {
  const attributes = homePageRandomMix?.attributes;

  const [SCLink, setSCLink] = useState<string | null>(null);
  const [youtubeLink, setYoutubeLink] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    setInterval(() => {
      refetchStream;
    }, REFETCH_STREAM_IN_MS);
  }, [refetchStream]);

  useEffect(() => {
    !streamData?.streamIsLive && attributes?.linksToMixes?.youtubeLink
      ? setYoutubeLink(attributes.linksToMixes.youtubeLink)
      : setYoutubeLink(YOUTUBE_LIVE_LINK);
    attributes?.linksToMixes?.soundcloudLink &&
      setSCLink(attributes.linksToMixes.soundcloudLink);
  }, [streamData?.streamIsLive, attributes]);

  return {
    SCLink,
    youtubeLink,
    isLoading,
  };
};
