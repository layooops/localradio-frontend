import type { LinkProps } from 'next/link';
import type { Maybe } from 'yup';

type SocialMediaType =
  | 'appleMusic'
  | 'bandcamp'
  | 'soundcloud'
  | 'spotify'
  | 'vkMusic'
  | 'yandexMusic'
  | 'youtubeMusic'
  | 'BCLink'
  | 'IGLink'
  | 'SCLink'
  | 'TGLink'
  | 'VKLink';

type Links = Record<SocialMediaType, Maybe<string> | undefined>;

interface LinksWithColors {
  color?: string | undefined;
  icon?: JSX.Element | undefined;
  title?: string | undefined;
  type: SocialMediaType;
  href: LinkProps['href'];
}

interface FormatLinksWithColorsProps {
  links?: Partial<Maybe<Links>>;
  additionalData: any;
}

export const formatLinksWithAdditionalInfo = ({
  additionalData,
  links,
}: FormatLinksWithColorsProps) => {
  const linksArray =
    links &&
    Object.entries(links).filter(
      (link) => link[1]?.startsWith('https' || 'http'),
    );

  const linksWithColors = linksArray?.map((link) => {
    const type = link[0] as SocialMediaType;
    return {
      type,
      href: link[1],
      ...additionalData[type],
    };
  });

  return linksWithColors as LinksWithColors[] | undefined;
};
