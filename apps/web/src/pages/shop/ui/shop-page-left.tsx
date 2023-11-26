import { DescriptionGroup } from '@local-radio/ui';

interface ShopPageLeftProps {
  description: string;
}

export const ShopPageLeft = ({ description }: ShopPageLeftProps) => {
  return (
    <div className='order-2 flex h-full flex-col   px-1.5 lg:px-0  lg:pt-0'>
      {description ? (
        <DescriptionGroup
          html={{
            descriptionRu: description,
          }}
        />
      ) : null}
    </div>
  );
};
