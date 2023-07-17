import { Maybe } from 'yup';
import { ComponentLinksToMixesLink } from '@/shared/api/graphql/__generated__/schema.graphql';
import { clsxm } from '@/shared/lib/clsxm';
import { MixCardProps } from '../mix-card.interface';
import { MixSCButton } from './mix-sc-button';
import { MixYoutubeButton } from './mix-youtube-button';

interface MixCardButtonsProps extends Pick<MixCardProps, 'sizeVariant' | 'id'> {
  slug: Maybe<string>;
  linksToMixes: Maybe<ComponentLinksToMixesLink>;
}

export const MixCardButtons = ({
  id,
  slug,
  sizeVariant,
  linksToMixes,
}: MixCardButtonsProps) => {
  const soundcloudLink = linksToMixes?.soundcloudLink;
  const youtubeLink = linksToMixes?.youtubeLink;

  if (youtubeLink || soundcloudLink) {
    return (
      <div
        className={clsxm('flex', {
          'gap-1 self-end p-1 lg:gap-1.5': sizeVariant === 'standard',
          'absolute inset-0 flex-col': sizeVariant === 'small',
        })}
      >
        {sizeVariant === 'standard' && youtubeLink && (
          <MixYoutubeButton
            slug={slug}
            mixLink={youtubeLink}
            sizeVariant={sizeVariant}
          />
        )}
        {soundcloudLink && (
          <MixSCButton
            id={id}
            slug={slug}
            mixLink={soundcloudLink}
            sizeVariant={sizeVariant}
          />
        )}
      </div>
    );
  }

  return null;
};
