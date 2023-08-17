import type { MixPageProps } from '..';

import { TextWrapper } from '@/shared/ui/text-wrapper/text-wrapper';

export const MixPageRight = ({
  tracklist,
}: Pick<MixPageProps, 'tracklist'>) => {
  return (
    <div className='sticky top-[calc(0.375rem)]  border-y-0 border-black lg:border-t-0 lg:px-2 2xl:px-3.5'>
      <div>
        <div className='flex flex-col justify-between border-black    pt-1.5 text-sm  uppercase leading-none  md:text-[0.98rem]   lg:border-t-0 2xl:pt-2'>
          <div className='flex justify-between text-[0.95rem]  font-medium   '>
            Tracklist
          </div>
        </div>
        <div className='py-1.5  pb-2 2xl:py-3'>
          <TextWrapper sizeVariant='small'>
            {tracklist && (
              <div
                className='flex flex-col  gap-2 font-normal lg:gap-2 2xl:gap-3 [&>hr]:border-t-2 [&>hr]:border-black [&>ol>li>a]:font-medium [&>ul>li>a]:font-medium'
                dangerouslySetInnerHTML={{ __html: tracklist }}
              />
            )}
          </TextWrapper>
        </div>
      </div>
    </div>
  );
};
