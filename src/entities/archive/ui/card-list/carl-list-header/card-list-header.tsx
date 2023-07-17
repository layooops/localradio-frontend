import { SecondHeader } from '@/entities/archive/lib/card-list.interface';
import type { SizeVariant } from '@/shared/lib/types/size-variant.interface';
import { CardListHeaderWrapper } from './card-list-header-wrapper';
import { CardListInnerLink } from './card-list-inner-link';

interface CardListHeaderProps {
  secondHeader?: SecondHeader;
  text?: string;
  sizeVariant: SizeVariant;
}

interface DD {
  variant: SecondHeader['variant'];
  slug?: string | null;
}

const getLinkAndText = ({ variant, slug }: DD) => {
  let episodesText = 'Episodes ';
  let link = '/archive/' + variant + '/' + slug;
  if (variant === 'resident') {
    episodesText = 'Episodes by ';
    link = '/archive/residents/' + slug;
  }
  if (variant === 'shows') episodesText = 'Episodes from ';
  if (variant === 'residents' || variant === 'genres')
    episodesText = 'Episodes w/ ';

  return { link, episodesText };
};

export const CardListHeader = ({
  secondHeader,
  text,
  sizeVariant,
}: CardListHeaderProps) => {
  if (secondHeader) {
    const { variant, slug } = secondHeader;

    const { episodesText, link } = getLinkAndText({
      variant,
      slug,
    });

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
                )
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
