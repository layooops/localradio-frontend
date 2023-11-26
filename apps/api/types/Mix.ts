import type { Link } from './components/Link';
import type { Event } from './Event';
import type { Genre } from './Genre';
import type { Guest } from './Guest';
import type { Media } from './Media';
import type { Mood } from './Mood';
import type { Show } from './Show';

export interface Mix {
  id: number;
  attributes: {
    name: string;
    show?: { data: Show };
    image: { data: Media };
    slug?: string;
    date: Date;
    genres?: { data: Genre[] };
    guests?: { data: Guest[] };
    moods?: { data: Mood[] };
    linksToMixes?: Link;
    locationLink?: string;
    locationName?: string;
    event?: { data: Event };
    descriptionRu?: string;
    tracklist?: string;
    descriptionEn?: string;
  };
}
