import type { Links } from './components/Links';
import type { Guest } from './Guest';
import type { Media } from './Media';

export interface Release {
  id: number;
  attributes: {
    artistName: string;
    date: Date;
    cover: { data: Media };
    type: 'Single' | 'Album' | 'Ep' | 'Compilation' | 'Mixtape';
    releaseName?: string;
    slug?: string;
    descriptionRu?: string;
    links?: Links;
    descriptionEn?: string;
    guest?: { data: Guest };
  };
}
