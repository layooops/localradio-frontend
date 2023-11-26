import type { LinkComponent } from './components/LinkComponent';
import type { Mix } from './Mix';

export interface YoutubeLink {
  id: number;
  attributes: {
    link: LinkComponent[];
    mixes: { data: Mix[] };
  };
}
