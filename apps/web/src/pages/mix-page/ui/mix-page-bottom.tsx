import type {
  GenreEntity,
  GenreRelationResponseCollection,
  Maybe,
  MixEntity,
} from '@/shared/api/graphql/__generated__/schema.graphql';
import type { SecondHeader } from '@/shared/ui/carl-list-header/second-header.interface';
import { CardSectionWithMemo } from '@/widgets/card-section/ui';
import type { MixPageProps } from '../lib/types/mix-page.interface';

interface MixPageBottomProps
  extends Pick<MixPageProps, 'totalCount' | 'moreEpisodes'> {
  showMixes?: MixEntity[];
  mixesShowName?: string;
  mixesGuestName?: string;
  mixesGuestSlug?: Maybe<string> | undefined;
  guestsMixes?: MixEntity[];
  mixesShowSlug?: Maybe<string> | undefined;
  genres: Maybe<GenreRelationResponseCollection> | undefined;
  id: Maybe<string> | undefined;
}

export const MixPageBottom = ({
  id,
  genres,
  mixesGuestSlug,
  mixesGuestName,
  guestsMixes,
  mixesShowName,
  showMixes,
  moreEpisodes,
  mixesShowSlug,
}: MixPageBottomProps) => {
  const secondHeaderSlug = () => {
    if (mixesShowName && showMixes && showMixes.length > 1)
      return mixesShowSlug;
    if (
      guestsMixes &&
      guestsMixes.length > 1 &&
      mixesGuestName &&
      !mixesShowName
    )
      return mixesGuestSlug;
  };

  const genresSlugs =
    (genres &&
      genres.data.length > 0 &&
      (genres.data as any).map(({ attributes }: GenreEntity) => {
        return attributes?.slug;
      })) ??
    '';

  const secondHeaderVariant = () => {
    if (mixesShowName && showMixes && showMixes.length > 1) return 'shows';
    if (
      guestsMixes &&
      guestsMixes.length > 1 &&
      mixesGuestName &&
      !mixesShowName
    )
      return 'residents';
    return 'genres';
  };

  const secondHeaderText = () => {
    if (mixesShowName && showMixes && showMixes.length > 1)
      return mixesShowName;
    if (
      guestsMixes &&
      guestsMixes.length > 1 &&
      mixesGuestName &&
      !mixesShowName
    )
      return mixesGuestName;
  };

  const secondHeader: SecondHeader = {
    slug: secondHeaderSlug(),
    variant: secondHeaderVariant(),
    text: secondHeaderText(),
    genres: genres?.data,
  };

  const filter = () => {
    if (mixesShowSlug)
      return {
        show: { slug: { eq: mixesShowSlug } },
        id: { ne: id },
      };
    if (
      guestsMixes &&
      guestsMixes.length > 1 &&
      mixesGuestSlug &&
      !mixesShowSlug
    )
      return {
        guests: { slug: { eq: mixesGuestSlug } },
        id: { ne: id },
      };
    if (genres)
      return {
        genres: {
          slug: {
            in: genresSlugs,
          },
        },
        id: { ne: id },
      };
  };

  const mixesFilter = filter();

  if (moreEpisodes?.length)
    return (
      <div className='border-t-2  border-black lg:border-t-0'>
        <CardSectionWithMemo
          pageVariant='other'
          variant='mixes'
          data={moreEpisodes}
          secondHeader={secondHeader}
          mixesFilter={mixesFilter}
        />
      </div>
    );
  return null;
};
