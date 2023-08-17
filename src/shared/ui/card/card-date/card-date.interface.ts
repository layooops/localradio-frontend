import type { EntityVariant } from '@/shared/lib/types/entity-variants.interface';
import type { SizeVariant } from '@/shared/lib/types/size-variant.interface';
import type { Maybe } from 'yup';

export interface CardDateProps {
  date?: string | Date;
  link?: Maybe<string>;
  text?: Maybe<string>;
  sizeVariant?: SizeVariant;
  variant?: EntityVariant | 'page';
}
