import { SizeVariant } from '@/lib/types';

export interface DescriptionItemProps {
  html?: string | null;
  sizeVariant: Extract<SizeVariant, 'medium' | 'large'>;
}
