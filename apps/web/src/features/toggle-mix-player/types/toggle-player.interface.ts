import type { Maybe } from 'yup';

export interface TogglePlayerLinks {
  soundcloud?: Maybe<string>;
  youtube?: Maybe<string>;
}

export type CurrentMixPlayer = 'video' | 'audio';
