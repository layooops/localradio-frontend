import type { ReleasePageProps } from './release-page';

import { CardDate } from '@/shared/ui/card/card-date';
import { NextImage } from '@/shared/ui/next-image/next-image';

import { ReleasePageLinks } from './release-page-links';

export type ReleasePageCenterProps = Pick<ReleasePageProps, 'releases'>;

export const ReleasePageCenter = ({ releases }: ReleasePageCenterProps) => {
  const attributes = releases?.data[0].attributes;

  return (
    <div className='order-1 h-full border-black px-1.5 sm:px-3 lg:border-x-2'>
      <div className='flex flex-col sm:pt-3'>
        <div className='flex aspect-square  max-h-[80vh] border-l-2 border-black  2xl:max-h-full'>
          <div className='relative w-full min-w-max  border-y-2 border-r-2  border-black transition-all duration-300 hover:w-[1200%]'>
            {attributes?.cover.data?.attributes?.url && (
              <NextImage
                alt={attributes.artistName + '-' + attributes.releaseName}
                src={attributes.cover.data.attributes.url}
                fill
                style={{ objectFit: 'cover' }}
              />
            )}
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-1 py-2 text-[0.8rem] font-medium uppercase md:text-[0.85rem]'>
        <CardDate
          date={attributes?.date}
          text={attributes?.type}
          variant='page'
        />
      </div>
      <div className='pb-2'>
        <ReleasePageLinks
          artistName={attributes?.artistName}
          releaseName={attributes?.releaseName}
          links={attributes?.links}
        />
      </div>
    </div>
  );
};
