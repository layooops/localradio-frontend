import { SizeVariant } from '@local-radio/ui';
import type { Maybe } from 'yup';

export interface MixButtonProps {
  sizeVariant: SizeVariant;
  slug: Maybe<string>;
  mixLink?: string;
  id?: string | null;
}

export interface MixCardButtonProps {
  ariaLabel?: string;
  onClick: () => void;
  sizeVariant: SizeVariant;
  variant: 'youtube' | 'soundcloud';
  active: boolean;
}

export interface MixCardButtonIconProps
  extends Pick<MixCardButtonProps, 'variant'> {
  className?: string;
  isActive: boolean;
}
