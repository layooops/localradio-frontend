import { useUnit } from 'effector-react';
import { useEffect } from 'react';
import { REFETCH_STREAM_IN_MS } from '@/shared/lib/constants/contants';
import { fetchStreamTitleFx } from '@/widgets/players/stream/model/stream';

export const useFetchStreamTitle = () => {
  const { fetchStreamTitle } = useUnit({
    fetchStreamTitle: fetchStreamTitleFx,
  });

  useEffect(() => {
    fetchStreamTitle();
  }, [fetchStreamTitle]);
  useEffect(() => {
    setInterval(() => {
      fetchStreamTitle();
    }, REFETCH_STREAM_IN_MS);
  }, [fetchStreamTitle]);
};
