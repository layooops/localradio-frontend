import type { MixEntity } from '@/shared/api/graphql/__generated__/schema.graphql';
import type { SizeVariant } from '@/shared/lib/types/size-variant.interface';
import type { CardBaseNoIdProps } from '@/shared/ui/card/card.interface';

export interface MixCardProps extends MixEntity, CardBaseNoIdProps {
  sizeVariant: SizeVariant;
}
