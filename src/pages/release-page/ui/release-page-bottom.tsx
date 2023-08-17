import type {
  Maybe,
  MixEntity,
} from '@/shared/api/graphql/__generated__/schema.graphql';

import { CardSectionWithMemo } from '@/widgets/card-section/ui';

interface ReleasePageBottomProps {
  moreEpisodes?: MixEntity[];
  mixesGuestName?: string;
  mixesGuestSlug?: Maybe<string> | undefined;
}

const ReleasePageBottom = ({
  moreEpisodes,
  mixesGuestName,
  mixesGuestSlug,
}: ReleasePageBottomProps) => {
  return (
    <div className='border-t-2 border-black lg:border-t-0'>
      <CardSectionWithMemo
        pageVariant='other'
        variant='mixes'
        data={moreEpisodes}
        secondHeader={{
          variant: 'resident',
          slug: mixesGuestSlug,
          text: mixesGuestName,
        }}
      />
    </div>
  );
};
export default ReleasePageBottom;
