import type { SecondHeader } from './second-header.interface';
import type { SizeVariant } from '@/shared/lib/types/size-variant.interface';

import { CardListHeaderWrapper } from './card-list-header-wrapper';
import { CardListInnerLink } from './card-list-inner-link';

interface CardListHeaderProps {
  secondHeader?: SecondHeader;
  text?: string;
  sizeVariant: SizeVariant;
}

interface VariantInfo {
  episodesText: string;
  link: string;
}

const getVariantInfo = (
  variant: SecondHeader['variant'],
  slug?: string | null,
): VariantInfo => {
  let episodesText = '';
  let link = '/archive/';

  if (variant === 'resident') {
    episodesText = 'Episodes by ';
    link += 'residents/';
  } else if (variant === 'shows') {
    episodesText = 'Episodes from ';
  } else if (variant === 'residents' || variant === 'genres') {
    episodesText = 'Episodes w/ ';
  }

  if (slug) {
    link += variant === 'genres' ? 'genres/' : variant + '/';
    link += slug;
  }

  return { episodesText, link };
};

export const CardListHeader = ({
  secondHeader,
  text,
  sizeVariant,
}: CardListHeaderProps) => {
  if (secondHeader) {
    const { variant, slug } = secondHeader;
    const { episodesText, link } = getVariantInfo(variant, slug);

    return (
      <CardListHeaderWrapper
        as='h2'
        className='gap-1.5 lg:gap-x-2'
        sizeVariant={sizeVariant}
      >
        {episodesText}
        {variant === 'genres' && (
          <div className='flex flex-wrap gap-x-1.5 lg:gap-x-2'>
            {secondHeader.genres?.map(
              ({ attributes }) =>
                attributes?.slug && (
                  <CardListInnerLink
                    key={attributes.slug}
                    href={'/archive/genres/' + attributes.slug}
                  >
                    {attributes.name}
                  </CardListInnerLink>
                ),
            )}
          </div>
        )}
        {variant !== 'genres' && (
          <CardListInnerLink href={link}>{secondHeader.text}</CardListInnerLink>
        )}
      </CardListHeaderWrapper>
    );
  }
  if (text)
    return (
      <CardListHeaderWrapper sizeVariant={sizeVariant} as='h3'>
        {text}
      </CardListHeaderWrapper>
    );
  return null;
};
