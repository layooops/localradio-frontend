import { Link } from '@local-radio/ui';
import { ComponentLinksToSocialsLinksToSocials } from '@/shared/api/graphql/__generated__/schema.graphql';
import { formatLinksWithAdditionalInfo } from '@/shared/lib/helpers/format-links-with-additional-info';
import { socialsAdditionalData } from '@/shared/ui/socials-list/links-additional-data';

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
              <Link.Internal
                colorVariant='primary'
                shadowVariant='clear'
                className='p-0 hover:fill-primary '
                sizeVariant='extra-small'
                href={link.href}
              >
                {link.icon}
              </Link.Internal>
            </li>
          ),
      )}
    </ul>
  );
};
