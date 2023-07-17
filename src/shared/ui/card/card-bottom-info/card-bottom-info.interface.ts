import { GenreRelationResponseCollection } from '@/shared/api/graphql/__generated__/schema.graphql';
import { EntityVariant } from '@/shared/lib/types/entity-variants.interface';
import { SizeVariant } from '@/shared/lib/types/size-variant.interface';
import { PropsWithChildren, ReactNode } from 'react';
import { Maybe } from 'yup';

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
