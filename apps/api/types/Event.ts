import type { Media } from './Media';
import type { Mix } from './Mix';

export interface Event {
  id: number;
  attributes: {
    name: string;
    slug?: string;
    image: { data: Media };
    eventInfo: Event;
    mixes: { data: Mix[] };
  };
}
