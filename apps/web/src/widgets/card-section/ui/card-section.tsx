import Link from 'next/link';
import { memo } from 'react';
import { Heading } from '@/shared/ui/headings/heading';
import type { CardListProps } from '@/widgets/card-list/lib/types/card-list.interface';
import { HomeCardList } from '@/widgets/card-list/ui/home-card-list';
import { OtherCardList } from '@/widgets/card-list/ui/other-card-list';
import { CardListHeader } from '@/shared/ui/carl-list-header';

const CardSection = (props: CardListProps) => {
  const { text, data, variant, secondHeader, pageVariant } = props;

  const hasData = Boolean(data?.length); // TODO: Поменять имя для data

  return (
    <section className='flex w-full flex-col gap-3 pb-2 font-semibold 2xl:pb-[1rem]'>
      <div>
        {hasData ? (
          <div>
            {pageVariant === 'other' && (
              <div className='flex flex-col text-[1.85rem] uppercase leading-none sm:text-[2.3rem] lg:text-[3rem]'>
                <CardListHeader
                  sizeVariant='small'
                  secondHeader={secondHeader}
                  text={text}
                />
              </div>
            )}
            {pageVariant === 'home' && (
              <div className='pb-1 lg:pb-1.5 '>
                <div className='w-fit bg-black  text-primary hover:text-secondary-dark'>
                  <Link href={`/${variant === 'mixes' ? 'archive' : variant}`}>
                    <Heading<'h2'>
                      as='h2'
                      sizeVariant='small'
                      className='leading-[1.2]'
                    >
                      /{text}/
                    </Heading>
                  </Link>
                </div>
              </div>
            )}
            {pageVariant === 'other' && <OtherCardList {...props} />}
            {pageVariant === 'home' && (
              <HomeCardList cardListItems={data} variant={variant} />
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
};

export const CardSectionWithMemo = memo(CardSection);
