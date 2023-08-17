import type { Description } from '@/shared/lib/types/description.interface';

import Link from 'next/link';

import { DescriptionGroup } from '@/shared/ui/description/description-group';
import { SecondHeader } from '@/shared/ui/headings/second-header';
import { TextWrapper } from '@/shared/ui/text-wrapper/text-wrapper';

import { localRadioTeamLinks } from '../lib/local-radio-team-links';

export interface AboutPageProps {
  description: Description | null;
}

export const AboutPage = ({ description }: AboutPageProps) => {
  return (
    <main className='relative flex w-full flex-1 lg:pt-0'>
      <div className='flex flex-1 flex-col'>
        <SecondHeader as='h1' text='Local Radio' />
        <section className='mb-2 grid   flex-1 gap-5  lg:grid-cols-2'>
          <div className='flex flex-col justify-between gap-5'>
            <div className=' flex flex-col gap-3 2xl:gap-5'>
              <DescriptionGroup
                className='px-1.5 lg:px-2 xl:px-3.5'
                sizeVariant='large'
                html={{
                  descriptionRu: description?.descriptionRu,
                  descriptionEn: description?.descriptionEn,
                }}
                top={
                  <div className='pb-0.5 text-xl font-semibold uppercase leading-none md:text-2xl  xl:text-3xl'>
                    About
                  </div>
                }
              />

              <TextWrapper sizeVariant='large'>
                <div className='flex w-fit flex-col justify-between px-1.5 lg:px-2 xl:px-3.5'>
                  <div className='pb-0.5 text-xl font-semibold uppercase leading-none sm:pb-1 md:text-2xl xl:pb-2 xl:text-3xl'>
                    Our team
                  </div>
                  {localRadioTeamLinks.map(({ text, href }) => (
                    <Link
                      key={text}
                      className='w-fit  font-semibold transition-colors hover:text-secondary-dark'
                      href={href ?? '#'}
                    >
                      {text}
                    </Link>
                  ))}
                </div>
              </TextWrapper>
              <TextWrapper sizeVariant='large'>
                <div className='flex w-fit flex-col justify-between px-1.5 lg:px-2 xl:px-3.5'>
                  <div className='pb-0.5 text-xl font-semibold uppercase leading-none sm:pb-1 md:text-2xl xl:pb-2 xl:text-3xl'>
                    Contact
                  </div>

                  <div className='flex flex-wrap'>
                    Partnership and feedback:&nbsp;
                    <Link
                      className='w-fit font-semibold transition-colors hover:text-secondary-dark'
                      href='mailto:info@radiolocal.online'
                    >
                      info@radiolocal.online
                    </Link>
                  </div>
                  <div className='flex flex-wrap'>
                    Location:&nbsp;
                    <span className=' font-semibold'>
                      Pyatnitskogo, 52, Voronezh, Voronezh Oblast, 394036
                    </span>
                  </div>
                </div>
              </TextWrapper>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
