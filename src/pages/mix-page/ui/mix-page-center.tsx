import type { MixPageProps } from '../lib/types/mix-page.interface';
import type { Maybe } from 'graphql/jsutils/Maybe';

import { useEffect, useState } from 'react';

import { CardDate } from '@/shared/ui/card/card-date';
import { GenreListWithMemo } from '@/shared/ui/genres/genre-list/genre-list';

import { MixNavigation } from './navigation/mix-navigation';

type MixPageCenterProps = Pick<MixPageProps, 'mixes' | 'mixPrev' | 'mixNext'>;

const MixPageCenter = ({ mixes, mixNext, mixPrev }: MixPageCenterProps) => {
  const mix = mixes?.data[0];
  const mixAttributes = mix?.attributes;
  const [SCAudioLink, setSCAudioLink] = useState<Maybe<string>>(null);
  const [youtubeVideoLink, setYoutubeVideoLink] = useState<Maybe<string>>(null);

  useEffect(() => {
    setSCAudioLink(mixAttributes?.linksToMixes?.soundcloudLink);
    setYoutubeVideoLink(mixAttributes?.linksToMixes?.youtubeLink);
  }, [
    mixAttributes?.linksToMixes?.soundcloudLink,
    mixAttributes?.linksToMixes?.youtubeLink,
  ]);

  return (
    <div className='h-full border-black px-1.5 lg:border-x-2 lg:border-t-0 lg:px-2 xl:px-3.5'>
      <MixNavigation
        mix={mix}
        links={{ youtube: youtubeVideoLink, soundcloud: SCAudioLink }}
        siblingsSlug={{
          next: mixNext && mixNext[0]?.attributes?.slug,
          prev: mixPrev && mixPrev[0]?.attributes?.slug,
        }}
      />

      <div className='flex flex-col gap-1.5 py-2 text-[0.8rem] font-medium uppercase md:text-[0.85rem]'>
        <CardDate
          date={mixAttributes?.date}
          link={mixAttributes?.locationLink}
          text={mixAttributes?.locationName}
          variant='page'
        />
        <GenreListWithMemo
          colorVariant='primary'
          variant='solid'
          genres={mixAttributes?.genres?.data}
          sizeVariant='standard'
        />
      </div>
    </div>
  );
};
export default MixPageCenter;
