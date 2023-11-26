import { Maybe, SizeVariant } from '@/lib/types';

export interface DescriptionGroupProps {
  html: {
    descriptionRu?: Maybe<string>;
    descriptionEn?: Maybe<string>;
    description?: Maybe<string>;
  };
  sizeVariant?: Extract<SizeVariant, 'large' | 'medium'>;
  bottom?: Maybe<JSX.Element>;
  top?: Maybe<JSX.Element>;
  className?: string;
}
