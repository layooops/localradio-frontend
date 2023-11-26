import type { LinksToSocials } from './components/LinksToSocials';
import type { Media } from './Media';
import type { Mix } from './Mix';

export interface Guest {
  id: number;
  attributes: {
    name: string;
    slug?: string;
    image?: { data: Media };
    mixes?: { data: Mix[] };
    socials?: LinksToSocials;
    descriptionRu?: string;
    descriptionEn?: string;
  };
}
