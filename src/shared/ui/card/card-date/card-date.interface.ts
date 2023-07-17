import { Maybe } from 'yup';
import { EntityVariant } from '@/shared/lib/types/entity-variants.interface';
import { SizeVariant } from '@/shared/lib/types/size-variant.interface';

export interface CardDateProps {
  date?: string | Date;
  link?: Maybe<string>;
  text?: Maybe<string>;
  sizeVariant?: SizeVariant;
  variant?: EntityVariant | 'page';
}
