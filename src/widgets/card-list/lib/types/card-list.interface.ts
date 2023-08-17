import type {
  GuestFiltersInput,
  MixFiltersInput,
  ReleaseFiltersInput,
} from '@/shared/api/graphql/__generated__/schema.graphql';
import type { EntityVariant } from '@/shared/lib/types/entity-variants.interface';
import type { SecondHeader } from '@/shared/ui/carl-list-header/second-header.interface';

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
