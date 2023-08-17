import type { ReleaseEntityResponseCollection } from '@/shared/api/graphql/__generated__/schema.graphql';
import type { Description } from '@/shared/lib/types/description.interface';

import { PageWrapper } from '../../ui/page-wrapper';
import ReleasePageBottom from './release-page-bottom';
import { ReleasePageCenter } from './release-page-center';
import { ReleasePageLeft } from './release-page-left';

export interface ReleasePageProps {
  releases?: Omit<ReleaseEntityResponseCollection, 'meta'> | null;
  description?: Description | null;
}

export const ReleasePage = ({ releases, description }: ReleasePageProps) => {
  const attributes = releases?.data[0].attributes;
  const name = [attributes?.artistName, attributes?.releaseName];

  return (
    <PageWrapper
      variant='release'
      name={name}
      left={<ReleasePageLeft description={description} />}
      center={<ReleasePageCenter releases={releases} />}
      bottom={
        <ReleasePageBottom
          mixesGuestName={attributes?.guest?.data?.attributes?.name}
          mixesGuestSlug={attributes?.guest?.data?.attributes?.slug}
          moreEpisodes={attributes?.guest?.data?.attributes?.mixes?.data}
        />
      }
    />
  );
};
