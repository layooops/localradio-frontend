import { useState } from 'react';

import { Locales } from '@/lib/types';

import clsx from 'clsx';
import { LanguageButtonGroup } from '../..';
import { DescriptionItem } from '../description-item/description-item';
import { DescriptionGroupProps } from './description-group.interface';

export const DescriptionGroup = ({
  html,
  top,
  bottom,
  className,
  sizeVariant = 'medium',
}: DescriptionGroupProps) => {
  const [activeLang, setActiveLang] = useState<Locales>('ru');

  return (
    <div
      className={clsx(
        'w-full md:pr-1.5 lg:pr-2.5 xl:pr-3.5',
        {
          'md:pl-1.5 lg:pl-2 xl:pl-3.5': sizeVariant === 'large',
        },
        className,
      )}
    >
      {sizeVariant === 'large' && top}
      <div
        className={clsx(
          'gap-1.5 border-black py-1.5 md:gap-2.5 lg:border-t-0 xl:gap-3 ',
          { 'flex flex-col xl:py-2': sizeVariant === 'large' },
          {
            'flex flex-col justify-between border-t-2 lg:flex-row lg:py-2.5 2xl:py-3':
              sizeVariant !== 'large',
          },
        )}
      >
        {html.descriptionRu || html.descriptionEn ? (
          <LanguageButtonGroup
            sizeVariant={sizeVariant}
            setActiveLang={setActiveLang}
            activeLang={activeLang}
            langDisabled={{ en: !html.descriptionEn, ru: !html.descriptionRu }}
          />
        ) : null}

        <div className='flex w-full flex-col lg:gap-2'>
          {sizeVariant === 'medium' && top}
          {activeLang === 'ru' && (
            <DescriptionItem sizeVariant={sizeVariant} html={html.descriptionRu} />
          )}
          {activeLang === 'en' && (
            <DescriptionItem sizeVariant={sizeVariant} html={html.descriptionEn} />
          )}
          {sizeVariant === 'medium' && bottom}
        </div>
      </div>
    </div>
  );
};
