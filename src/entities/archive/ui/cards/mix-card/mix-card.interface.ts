import { CardBaseProps } from '@/entities/archive/lib/card-list.interface';
import { MixEntity } from '@/shared/api/graphql/__generated__/schema.graphql';
import { SizeVariant } from '@/shared/lib/types/size-variant.interface';

export interface MixCardProps extends MixEntity, CardBaseProps {
  sizeVariant: SizeVariant;
}
