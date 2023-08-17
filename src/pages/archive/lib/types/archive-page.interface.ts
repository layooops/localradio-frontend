import type {
  EventEntity,
  GuestEntity,
  GuestFiltersInput,
  MixEntity,
  MixFiltersInput,
  ReleaseEntity,
  ReleaseFiltersInput,
  ShopCategoryEntity,
  ShopItemEntity,
  ShowEntity,
} from '@/shared/api/graphql/__generated__/schema.graphql';
import type { EntityVariant } from '@/shared/lib/types/entity-variants.interface';

type ArchiveData =
  | EventEntity[]
  | MixEntity[]
  | ShopItemEntity[]
  | ReleaseEntity[]
  | GuestEntity[]
  | ShowEntity[]
  | null;

export interface ArchivePageProps extends React.PropsWithChildren {
  secondHeaderText?: string;
  shopSubCategories?: ShopCategoryEntity[];
  archiveItemSecondHeaderText?: string;
  data?: ArchiveData;
  dataText?: string;
  totalCount?: number;
  mixesFilter?: MixFiltersInput;
  residentsFilter?: GuestFiltersInput;
  releasesFilter?: ReleaseFiltersInput;
  variant: EntityVariant;
}
