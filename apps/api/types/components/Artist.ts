import type { Guest } from '../Guest';
import type { Show } from '../Show';

export interface Artist {
  id: number;
  title?: string;
  link?: string;
  guest?: { data: Guest };
  show?: { data: Show };
  description?: string;
}
