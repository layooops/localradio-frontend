import { SizeVariant } from '@local-radio/ui';
import type { Maybe } from 'yup';
import type { GenreEntity } from '@/shared/api/graphql/__generated__/schema.graphql';

export type GenreColorVariant = 'primary' | 'transparent';
export type GenreVariant = 'solid' | 'borderless';

type GenreSize = Extract<SizeVariant, 'standard' | 'large' | 'small'>;

interface GenreBase {
  sizeVariant: GenreSize;
  colorVariant: GenreColorVariant;
  variant: GenreVariant;
}

export interface GenreButtonProps extends GenreBase {
  type: 'genre' | 'shopItemSize';
  title?: Maybe<string>;
  slug?: string;
  className?: string;
  isActive?: boolean;
}

export interface GenreListProps extends GenreBase {
  genres?: GenreEntity[] | null;
}
