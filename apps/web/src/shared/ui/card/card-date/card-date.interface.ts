import { SizeVariant } from '@local-radio/ui';
import type { Maybe } from 'yup';
import type { EntityVariant } from '@/shared/lib/types/entity-variants.interface';

export interface CardDateProps {
  date?: string | Date;
  link?: Maybe<string>;
  text?: Maybe<string>;
  sizeVariant?: SizeVariant;
  variant?: EntityVariant | 'page';
}
