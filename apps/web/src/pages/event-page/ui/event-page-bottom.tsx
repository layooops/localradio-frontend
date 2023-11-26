import { CardSectionWithMemo } from '@/widgets/card-section/ui';
import type { MixEntity } from '@/shared/api/graphql/__generated__/schema.graphql';

interface EventPageBottomProps {
  mixes: MixEntity[];
  title?: string;
}

export const EventPageBottom = ({ mixes, title }: EventPageBottomProps) => {
  return (
    <CardSectionWithMemo
      pageVariant='other'
      variant='mixes'
      data={mixes}
      text={'Episodes from ' + title}
    />
  );
};
