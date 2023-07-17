import type { Maybe } from 'yup';
import { clsxm } from '@/shared/lib/helpers/clsxm';
import { ArchiveNavBar } from '@/widgets/navigation/archive/ui/archive-nav-bar';
import { Heading } from '../../shared/ui/headings/heading';

interface PageWrapperProps {
  name?: string | (Maybe<string> | undefined)[];
  left?: Maybe<JSX.Element>;
  center: Maybe<JSX.Element>;
  right?: Maybe<JSX.Element>;
  bottom?: Maybe<JSX.Element>;
  isMix?: boolean;
  variant: 'release' | 'mix' | 'shop' | 'event';
}

export const PageWrapper = ({
  name,
  left,
  center,
  right,
  variant,
  bottom,
}: PageWrapperProps) => {
  return (
    <main className='relative  w-full xl:pb-6'>
      {variant === 'mix' && <ArchiveNavBar />}
      <div className='flex flex-col pt-1.5 lg:pt-1'>
        <div className=' relative mx-1.5 flex flex-col py-1.5 sm:mx-3 sm:py-2 md:mx-3 lg:mx-5 lg:items-center lg:py-4 2xl:py-6'>
          {variant === 'release' && (
            <Heading
              variant='page'
              as='h1'
              className='flex w-full flex-col break-all lg:items-center'
            >
              {Array.isArray(name) &&
                name.map((word) => <span key={word}>{word}</span>)}
            </Heading>
          )}
          {(variant === 'mix' || variant === 'shop' || variant === 'event') && (
            <Heading variant='page' as='h1'>
              {name}
            </Heading>
          )}
        </div>
        <section className='flex flex-col leading-none lg:grid lg:grid-cols-[1fr,1.7fr,1fr] 2xl:grid-cols-[1fr,1.5fr,1fr]'>
          <div className='order-2 border-black  lg:order-none lg:border-b-2'>
            <div
              className={clsxm('sticky border-black lg:border-t-2', {
                'top-[calc(+calc(var(--nav-height)*2))] md:top-[calc(+var(--nav-height))]':
                  variant === 'mix',
              })}
            >
              {left}
            </div>
          </div>
          <div className='order-1 h-full border-black lg:order-none lg:border-y-2'>
            {center}
          </div>
          <div className='order-3 border-black px-1.5   lg:border-b-2 lg:px-0'>
            <div
              className={clsxm('sticky border-black lg:border-t-2', {
                'top-[calc(+calc(var(--nav-height)*2))] md:top-[calc(+var(--nav-height))]':
                  variant === 'mix',
              })}
            >
              {right}
            </div>
          </div>
        </section>
        {bottom}
      </div>
    </main>
  );
};
