import { LinkProps } from 'next/link';

import { Maybe } from 'yup';

type AdditionalData =
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

type Links = Record<AdditionalData, Maybe<string> | undefined>;

interface LinksWithColors {
  color?: string | undefined;
  icon?: JSX.Element | undefined;
  title?: string | undefined;
  type: AdditionalData;
  href: LinkProps['href'];
}

interface FormatLinksWithColorsProps {
  links?: Maybe<Links>;
  additionalData: any;
}

export const formatLinksWithAdditionalInfo = ({
  additionalData,
  links,
}: FormatLinksWithColorsProps) => {
  const linksArray =
    links &&
    Object.entries(links).filter((link) =>
      link[1]?.startsWith('https' || 'http')
    );

  const linksWithColors = linksArray?.map((link) => {
    const type = link[0] as AdditionalData;
    return {
      type,
      href: link[1],
      ...additionalData[type],
    };
  });

  return linksWithColors as LinksWithColors[] | undefined;
};
