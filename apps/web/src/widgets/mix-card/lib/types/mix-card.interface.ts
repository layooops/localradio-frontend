import { SizeVariant } from '@local-radio/ui';
import type { MixEntity } from '@/shared/api/graphql/__generated__/schema.graphql';
import type { CardBaseNoIdProps } from '@/shared/ui/card/card.interface';

export interface MixCardProps extends MixEntity, CardBaseNoIdProps {
  sizeVariant: SizeVariant;
}
