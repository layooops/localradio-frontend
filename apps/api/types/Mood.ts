import type { Mix } from './Mix';

export interface Mood {
  id: number;
  attributes: {
    name?: string;
    slug?: string;
    description?: string;
    mixes?: { data: Mix[] };
  };
}
