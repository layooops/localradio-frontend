import { HTMLAttributes } from 'react';
import type { Maybe } from 'yup';
import type {
  GenreEntity,
  GuestFiltersInput,
  MixFiltersInput,
  ReleaseFiltersInput,
} from '@/shared/api/graphql/__generated__/schema.graphql';
import type { EntityVariant } from '@/shared/lib/types/entity-variants.interface';

export interface SecondHeader {
  slug: Maybe<string>;
  text: Maybe<string>;
  variant: 'shows' | 'residents' | 'resident' | 'genres';
  genres?: Maybe<GenreEntity[]>;
}

export interface CardListProps {
  text?: string;
  data?: any;
  variant: EntityVariant;
  mixesFilter?: MixFiltersInput;
  releasesFilter?: ReleaseFiltersInput;
  residentsFilter?: GuestFiltersInput;
  totalCount?: number;
  search?: string | ReadonlyArray<string>;
  secondHeader?: SecondHeader;
  pageVariant: 'home' | 'other';
}

export type CardBaseProps = Omit<HTMLAttributes<HTMLDivElement>, 'id'>;
