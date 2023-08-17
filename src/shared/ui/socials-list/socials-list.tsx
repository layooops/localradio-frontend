import type { ComponentLinksToSocialsLinksToSocials } from '@/shared/api/graphql/__generated__/schema.graphql';

import { formatLinksWithAdditionalInfo } from '@/shared/lib/helpers/format-links-with-additional-info';
import { socialsAdditionalData } from '@/shared/ui/socials-list/links-additional-data';

import { Button } from '../button/button';

interface SocialsLinksListProps {
  socials: ComponentLinksToSocialsLinksToSocials;
}

export const SocialsList = ({ socials }: SocialsLinksListProps) => {
  const links = formatLinksWithAdditionalInfo({
    links: socials,
    additionalData: socialsAdditionalData,
  });

  return (
    <ul className='flex items-center gap-2'>
      {links?.map(
        (link) =>
          link.icon && (
            <li key={link.type}>
              <Button
                colorVariant='primary'
                variant='clear'
                className='p-0 hover:fill-primary '
                sizeVariant='extra-small'
                href={link.href}
              >
                {link.icon}
              </Button>
            </li>
          ),
      )}
    </ul>
  );
};
