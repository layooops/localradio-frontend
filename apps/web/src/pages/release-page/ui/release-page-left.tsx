import { DescriptionGroup } from '@local-radio/ui';
import type { ReleasePageProps } from './release-page';

export const ReleasePageLeft = ({
  description,
}: Pick<ReleasePageProps, 'description'>) => {
  return (
    <div className='order-2 flex h-full flex-col   px-1.5 lg:px-0  lg:pt-0'>
      {description?.descriptionRu || description?.descriptionEn ? (
        <DescriptionGroup
          html={{
            descriptionRu: description.descriptionRu,
            descriptionEn: description.descriptionEn,
          }}
        />
      ) : null}
    </div>
  );
};
