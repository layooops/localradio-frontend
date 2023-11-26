import { Link } from '@local-radio/ui';
import { ReleaseEntity } from '@/shared/api/graphql/__generated__/schema.graphql';
import { formatLinksWithAdditionalInfo } from '@/shared/lib/helpers/format-links-with-additional-info';
import { setSeoAltText } from '@/shared/lib/helpers/set-seo-alt-text';
import { Card } from '@/shared/ui/card';
import { CardBaseNoIdProps } from '@/shared/ui/card/card.interface';
import { releaseLinksAdditionalData } from '../../lib/release-links-additional-data';

type ReleaseCardProps = CardBaseNoIdProps & ReleaseEntity;

export const ReleaseCard = (props: ReleaseCardProps) => {
  const { attributes, className } = props;
  const releaseTitle = attributes?.artistName + ' - ' + attributes?.releaseName;
  const altText = setSeoAltText({
    title: releaseTitle,
    date: attributes?.date,
  });

  const links = formatLinksWithAdditionalInfo({
    links: attributes?.links,
    additionalData: releaseLinksAdditionalData,
  });

  return (
    <Card
      cardDate={{ text: attributes?.type }}
      href={`/releases/${attributes?.slug}`}
      variant='release'
      date={attributes?.date}
      image={{
        src: attributes?.cover.data?.attributes?.url ?? '',
        alt: altText,
      }}
      sizeVariant='medium'
      headingText={[attributes?.artistName, attributes?.releaseName]}
      className={className}
      bottomInfo={
        attributes?.links && (
          <ul className='duration-400 absolute bottom-full flex w-fit  flex-wrap-reverse  items-center gap-1  px-0.5 py-1.5 leading-none transition-all ease-in-out group-hover:translate-x-0  sm:grid sm:-translate-x-full sm:p-1.5   md:opacity-0  md:group-hover:opacity-100 lg:gap-1.5'>
            {links?.map((link) => {
              return (
                <li key={link.type}>
                  <Link.Internal
                    aria-label={`Listen ${releaseTitle} On Spotify`}
                    title={`Listen ${releaseTitle} On Spotify`}
                    colorVariant='primary'
                    sizeVariant='small'
                    style={{ color: link.color }}
                    className='aspect-square bg-current hover:!bg-current'
                    href={link.href ?? ''}
                  >
                    {link.icon}
                  </Link.Internal>
                </li>
              );
            })}
          </ul>
        )
      }
    />
  );
};
