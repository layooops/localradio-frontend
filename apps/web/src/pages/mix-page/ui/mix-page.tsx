import { PageWrapper } from '@/pages/ui/page-wrapper';
import type { MixPageProps } from '../lib/types/mix-page.interface';
import { MixPageBottom } from './mix-page-bottom';
import MixPageCenter from './mix-page-center';
import { MixPageLeft } from './mix-page-left';
import { MixPageRight } from './mix-page-right';

export const MixPage = ({
  mixes,
  moreEpisodes,
  description,
  mixNext,
  mixPrev,
  tracklist,
  totalCount,
}: MixPageProps) => {
  const project = mixes?.data[0].attributes;
  const guestAttributes = project?.guests?.data[0]?.attributes;
  const showAttributes = project?.show?.data?.attributes;

  const mixesGuestSlug = guestAttributes?.slug;
  const mixesGuestName = guestAttributes?.name;
  const guestSocials = guestAttributes?.socials;
  const guestsMixes = guestAttributes?.mixes?.data;

  const mixesShowSlug = showAttributes?.slug;
  const mixesShowName = showAttributes?.name;
  const showSocials = showAttributes?.socials;
  const showMixes = showAttributes?.mixes?.data;

  return (
    <PageWrapper
      isMix
      variant='mix'
      name={project?.name}
      left={
        <MixPageLeft
          mixesShowSlug={mixesShowSlug}
          description={description}
          mixesGuestName={mixesGuestName}
          mixesShowName={mixesShowName}
          showSocials={showSocials}
          mixesGuestSlug={mixesGuestSlug}
          guestSocials={guestSocials}
        />
      }
      center={
        <MixPageCenter mixes={mixes} mixPrev={mixPrev} mixNext={mixNext} />
      }
      right={project?.tracklist ? <MixPageRight tracklist={tracklist} /> : null}
      bottom={
        moreEpisodes && (
          <MixPageBottom
            totalCount={totalCount}
            showMixes={showMixes}
            moreEpisodes={moreEpisodes}
            mixesGuestName={mixesGuestName}
            mixesGuestSlug={mixesGuestSlug}
            guestsMixes={guestsMixes}
            mixesShowSlug={mixesShowSlug}
            genres={project?.genres}
            id={mixes?.data[0].id}
            mixesShowName={mixesShowName}
          />
        )
      }
    />
  );
};
