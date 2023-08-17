import type { MixPageProps } from '../lib/types/mix-page.interface';
import type { ComponentLinksToSocialsLinksToSocials } from '@/shared/api/graphql/__generated__/schema.graphql';
import type { LinkProps } from 'next/link';
import type { Maybe } from 'yup';

import Link from 'next/link';

import { DescriptionGroup } from '@/shared/ui/description/description-group';
import { SocialsList } from '@/shared/ui/socials-list/socials-list';

interface MixPageLeftProps extends Pick<MixPageProps, 'description'> {
  mixesGuestSlug: Maybe<string> | undefined;
  mixesShowSlug: Maybe<string> | undefined;
  mixesShowName?: string;
  mixesGuestName?: string;
  guestSocials: Maybe<ComponentLinksToSocialsLinksToSocials> | undefined;
  showSocials: Maybe<ComponentLinksToSocialsLinksToSocials> | undefined;
}

interface MixDescriptionTopProps {
  href: LinkProps['href'];
  title?: string;
  socials: Maybe<ComponentLinksToSocialsLinksToSocials>;
  variant: 'show' | 'guest';
}

export const MixDescriptionTop = ({
  href,
  title,
  socials,
  variant,
}: MixDescriptionTopProps) => {
  return (
    <div className='flex justify-between overflow-hidden'>
      <div className='flex w-full flex-col justify-between border-black   pb-1.5  text-sm uppercase  leading-none md:text-[0.98rem] lg:border-b-2  lg:border-t-0 2xl:pb-2'>
        <div className='flex h-fit flex-wrap items-end justify-between gap-1 break-normal'>
          <div>
            <div className='flex justify-between text-[0.95rem] font-medium'>
              {variant === 'show' ? 'Show' : 'guest'}
            </div>
            <Link
              href={href}
              className='text-[1rem] font-semibold leading-none hover:text-secondary-dark'
            >
              {title}
            </Link>
          </div>
          {socials && (
            <SocialsList
              socials={{
                ...socials,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export const MixPageLeft = ({
  guestSocials,
  mixesGuestName,
  mixesGuestSlug,
  showSocials,
  mixesShowName,
  description,
  mixesShowSlug,
}: MixPageLeftProps) => {
  return (
    <div className='px-1.5 lg:px-0'>
      {(!description?.mix?.descriptionEn || !description.mix.descriptionRu) &&
      (description?.show?.descriptionRu ||
        description?.show?.descriptionEn ||
        description?.guest?.descriptionRu ||
        description?.guest?.descriptionEn) ? (
        <div className='order-2   flex h-full flex-col overflow-hidden break-words   lg:order-none  lg:pb-3 lg:pt-0'>
          {(description.show?.descriptionRu ||
            description.show?.descriptionEn) && (
            <DescriptionGroup
              top={
                <MixDescriptionTop
                  variant='show'
                  socials={showSocials}
                  title={mixesShowName}
                  href={`/archive/shows/${mixesShowSlug}`}
                />
              }
              html={{
                descriptionRu: description.show.descriptionRu,
                descriptionEn: description.show.descriptionEn,
              }}
            />
          )}
          {(description.guest?.descriptionRu ||
            description.guest?.descriptionEn) &&
            (!description.show?.descriptionEn ||
              !description.show.descriptionRu) && (
              <DescriptionGroup
                top={
                  <MixDescriptionTop
                    variant='guest'
                    socials={guestSocials}
                    title={mixesGuestName}
                    href={`/archive/residents/${mixesGuestSlug}`}
                  />
                }
                html={{
                  descriptionRu: description.guest.descriptionRu,
                  descriptionEn: description.guest.descriptionEn,
                }}
              />
            )}
        </div>
      ) : null}
      {(description?.mix?.descriptionEn || description?.mix?.descriptionRu) && (
        <DescriptionGroup
          html={{
            descriptionRu: description.mix.descriptionRu,
            descriptionEn: description.mix.descriptionEn,
          }}
          top={
            mixesShowName || mixesGuestName ? (
              <MixDescriptionTop
                variant='show'
                socials={guestSocials}
                title={mixesShowName ?? mixesGuestName}
                href={`/archive/${
                  mixesShowName ? 'shows' : 'residents'
                }/${mixesGuestSlug}`}
              />
            ) : undefined
          }
        />
      )}
    </div>
  );
};
