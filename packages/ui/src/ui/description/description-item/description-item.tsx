import { TextWrapper } from '../..';
import { DescriptionItemProps } from './description-item.interface';

export const DescriptionItem = ({ html, sizeVariant = 'medium' }: DescriptionItemProps) => {
  return (
    <TextWrapper sizeVariant={sizeVariant}>
      {html && (
        <div
          className='flex flex-col gap-1.5 font-normal lg:gap-2 2xl:gap-2.5 [&>hr]:border-t-2 [&>hr]:border-black [&>ol>li>a]:font-medium [&>p>a]:font-semibold hover:[&>p>a]:text-secondary-dark [&>ul>li>a]:font-semibold'
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      )}
    </TextWrapper>
  );
};
