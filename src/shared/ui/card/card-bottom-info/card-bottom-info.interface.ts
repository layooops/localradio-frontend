import type { EntityVariant } from '@/shared/lib/types/entity-variants.interface';
import type { SizeVariant } from '@/shared/lib/types/size-variant.interface';
import type { PropsWithChildren, ReactNode } from 'react';
import type { Maybe } from 'yup';

export interface CardBottomInfoProps extends PropsWithChildren {
  sizeVariant?: SizeVariant;
  variant?: EntityVariant;
  genresNode?: ReactNode;
  hasBorder?: boolean;
  headingText?: string | Maybe<string | undefined>[];
  href: string;
  date: string | Date;
  cardDate?: {
    link?: Maybe<string>;
    text?: Maybe<string>;
  };
}
