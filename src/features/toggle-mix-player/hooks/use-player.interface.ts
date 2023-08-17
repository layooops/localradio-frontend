import type { PlayerButtonProps } from '../types/sc-toggle.interface';
import type { Maybe } from 'yup';

export interface UsePlayerProps
  extends Pick<PlayerButtonProps, 'mixId' | 'mixLink'> {
  slug: Maybe<string>;
}
