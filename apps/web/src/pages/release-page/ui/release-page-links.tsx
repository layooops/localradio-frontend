import { Link } from '@local-radio/ui';
import { releaseLinksAdditionalData } from '@/entities/release/lib/release-links-additional-data';
import { Release } from '@/shared/api/graphql/__generated__/schema.graphql';
import { formatLinksWithAdditionalInfo } from '@/shared/lib/helpers/format-links-with-additional-info';

interface ReleasePageLinksProps {
  releaseName?: Release['releaseName'];
  artistName?: Release['artistName'];
  links?: Release['links'];
}

export const ReleasePageLinks = ({
  releaseName,
  artistName,
  links,
}: ReleasePageLinksProps) => {
  const releaseTitle = artistName + ' - ' + releaseName;
  const releaseLinks = formatLinksWithAdditionalInfo({
    links,
    additionalData: releaseLinksAdditionalData,
  });
  return (
    <div className='flex md:pb-0'>
      <div className='relative w-full'>
        {links && (
          <ul className='flex flex-wrap  items-center gap-1 font-medium uppercase leading-none'>
            {releaseLinks?.map((link) => {
              return (
                <li key={link.type}>
                  <Link.Internal
                    aria-label={`Listen ${releaseTitle} On ${link.title}`}
                    title={`Listen ${releaseTitle} On ${link.title}`}
                    colorVariant='primary'
                    sizeVariant='standard'
                    style={{ color: link.color }}
                    className='bg-current hover:!bg-current lg:!bg-transparent'
                    href={link.href}
                  >
                    {link.icon}

                    <span className='whitespace-nowrap text-black'>
                      {link.title}
                    </span>
                  </Link.Internal>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
