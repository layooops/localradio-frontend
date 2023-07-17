import { LinkProps } from 'next/link';
import {
  releaseLinksAdditionalData,
  socialsAdditionalData,
} from '@/entities/release/ui/release-card/release-links-additional-data';

import { Maybe } from 'yup';

type AdditionalData =
  | 'BCLink'
  | 'IGLink'
  | 'SCLink'
  | 'TGLink'
  | 'VKLink'
  | 'appleMusic'
  | 'bandcamp'
  | 'soundcloud'
  | 'spotify'
  | 'vkMusic'
  | 'yandexMusic'
  | 'youtubeMusic';
type Links = Record<AdditionalData, Maybe<string>>;

interface LinksWithColors {
  color?: string | undefined;
  icon?: JSX.Element | undefined;
  title?: string | undefined;
  type: AdditionalData;
  href: LinkProps['href'];
}

interface FormatLinksWithColorsProps {
  variant: 'release' | 'socials';
  links?: Links | null;
}

export const formatLinksWithAdditionalInfo = ({
  variant,
  links,
}: FormatLinksWithColorsProps) => {
  const linksArray =
    links &&
    Object.entries(links).filter((link) =>
      link[1]?.startsWith('https' || 'http')
    );

  const additionalData: any =
    variant === 'socials' ? socialsAdditionalData : releaseLinksAdditionalData;

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
