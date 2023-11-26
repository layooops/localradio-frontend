import type { Mix } from './Mix';

export interface Genre {
  id: number;
  attributes: {
    name: string;
    slug: string;
    mixes?: { data: Mix[] };
  };
}
