import type { MixesQuery } from '@/entities/mix/api/mix.graphql.interface';
import type { GuestsQuery } from '@/entities/mix-archive-inner/api';
import type { ReleasesQuery } from '@/entities/release/api/releases.graphql.interface';
import type { CardListProps } from '@/widgets/card-list/lib/types/card-list.interface';
import type { ApolloQueryResult } from '@apollo/client';
import type { DocumentNode } from 'graphql';

import { useEffect, useState } from 'react';
import { useErrorBoundary } from 'react-error-boundary';

import { MixApi } from '@/entities/mix/api';
import { MixArchiveInnerApi } from '@/entities/mix-archive-inner/api';
import { ReleaseApi } from '@/entities/release/api';
import { client } from '@/shared/api/apollo/apollo-client';

export type UseGetMoreOnScrollResponse = ReturnType<typeof useGetMoreOnScroll>;

type UseGetMoreOnScrollProps = Pick<
  CardListProps,
  'data' | 'mixesFilter' | 'releasesFilter' | 'residentsFilter' | 'variant'
>;

const getNewData = async <T>(
  query: DocumentNode,
  start?: number,
  filters?: any,
): Promise<ApolloQueryResult<T>> => {
  const dataNew = await client.query({
    query,
    variables: {
      limit: 12,
      start,
      filters,
    },
  });
  if (dataNew.error) {
    throw new Error(dataNew.error.message);
  }

  return dataNew;
};

export const useGetMoreOnScroll = ({
  data,
  mixesFilter,
  variant,
  releasesFilter,
  residentsFilter,
}: UseGetMoreOnScrollProps) => {
  const [cardListItems, setCardListItems] = useState<any[] | undefined>(data);
  const { showBoundary } = useErrorBoundary();
  useEffect(() => {
    setCardListItems(data);
  }, [data, setCardListItems]);

  const concatCardList = (data: any[]) =>
    setCardListItems((prev) => prev && prev.concat(data));

  const getMore = async () => {
    if (mixesFilter && cardListItems) {
      try {
        const dataNew = await getNewData<MixesQuery>(
          MixApi.MixesDocument,
          cardListItems.length,
          mixesFilter,
        );

        const mixesData = dataNew.data.mixes?.data;

        mixesData &&
          (variant === 'mixes' || variant === 'show') &&
          concatCardList(mixesData);
      } catch (error) {
        showBoundary(error);
      }
    }

    if (releasesFilter && cardListItems) {
      try {
        const dataNew = await getNewData<ReleasesQuery>(
          ReleaseApi.ReleasesDocument,
          cardListItems.length,
          releasesFilter,
        );

        const releasesData = dataNew.data.releases?.data;

        releasesData && variant === 'releases' && concatCardList(releasesData);
      } catch (error) {
        showBoundary(error);
      }
    }
    if (residentsFilter && cardListItems) {
      try {
        const dataNew = await getNewData<GuestsQuery>(
          MixArchiveInnerApi.GuestsDocument,
          cardListItems.length,
          residentsFilter,
        );

        const residentsData = dataNew.data.guests?.data;

        residentsData && variant === 'guests' && concatCardList(residentsData);
      } catch (error) {
        showBoundary(error);
      }
    }
  };

  return {
    cardListItems,
    getMore,
  };
};
